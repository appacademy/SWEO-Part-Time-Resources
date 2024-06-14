const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows } = require('./sqlite-client');
const { createTablesAndInsertData, stopTestOnError } = require('./utils');

const createInsertFile = 'phase-4/phase-4.sql';
const findLastNameR = 'phase-5/query-1.sql';
const findDescOrder = 'phase-5/query-2.sql';
const findFirstNameH = 'phase-5/query-3.sql';
const findTargetNames = 'phase-5/query-4.sql';
const findTargetCats = 'phase-5/query-5.sql';

describe('Phase #5', () => {
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

  it('Query #1: returns first owner that has a last name containing the lowercase letter "r"', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', findLastNameR);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
        [ 2, "Joycelyn", "Cummerata" ]
    ];

    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  it('Query #2: returns the name and birth year of all the cats ordered by descending birth year', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', findDescOrder);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
        [ "Bella", 2020],
        [ "Crookshanks", 2017 ],
        [ "Lucky", 2016 ],
        [ "Molly", 2015 ],
        [ "Tiger", 2012 ],
        [ "Oscar", 2010 ],
        [ "Garfield", 2009 ],
    ];

    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  it('Query #3: returns name of the cats who have an owner whose first name begins with an "H"', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', findFirstNameH);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
        [ "Crookshanks" ],
    ];

    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  it('Query #4: returns the first and last names of the owner whose cats are born after the year 2015', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', findTargetNames);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
        [ "Weston", "Jones" ],
        [ "Melynda", "Abshire" ],
        [ "Hermione", "Granger"]
    ];

    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  it('Query #5: returns the names of the cats whose owners are both George Beatty and Melynda Abshire, or just George Beatty, or just Melynda Abshire', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', findTargetCats);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
        [ "Bella" ],
        [ "Tiger" ],
    ];

    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

});
