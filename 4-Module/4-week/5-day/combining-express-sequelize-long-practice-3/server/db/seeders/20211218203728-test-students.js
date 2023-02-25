'use strict';

const { Op } = require('sequelize');

const studentCount = 267;

const firstNames = [
    'Maitane',
    'Holly',
    'Dhlia',
    'Raylee',
    'Cam',
    'Royce',
    'Auden',
    'Graeme',
    'Hildred',
    'Dexter',
    'Eadda',
    'Gytha',
    'Rae',
    'Haralda',
    'Briar',
    'Goldie',
];
const lastNames = [
    'Aylmere',
    'Sudworthe',
    'Harlowe',
    'Hayden',
    'Glaziere',
    'Turnbulle',
    'Hawke',
    'Ewart',
    'Woodcacke',
    'Harte',
    'Huffe',
    'Wembleye',
    'Holte',
    'Kavanaugh',
    'Cathasaighi',
    'Alfonsi',
    'Costa',
    'Palazzo',
];

function getStudentSeeds() {
    let firstNameIndex = 0;
    let lastNameIndex = 0;
    // let repeatIndex = 1;
    const studentSeeds = [];

    for (let i = 0; i < studentCount; i++) {
        studentSeeds.push({
            seededBy: 'test-students',
            firstName: firstNames[firstNameIndex],
            // lastname: 'Test ' + repeatIndex + ' ' + lastNames[lastNameIndex],
            lastName: lastNames[lastNameIndex],
            leftHanded: i%11 === 0,
        });
        // next first name
        if (firstNameIndex < firstNames.length - 1)
            firstNameIndex++
        else
            firstNameIndex = 0;
        // next last name
        if (lastNameIndex < lastNames.length - 1)
            lastNameIndex++
        else {
            lastNameIndex = 0;
            // repeatIndex++;
        }
    }
    return studentSeeds;
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

    await queryInterface.bulkInsert('Students', getStudentSeeds());
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Students', { seededBy: 'test-students' });
  }
};
