'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Tags', [{
      name: 'Piscine',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Terrasse',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Balcon',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Sans vis-à-vis',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Tags', null, {})
  }
};
