const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const { resetDB } = require('./utils/sql-utils');
const { runValidations, runConstraints } = require('./utils/test-utils');
const data = require('./data/airplane-values');
const { VALID, INVALID } = data;

describe('`currentNumPassengers` has the proper constraints and validations', () => {
  before(async function () {
    return await resetDB();
  });

  const columnName = 'currentNumPassengers';

  it('allows valid data', async () => {
    for (let value of data[columnName][VALID]) {
      await expect(
        runValidations({ [columnName]: value }),
        `"${columnName}" was supposed to pass validations when set to "${value}"`
      )
        .to.not.eventually.be.rejectedWith(Error);
    }

    // test null in SQLite3
    await expect(
      runConstraints({ [columnName]: null }),
      `"${columnName}" was supposed to pass constraints when set to "NULL"`
    )
      .to.not.eventually.be.rejectedWith(Error);
  });

  it('does not allow invalid data', async () => {
    for (let value of data[columnName][INVALID]) {
      await expect(
        runValidations({ [columnName]: value }),
        `"${columnName}" was supposed to fail validations when set to "${value}"`
      )
        .to.eventually.be.rejectedWith(Error);
    }

    // test not greater than maxNumPassengers
    let value = 150;
    let otherColumnName = 'maxNumPassengers';
    let otherValue = 100;
    await expect(
      runValidations({
        [columnName]: value,
        [otherColumnName]: otherValue
      }),
      `Incorrectly passed validations when "${columnName}" was set to "${value}" and "${otherColumnName}" was set to "${otherValue}"`
    );

    // test null if inService is false
    value = 150;
    otherColumnName = 'inService';
    otherValue = false;
    await expect(
      runValidations({
        [columnName]: value,
        [otherColumnName]: otherValue
      }),
      `Incorrectly passed validations when "${columnName}" was set to "${value}" and "${otherColumnName}" was set to "${otherValue}"`
    );
  });
});