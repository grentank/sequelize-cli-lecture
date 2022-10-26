/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert('Songs', [
      {
        title: 'Numb',
        duration: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Yesterday',
        duration: 280,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Let it be',
        duration: 192,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'We are the champions!',
        duration: 198,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Bohemian rhapsody',
        duration: 172,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'By the way',
        duration: 154,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('Clients', [
      {
        name: 'Alex',
        favoriteId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob',
        favoriteId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Charlie',
        favoriteId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dmitrii',
        favoriteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Elon',
        favoriteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fred',
        favoriteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gregory',
        favoriteId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Max',
        favoriteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
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
