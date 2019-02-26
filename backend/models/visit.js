module.exports = (sequelize, DataTypes) => {
  return sequelize.define('visit', {
    address: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIPv4: true,
      },
    },
  }, {
    timestamps: true,
    paranoid: false,
  });
}
