/** @type {import('sequelize-cli').Migration} */
const { Client, Song } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const clientsCount = (await Client.findAll()).length;
    const songsCount = (await Song.findAll()).length;
    const scores = new Array(30).fill(1).map((_) => ({
      clientId: 1 + Math.floor(Math.random() * clientsCount),
      songId: 1 + Math.floor(Math.random() * songsCount),
      value: Math.round(Math.random() * 100),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Scores', scores, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
