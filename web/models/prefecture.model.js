/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const {TE, to} = require('../services/util.service');

module.exports = (sequelize, DataTypes) => {
  let Prefecture = sequelize.define('Prefecture', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    image: DataTypes.STRING,
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
  });

  Prefecture.associate = models => {
    Prefecture.hasMany(models.User);
    Prefecture.hasMany(models.Expense);
    Prefecture.hasMany(models.Provider);
    Prefecture.hasMany(models.Category);
  };

  return Prefecture;
};
