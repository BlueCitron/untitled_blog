'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    // return queryInterface.removeColumn('categories', 'order',{
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   autoIncrement: true,
    //   validate: {
    //     len: [1, 100],
    //   },
    // });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('categories', 'order');
  }
};
