'use strict';
// Seeder file for People table -  STATIC

const { Person } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Person.bulkCreate([
      {
        fullName: 'John Doe', // will auto-increment, id=1
      }, 
      {
        fullName: 'Jane Doe', // will auto-increment, id=2
      }
    ], { validate: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Persons', {
      fullName: ['John Doe', 'Jane Doe']
    });
  }
};



//  DYNAMIC

'use strict';

// 1. Import the models into the seeder file
const { Person, Job } = require('../models');

// 2. Establish a single data source for the seeds
const personJobs = [
  {
    fullName: 'John Doe',
    jobs: [
      { company: 'Starbucks', role: 'Barista'},
      { company: 'Geico', role: 'Insurance Salesperson'}
    ]
  },
  {
    fullName: 'Jane Doe',
    jobs: [
      { company: 'WNBA', role: 'Basketball Player'}
    ]
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // 3. Find the data that you want to create dynamic seeds for
    for (let personInfo of personJobs) {
      const { fullName, jobs } = personInfo;
      const person = await Person.findOne({ where: { fullName } });

      // 4. Insert related data using the found data as foreign key values
      for (let jobInfo of jobs) {
        await Job.create({ ...jobInfo, personId: person.id });
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Iterate over the personJobs array, then over the nested array of 
    // jobs, destroying each job record as it is encountered.
    for (let personInfo of personJobs) {
      const { fullName, jobs } = personInfo;
      const person = await Person.findOne({ where: { fullName } });

      for (let jobInfo of jobs) {
        await Job.destroy({ where: { ...jobInfo, personId: person.id } });
      }
    }
  }
};