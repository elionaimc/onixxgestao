/*
* @author Elionai Moura Cordeiro
* @version 2.0.0
* @description Category model schema
*/

module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define('Category', {
    description: DataTypes.STRING,
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
  });
  
  Category.associate = models => {
    this.Prefecture = Category.belongsTo(models.Prefecture);
    this.User = Category.belongsTo(models.User);
    this.Expenses = Category.hasMany(models.Expense);
  };

  return Category;
};
