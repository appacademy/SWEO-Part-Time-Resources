## Conditionals

`Syntax`

- a keyword: `if` `else if` `else`
- `if` & `else if` require a condition inside of parenthesis
  - these will evaluate the `truthy-ness` of what is inside of the parentheses
  - [Falsy Values]
- a `code block` to run if the conditional is `truthy` or, with `else`,\
if other conditionals are `falsy`

  ```js
  let c = 'turtle';

  if (c === 'dog') {
      console.log("I'm a dog!");
  } else if (c === "turtle") {
      console.log("I'm a turtle!");
  } else if (c === "potato") {
      console.log("I'm a potato");
  } else {
      console.log("I don't know what I am");
  }
  ```

## Loops

`While Loop`

- Syntax
  - an `initial expression` (like a counter)
  - the `while` keyword
  - parenthesis with a conditional of when to run the loop
    - if truthy, the loop with run
  - a step case leading to the conditional being falsy.

  ```js
  let i = 0;

  while(i < 5) {
      console.log('hello world');
      i++
  }
  ```

`For Loop`

- Syntax
  - `for` keyword
  - parenthesis that has ... separated by a semi-colon
    - an `initial expression` (like a counter)
    - a conditional of when to run the loop
    - if truthy, the loop will run.
    - a step case leading to the conditional being falsy.

  ```js
  for (let i = 0; i < 5; i++) {
    console.log('hello world');
  }
  ```

## Array Data Type

`Info to know`

- An array holds a `ORDERED LIST` of data
- We can call each item in an array an `element`
- Index starts at 0

`Syntax`

- An array is written with square brackets [] with each element separated by a comma

  ```js
  let arr = [1, "hello", false, NaN, [1, 2, 3]]
  ```

`Indexing`

- Just like strings we can get a specific index with `bracket notation`

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array[1]) // "cat"
  console.log(array[array.length - 1]) // finds last element // "turtle"
  ```

- `.indexOf(element)` - finds the index of the first given element in an\
 array. If not found, returns -1.

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.indexOf("dog")) // 0
  console.log(array.indexOf("elephant")) // -1
  ```

`Properties / Methods`

- `.length` - returns the number of elements in an array

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.length) // 3
  ```

- `.concat(arr)` - allows us to join arrays together.

  ```js
  let array1 = [1, 2, 3]
  let array2 = [4, 5, 6]
  let array3 = [7]

  let array4 = array1.concat(array2, array3)

  console.log(array4) // [1, 2, 3, 4, 5, 6, 7]
  ```

`More Methods`

Other common methods you will use often: (Not needed _today_, but why not\
 take a look at them on MDN)

- Array.prototype.push
- Array.prototype.pop
- Array.prototype.shift
- Array.prototype.unshift
- Array.prototype.slice
- Array.prototype.splice

<!-- Links to change for each cohort -->
[Morning Boost]: https://open.appacademy.io/learn/js-py---pt-jan-2023-online/week-1---intro-to-javascript/tuesday-morning-boost
[String Type Lecture]: https://open.appacademy.io/learn/js-py---pt-jan-2023-online/week-1---intro-to-javascript/string-type-lecture
[String Type Demo]: https://open.appacademy.io/learn/js-py---pt-jan-2023-online/week-1---intro-to-javascript/string-type-demo
[Function Lecture]: https://open.appacademy.io/learn/js-py---pt-jan-2023-online/week-1---intro-to-javascript/function-lecture
[Average Walkthrough]: https://open.appacademy.io/learn/js-py---pt-jan-2023-online/week-1---intro-to-javascript/average-walkthrough
[Conditionals Demo]: https://open.appacademy.io/learn/js-py---pt-jan-2023-online/week-1---intro-to-javascript/conditionals-demo
[Loop Demo]: https://open.appacademy.io/learn/js-py---pt-jan-2023-online/week-1---intro-to-javascript/loops-demo
[Array Lecture]: https://open.appacademy.io/learn/js-py---pt-jan-2023-online/week-1---intro-to-javascript/array-lecture

<!-- Constant Links -->
[Falsy Values]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
