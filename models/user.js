module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'userName',
      validate: {
        len: [4]
      }
    },
    password: {
      type: DataTypes.STRING,
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
    alternativeLike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    alternativeDislike: {
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
