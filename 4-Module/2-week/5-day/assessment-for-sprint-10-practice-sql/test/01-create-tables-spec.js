const { createTables, stopTestOnError } = require('./utils');

describe('Create tables', () => {
  let client;
  let createError;
  let otherError;

  before(async () => {
    ({ client, createError, otherError } = await createTables());
  });

  after(async () => {
    if (client) {
      client.close();
    }
  });

  it('has no creation errors', async () => {
    if (stopTestOnError(client, createError, otherError)) return;
  });
});
