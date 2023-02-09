const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const { resetDB } = require('./utils/sql-utils');
const { runValidations, runConstraints } = require('./utils/test-utils');
const data = require('./data/airplane-values');
const { VALID, INVALID } = data;

describe('`homeBase` and `cruisingAltitudeFt` combination cannot be repeated', () => {
  before(async function () {
    return await resetDB();
  });

  const columnName = 'homeBase';

  it('does not allow `homeBase` and `cruisingAltitudeFt` combination to be repeated', async () => {
    let value = 'LHR';
    let otherColumnName = 'cruisingAltitudeFt';
    let otherValue = 30000; // 30,000
    await expect(
      runConstraints({
        [columnName]: value,
        [otherColumnName]: otherValue
      }, false),
      `Incorrectly failed constraints when "${columnName}" was set to "${value}" and "${otherColumnName}" was set to "${otherValue}"`
    )
      .to.not.eventually.be.rejectedWith(Error);

    await expect(
      runConstraints({
        flightNumber: 'BA98',
        [columnName]: value,
        [otherColumnName]: otherValue
      }),
      `Incorrectly passed constraints when two entries had "${columnName}" set to "${value}" and "${otherColumnName}" set to "${otherValue}"`
    )
      .to.eventually.be.rejectedWith(Error);
  });

  it('allows `homeBase` to be repeated', async () => {
    let value = 'LHR';
    await expect(
      runConstraints({
        [columnName]: value,
      }, false),
      `Incorrectly failed constraints when "${columnName}" was set to "${value}"`
    )
      .to.not.eventually.be.rejectedWith(Error);

    await expect(
      runConstraints({
        flightNumber: 'BA98',
        [columnName]: value,
      }),
      `Incorrectly passed constraints when two entries had "${columnName}" set to "${value}"`
    )
      .to.eventually.be.rejectedWith(Error);
  });

  it('allows `cruisingAltitudeFt` to be repeated', async () => {
    let value = '30000';
    await expect(
      runConstraints({
        [columnName]: value,
      }, false),
      `Incorrectly failed constraints when "${columnName}" was set to "${value}"`
    )
      .to.not.eventually.be.rejectedWith(Error);

    await expect(
      runConstraints({
        flightNumber: 'BA98',
        [columnName]: value,
      }),
      `Incorrectly passed constraints when two entries had "${columnName}" set to "${value}"`
    )
      .to.eventually.be.rejectedWith(Error);
  });
});