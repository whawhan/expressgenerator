'use strict';
var faker =require('faker/locale/id_ID');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const address=[]
    for (let i=0; i<100; i++){
      address.push({
        city :  faker.address.city(),
        street :  faker.address.streetAddress(),
        country :  faker.address.country(),
        email : faker.internet.email(),
        created_at: new Date,
        updated_at : new Date
      })
    }
    return queryInterface.bulkInsert('addresses', address, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
