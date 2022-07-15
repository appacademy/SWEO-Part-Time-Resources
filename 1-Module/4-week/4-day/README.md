# W4D4

## Warmup (15m)

```js
/***********************************************************************
Write or convert the function below to an ARROW function `updateScores(people)` 
that takes in an array of score objects (people) as its input. 
An object inside the array has two key-value pairs:
the scorer's name (string) and a point value score (number). 
`updateScores(people)` should take EACH OBJECT in the array, then update 
the point value under the key `score` by multiplying it by 10, and finally
add each object with the updated score to a new array. Return the array at the end.
Example 2:
let peeps = [
  {name: "Anthony", score: 1},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 3},
];
console.log(updateScores(peeps)); //=> [ {name: "Anthony", score: 10}, {name: "Winnie", score: 20},  {name: "Fred", score: 30}];
***********************************************************************/

let updateScores = function(people){

}

let peeps = [
    {name: "Anthony", score: 1},
    {name: "Winnie", score: 2},
    {name: "Fred", score: 3},
  ];

console.log(updateScores(peeps)); //=> [ {name: "Anthony", score: 10}, {name: "Winnie", score: 20},  {name: "Fred", score: 30}];
```

---

## Lecture (30m)

### Arrow Functions

`Overview`

- Arrow Functions are always anonymous
- Arrow Functions have implicit return (one line)
- Optional parenthesis for single parameter

  ```js
  // Multiline
  const multilineName = name => {
    return 'My name is '+ name;
  };
  multilineName('Philip');

  // Single Line
  const returnName = name => 'My name is ' + name;
  console.log(returnName('Blake'));

  // Anonymous callback
  const arr = [1, 2, 3];
  const addOne = arr.map((num) => num + 1);
  console.log(addOne);
  ```

### Closure | MDN: [Closures]

- An inner function that uses or changes variables that were initialized\
in an outer function.

`Overview`

- We can use/manipulate a Higher Order Functions' variables/parameters with a closure
- We can create multiple "instances" of a function's variables with closures

---

## Project Part 1 (45m)

Problems 0-5

---

## Discussion 1 (20m)

---

## Project Part 2 (45m)

Problems 6-11

---

## Discussion 2 (20m)

---
