# W1D4

## Morning Boost: 5 mins

## Conditionals and Loops: 10 mins

`Syntax`

- keywords: `if`, `else if`, `else`
  - `if` & `else if` require a condition inside of parenthesis
  - We can put whatever we want in a condition
    - The condition must be met and evaluate to true or a truthy value before the code inside the condition is executed. [MDN truthy vs falsy]
- a `code block` to run

  ```js
  let c = "turtle";

  if (c === "dog") {
    console.log("I'm a dog!");
  } else if (c === "turtle") {
    console.log("I'm a turtle!");
  } else if (c === "potato") {
    console.log("I'm a potato");
  } else {
    console.log("I don't know what I am");
  }
  ```

### Loops

`While Loop`

- Syntax

  - an `initial expression` (like a counter)
  - the `while` keyword
  - parenthesis with a conditional of when to run the loop WHILE the condition is true
  - a step case leading to the conditional being falsy.

  ```js
  let i = 0;

  while (i < 5) {
    console.log("hello world");
    i++;
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
    - `for(starting point, stop, step)`

  ```js
  for (let i = 0; i < 5; i++) {
    console.log("hello world");
  }
  ```

- When to use?

  - For loop: Use when you know how many times the loop should run.
  - While loop: Use if you want the loop to break based on a condition **other than** the number of times it runs.

## Solo Practice 1: 20 mins

1. [Is Five]
2. [Is Odd]
3. [Log Between]

## Solo Practice 1 Discussion: 10 mins

## Solo Practice 2: 20 mins

1. [Print Fives]
2. [Log Between Stepper]
3. [Three or Seven]

## Solo Practice 2 Discussion: 10 mins

## Solo Practice 3 : 20 mins

1. [Sum Array]
2. [Add Arrays]

## Array Discussion: 30 mins

`Info to know`

- An array holds a `ORDERED LIST` of data
- We can call each item in an array an `element`
- Index starts at 0

`Syntax`

- An array is written with square brackets [] with each element separated by a comma

  ```js
  let arr = [1, "hello", false, NaN, [1, 2, 3]];
  ```

`Indexing`

- Just like strings we can get a specific index with `bracket notation`

  ```js
  let array = ["dog", "cat", "turtle"];

  console.log(array[1]); // "cat"
  console.log(array[array.length - 1]); // finds last element // "turtle"
  ```

- `.indexOf(element)` - finds the index of the first given element in an\
  array. If not found, returns -1.

  ```js
  let array = ["dog", "cat", "turtle"];

  console.log(array.indexOf("dog")); // 0
  console.log(array.indexOf("elephant")); // -1
  ```

`Properties / Methods`

- `.length` - returns the number of elements in an array

  ```js
  let array = ["dog", "cat", "turtle"];

  console.log(array.length); // 3
  ```

- `.concat(arr)` - allows us to join arrays together.

  ```js
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  let array3 = [7];

  let array4 = array1.concat(array2, array3);

  console.log(array4); // [1, 2, 3, 4, 5, 6, 7]
  ```

`More Methods`

Other common methods you will use often: (Not needed _today_, but why not\
 take a look at them on MDN)

- Array.push
- Array.pop
- Array.unshift
- Array.shift
- Array.slice
- Array.splice

## Solo Practice 4: 25 mins

1. [Doubler]
2. [Vowel Counter]

## Solo Practice 3 Discussion: 10 mins

## Quizzes: 10 mins

1. [Control Flow Quiz]
2. [Formative Quiz]


[MDN truthy vs falsy]: (https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
[Is Five]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/is-five)
[Is Odd]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/is-odd)
[Log Between]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/log-between)
[Print Fives]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/print-fives)
[Log Between Stepper]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/log-between-stepper)
[Three or Seven]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/three-or-seven)
[Sum Array]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/sum-array)
[Add Arrays]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/add-arrays)
[Doubler]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/doubler)
[Vowel Counter]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/vowel-counter----)
[Control Flow Quiz]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/control-flow-quiz)
[Formative Quiz]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/formative-quiz--repeat----thursday)