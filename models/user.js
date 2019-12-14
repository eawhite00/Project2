module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [4]
    },
    rockLike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    rockDislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    rapLike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    rapDislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    popLike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    popDislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    countryLike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    countryDislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    altLike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    altDislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Rating, {
      onDelete: "cascade"
    });
  };

  return User;
};
