# M1W1D3

Your Lifeline: [MDN Web Docs](https://developer.mozilla.org/en-US/)

## Here we go: 15 mins

1. Favorite Food
2. Arithmetic Operator
3. Number Exercise

### The Number Type

- We can have whole numbers, decimals, and negative numbers
- Order of Operations
  - P.E.M.D.A.S.
- Modulo
  - Returns the `remainder` of a division expression, same precedence as
    multiplication and division
- NaN

## Boolean Prompt: 10 mins

1. Boolean Operators
2. Boolean Exercise

### Boolean Type

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

## Comparison Operators Prompt: 10 mins

1. Comparison Operators

### Comparison Operators

- Compares two elements and evaluates to a boolean

  ```js
  // Less than/Greater than
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
  ```

## Variables Prompt: 10 mins

1. Variables Exercise
2. Variables Quiz

### Variables

- The `=` operator is the `assignment operator`
  - Left of the `assignment operator`
    - Creates a space in memory with that name
    - Think of it like writing a name on a box
  - Right of the `assignment operator`
    - The `value` that will be assigned to the namespace
    - Think of it like the object you put in a box.
- Four parts of a variable
- Prefix and Postfix ++/--
- +=, -=, \*=, /=

  ```js
  let name; // declaration (undefined)

  name = "Leeroy"; // assignment / reassignment

  let name2 = "Jenkins"; // initialization

  console.log(name, name2);
  ```

## Put it all together! 10 mins

1. Expression Expedition

### Expression Discussion

An expression is a statement that when evaluated returns a value.

`1 + 2` after evaluation equals `3`
`true && false` after evaluation equals `false`

## Strings: 15 mins

  1. [String Operators]
  2. [String Exercise]

### String Discussion

`Syntax`

- Must use single-quotes (') or double quotes (")
  - AirBnB Style guide prefers single by default
  - Be consistent
- You can use single within double or vice-versa
  - If you need both, escape character `\`

`Length`

- The `.length` property returns the number of characters in a string:
  - Space and punctuation are also characters

`Indexing`

- `Index`: position of an element
  - **Indices start at 0**

      | index | 0 | 1 | 2 | 3 |
      |-------|---|---|---|---|
      | char  | d | o | g | s |

- Refer to a single character of a string using `bracket notation`

`IndexOf`

- Find the index of _the first_ given character with `indexOf`

`Concatenate`

- Use `+` to concatenate (join) strings together

### Function Discussion

`Vocabulary`

- `function declaration` - writing a function (once)
- `function call` / `invoking` - using a function (once or many times)
- `parameter(s)` - input(s) to a function when _writing_ a function. A variable
  to be used by the function.
- `argument(s)` - input(s) to a function when  _calling_ a function. The value
  assigned to the parameter variable.
- `return` what a function 'equals'

`Syntax`

- Blueprint for `declaring` a function

  ```js
  function aName(optionalParams) {
    // may have a return value
  }
  ```

`Return`

- Evaluates a function
  - It will evaluate to whatever you put after `return`
  - By default, functions evaluate to `undefined`
- Stops the rest of your code from running

`Invoking a function`

- Blueprint for`invoking` a function

  ```js
    aName(optionalArgs)
    // if no args
    aName();
  ```

`Why Functions?`

- Blocks of code that we can invoke multiple times
- Prevent us from having to rewrite code
- console.log() vs return.
  - console.log we call a SIDE EFFECT, it doesn't affect the VALUE
  - return makes the function's VALUE equal to something when it's invoked

## Intro to Functions: 20 mins

  1. Goodbye
  2. Muscle Memory
  3. Plus Five
  4. Call This Function
