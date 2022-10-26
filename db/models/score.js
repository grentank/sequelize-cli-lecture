const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Client, Song }) {
      // this.belongsTo(Client, { foreignKey: 'clientId' });
      // this.belongsTo(Song, { foreignKey: 'songId' });
    }
  }
  Score.init({
    clientId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};
