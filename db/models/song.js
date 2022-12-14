const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Client, Score }) {
      this.hasMany(Client, { foreignKey: 'favoriteId' });
      // this.hasMany(Score, { foreignKey: 'songId' });
      this.belongsToMany(Client, { as: 'performedBy', through: 'Scores', foreignKey: 'songId' });
    }
  }
  Song.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
