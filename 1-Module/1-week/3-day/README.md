# M1-W1-D3

- Intro to JS
- aa_update
- Boolean Logic && Comparison Operators
- Variables
- Functions

---

## Intro to JS

We will be spending a ton of our time here at app academy focusing on javascript
in depth. So it is a good idea to have a brief understanding of the history and
purpose of the language to give a sense of context to what we are learning.

JavaScript was originally written in 1995 and was created (in its infant form)
in just over a week. It was written to be an easy to use and lightweight option
for creating dynamic user interactions on web pages in contrast to much bulkier
and complex languages.

The name JavaScript was decided on after a couple other options such as Mocha or
LiveScript, due in part to the insane marketing push of Java at the time, and
JavaScript developers wanting to take part in that name recognition. Seriously,
look up the old Java commercials, its hilarious!

JavaScript is the defacto web programming language today, it has been built from
the ground up, since its creation to be purpose built for web development.

Asynchronisity and the built in compatibility of all web browsers is a huge
advantage of using JavaScript.

---

## code runner

A vscode extension that enables you to run the code in your file immediately in vscode.

In your sidebar, go to the extensions and search for code runner. Install that extension and you're finished.

To use just write some code and push the play button above the file in vscode. (There will be a live demo.)

---

## First Practices (20m, SOLO)

Extra time given here to allow time for getting aa_update set up. Please ask
questions in the live-questions channel if you run into any issues getting this
working!

1. Favorite Food Problem
2. Arithmetic Operators Quiz
3. Numbers Exercise Problem

---

## Boolean Logic and Comparison Operators

### Boolean Logic and Comparison Operators Practices (20m, SOLO)

1. Boolean Operators Quiz
2. Boolean Exercise Problem
3. Comparison Operators Quiz

### Boolean Logic and Comparison Operators Discussion

- `Not` Operator (!)

  - Reverses a boolean

    |   A   |  !A   |
    | :---: | :---: |
    | true  | false |
    | false | true  |

- The `And` Operator (&&)

  - Only true if _both_ sides are true

    |   A   |   B   | A && B |
    | :---: | :---: | :----: |
    | true  | true  |  true  |
    | true  | false | false  |
    | false | true  | false  |
    | false | false | false  |

- The `Or` Operator (||)

  - True if _either_ side is true

    |   A   |   B   | A \|\| B |
    | :---: | :---: | :------: |
    | true  | true  |   true   |
    | true  | false |   true   |
    | false | true  |   true   |
    | false | false |  false   |

- Compares two elements and evaluates to a boolean

  ```js
  // Exclusive Comparison
  console.log(5 < 9); // true
  console.log(5 > 9); // false
  console.log("a" < "b"); // true (dictionary order)
  console.log("cat" < "cats"); // true (dictionary order)

  // Inclusive comparison (... or equal to)
  console.log(7 <= 10); // true
  console.log(10 >= 10); // true
  ```

- Equality

  - `=` is an assignment operator
  - `==` coerces data to check equality, hard to predict; **do not use**
  - `===` strict equality
  - `!==` strict NOT equal

  ```js
  // Equality === and !==
  console.log(2 === 2); // true
  console.log(2 === 2.1); // false
  console.log(2 !== 2.1); // true

  // Two equality operators, === and ==
  console.log(5 === "5"); // false
  console.log(5 == "5"); // true (types are coerced)
  console.log([] == 0); // true (can be unpredictable)
  console.log([] == '0'); // false (can be unpredictable)

  ```

---

## Variables

### Variables Practices (20m)

1. Variables Exercise Problem
2. Variables Quiz
3. Expression Expedition Quiz

### Variables Discussion

- The `=` operator is the `assignment operator`
  - Left of the `assignment operator`
    - Creates a space in memory with that name
    - Think of it like writing a name on a box
  - Right of the `assignment operator`
    - The `value` that will be assigned to the namespace
    - Think of it like the object you put in a box.
- Three parts of a variable
- +=, -=, \*=, /=
- Prefix and Postfix ++/--

  ```js
  let name; // declaration (undefined)

  name = "Leroy"; // assignment / reassignment

  let name2 = "Jenkins"; // initialization

  console.log(name, name2);
  ```

---

## Strings

---

### Strings Practices (20m, SOLO)

1. String Operators
2. Strings Exercise

---

### Strings Discussion

`Syntax`

- Must use single-quotes (') or double quotes (")
  - [AirBnB Style](https://github.com/airbnb/javascript) guide prefers single by default
  - Be consistent
- You can use single within double or vice-versa
  - If you need both, use an escape character `\`

`Length`

- The `.length` property returns the number of characters in a string:
  - Space and punctuation are also characters

`Indexing`

- `Index`: position of an element
  - **Indices start at 0**

      | index | 0 | 1 | 2 | 3 |
      |-------|---|---|---|---|
      | char  | d | o | g | s |

- Refer to a singe character of a string using `bracket notation`

`IndexOf`

- Find the index of _the first_ given character with `indexOf`

`Concatenate`

- Use `+` to concatenate (join) strings together

---

## Functions

---

### Functions Practices pt1 (20m, SOLO)

1. Intro to Functions
2. Goodbye

---

### Functions Discussion

`Vocabulary`

- `function declaration` - writing a function (once)
- `function call` / `invoking` - using a function (once or many times)
- `parameter(s)` - input(s) to a function when _writing_ a function. A variable
  to be used by the function.
- `argument(s)` - input(s) to a function when  _calling_ a function. The value
  assigned to the parameter variable.
- `return` what a function 'equals' or _evaluates_ to.

`Syntax`

- Blueprint for `declaring` a function

  ```js
  function aName (optionalParams) {
    // may have a return value
  }
  ```

`Return`

- Evaluates a function
  - It will evaluate to whatever you put after `return`
  - By default, functions evaluate to (return) `undefined`
- Stops the rest of your code from running

`Invoking a function`

- Blueprint for `invoking` a function

  ```js
    aName(optionalArgs)
    // if no args
    aName();
  ```

`Why Functions?`

- Blocks of code that we can invoke multiple times
- Prevent us from having to rewrite code
- console.log() vs return.
  - console.log we call a SIDE EFFECT, it doesn't effect the VALUE
  - return makes the function's VALUE equal to something when it's invoked


---

### Functions Practices pt2 (20m, SOLO)

1. Muscle Memory
2. Plus Five
3. Call This Function

---

### Polya's Problem Solving Framework Discussion

- How to solve any problem
  1. Understand the problem
  2. Make a plan
  3. Carry out the plan
  4. Look back and improve your solution
- Example Walkthrough of Plus Five Function using Polya's

---


### EOD
If we finish early, please either continue practicing todays material or get a headstart on your homework.

---
