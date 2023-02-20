const fs = require("fs");
const path = require("path");

const results = JSON.parse(
  fs.readFileSync(path.join(__dirname, "score.json"), "utf-8")
);

const print = JSON.stringify(
  {
    stats: {
      suites: results.numTotalTestSuites,
      tests: results.numTotalTests,
      passes: results.numPassedTests,
      pending: results.numPendingTests,
      failures: results.numFailedTests
    },
  },
  null,
  1
);

console.log(print);
