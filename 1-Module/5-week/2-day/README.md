# M1W5D2 - RECURSION

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
  1. First in - First Last (FILO)

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

### [Recursive Sum]

[Recursive Sum]: rec_sum.js

`Discussion`

- What is a recursive function?
  1. A function that calls itself, until it doesn't
- What are the 'parts' of a recursive function?
  1. Base Case (When should we stop)
  2. Recursive Case (When should we recurse)
  3. Recursive Step (How do I move toward the BC or move out of the RC)

## Project Time
