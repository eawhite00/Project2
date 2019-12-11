module.exports = function(sequelize, DataTypes) {
  var favoriteSongs = sequelize.define("favoriteSongs", {
    songName: DataTypes.STRING,
    artistName: DataTypes.STRING,
    songDetails: DataTypes.STRING
  });
  return favoriteSongs;
};
