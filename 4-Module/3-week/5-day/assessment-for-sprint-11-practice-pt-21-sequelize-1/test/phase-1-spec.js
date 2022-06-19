const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const { runSQL, resetDB } = require('./utils/test-utils');
const { Airplane } = require('../db/models');
const data = require('./data/airplane-values');
const { VALID, INVALID } = data;

const columnNames = [
  'flightNumber',
  'model',
  'inService',
  'homeBase',
  'maxNumPassengers',
  'currentNumPassengers',
  'cruisingAltitudeFt',
  'maxRangeKm',
  'firstFlightDate',
];

function getInsertValues(testName, testValue) {
  const values = {};
  columnNames.forEach(columnName => {
    if (testName && columnName === testName) {
      return values[columnName] = testValue;
    }
    values[columnName] = data[columnName][VALID][0];
  });
  return values;
}

function getInsertQuery(tableName, columnNames, values) {
  const mapValues = columnNames.map(columnName => {
    let value = values[columnName];
    if (value === undefined || value === null) return 'NULL';
    if (typeof value === 'string') value = "'" + value + "'";
    return value;
  });
  return `INSERT INTO ${tableName} (${columnNames.join(', ')}) VALUES (${mapValues.join(', ')});`;
}

describe('Phase 1 Specs - Airplanes', () => {
  describe('`flightNumber` has the proper constraints and validations', () => {
    const columnName = 'flightNumber';

    beforeEach(function () {
      return resetDB();
    });

    it('allows valid data', async () => {
      for (let value of data[columnName][VALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" failed validations when set to "${value}"`
        ).to.not.eventually.be.rejectedWith(Error);
      }
    });

    it('does not allow invalid data', async () => {
      for (let value of data[columnName][INVALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" was supposed to fail validations when set to "${value}"`
        ).to.eventually.be.rejectedWith(Error);
      }

      // test uniqueness in SQLite3
      let value = '9876543210';
      const testUniqueValues = getInsertValues(columnName, value);
      const testUniqueQuery = getInsertQuery('Airplanes', columnNames, testUniqueValues);
      await expect(
        runSQL(testUniqueQuery),
        `"${columnName}" was not supposed to fail constraints when set to "${value}"`
      )
        .to.not.eventually.be.rejectedWith(Error);
      await expect(
        runSQL(testUniqueQuery),
        `"${columnName}" was supposed to fail constraints when there are duplicate values`
      )
        .to.eventually.be.rejectedWith(Error);

      await resetDB();

      // test not null in SQLite3
      value = null;
      const testNullValues = getInsertValues(columnName, value);
      const testNullQuery = getInsertQuery('Airplanes', columnNames, testNullValues);
      await expect(
        runSQL(testNullQuery),
        `"${columnName}" failed constraints when set to "${value}"`
      )
        .to.eventually.be.rejectedWith(Error);
    });
  });

  describe('`model` has the proper constraints and validations', () => {
    const columnName = 'model';

    beforeEach(function () {
      return resetDB();
    });

    it('allows valid data', async () => {
      for (let value of data[columnName][VALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" failed validations when set to "${value}"`
        ).to.not.eventually.be.rejectedWith(Error);
      }
    });

    it('does not allow invalid data', async () => {
      for (let value of data[columnName][INVALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" was supposed to fail validations when set to "${value}"`
        ).to.eventually.be.rejectedWith(Error);
      }

      // test not null in SQLite3
      value = null;
      const testNullValues = getInsertValues(columnName, value);
      const testNullQuery = getInsertQuery('Airplanes', columnNames, testNullValues);
      await expect(
        runSQL(testNullQuery),
        `"${columnName}" failed constraints when set to "${value}"`
      )
        .to.eventually.be.rejectedWith(Error);
    });
  });

  describe('`inService` has the proper constraints and validations', () => {
    const columnName = 'inService';

    beforeEach(function () {
      return resetDB();
    });

    it('allows valid data', async () => {
      for (let value of data[columnName][VALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" failed validations when set to "${value}"`
        ).to.not.eventually.be.rejectedWith(Error);
      }
    });

    it('does not allow invalid data', async () => {
      for (let value of data[columnName][INVALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" was supposed to fail validations when set to "${value}"`
        ).to.eventually.be.rejectedWith(Error);
      }

      // test not null in SQLite3
      value = null;
      const testNullValues = getInsertValues(columnName, value);
      const testNullQuery = getInsertQuery('Airplanes', columnNames, testNullValues);
      await expect(
        runSQL(testNullQuery),
        `"${columnName}" failed constraints when set to "${value}"`
      )
        .to.eventually.be.rejectedWith(Error);

      // test default value in SQLite3
      value = undefined;
      const columnIdx = columnNames.indexOf(columnName);
      const testDefaultColumnNames = columnNames.slice()
      testDefaultColumnNames.splice(columnIdx, 1);
      const testDefaultValues = getInsertValues();
      delete testDefaultValues[columnName];
      const testDefaultQuery = getInsertQuery('Airplanes', testDefaultColumnNames, testDefaultValues);
      await expect(
        runSQL(testDefaultQuery),
        `"${columnName}" does not have a default value constraint`
      )
        .to.not.eventually.be.rejectedWith(Error);
    });
  });

  describe('`homeBase` has the proper constraints and validations', () => {
    const columnName = 'homeBase';

    beforeEach(function () {
      return resetDB();
    });

    it('allows valid data', async () => {
      for (let value of data[columnName][VALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" failed validations when set to "${value}"`
        ).to.not.eventually.be.rejectedWith(Error);
      }
    });

    it('does not allow invalid data', async () => {
      for (let value of data[columnName][INVALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" was supposed to fail validations when set to "${value}"`
        ).to.eventually.be.rejectedWith(Error);
      }

      // test not null in SQLite3
      value = null;
      const testNullValues = getInsertValues(columnName, value);
      const testNullQuery = getInsertQuery('Airplanes', columnNames, testNullValues);
      await expect(
        runSQL(testNullQuery),
        `"${columnName}" failed constraints when set to "${value}"`
      )
        .to.eventually.be.rejectedWith(Error);
    });
  });

  describe('`maxNumPassengers` has the proper constraints and validations', () => {
    const columnName = 'maxNumPassengers';

    beforeEach(function () {
      return resetDB();
    });

    it('allows valid data', async () => {
      for (let value of data[columnName][VALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" failed validations when set to "${value}"`
        ).to.not.eventually.be.rejectedWith(Error);
      }
    });

    it('does not allow invalid data', async () => {
      for (let value of data[columnName][INVALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" was supposed to fail validations when set to "${value}"`
        ).to.eventually.be.rejectedWith(Error);
      }

      // test not null in SQLite3
      value = null;
      const testNullValues = getInsertValues(columnName, value);
      const testNullQuery = getInsertQuery('Airplanes', columnNames, testNullValues);
      await expect(
        runSQL(testNullQuery),
        `"${columnName}" failed constraints when set to "${value}"`
      )
        .to.eventually.be.rejectedWith(Error);
    });
  });

  describe('`currentNumPassengers` has the proper constraints and validations', () => {
    const columnName = 'currentNumPassengers';

    beforeEach(function () {
      return resetDB();
    });

    it('allows valid data', async () => {
      for (let value of data[columnName][VALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" failed validations when set to "${value}"`
        ).to.not.eventually.be.rejectedWith(Error);
      }
    });

    it('does not allow invalid data', async () => {
      for (let value of data[columnName][INVALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" was supposed to fail validations when set to "${value}"`
        ).to.eventually.be.rejectedWith(Error);
      }

      // test null in SQLite3
      value = null;
      const testNullValues = getInsertValues(columnName, value);
      const testNullQuery = getInsertQuery('Airplanes', columnNames, testNullValues);
      await expect(
        runSQL(testNullQuery),
        `"${columnName}" failed constraints when set to "${value}"`
      )
        .to.not.eventually.be.rejectedWith(Error);

      // test not greater than maxNumPassengers
      value = 150;
      let otherColumnName = 'maxNumPassengers';
      let otherValue = 100;
      const testMaxValues = getInsertValues(columnName, value);
      testMaxValues[otherColumnName] = otherValue;
      let airplane = Airplane.build(testMaxValues);
        await expect(
          airplane.validate(),
          `Incorrectly passed validations when "${columnName}" was set to "${value}" and ${otherColumnName} was set to ${otherValue}`
      )
        .to.eventually.be.rejectedWith(Error);

      // test null if inService is false
      value = 150;
      otherColumnName = 'inService';
      otherValue = false;
      const testInServiceValues = getInsertValues(columnName, value);
      testInServiceValues[otherColumnName] = otherValue;
      airplane = Airplane.build(testInServiceValues);
        await expect(
          airplane.validate(),
          `Incorrectly passed validations when "${columnName}" was set to "${value}" and ${otherColumnName} was set to ${otherValue}`
      )
        .to.eventually.be.rejectedWith(Error);
    });
  });

  describe('`cruisingAltitudeFt` has the proper constraints and validations', () => {
    const columnName = 'cruisingAltitudeFt';

    beforeEach(function () {
      return resetDB();
    });

    it('allows valid data', async () => {
      for (let value of data[columnName][VALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" failed validations when set to "${value}"`
        ).to.not.eventually.be.rejectedWith(Error);
      }
    });

    it('does not allow invalid data', async () => {
      for (let value of data[columnName][INVALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" was supposed to fail validations when set to "${value}"`
        ).to.eventually.be.rejectedWith(Error);
      }

      // test that it can be null in SQLite3
      value = null;
      const testNullValues = getInsertValues(columnName, value);
      const testNullQuery = getInsertQuery('Airplanes', columnNames, testNullValues);
      await expect(
        runSQL(testNullQuery),
        `"${columnName}" failed constraints when set to "${value}"`
      )
        .to.not.eventually.be.rejectedWith(Error);
    });
  });

  describe('`maxRangeKm` has the proper constraints and validations', () => {
    const columnName = 'maxRangeKm';

    beforeEach(function () {
      return resetDB();
    });

    it('allows valid data', async () => {
      for (let value of data[columnName][VALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" failed validations when set to "${value}"`
        ).to.not.eventually.be.rejectedWith(Error);
      }
    });

    it('does not allow invalid data', async () => {
      for (let value of data[columnName][INVALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" was supposed to fail validations when set to "${value}"`
        ).to.eventually.be.rejectedWith(Error);
      }

      // test not null in SQLite3
      value = null;
      const testNullValues = getInsertValues(columnName, value);
      const testNullQuery = getInsertQuery('Airplanes', columnNames, testNullValues);
      await expect(
        runSQL(testNullQuery),
        `"${columnName}" failed constraints when set to "${value}"`
      )
        .to.eventually.be.rejectedWith(Error);
    });
  });

  describe('`firstFlightDate` has the proper constraints and validations', () => {
    const columnName = 'firstFlightDate';

    beforeEach(function () {
      return resetDB();
    });

    it('allows valid data', async () => {
      for (let value of data[columnName][VALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" failed validations when set to "${value}"`
        ).to.not.eventually.be.rejectedWith(Error);
      }
    });

    it('does not allow invalid data', async () => {
      for (let value of data[columnName][INVALID]) {
        const insertValues = getInsertValues(columnName, value);
        const airplane = Airplane.build(insertValues);
        await expect(
          airplane.validate(),
          `"${columnName}" was supposed to fail validations when set to "${value}"`
        ).to.eventually.be.rejectedWith(Error);
      }

      // test not null in SQLite3
      value = null;
      const testNullValues = getInsertValues(columnName, value);
      const testNullQuery = getInsertQuery('Airplanes', columnNames, testNullValues);
      await expect(
        runSQL(testNullQuery),
        `"${columnName}" failed constraints when set to "${value}"`
      )
        .to.not.eventually.be.rejectedWith(Error);
    });
  });

  describe('`homeBase` and `cruisingAltitudeFt` combination cannot be repeated', () => {
    beforeEach(function () {
      return resetDB();
    });

    it('does not allow `homeBase` and `cruisingAltitudeFt` combination to be repeated', async () => {
      const columnName = 'homeBase';
      let value = 'LHR';
      const otherColumnName = 'cruisingAltitudeFt';
      let otherValue = 30000; // 30,000

      const testFirstValues = getInsertValues(columnName, value);
      testFirstValues[otherColumnName] = otherValue;
      const testFirstQuery = getInsertQuery('Airplanes', columnNames, testFirstValues);
      await expect(
        runSQL(testFirstQuery),
        `Incorrectly failed constraints when "${columnName}" was set to "${value}" and ${otherColumnName} was set to ${otherValue}`
      )
        .to.not.eventually.be.rejectedWith(Error);
      const testSecondValues = getInsertValues(columnName, value);
      testSecondValues[otherColumnName] = otherValue;
      testSecondValues.flightNumber = 'BA98'; // bypass unique constraint on flightNumber
      const testSecondQuery = getInsertQuery('Airplanes', columnNames, testSecondValues);
      await expect(
        runSQL(testSecondQuery),
        `Incorrectly passed constraints when two entries where both entries had "${columnName}" set to "${value}" and ${otherColumnName} set to ${otherValue}`
      )
        .to.eventually.be.rejectedWith(Error);
    });
  });

});