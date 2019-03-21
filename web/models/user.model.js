/*
* @author Elionai Moura Cordeiro
* @version 2.0.0
* @description User model schema
*/

//Dependencies
const bcrypt = require('bcrypt');
const bcrypt_p = require('bcrypt-promise');
const jwt = require('jsonwebtoken');
const {TE, to} = require('../services/util.service');
const CONFIG = require('../config/globals');

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        name : DataTypes.STRING,
        role : {type: DataTypes.ENUM(CONFIG.user_role), allowNull: false, defaultValue: CONFIG.user_default_role},
        email : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: {msg: "Insira um e-mail válido."} }},
        username : {type: DataTypes.STRING, allowNull: true, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        token: DataTypes.VIRTUAL,
        status: { type: DataTypes.ENUM(CONFIG.user_status), allowNull: CONFIG.allow_null_status, defaultValue: CONFIG.user_default_status },
        isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
    });

    User.associate = models => {
        this.Prefecture = User.belongsTo(models.Prefecture);
        this.Expenses = User.hasMany(models.Expense);
        this.Providers = User.hasMany(models.Provider);
        this.Categories = User.hasMany(models.Category);
    };

    User.beforeSave(async (user) => {
        let err;
        if (user.changed('password')){
            let salt, hash
            [err, salt] = await to(bcrypt.genSalt(10));
            if(err) TE(err.message, true);

            [err, hash] = await to(bcrypt.hash(user.password, salt));
            if(err) TE(err.message, true);

            user.password = hash;
        }
    });

    User.prototype.comparePassword = async function (pw) {
        let err, pass
        if(!this.password) TE('senha não definida');

        [err, pass] = await to(bcrypt_p.compare(pw, this.password));
        if(err) TE(err);

        if(!pass) TE('senha inválida');

        return this;
    }

    User.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return jwt.sign({user_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
    };

    return User;
};
