/*
* @author Elionai Moura Cordeiro
* @version 2.0.0
* @description Provider model schema
*/

module.exports = (sequelize, DataTypes) => {
  let Provider = sequelize.define('Provider', {
    socialName: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
  });
  
  Provider.associate = models => {
    this.Prefecture = Provider.belongsTo(models.Prefecture);
    this.User = Provider.belongsTo(models.User);
  };

  return Provider;
};
