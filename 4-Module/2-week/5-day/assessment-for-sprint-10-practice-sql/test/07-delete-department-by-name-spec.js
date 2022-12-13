const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows, run } = require('./sqlite-client');

const { createTables, insertData, stopTestOnError } = require('./utils');

const findAllDepartments = '07-find-all-departments.sql';
const findAllTools = '07-find-all-tools.sql';
const deleteDepartment = '07-delete-department-by-name.sql';

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

  describe('Find all departments', () => {
    it('returns the name all the departments', async () => {
      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', findAllDepartments);
      const query = fs.readFileSync(queryPath, 'utf-8');
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const expectedData = [
        [ 'Electrical' ],
        [ 'Home & Garden' ],
        [ 'Plumbing' ],
      ];
      expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });

  describe('Find all tools', () => {
    it('returns the tool name of all tools', async () => {
      if (stopTestOnError(client, createError, otherError)) return;
      const queryPath = path.resolve(__dirname, '../sql-files', findAllTools);
      const query = fs.readFileSync(queryPath, 'utf-8');
      const rows = await queryRows(client, query);
      if (!rows) {
        expect.fail('No records returned from query');
      }
      const expectedData = [
        [ 'Men\'s Gloves' ],
        [ 'Pipe Cutter' ],
        [ 'Pipe Wrench' ],
        [ 'Rake' ],
        [ 'Snow shovel' ],
        [ 'Wheelbarrow' ],
        [ 'Women\'s Gloves' ],
        [ 'Work light' ]
      ];
      expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
    });
  });

  describe('Deletes the department with the name of \'Plumbing\'', () => {
    before(async () => {
      const deletePath = path.resolve(__dirname, '../sql-files', deleteDepartment);
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
      it('when finding all departments, the deleted department is no longer listed', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllDepartments);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const data = rows.map(row => Object.values(row));
        const expectedData = [
          [ 'Electrical' ],
          [ 'Home & Garden' ],
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });

      it('when finding all tools, all tools in the deleted department are still listed, but are no longer associated with the deleted department', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllTools);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const data = rows.map(row => Object.values(row));
        const expectedData = [
          [ 'Men\'s Gloves' ],
          [ 'Pipe Cutter' ],
          [ 'Pipe Wrench' ],
          [ 'Rake' ],
          [ 'Snow shovel' ],
          [ 'Wheelbarrow' ],
          [ 'Women\'s Gloves' ],
          [ 'Work light' ]
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });
    })
  });

  describe('Deletes the department with the name of \'Home & Garden\'\n    (original delete statement adapted to use with another department\n    name by replacing \'Plumbing\' in the delete file)\n    Important Note: The following test specs automatically pass\n    if you implemented the original delete statement as intended.', () => {
    before(async () => {
      client.close();
      ({ client, createError, otherError } = await createTables());

      const insertError = await insertData(client, otherError);
      if (insertError) otherError = insertError;

      const deletePath = path.resolve(__dirname, '../sql-files', deleteDepartment);
      const originalDelete = fs.readFileSync(deletePath, 'utf-8');
      const department = '\'Home & Garden\'';
      const deleteSql = originalDelete
        .replace(/'Plumbing'/g, department)
        .replace(/"Plumbing"/g, department);
      try {
        await run(client, deleteSql);
      } catch(e) {
        console.log(e)
        otherError = e.message;
      }
    });

    context('after delete is executed:', () => {
      it('when finding all departments, the deleted department is no longer listed', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllDepartments);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const data = rows.map(row => Object.values(row));
        const expectedData = [
          [ 'Electrical' ],
          [ 'Plumbing' ],
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });

      it('when finding all tools, all tools that were in the deleted department are still listed', async () => {
        if (stopTestOnError(client, createError, otherError)) return;
        const queryPath = path.resolve(__dirname, '../sql-files', findAllTools);
        const query = fs.readFileSync(queryPath, 'utf-8');
        const rows = await queryRows(client, query);
        if (!rows) {
          expect.fail('No records returned from query');
        }
        const data = rows.map(row => Object.values(row));
        const expectedData = [
          [ 'Men\'s Gloves' ],
          [ 'Pipe Cutter' ],
          [ 'Pipe Wrench' ],
          [ 'Rake' ],
          [ 'Snow shovel' ],
          [ 'Wheelbarrow' ],
          [ 'Women\'s Gloves' ],
          [ 'Work light' ]
        ];
        expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
      });
    })
  });
});
