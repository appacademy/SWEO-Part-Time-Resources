const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const coinCollector = require("../problems/19-coin-collector.js");

describe("coinCollector()", function () {

  it("should return a function the number of times specified by the first invocation", () => {
    let oneCoin = coinCollector(1);
    let twoCoins = coinCollector(2);
    let threeCoins = coinCollector(3);
    expect(oneCoin).to.be.a("function");
    expect(twoCoins).to.be.a("function");
    expect(threeCoins).to.be.a("function");
  });

  it("should return an array containing all gathered coins after the specified length is reached", function () {
    let oneCoin = coinCollector(1);
    let twoCoins = coinCollector(2);
    let threeCoins = coinCollector(3);
    twoCoins(25);
    threeCoins(25);
    threeCoins(5);
    expect(oneCoin(10)).to.eql([10]);
    expect(twoCoins(10)).to.eql([25, 10]);
    expect(threeCoins(10)).to.eql([25, 5, 10]);
  });
});
