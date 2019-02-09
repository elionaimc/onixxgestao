/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/

//Dependencies
const bcrypt = require('bcrypt');
const bcrypt_p = require('bcrypt-promise');
const jwt = require('jsonwebtoken');
const {TE, to} = require('../services/util.service');
const CONFIG = require('../config/globals');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('User', {
        status: {type: DataTypes.ENUM(CONFIG.user_status), allowNull: CONFIG.allow_null_status, defaultValue:CONFIG.user_default_status},
        name : DataTypes.STRING,
        role : {type: DataTypes.ENUM(CONFIG.user_role), allowNull: false, defaultValue: CONFIG.user_default_role},
        password : {type: DataTypes.STRING, allowNull: false},
        email : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: {msg: "Insira um e-mail válido."} }},
        username : {type: DataTypes.STRING, allowNull: false, unique: true, validate: { len: {args: [5, 20], msg: "Nome de usuário deve possuir de 5 a 20 caracteres"} }}
    });

    Model.associate = function(models){
        this.Expenses = this.belongsToMany(models.Expense, {through: 'UserExpense'});
    };

    Model.associate = function(models){
        this.Prefecture = this.belongsToMany(models.Prefecture, {through: 'UserPrefecture'});
    };

    Model.beforeSave(async (user, options) => {
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

    Model.prototype.comparePassword = async function (pw) {
        let err, pass
        if(!this.password) TE('senha não definida');

        [err, pass] = await to(bcrypt_p.compare(pw, this.password));
        if(err) TE(err);

        if(!pass) TE('senha inválida');

        return this;
    }

    Model.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return "Bearer "+jwt.sign({user_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
    };

    return Model;
};
