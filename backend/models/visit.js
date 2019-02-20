module.exports = (sequelize, DataTypes) => {
  return sequelize.define('visit', {
    address: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
}
