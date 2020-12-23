'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Caracteristiques', [{
      name: 'Lumineux',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Calme',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Piscine',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Centre-ville',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Caracteristiques', null, {})
  }
};
