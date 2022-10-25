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
    static associate({ Song }) {
      this.belongsTo(Song, { foreignKey: 'favoriteId' });
    }
  }
  Client.init({
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    favoriteId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
