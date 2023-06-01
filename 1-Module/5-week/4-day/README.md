# `M1W5D3`

## Warmup Problem (20m, Solo)

> Write a function called recRev that takes in an `array` and outputs
> that array reversed.
> You must solve this problem using recursion and without mutating
> the original array.

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
