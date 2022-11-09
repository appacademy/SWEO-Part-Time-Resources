# M1-W5-D3

---

## Warmup Problem (15m, SOLO)

```js
/*
Write a function called recRev that:
  1. takes in an array and
  2. outputs that array reversed.
You must solve this problem:
  1. using recursion and
  2. without mutating the original array.
*/
```

---

## Default Params Lecture

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


/*
factorial(n=5, [1]) =
  factorial(n=4, [1]) =
    factorial(n=3, [1]) =
      factorial(n=2, [1]) =
        factorial(n=1, [1]) = [1,(n * 1)]
      factorial(n=2, [1,1]) = [1,1,(n * 1)]
    factorial(n=3, [1,1,2]) = [1,1,2,(n * 2)]
  factorial(n=4, [1,1,2,6]) = [1,1,2,6,(n * 6)]
factorial(n=5, [1,1,2,6,24]) = [1,1,2,6,24,(n * 24)]

-> [1,1,2,6,24,120]

*/

function allFactorials(n, factorials = [1]) {

    if (n > factorials.length) {
        factorials = allFactorials(n - 1, factorials)
    }

    factorials.push(n * factorials[n - 1])

    return factorials;
}

allFactorials(5);
// [ 1, 1, 2, 6, 24, 120 ]
```

---

## Practice 1 (30m, Paired)

---

## Walkthrough 1

---

## Practice 2 (30m, Paired)

---

## Walkthrough 2

---
