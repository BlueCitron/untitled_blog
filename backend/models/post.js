module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    title: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    content: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
}
