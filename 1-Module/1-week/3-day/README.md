# M1-W1-D3

- Strings
- Functions

## Strings

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


## Functions

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

## Strings/Into to Functions/Practice Problems (rest of day)
