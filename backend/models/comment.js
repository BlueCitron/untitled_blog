module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comment', {
    content: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    writer: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIPv4: true,
      },
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
}
