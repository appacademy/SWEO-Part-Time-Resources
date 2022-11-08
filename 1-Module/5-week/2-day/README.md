# M1-W5-D2

---

## The Call Stack

- JavaScript is single threaded, meaning that it can only do one thing at a time.
- The call stack is the structure that JavaScript uses to determine what order a
task evaluates.
- A stack is a data structure that follows the rule FILO (First In - Last Out)

```js
function foo() {
  debugger
  return 2 + bar();
}

function bar() {
  debugger
  return 6 + baz();
}

function baz() {
  debugger
  return 3;
}

console.log(foo());
```

---

## Recursion

>Write a function called rec_sum that intakes a number, and adds up all
>numbers from 1 to the number and returns the sum. Must be recursive.
>We're expecting all nums to be >= 1

- What is a recursive function?
  1. A function that calls itself, until it doesn't
- What are the 'parts' of a recursive function?
  1. Base Case (When should we stop)
  2. Recursive Case (When should we recurse)
  3. Recursive Step (How do I move toward the BC or move out of the RC)

---

## Practice 1 (30m)

---

## Walkthrough 1

problems 1-2

---

## Practice 2 (30m)

---

## Walkthrough 2

problems 1-2

---
