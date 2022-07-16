# Promises Assessment

In this assessment, you will be tested on your knowledge of Promises and
`fetch`.

## Usage

1. Clone the assessment repository.
2. `cd` into the folder and `npm install` to install dependencies
3. Your objective is to implement the code in **01-promise.js** and
   **02-fetch.js** files.
4. Run `npm test` so that all test specs pass.
   - Do **NOT** modify the files in the "test" directory.

## 01-promise.js

Create a function called `potPlant(seed)` and use the given `addSoil`,
`plantSeed` and `growPlant` functions that return Promises to plant a seed and
grow it.

First, call the `addSoil()` function.

After the promise returned from the `addSoil()` function is resolved, call the
`plantSeed(seed)` function invoked with the given `seed` parameter.

Once the promise returned from the `plantSeed` function is resolved, pass the
resolved value from the `plantSeed` function into the `growPlant(plant)`
function as an argument.

The `potPlant(seed)` function should resolve to the resolve value of the Promise
returned from the `growPlant(plant)` function.

## 02-fetch.js

Make a `PUT` request to `/colors/1` with the following JSON body:

```json
{
  "color": "green"
}
```

If you format your request properly, you can expect the body of the response to
be:

```json
{
  "id": 1,
  "color": "green"
}
```

Print the body of the response to the console.

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Zip up your folder
3. Upload it

[https://github.com/appacademy/assessment-for-week-08-v2-practice-a-promises]: https://github.com/appacademy/assessment-for-week-08-v2-practice-a-promises