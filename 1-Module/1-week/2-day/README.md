# M1-W1-D2

- Student Portal
- Live Questions Channel
- Zoom Rules
- Intro to JS
- Expressions
- Number Type
- Boolean Type and Comparison Operators
- Variables

---

## Student Portal

[Link to site](https://my.appacademy.io/)

- Email - use the one that you signed up to app academy with
- PIN - default is 1234

## Live Questions Channel

This is a element of your learning here at App Academy. You will start off by just reaching out for help without any expectations of question quality from us. By the time you complete the course here, we will expect that you have learned how to ask effective questions as if you were in a work place asking help from a senior engineer.

For now, just post that you need help and your room number in the live-questions channel.

`#{yyyy}-{mm}-{dd}-questions`

Please ask questions during lectures. Use the zoom raised hand feature to avoid talking over me or other students.

## Zoom Rules

1. Cameras on unless you have reached out to an instructor and have gotten an ok to be cameras off for the day or have an emergency take place and need to quickly turn the camera off and then back on.
2. Mic Off, unless you have raised a hand in zoom and been called on. Use the raise hand zoom reaction.
3. Be Present, both during lectures and pairing. Dont be playing games on your computer, checking social media, or messing with your phone during class time.
4. Make sure your zoom name matches your preferred name (discord as well)

## Intro to JS

We will be spending a ton of our time here at app academy focusing on javascript in depth. So it is a good idea to have a brief understanding of the history and purpose of the language to give a sense of context to what we are learning.

JavaScript was originally written in 1995 and was created (in its infant form) in just over a week. It was written to be an easy to use and lightweight option for creating dynamic user interactions on web pages in contrast to much bulkier and complex languages.

The name JavaScript was decided on after a couple other options such as Mocha or LiveScript, due in part to the insane marketing push of Java at the time, and JavaScript developers wanting to take part in that name recognition. Seriously, look up the old Java commercials, its hilarious!

JavaScript is the defacto web programming language today, it has been built from the ground up, since its creation to be purpose built for web development.

Asynchronisity and the built in compatibility of all web browsers is a huge advantage of using JavaScript.

## Expressions

If you think of coding as a language, an expression is like a sentence, a
variable is a noun, and a keyword is a verb. A sentence combines nouns, verbs,
and other elements of language to bring across a single point. It takes words
and produces meaning.

An expression is a statement that __evaluates__ to something as opposed to a
value which __is__ something, or a keyword that __does__ something.

```js
5 + 5 // -> 10

"hello" + " " + "world" // -> "hello world"

5 === 5 // -> true

5 !== 4 // -> true

1 < 2 // -> true

2 > 1 // -> true
```

Using console.log is one of the easiest ways to see what an expression/statement evaluates to

```js
console.log(5+5)
```

## Number Type

- We can have whole numbers, decimals, and negative numbers
- Order of Operations
  - P.E.M.D.A.S.
    - Parens
    - Exponent
    - Multiplication / Division / Modulus
    - Addition / Subtraction
- Modulo
  - Returns the remainder of a division expression
- NaN

## Boolean Type and Comparison Operators

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

## Variables

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
