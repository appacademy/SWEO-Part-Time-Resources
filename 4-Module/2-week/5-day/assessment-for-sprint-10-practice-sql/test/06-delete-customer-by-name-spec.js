const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows, run } = require('./sqlite-client');

const { createTables, insertData, stopTestOnError } = require('./utils');

const findAllCustomers = '06-find-all-customers.sql';
const findAllTools = '06-find-all-tools-purchased.sql';
const deleteCustomer = '06-delete-customer-by-name.sql';

describe('Delete data', () => {
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

  describe('Find all customers', () => {
    it('returns the first name and last name of all the customers', async () => {
      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', findAllCustomers);
      const query = fs.readFileSync(queryPath, 'utf-8');
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const expectedData = [
        [ 'Jane', 'Doe' ],
        [ 'John', 'Smith' ],
      ];
      expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });

  describe('Find all tools purchased', () => {
    it('returns the tool name and quantity of all purchases', async () => {
      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', findAllTools);
      const query = fs.readFileSync(queryPath, 'utf-8');
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const expectedData = [
        [ 'Men\'s Gloves', 2 ],
        [ 'Pipe Cutter', 1 ],
        [ 'Pipe Cutter', 2 ],
        [ 'Pipe Wrench', 1 ],
        [ 'Snow shovel', 3 ],
        [ 'Wheelbarrow', 3 ],
        [ 'Women\'s Gloves', 1 ],
        [ 'Work light', 1 ],
        [ 'Work light', 1 ]
      ];
      expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });

  describe('Deletes the customer with the first name of \'John\' and last name of \'Smith\'', () => {
    before(async () => {
      const deletePath = path.resolve(__dirname, '../sql-files', deleteCustomer);
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
      it('when finding all customers, the deleted customer is no longer listed', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllCustomers);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const data = rows.map(row => Object.values(row));
        const expectedData = [
          [ 'Jane', 'Doe' ]
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });

      it('when finding all tool purchases, all purchases by the customer are deleted', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllTools);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const data = rows.map(row => Object.values(row));
        const expectedData = [
          [ 'Pipe Cutter', 1 ],
          [ 'Pipe Wrench', 1 ],
          [ 'Snow shovel', 3 ],
          [ 'Women\'s Gloves', 1 ],
          [ 'Work light', 1 ],
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });
    })
  });

  describe('Deletes the customer with the first name of \'Jane\' and last name of \'Doe\'\n    (original delete statement adapted to use with another\n    name by replacing \'Jane\' and \'Doe\' in the delete file)\n    Important Note: The following test specs automatically pass\n    if you implemented the original delete statement as intended.', () => {
    before(async () => {
      client.close();
      ({ client, createError, otherError } = await createTables());

      const insertError = await insertData(client, otherError);
      if (insertError) otherError = insertError;

      const deletePath = path.resolve(__dirname, '../sql-files', deleteCustomer);
      const originalDelete = fs.readFileSync(deletePath, 'utf-8');
      const firstName = '\'Jane\'';
      const lastName = '\'Doe\'';
      const deleteSql = originalDelete
        .replace(/'John'/g, firstName)
        .replace(/'Smith'/g, lastName)
        .replace(/"John"/g, firstName)
        .replace(/"Smith"/g, lastName);
      try {
        await run(client, deleteSql);
      } catch(e) {
        console.log(e)
        otherError = e.message;
      }
    });

    context('after delete is executed:', () => {
      it('when finding all customers, the deleted customer is no longer listed', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllCustomers);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const data = rows.map(row => Object.values(row));
        const expectedData = [
          [ 'John', 'Smith' ]
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });

      it('when finding all tool purchases, all purchases by the customer are deleted', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllTools);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const data = rows.map(row => Object.values(row));
        const expectedData = [
          [ 'Men\'s Gloves', 2 ],
          [ 'Pipe Cutter', 2 ],
          [ 'Wheelbarrow', 3 ],
          [ 'Work light', 1 ],
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });
    })
  });
});
