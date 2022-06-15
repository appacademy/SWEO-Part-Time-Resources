# W5D3

## Warmup Problem (20m, Solo)

> Write a function called recRev that takes in an `array` and outputs
> that array reversed.
> You must solve this problem using recursion and without mutating
> the original array.

```js

// sample sets
// recRev([9,0,1,2]) // [2,1,0,9]
// recRev([4,3,2,1]) // [1,2,3,4]
// recRev([0]) // [0]
// recRev([]) // []

```
---

## Recursion project pt 2 (1hr, Paired)

## Discussion

---

## Default Parameters

```js
const range = (start, end) => {
  if (start === end) return [];
  return [start, ...range(start + 1, end)];
};

const range = (start, end, arr = []) => {
  if (start === end) return arr;
  arr.push(start);
  return range(start + 1, end, arr);
};

const range = (start, end) => {
  let arr = [];
  function inner() {
    if (start === end) return arr;
    arr.push(start);
    start += 1;
    return inner();
  }
  return inner();
};

console.log(range(4, 12));
```

---

## Recursion project pt 2 continued

---
