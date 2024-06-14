const { createTablesAndInsertData, stopTestOnError } = require('./utils');
const { expect } = require('chai');
const { queryRows } = require('./sqlite-client');

const createInsertFile = 'phase-2/phase-2.sql';

describe('Phase #2', () => {
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

  it('has no insertion errors', async () => {
    if (stopTestOnError(client, insertError, otherError)) return;
  });

  it('returns all the cats', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const query = 'SELECT cats.name FROM cats'
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }
    const expectedData = [
        [ "Smudge" ],
        [ "Molly" ],
        [ "Lucky" ],
        [ "Bella" ],
        [ "Tiger" ],
        [ "Oscar" ],
        [ "Garfield" ],
        [ "Crookshanks" ]
      ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  it('returns all the owners', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const query = 'SELECT owners.first_name FROM owners'
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }
    const expectedData = [
        [ "Nathan" ],
        [ "Joycelyn" ],
        [ "Weston" ],
        [ "Melynda" ],
        [ "George" ],
        [ "Jonathan" ],
        [ "Hermione" ]
      ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

  it('returns all the owners', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const query = 'SELECT toys.name FROM toys'
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }
    const expectedData = [
        [ "Catnip Mouse" ],
        [ "Feather Wand" ],
        [ "Scratcher" ],
        [ "Laser Pointer" ],
        [ "Chew Toy" ],
        [ "Tunnel" ],
        [ "Flopping Fish" ],
        [ "Cheetos" ],
        [ "Crinkle Ball" ],
        [ "Yarn" ]
      ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });

});
