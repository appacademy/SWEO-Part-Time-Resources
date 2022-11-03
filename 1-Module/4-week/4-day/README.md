# M1-W4-D4

## Arrow Functions

`Overview`

- Arrow Functions are always anonymous
- Arrow Functions have implicit return (one line)
- Optional parenthesis for single parameter

  ```js
  // Multiline
  const multilineName = name => {
    return 'My name is '+ name;
  };
  multilineName('William');

  // Single Line
  const returnName = name => 'My name is ' + name;
  console.log(returnName('Anthony'));

  // Anonymous callback
  const arr = [1, 2, 3];
  const addOne = arr.map((num) => num + 1);
  console.log(addOne);
  ```

## Closure | MDN: [Closures]

- An inner function that uses or changes variables that were initialized\
in an outer function.

`Overview`

- We can use/manipulate a Higher Order Functions' variables/parameters with a closure
- We can create multiple "instances" of a function's variables with closures

---

## Project Part 1 (45m)

Problems 0-5

---

## Discussion 1

---

## Project Part 2 (45m)

Problems 6-11

---

## Discussion 2

---
