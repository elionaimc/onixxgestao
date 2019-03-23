/*
* @author Elionai Moura Cordeiro
* @version 2.0.0
* @description Provider model schema
*/

module.exports = (sequelize, DataTypes) => {
  let Provider = sequelize.define('Provider', {
    socialName: { type: DataTypes.STRING, allowNull: false, unique: true },
    cnpj: { type: DataTypes.STRING, allowNull: false, unique: 'providerPrefecture' },
    PrefectureId: { type: DataTypes.INTEGER, allowNull: false, unique: 'providerPrefecture' },
    UserId: { type: DataTypes.INTEGER, allowNull: false },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
  });
  
  Provider.associate = models => {
    this.Prefecture = Provider.belongsTo(models.Prefecture);
    this.User = Provider.belongsTo(models.User);
  };

  return Provider;
};
