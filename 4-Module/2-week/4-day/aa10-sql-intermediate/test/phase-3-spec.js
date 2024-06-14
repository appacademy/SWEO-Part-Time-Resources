const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows } = require('./sqlite-client');
const { createTablesAndInsertData, stopTestOnError } = require('./utils');

const createInsertFile = 'phase-2/phase-2.sql';
const findOwnerCats = 'phase-3/query-1.sql';
const findToys = 'phase-3/query-2.sql';

describe('Phase #3', () => {
  let client;
  let createError;
  let otherError;

  before(async () => {
    ({ client, insertError, otherError } = await createTablesAndInsertData(createInsertFile));

  });

  after(async () => {
    if (client) {
      client.close();
    }
  });

  it('Query #1: returns all the cats\' for the owner with the first name of "Herminone"', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', findOwnerCats);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
        [ "Crookshanks" ]
    ];

    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  it('Query #2: returns all the toys for "Herminone\'s" cats', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', findToys);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
        [ "Crinkle Ball" ],
        [ "Yarn" ]
    ];

    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });
});
