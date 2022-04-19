# W1D2
We will be doing a reverse classroom style. 

Best way to learn in this field is by actively practicing/coding, then running into a problem and finding ways to solve those problems (parsing documentations, asking questions, etc.)

## a/A Update Command Line Tool

- To make it easier for you to manage a file system where practices and
  notes are where you expect them to be.

`curl -s https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/folder_structure.sh | bash`

CohortID === `2022-Apr-E`

## Learning boost!: 5 minutes

## Here we go: 20 mins

1. [Favorite Food]
2. [Arithmetic Operator]
3. [Number Exercise]

### The Number Type: 15 mins

- We can have whole numbers, decimals, and negative numbers
- Order of Operations
  - P.E.M.D.A.S. [(),*/%, +-]
- Modulo
  - Returns the `remainder` of a division expression, same precedence as
    multiplication and division.
- NaN

## Boolean Prompt: 15 mins

1. [Boolean Operators]
2. [Boolean Exercise]

### Boolean Type: 10 mins

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

1. [Comparison Operators]

### Comparison Operators: 10 mins

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

## Variables Prompt: 20 mins

1. [Variables Exercise]
2. [Variables Quiz]

### Variables: 15 mins

- The `=` operator is the `assignment operator`
  - Left of the `assignment operator`
    - Creates a space in memory with that name
    - Think of it like writing a name on a box
  - Right of the `assignment operator`
    - The `value` that will be assigned to the namespace
    - Think of it like the object you put in a box.
- Four parts of a variable

  - `let varName = "value";`
  - `let`: Initialization keyword
  - `varName`: name
  - `=`: assignment operator
  - `"value"`: value

- Prefix and Postfix ++/--
- +=, -=, \*=, /=

  ```js
  let name; // declaration (undefined)

  name = "Leroy"; // assignment / reassignment

  let name2 = "Jenkins"; // initialization

  console.log(name, name2);
  ```

## 🎵 Put it all together!🎵: 15 mins

1. [Expression Expedition]

### Expression Discussion: 10 mins

An expression is a statement that when evaluated returns a value.

`1 + 2` after evaluation equals `3`
`true && false` after evaluation equals `false`

## Formative Quiz: 10 mins

1. [Formative Quiz]

