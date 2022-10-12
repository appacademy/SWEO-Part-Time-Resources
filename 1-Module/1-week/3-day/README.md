# M1-W1-D3

- Announcements
- Strings
- Functions

---

## Announcements

---

### Zoom room ettiquette

Make sure you are going into a room by yourself and not jumping into other
peoples rooms. I don't have anything against grouping up, you are free to do so
on Solo practice days. However, always make sure to reach out to the person
before joining them to ask and make sure that they are onboard with you joining
them. Just be respectful!

---

### Zoom Update

If you are unable to join breakout rooms without being moved directly by a host,
make sure that you have updated zoom to its latest version.

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

### Functions Practices pt3 (20m, SOLO)

1. Average of Two
2. Hello
3. Divide by Three

---
