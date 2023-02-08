const assert = require('assert');

const helloWorld = require('../problems/00-test');

describe('helloWorld()', function() {
  it('should return a string of "Hello World!"', function() {
    assert(helloWorld(), 'Hello World!');
  });
});
