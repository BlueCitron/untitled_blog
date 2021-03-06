module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
}
