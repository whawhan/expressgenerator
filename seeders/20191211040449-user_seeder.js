'use strict';
// ini hanya menyediakan data dummy yang dapat digunakan untuk testing
var faker =require('faker/locale/id_ID');
module.exports = {
  up: (queryInterface, Sequelize) => {

    const users=[]
    
    for (let i=0; i<100; i++){
      users.push({
        name :  faker.name.findName(),
        email :  faker.internet.email(),
        created_at: new Date,
        updated_at : new Date,
        password : 'tes',
      })
    }
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('users', users, {});
      
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
