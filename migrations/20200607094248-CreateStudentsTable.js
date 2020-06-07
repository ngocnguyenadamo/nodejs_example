'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('students',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          },
          name: Sequelize.STRING,
          avatar: Sequelize.STRING
        });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('students');
  }
};
