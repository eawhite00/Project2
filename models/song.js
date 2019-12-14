module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define("Song", {
    // Giving the Song model a name of type STRING

    songName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  return Song;
};
