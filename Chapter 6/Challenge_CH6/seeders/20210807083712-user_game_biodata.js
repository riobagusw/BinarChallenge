'use strict';
const fs = require('fs')
const user_game_biodata = JSON.parse(fs.readFileSync('./seed_data/user_game_biodata.json'))
user_game_biodata.map((e) => {
  e.createdAt = new Date()
  e.updatedAt = new Date()
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('user_game_biodata', user_game_biodata, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('user_game_biodata', user_game_biodata, {});
  }
};
