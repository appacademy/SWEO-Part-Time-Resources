const chai = require('chai');
const expect = chai.expect;

const { runSQL } = require('./utils/test-utils');
const { Tree } = require('../db/models');

describe('Phase 1 Specs - Tree', () => {
  context('Invalid Data', () => {
    it('does not allow `tree` attribute to be empty', async () => {
      try {
        await runSQL("INSERT INTO 'Trees' DEFAULT VALUES;")
      } catch(err) {
        try {
          const tree = Tree.build({});
          await tree.validate();
        } catch(err) {
          return;
        }
        return expect.fail('Invalid Data Allowed in DB (check your validations)');
      }
      expect.fail('Invalid Data Allowed in DB (check your constraints)');
    });
  
    it('does not allow duplicate `tree` attribute values', async () => {
      try {
        await Tree.create({ tree: 'orange' });
        await Tree.create({ tree: 'orange' });
      } catch (err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your constraints)')
    });
  
    it('does not allow `heightFt` attribute values less than 0', async () => {
      try {
        await Tree.create({ tree: 'lemon', heightFt: -1 })
      } catch (err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your validations)')
    });
  
    it('does not allow `groundCircumferenceFt` attribute values less than 0', async () => {
      try {
        await Tree.create({ tree: 'lime', groundCircumferenceFt: -1 })
      } catch(err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your validations)')
    });
  });

  context('Valid Data', () => {
    it('allows a string for the `tree` attribute value', async () => {
      await Tree.create({ tree: 'mango' });
    });

    it('allows a number greater than 0 for the `heightFt` and `groundCircumferenceFt` attribute values', async () => {
      await Tree.create({ tree: 'avocado', heightFt: 100, groundCircumferenceFt: 0.1 });
    });

    it('uses the current time as default values for `createdAt` and `updatedAt` attribute values', async () => {
      await runSQL("INSERT INTO 'Trees' (tree) VALUES ('apple');");
      const testTree = await Tree.findOne({ where: { tree: 'apple' }, attributes: ['createdAt', 'updatedAt']});
      expect(testTree.get('createdAt')).to.be.an.instanceof(Date);
      expect(testTree.get('createdAt').toString()).to.eq(testTree.get('updatedAt').toString());
    });
  })
})