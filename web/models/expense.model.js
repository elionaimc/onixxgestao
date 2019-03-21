/*
* @author Elionai Moura Cordeiro
* @version 2.0.0
* @description Expense model schema
*/

const CONFIG = require('../config/globals');

module.exports = (sequelize, DataTypes) => {
  let Expense = sequelize.define('Expense', {
    description: DataTypes.STRING(1000),
    file: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    authorizedBy: DataTypes.INTEGER,
    authorizationCode: DataTypes.STRING,
    authorizationDate: DataTypes.DATEONLY,
    requestedValue: { type: DataTypes.DECIMAL(10, 2), validate: { isNumeric: true } },
    authorizedValue: { type: DataTypes.DECIMAL(10, 2), validate: { isNumeric: true } },
    status: { type: DataTypes.ENUM(CONFIG.expense_status), allowNull: false, defaultValue: CONFIG.expense_status_default },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
  });

  Expense.associate = models => {
    this.User = Expense.belongsTo(models.User);
    this.Prefecture = Expense.belongsTo(models.Prefecture);
    this.Provider = Expense.belongsTo(models.Provider);
    this.Category = Expense.belongsTo(models.Category);
  };

  return Expense;
};
