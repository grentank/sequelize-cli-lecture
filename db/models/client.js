const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Song, Score }) {
      this.belongsTo(Song, { foreignKey: 'favoriteId' });
      // this.hasMany(Score, { foreignKey: 'clientId' });
      this.belongsToMany(Song, { as: 'performed', through: 'Scores', foreignKey: 'clientId' });
    }
  }
  Client.init({
    name: DataTypes.STRING,
    favoriteId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
