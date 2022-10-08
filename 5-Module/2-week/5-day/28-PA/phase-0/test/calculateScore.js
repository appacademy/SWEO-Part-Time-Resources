const fs = require("fs");
const path = require("path");

const results = JSON.parse(
  fs.readFileSync(path.join(__dirname, "score.json"), "utf-8")
);

let total = results.testResults
  .map((o) => {
    if (o.assertionResults.length > 0) {
      return o.assertionResults.map((a) => {
        return a.title;
      });
    }
    return ["(0 points)"];
  })
  .reduce((acc, x) => [...acc, ...x], [])
  .map((x) => x.substring(1))
  .map((x) => Number.parseInt(x))
  .reduce((acc, x) => acc + x, 0);

const score = results.testResults
  .map((o) => {
    if (o.assertionResults.length > 0) {
      return o.assertionResults.map((a) => {
        if (a.failureMessages.length > 0) {
          return a.title;
        }
        return "(0 points)";
      });
    }
    return ["(0 points)"];
  })
  .reduce((acc, x) => [...acc, ...x], [])
  .map((x) => x.substring(1))
  .map((x) => Number.parseInt(x))
  .reduce((acc, x) => acc + x, 0);

const print = JSON.stringify(
  {
    stats: {
      suites: results.testResults.length,
      tests: total,
      passes: total - score,
      pending: 0,
      failures: score,
      duration: 8,
    },
  },
  null,
  1
);

console.log(print);
