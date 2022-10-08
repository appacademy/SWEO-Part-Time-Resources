const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows } = require('./sqlite-client');

const { createTables, insertData, stopTestOnError } = require('./utils');

const queryFileName = '04-find-tools-by-price.sql';

describe('Query #2', () => {
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

  it('returns tool name and price for tools that have prices between $14.67 and $20.09 ordered by tool name', async () => {
    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }
    const expectedData = [
      [ 'Pipe Wrench', 18.99 ],
      [ 'Rake', 15.45 ],
      [ 'Snow shovel', 16.5 ],
    ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  context('can be adapted to use with other prices by replacing 14.67 and 20.09 in the query\n      Important Note: The following test specs automatically pass\n      if you implemented the original query as intended', () => {
    it('returns tool name and price for tools that have prices between $60 and $100 ordered by tool name', async () => {
      const price1 = 60;      
      const price2 = 100;      

      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', queryFileName);
      const originalQuery = fs.readFileSync(queryPath, 'utf-8');
      const query = originalQuery.replace(/14.67/g, price1).replace(/20.09/g, price2);
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const data = rows.map(row => Object.values(row));
      const expectedData = [
        [ 'Wheelbarrow', 89.99 ]
      ];
      expect(data).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });
});
