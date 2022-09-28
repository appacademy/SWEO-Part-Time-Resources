const chai = require('chai');
const expect = chai.expect;

const { runSQL } = require('./utils/test-utils');
const { Insect } = require('../db/models');

describe('Phase 3 Specs - Insect', () => {
  context('Invalid Data', () => {
    it('does not allow `name` attribute to be empty', async () => {
      try {
        await runSQL("INSERT INTO 'Insect' (millimeters) VALUES (5);")
      } catch(err) {
        try {
          const insect = Insect.build({ millimeters: 5 });
          await insect.validate();
        } catch(err) {
          return;
        }
        return expect.fail('Invalid Data Allowed in DB (check your validations)');
      }
      expect.fail('Invalid Data Allowed in DB (check your constraints)');
    });
  
    it('does not allow duplicate `name` attribute values', async () => {
      try {
        await Insect.create({ name: 'Bumblebee', millimeters: 5 });
        await Insect.create({ name: 'Bumblebee', millimeters: 5 });
      } catch (err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your constraints)')
    });
  
    it('does not allow `name` attribute values that are not title cased', async () => {
      try {
        await Insect.create({ name: 'dragonfly', millimeters: 5 })
      } catch (err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your validations)')
    });

    it('does not allow `fact` attribute values that are greater than 240 characters', async () => {
      try {
        await Insect.create({ name: 'Dragonfly', millimeters: 5, fact: 'x'.repeat(241) })
      } catch (err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your validations)')
    });

    it('does not allow `millimeters` attribute to be empty', async () => {
      try {
        await runSQL("INSERT INTO 'Insect' (name) VALUES ('Wasp');")
      } catch(err) {
        try {
          const insect = Insect.build({ name: 'Wasp' });
          await insect.validate();
        } catch(err) {
          return;
        }
        return expect.fail('Invalid Data Allowed in DB (check your validations)');
      }
      expect.fail('Invalid Data Allowed in DB (check your constraints)');
    });
  
    it('does not allow `millimeters` attribute values less than 0', async () => {
      try {
        await Insect.create({ name: 'Ant', millimeters: -1 })
      } catch(err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your validations)')
    });
  });

  context('Valid Data', () => {
    it('allows a title-cased string for the `name` attribute value', async () => {
      await Insect.create({ name: 'Queen Ant', millimeters: 5 });
    });

    it('allows a number greater than 0 for the `millimeters` attribute', async () => {
      await Insect.create({ name: 'Fly', millimeters: 1 });
    });

    it('allows a `fact` attribute that is less than 240 characters', async () => {
      await Insect.create({ name: 'Spider', millimeters: 5, fact: 'x'.repeat(238) });
    });

    it('allows a string for the `description` attribute', async () => {
      await Insect.create({ name: 'Beetle', millimeters: 5, description: 'A buggy beetle' });
    });

    it('uses the current time as default values for `createdAt` and `updatedAt` attribute values', async () => {
      await runSQL("INSERT INTO 'Insects' (name, millimeters) VALUES ('Ladybug', 5);");
      const testInsect = await Insect.findOne({ where: { name: 'Ladybug' }, attributes: ['createdAt', 'updatedAt']});
      expect(testInsect.get('createdAt')).to.be.an.instanceof(Date);
      expect(testInsect.get('createdAt').toString()).to.eq(testInsect.get('updatedAt').toString());
    });
  })
})