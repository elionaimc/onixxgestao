/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const {TE, to} = require('../services/util.service');

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Expense', {
    description: DataTypes.STRING,
    requested: {
      type: DataTypes.DECIMAL,
      validate: { isNumeric: true }
    },
    authorized: {
      type: DataTypes.DECIMAL,
      validate: { isNumeric: true }
    },
    status: DataTypes.STRING,

  });

  Model.associate = function(models){
      this.Users = this.belongsToMany(models.User, {through: 'UserExpense'});
  };

  Model.associate = function(models){
    this.Prefecture = this.belongsToMany(models.Prefecture, {through: 'PrefectureExpense'});
  };

  Model.prototype.toWeb = function (pw) {
      let json = this.toJSON();
      return json;
  };

  return Model;
};
