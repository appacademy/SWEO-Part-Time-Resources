const chai = require("chai");
const expect = chai.expect;

const { NumSorter } = require("../problems/num-sorter");

describe("NumSorter timing", function () {
  this.timeout(4000);
  // The performance expectations for this assessment are measured
  // relative to this benchmark. It runs in ~200ms on an Intel
  // MacBook Pro. This system accounts for differences in processor
  // speed.
  let timeout = 1000; // 1000ms tuned for autograder

  it(`Adds 10,000 numbers, max 1,000 within the benchmark time`, function () {
    const n = 10000;
    const maxNums = 1000;

    // Timing performance test
    const numSortTime = numSorterTiming(n, maxNums, timeout);

    expect(numSortTime).to.be.true;
  });

  it(`Adds 30,000 numbers, max 1,000 within the benchmark time`, function () {
    const n = 30000;
    const maxNums = 1000;

    // Timing performance test
    const numSortTime = numSorterTiming(n, maxNums, timeout);

    expect(numSortTime).to.be.true;
  });

  it(`Adds 50,000 numbers, max 1,000 within the benchmark time`, function () {
    const n = 50000;
    const maxNums = 1000;

    // Timing performance test
    const numSortTime = numSorterTiming(n, maxNums, timeout);

    expect(numSortTime).to.be.true;
  });

  it(`Adds 80,000 numbers, max 1,000 within the benchmark time`, function () {
    const n = 80000;
    const maxNums = 1000;

    // Timing performance test
    const numSortTime = numSorterTiming(n, maxNums, timeout);

    expect(numSortTime).to.be.true;
  });

  it(`Adds 80,000 numbers, max 5,000 within the benchmark time`, function () {
    const n = 80000;
    const maxNums = 5000;

    // Timing performance test
    const numSortTime = numSorterTiming(n, maxNums, timeout);

    expect(numSortTime).to.be.true;
  });

  it(`Adds 80,000 numbers, max 10,000 within the benchmark time`, function () {
    const n = 80000;
    const maxNums = 10000;

    // Timing performance test
    const numSortTime = numSorterTiming(n, maxNums, timeout);

    expect(numSortTime).to.be.true;
  });
});

// Add numbers, return false if it times out, true otherwise
function numSorterTiming(n, maxNums, timeout) {
  numSort = new NumSorter(maxNums);

  startTime = Date.now();
  numbers = n;

  for (let i = 1; i <= numbers; i++) {
    numSort.addAllowedNum(i);

    if (Date.now() - startTime > timeout) {
      console.log(`Timeout: Added ${n} - max ${maxNums}`);
      return false;
    }
  }

  console.log(
    `Added ${n} - max ${maxNums} in ${Date.now() - startTime}ms`
  );

  return true;
}