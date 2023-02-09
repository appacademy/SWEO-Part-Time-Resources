const chai = require("chai");
const expect = chai.expect;

const coupon = require("../problems/16-coupon.js");

describe("coupon()", function () {

  it("should return a function after taking a number to apply as a discount", ()=>{
    let tenPercent = coupon(0.1);
    let twentyPercent = coupon(0.2);
    expect(tenPercent).to.be.a("function");
    expect(twentyPercent).to.be.a("function")
  })

  it("should return an array of discounted prices after passing in an array of original prices", function () {
    let tenPercent = coupon(0.1);
    let twentyPercent = coupon(0.2);
    expect(tenPercent([10, 20, 30])).to.eql([9, 18, 27]);
    expect(twentyPercent([10, 20, 30])).to.eql([8, 16, 24]);
  });
});
