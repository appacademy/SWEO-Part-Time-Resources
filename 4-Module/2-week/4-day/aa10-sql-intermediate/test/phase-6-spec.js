const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows, run } = require('./sqlite-client');
const { createTablesAndInsertData, stopTestOnError } = require('./utils');

const createInsertFile = 'phase-4/phase-4.sql';
const queryFileName = 'phase-6/phase-6.sql';

describe('Phase #6', () => {
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

  describe('Updates the toy name "Cheetos" to "Pooky"', () => {
    before(async () => {
      const updatePath = path.resolve(__dirname, '../sql-practice', queryFileName);
      const updateSql = fs.readFileSync(updatePath, 'utf-8');
      try {
        await run(client, updateSql);
      } catch(e) {
        console.log('Error when running update file');
        console.log(e);
        otherError = e.message;
      }
    });

    context('after update is executed:', () => {
      it('when finding all toys, the updated toy is listed', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const query = `SELECT toys.name
                      FROM toys
                      ORDER BY toys.name`;
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const expectedData = [
          [ "Chew Toy" ],
          [ 'Crinkle Ball' ],
          [ "Feather Wand" ],
          [ "Flopping Fish" ],
          [ "Laser Pointer" ],
          [ "Pooky" ],
          [ "Scratcher" ],
          [ "Tunnel" ],
          [ "Yarn" ]
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });
    })
  });
});
