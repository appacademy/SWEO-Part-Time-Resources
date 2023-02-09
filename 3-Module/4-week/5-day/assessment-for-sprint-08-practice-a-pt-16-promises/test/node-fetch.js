const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const fetchSpies = [];

module.exports = function (index, setting) {
  if (setting) {
    return function(returnValue, callback = () => {}) {
      const spy = chai.spy((...args) => {
        callback(...args);
        return returnValue;
      });
      fetchSpies[index] = spy;
      return fetchSpies[index];
    }
  }
  return fetchSpies[index];
}
