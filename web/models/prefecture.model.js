/*
* @author Elionai Moura Cordeiro
* @version 2.0.0
* @description Prefecture model schema
*/

module.exports = (sequelize, DataTypes) => {
  let Prefecture = sequelize.define('Prefecture', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    code: { type: DataTypes.STRING, allowNull: true, unique: true },
    image: DataTypes.STRING,
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
  });

  Prefecture.associate = models => {
    this.Users = Prefecture.hasMany(models.User);
    this.Expenses = Prefecture.hasMany(models.Expense);
    this.Providers = Prefecture.hasMany(models.Provider);
    this.Categories = Prefecture.hasMany(models.Category);
  };

  return Prefecture;
};
