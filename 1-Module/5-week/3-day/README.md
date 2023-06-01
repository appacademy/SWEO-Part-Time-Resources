# `M1W5D3`

## String Interpolation

- Process of embedding an expression into part of a string
- Create powerful and dynamic strings
- Performed by using template literals
  - Placeholder can be any expression (variables, functions, arithmetic, etc)

```js

const hello = (name) => {
  return `Hello, ${name}`
};

console.log(hello("Alan"));

```

## Debugger Setup

```json
"launch": {
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch",
      "console": "integratedTerminal",
      "program": "${file}"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Mocha Tests",
      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
        "-u",
        "bdd",
        "--timeout",
        "999999",
        "--colors",
        "${workspaceFolder}/test"
      ],
      "internalConsoleOptions": "openOnSessionStart",
      "skipFiles": [
        "<node_internals>/**"
      ]
    }
  ]
}
```

## Call Stack

`Discussion`

- Is JS single-threaded or multi-threaded? What does this mean?
  1. Single Threaded - Can only do one thing at a time
- What is a 'stack'?
  1. First in - Last Out (FILO)

```js
function foo() {
  return 2 + bar();
}

function bar() {
  return 6 + baz();
}

function baz() {
  return 3;
}

console.log(foo());
```

## Recursion

>Write a function called rec_sum that intakes a number, and adds up all
>numbers from 1 to the number and returns the sum. Must be recursive.
>We're expecting all nums to be >= 1

`Discussion`

- What is a recursive function?
  1. A function that calls itself, until it doesn't
- What are the 'parts' of a recursive function?
  1. Base Case (When should we stop)
  2. Recursive Case (When should we recurse)
  3. Recursive Step (How do I move toward the BC or move out of the RC)

## Project Time
