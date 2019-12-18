module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define("Rating", {
    value: {
      type: DataTypes.BOOLEAN
    },
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

  Rating.associate = function(models) {
    Rating.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Rating.associate = function(models) {
    Rating.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Rating;
};
