module.exports = (sequelize, DataTypes) => {
  return sequelize.define('category', {
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
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
