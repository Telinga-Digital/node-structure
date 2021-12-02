'use strict'

const faker = require('faker')

let users = []

for (let iteration = 1; iteration <= 10; iteration++) {
  users.push({
    name: faker.name.findName(),
    email: faker.unique(faker.internet.email).toString(),
    password: faker.internet.password(),
    apiKey: faker.unique(faker.random.alphaNumeric, [32]).toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}

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
    await queryInterface.bulkDelete('users', null, {})

    await queryInterface.bulkInsert('users', users, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
  },
}
