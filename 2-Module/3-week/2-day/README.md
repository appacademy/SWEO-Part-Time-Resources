# M2-W3-D2

- Timing Code: how to do it and why you probably shoudn't
- Graphing code efficiency with sheets
- Big-O Notation: complexity analysis
  - Time Complexity
  - Space Complexity

---

## Timing Code

```js
console.time('a');

const n = 1_000_000;

for(let i = 0; i < n; i++){
  //do something
}

console.timeEnd('a') // you need to use the label to identify the timer
// console.timeEnd('b')
```

```js
const start = Date.now() //ms since 1/1/1970 -> the unix epoch

const n = 1_000_000;

for(let i = 0; i < n; i++){
  //do something
}

const end = Date.now();

console.log(end - start);
```

---

## Graphing Code [google-sheet-link](https://docs.google.com/spreadsheets/d/1mwN12m9Ym_ph9Gg0ncVrnetAlvPO2_gB2ZqdOX6Hj7g/edit?usp=sharing)

```js
//test 1

let num = 100_000_000;

const constant = (n) => {
  n = n + 5;
  n = n - 5;
  n = n * 5;
  n = n / 5;
}

for(let i = 0; i < 10; i++){

  let start = Date.now();
  constant(num);
  let end = Date.now();

  num += 100_000_000;
  console.log(end - start);
}


```

```js
//test 2

let num = 100_000_000;

const linear = (n) => {
  let total = 0

  for(let i = 0; i < n; i++){
    total += i;
  }

  return total;
}

for(let i = 0; i < 10; i++){

  let start = Date.now();
  linear(num);
  let end = Date.now();

  num += 100_000_000;
  console.log(end - start);
}

```

```js
//test 3

let num = 10_000;

const quadratic = (n) => {
  let total = 0;

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      total += j;
    }
  }

  return total;
}

for(let i = 0; i < 10; i++){

  let start = Date.now();
  quadratic(num);
  let end = Date.now();

  num += 10_000;
  console.log(end - start);
}

```

---

## Big-O Notation

- Notation used to figure out the theoretical worst case
- Ignore coeficients (what we care about is the significant factor, not the
  smaller factors)
  - linear complexity ignores constant factors
  - polynomial complexity ignores linear factors
- You only need to pay attention to three factors
  - O(1): constant
  - O(n): linear
  - O(n**2): polynomial (quadratic specifically in this case)


### Loops

Loops can be tricky to figure out their complexity when you are first learning
Big-O, but there are really only a few possibilities in loops for you to
consider.

```js
//constant loops O(1)

for(let i = 0; i < 10; i++){
  //do something
}
```

```js
//linear loops O(n)

let n = 10;

for(let i = 0; i < n; i++){
  //do something
}
```

```js
//nested loops O(n**2)
let n = 10;

for(let i = 0; i < n; i++){
  for(let j = 0; j <  n; j++){
    //do something
  }
}
```

```js
//adjacent loops O(whatever is the worst case)

// ------------------ example 1 O(n) ------------------------------

let n = 10;

for(let i = 0; i < n; i++){
  //do something
}

for(let i = 0; i < n; i++){
  //do something
}


// ------------------ example 2 O(n) ------------------------------

for(let i = 0; i < 10; i++){
  //do something
}

for(let i = 0; i < n; i++){
  //do something
}

// ------------------ example 3 O(n**2) ------------------------------

for(let i = 0; i < 10; i++){
  //do something
}

for(let i = 0; i < n; i++){
  for(let j = 0; j <  n; j++){
    //do something
  }
}

```

---

## Timing Benchmark Practice pt1 (Paired, 20m)

---

## Timing Benchmark Practice pt1 Walkthrough

---

## Timing Benchmark Practice pt2 (Paired, 20m)

---

## Timing Benchmark Practice pt2 Walkthrough

---

## Timing Benchmark Practice pt3 (Paired, 20m)

---

## Timing Benchmark Practice pt3 Walkthrough

---
