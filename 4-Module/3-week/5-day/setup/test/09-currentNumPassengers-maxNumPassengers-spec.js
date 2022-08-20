const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const { resetDB } = require('./utils/sql-utils');
const { runValidations, runConstraints } = require('./utils/test-utils');
const data = require('./data/airplane-values');
const { VALID, INVALID } = data;

describe('`currentNumPassengers` cannot be greater than `maxNumPassengers`', () => {
  before(async function () {
    return await resetDB();
  });

  const columnName = 'currentNumPassengers';

  it('does not allow `currentNumPassengers` to be greater than `maxNumPassengers`', async () => {
    let value = 550;
    let otherColumnName = 'maxNumPassengers';
    let otherValue = 100;
    await expect(
      runValidations({
        [columnName]: value,
        [otherColumnName]: otherValue
      }),
      `Incorrectly passed validations when "${columnName}" was set to "${value}" and "${otherColumnName}" was set to "${otherValue}"`
    )
      .to.eventually.be.rejectedWith(Error);
  });
});