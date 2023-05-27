# Data Trivia: POJO and Advanced Array Methods Practice

In this practice, you will practice using many of the concepts you've learned so far, including:

- working with a variety of data types
- destructuring data
- accessing keys and values, and manipulating objects
- using advanced array methods to work with data

All of the problems in this practice focus on a large data set related to world
climate. The data set is in the __climate-data.js__ file.

The data set is structured as an array, including 105 objects that take up over
9500 lines of code. Each object represents a summary of average monthly climate
data for a single city. The example below shows the data structure for each
object:

```javascript
// climate-data.js file
const climateData = [   // array of 105 objects, each representing a city
  {
    "id": 1,
    "city": "Amsterdam",
    "country": "Netherlands",
    "monthlyAvg": [     // nested array with average monthly data for that city
      {                     // climateData[0].monthlyAvg[0] = January data
        "high": 7,
        "low": 3,
        "dryDays": 19,
        "snowDays": 4,
        "rainfall": 68
      },
      {                     // climateData[0].monthlyAvg[1] = February data
        "high": 6,
        "low": 3,
        "dryDays": 13,
        "snowDays": 2,
        "rainfall": 47
      },
      {                     // climateData[0].monthlyAvg[2] = March data
        "high": 10,
        "low": 6,
        "dryDays": 16,
        "snowDays": 1,
        "rainfall": 65
      },
      {                     // climateData[0].monthlyAvg[3] = April data
        "high": 11,
        "low": 7,
        "dryDays": 12,
        "snowDays": 0,
        "rainfall": 52
      },
      {                     // climateData[0].monthlyAvg[4] = May data
        "high": 16,
        "low": 11,
        "dryDays": 15,
        "snowDays": 0,
        "rainfall": 59
      },
      {                     // climateData[0].monthlyAvg[5] = June data
        "high": 17,
        "low": 11,
        "dryDays": 14,
        "snowDays": 0,
        "rainfall": 70
      },
      {                     // climateData[0].monthlyAvg[6] = July data
        "high": 20,
        "low": 12,
        "dryDays": 14,
        "snowDays": 0,
        "rainfall": 74
      },
      {                     // climateData[0].monthlyAvg[7] = August data
        "high": 20,
        "low": 12,
        "dryDays": 15,
        "snowDays": 0,
        "rainfall": 69
      },
      {                     // climateData[0].monthlyAvg[8] = September data
        "high": 17,
        "low": 10,
        "dryDays": 14,
        "snowDays": 0,
        "rainfall": 64
      },
      {                     // climateData[0].monthlyAvg[9] = October data
        "high": 14,
        "low": 9,
        "dryDays": 16,
        "snowDays": 0,
        "rainfall": 70
      },
      {                    // climateData[0].monthlyAvg[10] = November data
        "high": 9,
        "low": 6,
        "dryDays": 20,
        "snowDays": 1,
        "rainfall": 82
      },
      {                     // climateData[0].monthlyAvg[11] = December data
        "high": 7,
        "low": 1,
        "dryDays": 19,
        "snowDays": 1,
        "rainfall": 85
      }
    ]
  },
  // ...followed by 104 other objects with data for additional cities
];
```

Some notes about the data:

- `high`' and `low` temperatures are the monthly average temperature, measured in degrees Celsius (c).
- `rainfall` is the average total rainfall for the entire month, measured in millimeters (mm).
- Each `monthlyAvg` array includes an object for each month, but they are not labeled by month names. To access data for a specific month, use the month's number (1 - 12) and subtract 1 to get the index in the array. For example:
    - `monthlyAvg[0]` will access January data
    - `monthlyAvg[11]` will access December data

You will need to use many of the POJO methods and advanced array methods that
you have already learned to complete each task.

## Phase 0: Setup

To get started, use the following commands:

1. Clone the starter repository
2. `cd` into the project directory
3. `npm install` to install dependencies

The `mocha` command will run all the tests. You should have `mocha` installed
and will need to pass all the tests in order to move on.

To test only one of the test files at a time, you can run the command, `mocha
test/<test file name>` (e.g. `mocha test/01-clean-climate-data.js`),
where `test` is the name of the test folder. You must run this command one
directory above the `test` directory.

_You may notice the `package.json`/`package-lock.json` files and
`node_modules` directory. You do not need to edit any of those contents. Those
files are what we use to package the project and create the test cases._

## Phase 1: Clean the Climate Data (Basic to Intermediate)

In phase 1, you will complete a few tasks that are common anytime you start exploring a new large data set. You need to know what data is included (or not included), and whether there are any errors in the data. If any errors are found, you need to correct them. This process is also known as "cleaning" the data.

Start in the __problems/01-clean-climate-data.js__ file. Write out functions
according to the directions. The first four functions will serve as queries to
pull out specific information from the large data set. The last function requires you to correct a mistake in a piece of data.

Complete each function in order, because you may want to use some of your
earlier functions as helper functions in later problems.

Run `mocha test/01-clean-climate-data-spec.js` to run all the test specs for
this phase. Run the tests frequently, because the error messages on your failed tests will help you debug your code.

When all of the tests pass, you can move on to Phase 2.

## Phase 2: Climate Trivia! (Advanced)

In this phase, you will answer some trivia questions about world climate in the following files:

- Most Snow Days: __problems/02-most-snow-days.js__
  - Run tests: `mocha test/02-most-snow-days-spec.js`

- Least Rainfall: __problems/03-least-rainfall.js__
  - Run tests: `mocha test/03-least-rainfall-spec.js`

- Greatest Temperature Difference: __problems/04-temperature-range.js__
  - Run tests: `mocha test/04-temperature-range-spec.js`

To answer each question, write a function (or a set of related functions) that
will return the specific data from the data set. It is important to use the exact function name and arguments that are specified in the directions, otherwise the tests will not run properly. However, feel free to write multiple functions and call helper functions to help you solve each problem.

Only move on to the Bonus phase after you have successfully solved all Phase 2 problems and passed all of the test specs.

## Phase 3: Choose Your Own Adventure! (Bonus)

In this phase, let your curiosity guide you to further explore the data!

First, come up with your own question that could be answered with the data set in __climate-data.js__.

For example, imagine you are planning a vacation. You might ask the following example questions to help you choose your destination:

- _If you enjoy skiing:_ Which city/cities have the most snow in December? In March?
- _If you want to avoid rain_: Which city and month has the highest number of dry days?

_What other types of questions could be answered by the data?_

Next, write a function (or set of functions) that query the data set and return the answer to your question.

There are no test specs to guide you for this phase. Instead, use a `console.log()` to wrap your function call, and run the file using the command `node problems/05-choose-your-own-adventure.js`.

## Congratulations!

Congratulations on completing this practice!

As you continue your programming journey, you will find that many projects require the skills you have practiced here:

- Working with large data sets, often in the form of arrays of objects, or  arrays nested within an object
- Using advanced array methods and POJO methods to access and manipulate data
