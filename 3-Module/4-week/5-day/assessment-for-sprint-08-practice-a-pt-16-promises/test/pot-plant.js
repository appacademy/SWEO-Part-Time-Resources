const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const callbacks = [];

module.exports = function (fnName, setting) {
  if (setting) {
    return function(returnValue, callback) {
      const spy = chai.spy((...args) => {
        if (callback) return callback(...args);
        return returnValue;
      });
      callbacks[fnName] = spy;
      return callbacks[fnName];
    }
  }
  return callbacks[fnName];
}
