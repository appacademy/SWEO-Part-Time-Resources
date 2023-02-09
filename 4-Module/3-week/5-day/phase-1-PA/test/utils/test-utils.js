const { Airplane: TestingModel, sequelize } = require('../../db/models');
const { resetDB, runSQL } = require('./sql-utils');
const data = require('../data/airplane-values');
const { VALID } = data;
const testingTable = 'Airplanes';

const COLUMN_NAMES = [
  'flightNumber',
  'model',
  'inService',
  'homeBase',
  'maxNumPassengers',
  'currentNumPassengers',
  'cruisingAltitudeFt',
  'firstFlightDate',
];

function getInsertValues(values) {
  values = { ...values };
  COLUMN_NAMES.forEach(columnName => {
    if (!(columnName in values)) {
      values[columnName] = data[columnName][VALID][0];
    }
  });
  return values;
}

function generateInsertStmt(tableName, values) {
  const columnNames = [];
  const insertValues = [];
  values = {
    createdAt: 'CURRENT_TIMESTAMP',
    updatedAt: 'CURRENT_TIMESTAMP',
    ...values
  };

  Object.keys(values).forEach(columnName => {
    let value = values[columnName];
    if (value === 'DEFAULT') return;
    if (value !== 'CURRENT_TIMESTAMP' && typeof value === 'string') {
      value = "'" + value + "'";
    }
    if (value === undefined || value === null) value = 'NULL';
    columnNames.push(columnName);
    insertValues.push(value);
  });
  const stmt = `INSERT INTO ${tableName} (${columnNames.join(', ')}) VALUES (${insertValues.join(', ')});`;
  if (sequelize.options.logging) sequelize.options.logging(stmt);
  return stmt;
}

exports.runValidations = async function runValidations (values) {
  const insertValues = getInsertValues(values);
  const instance = TestingModel.build(insertValues);
  let error;
  try {
    await instance.validate();
  } catch(err) {
    if (!err.errors) throw err;
    const anyMatches = err.errors.every(error => !Object.keys(values).includes(error.path));
    if (!anyMatches) error = err;
  }
  if (error) throw error;
}

exports.runConstraints = async function runConstraints (values, resetDBAfter=true) {
  values = getInsertValues(values);
  for (let columnName in values) {
    values[columnName] = values[columnName];
  }
  const stmt = generateInsertStmt(testingTable, values);
  let error;
  try {
    await runSQL(stmt);
  } catch (err) {
    const regex = new RegExp(Object.keys(values).join('|'));
    if (regex.test(err.message)) {
      error = err;
    }
  }
  if (resetDBAfter) await resetDB();
  if (error) throw error;
}