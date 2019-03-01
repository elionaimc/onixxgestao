/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const { TE, to } = require('../services/util.service');
const CONFIG = require('../config/globals');

module.exports = (sequelize, DataTypes) => {
  let Expense = sequelize.define('Expense', {
    description: DataTypes.STRING(1000),
    file: DataTypes.STRING,
    due_date: DataTypes.DATEONLY,
    authorized_by: DataTypes.INTEGER,
    authorization_code: DataTypes.STRING,
    authorization_date: DataTypes.DATEONLY,
    requested_value: { type: DataTypes.DECIMAL(10, 2), validate: { isNumeric: true } },
    authorized_value: { type: DataTypes.DECIMAL(10, 2), validate: { isNumeric: true } },
    status: { type: DataTypes.ENUM(CONFIG.expense_status), allowNull: false, defaultValue: CONFIG.expense_status_default },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
  });

  Expense.associate = models => {
    Expense.belongsTo(models.User);
    Expense.belongsTo(models.Prefecture);
    Expense.belongsTo(models.Provider);
  };

  return Expense;
};
