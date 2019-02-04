/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const {TE, to} = require('../services/util.service');

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Prefecture', {
        status : DataTypes.BOOLEAN,
        name   : DataTypes.STRING,
        code   : DataTypes.STRING,
        file   : DataTypes.STRING
  });

  Model.associate = function(models){
      this.Users = this.belongsToMany(models.User, {through: 'UserPrefecture'});
  };

  Model.associate = function(models){
      this.Expenses = this.belongsToMany(models.Expense, {through: 'PrefectureExpense'});
  };

  Model.prototype.toWeb = function (pw) {
      let json = this.toJSON();
      return json;
  };

  return Model;
};
