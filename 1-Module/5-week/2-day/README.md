# M1W5D2 - RECURSION

## Debugger

Step in: If there is a function call, it goes inside the function and you can see how the function is executing line by line till it returns and you go back to the next line right after the function call.

Step over: If there is a function call, it just executes it like a black box and returns the result, but you cannot see how the function was executed.

Step out: If you have Stepped in a function and now you want to skip seeing how the rest of the function is going to execute, you Step out and the function returns. Then, you go back to the next line, that is the line right after the function call.

## Call Stack

`Discussion`

- Is JS single-threaded or multi-threaded? What does this mean?
  1. Single Threaded - Can only do one thing at a time
- What is a 'stack'?
  1. First in - Last out (FILO)

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
