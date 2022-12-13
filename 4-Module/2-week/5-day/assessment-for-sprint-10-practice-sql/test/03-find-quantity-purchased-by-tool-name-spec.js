const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows } = require('./sqlite-client');

const { createTables, insertData, stopTestOnError } = require('./utils');

const queryFileName = '03-find-quantity-purchased-by-tool-name.sql';

describe('Query #1', () => {
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

  it('returns tool name, price, and quantity in each purchase for tools that have names starting with \'Pipe\'', async () => {
    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }
    const expectedData = [
      [ 'Pipe Cutter', 36.36, 1 ],
      [ 'Pipe Cutter', 36.36, 2 ],
      [ 'Pipe Wrench', 18.99, 1 ]
    ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  context('can be adapted to use with another name by replacing < Pipe > in the query\n      Important Note: The following test specs automatically pass\n      if you implemented the original query as intended', () => {
    it('returns tool name, price, and quantity in each purchase for tools that have names starting with \'W\'', async () => {
      const toolName = 'W';

      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
      const originalQuery = fs.readFileSync(queryPath, 'utf-8');
      const query = originalQuery.replace(/Pipe/g, toolName);
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const data = rows.map(row => Object.values(row));
      const expectedData = [
        [ 'Wheelbarrow', 89.99, 3 ],
        [ 'Women\'s Gloves', 8.39, 1 ],
        [ 'Work light', 29.99, 1 ],
        [ 'Work light', 29.99, 1 ]
      ];
      expect(data).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });
});
