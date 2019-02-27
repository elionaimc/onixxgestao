/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const {TE, to} = require('../services/util.service');

module.exports = (sequelize, DataTypes) => {
  let Provider = sequelize.define('Provider', {
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
  });
  
  Provider.associate = models => {
    Provider.belongsTo(models.Prefecture);
    Provider.belongsTo(models.User);
    Provider.hasMany(models.Expense);
  };

  return Provider;
};
