const chai = require('chai');
const expect = chai.expect;

const { runSQL } = require('./utils/test-utils');
const { Image } = require('../db/models');

console.log(process.env.DB_FILE)

describe('Step 1 Specs - Create Image Table', () => {
  context('Invalid Data', () => {
    it('does not allow `url` attribute to be empty', async () => {
      try {
        await runSQL("INSERT INTO 'Images' DEFAULT VALUES;")
      } catch(err) {
        try {
          const image = Image.build({});
          await image.validate();
        } catch(err) {
          return;
        }
        return expect.fail(
            'Invalid Data Allowed in DB (check your constraints in model)'
        );
      }
      expect.fail(
          'Invalid Data Allowed in DB (check your constraints in model)'
      );
    });
  });

  context('Valid Data', () => {
    it('allows a string for the `url` attribute value', async () => {
      await Image.create({ url: 'abc.png' });
    });
    it('automatically sets `createdAt` and `updatedAt', async () => {
      await runSQL("INSERT INTO 'Images' ('url') VALUES ('xyz.png');")
    });
  });
});
