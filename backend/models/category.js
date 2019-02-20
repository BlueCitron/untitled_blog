module.exports = (sequelize, DataTypes) => {
  return sequelize.define('category', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
}
