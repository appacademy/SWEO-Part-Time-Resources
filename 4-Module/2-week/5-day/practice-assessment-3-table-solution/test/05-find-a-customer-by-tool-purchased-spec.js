const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows } = require('./sqlite-client');

const { createTables, insertData, stopTestOnError } = require('./utils');

const queryFileName = '05-find-a-customer-by-tool-purchased.sql';

describe('Query #3', () => {
  let client;
  let createError;
  let otherError;
  before(async () => {
    ({ client, createError, otherError } = await createTables());

    const insertError = await insertData(client, otherError);
    if (insertError) otherError = insertError;
  });

  after(async () => {
    if (client) {
      client.close();
    }
  });

  it('returns the last customer that purchased a tool with the name of \'Pipe Cutter\'', async () => {
    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }
    const expectedData = [
      [ 'Jane', 'Doe', 2222222222 ]
    ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  context('can be adapted to use with another tool by replacing \'Pipe Cutter\' in the query\n      Important Note: The following test specs automatically pass\n      if you implemented the original query as intended', () => {
    it('returns the last customer that purchased a tool with the name of \'Wheelbarrow\'', async () => {
      const toolName = '\'Wheelbarrow\'';

      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
      const originalQuery = fs.readFileSync(queryPath, 'utf-8');
      const query = originalQuery.replace(/'Pipe Cutter'/g, toolName).replace(/"Pipe Cutter"/g, toolName);
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const data = rows.map(row => Object.values(row));
      const expectedData = [
        [ 'John', 'Smith', 1111111111 ]
      ];
      expect(data).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });
});
