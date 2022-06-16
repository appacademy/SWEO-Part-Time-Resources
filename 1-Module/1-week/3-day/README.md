# W1D3

## Notes
- aa_update
  - inside the cohort folder (ls, then cd into `appacademy-2022-Jun-W`)
  - run: `aa_update`
- Live Questions Channel
  - Remember to ask a question after attempting the problem for more than 15 minute. It's mandatory!!
  - For technical problems (setup issues, etc.) ask us ASAP!
  - Format:
    - Question in room *

## Here we go: 15 mins

  1. [String Operators]
  2. [String Exercise]

### String Discussion: 20 mins

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

## Intro to Functions: 15 mins

  1. [Intro to Functions Quiz]

### Function Discussion: 20 mins

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

## Solo Practice 1: 20 mins

  1. [Goodbye]
  2. [Muscle Memory]
  3. [Plus Five]
  4. [Call This Function]

## [Polya's Problem Solving Framework]: 10 mins

- How to solve any problem
  1. Understand the problem
  2. Make a plan
  3. Carry out the plan
  4. Look back and improve your solution

## Solo Practice 2: 30 mins

  1. [Average of Two]
  2. [Hello]
  3. [Divide by Three]

## Formative Quiz: 10 mins

  1. [Formative Quiz]
