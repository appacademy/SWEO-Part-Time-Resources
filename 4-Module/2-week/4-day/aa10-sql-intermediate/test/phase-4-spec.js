const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows, run } = require('./sqlite-client');
const { createTablesAndInsertData, stopTestOnError } = require('./utils');

const createInsertFile = 'phase-4/phase-4.sql';

describe('Phase #4', () => {
  let client;
  let createError;
  let insertError;
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
    if (stopTestOnError(client, createError, insertError)) return;
  });

  describe('Deletes the cat "Smudge"', () => {
    before(async () => {
      const deletePath = path.resolve(__dirname, '../sql-practice', createInsertFile);
      const deleteSql = fs.readFileSync(deletePath, 'utf-8');
      try {
        await run(client, deleteSql);
      } catch(e) {
        console.log('Error when running delete file');
        console.log(e);
        otherError = e.message;
      }
    });

    context('after delete is executed:', () => {
      it('when finding all cats, the deleted cat is no longer listed', async () => {


        if (stopTestOnError(client, createError, otherError)) return;
        const query = `SELECT cats.name
                       FROM cats
                       ORDER BY cats.name`
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const expectedData = [
          [ "Bella" ],
          [ "Crookshanks" ],
          [ "Garfield" ],
          [ "Lucky" ],
          [ "Molly" ],
          [ "Oscar" ],
          [ "Tiger" ]
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });
    })

    context('after delete is executed:', () => {
        it('when finding all toys, the toys dependent on the cat is no longer listed', async () => {
          if (stopTestOnError(client, createError, otherError)) return;
          const query =` SELECT toys.name
                        FROM toys
                        ORDER BY toys.name`;
          const rows = await queryRows(client, query);
          if (!rows) {
            expect.fail('No records returned from query');
          }
          const expectedData = [
            [ "Cheetos" ],
            [ "Chew Toy" ],
            [ "Crinkle Ball" ],
            [ "Feather Wand" ],
            [ "Flopping Fish" ],
            [ "Laser Pointer" ],
            [ "Scratcher" ],
            [ "Tunnel" ],
            [ "Yarn" ],
          ];
          expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
        });
      })

      context('after delete is executed:', () => {
        it('when finding all of the cat owner\'s id, the deleted cat\'s owners\' ids are no longer listed', async () => {
          if (stopTestOnError(client, createError, otherError)) return;
          const query = `SELECT cat_owners.owner_id
                        FROM cat_owners
                        ORDER BY cat_owners.owner_id`;
          const rows = await queryRows(client, query);
          if (!rows) {
            expect.fail('No records returned from query');
          }
          const expectedData = [
            [ 3 ],
            [ 3 ],
            [ 4 ],
            [ 4 ],
            [ 5 ],
            [ 6 ],
            [ 7 ]
          ];
          expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
        });
      })

  });
});
