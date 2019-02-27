/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const {TE, to} = require('../services/util.service');

module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define('Category', {
    description: DataTypes.STRING,
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
  });
  
  Category.associate = models => {
    Category.belongsTo(models.Prefecture);
    Category.belongsTo(models.User);
    Category.hasMany(models.Expense);
  };

  return Category;
};
