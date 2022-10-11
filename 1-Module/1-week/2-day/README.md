# M1-W1-D2

- Intro to JS
- aa_update
- Boolean Logic && Comparison Operators
- Variables

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

## aa_update

A tool that the instructional staff developed to automatically create a folder
structure for you and to help you to access daily lecture notes.

Run this command to start the script, follow the script instructions.

`curl -s https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/folder_structure.sh | bash`

Your cohortId is `2022-Oct-W`

If you run into any issues with this, I built in extra time for the following
breakout session to help you all debug any issues that come up.

To update the days notes run the command `aa_update` :)

---

## First Practices (40m, SOLO)

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
