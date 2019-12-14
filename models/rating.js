module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define("Rating", {
    value: {
      type: DataTypes.BOOLEAN
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
    // We're saying that a Rating should belong to an Author
    // A Rating can't be created without an Author due to the foreign key constraint
    Rating.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Rating.associate = function(models) {
    // We're saying that a Rating should belong to an Author
    // A Rating can't be created without an Author due to the foreign key constraint
    Rating.belongsTo(models.Song, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Rating;
};
