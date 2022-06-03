'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Biblioteca', [
      {
        title: 'Era uma vez...',
        author: 'Anônimo',
        pageQuantity: 1,
        createdDate: new Date(),
      },
      {
        title: 'Os Irmãos Karamazov',
        author: 'Fiódor Dostoiévski',
        pageQuantity: 840,
        createdDate: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {});
  }
};
