# M2W5D1

## `Assessment Time!` (1hr30m)

### Assessment Break Down

- Length: `1hr 30m`
- **`MCQ - 5 points`**
  - Queues
  - Space complexity
  - Hash Tables
  - Time complexity
- **`Coding Challenge - 11 points`**
  - Sets
  - Linked Lists
  - Time Optimization
- Passing score **`13/16`**

- **Remember not to spend too much time on one thing, if you get stuck for more than 15m on something move on and finish everything else, then come back to it.**

---

## Intro to Week 11

### `Logarithms`

A `logarithm`, or `log` for short, is the inverse of an exponent. While an exponent is a number multiplied by itself that many times..

```js
2^3 === 2 * 2 * 2
```
the log of a number is how many times it must be divided by `n` to get to 1.

```js
// Find the log base-2 of 32

32 / 2 = 16;
16 / 2 = 8;
8 / 2 = 4;
4 / 2 = 2;
2 / 2 = 1;

log2(32) === 5
// it took 5 steps to get to 1 so the log base-2 of 32 is 5.

// Find the log base-10 of 1000

1000 / 10 = 100;
100 / 10 = 10;
10 / 10 = 1;

log10(1000) === 3
// it took 3 steps to get to 1 so the log base-10 of 1000 is 3.
```

### `Binary Logarithms`

A Binary logarithm is a base-2 logarithm.

```js
// Binary Exponent Table
2^0 === 1
2^1 === 2
2^2 === 4
2^3 === 8
2^4 === 16
2^5 === 32
2^6 === 64
2^7 === 128
2^8 === 256
2^9 === 512
2^10 === 1024

// Binary Log Table
log2(1) === 0
log2(2) === 1
log2(4) === 2
log2(8) === 3
log2(16) === 4
log2(32) === 5
log2(64) === 6
log2(128) === 7
log2(256) === 8
log2(512) === 9
log2(1024) === 10

// Not required, but generally recommended to memorize these values to help understand logs and code performance.
```

As you can see in the expressions above, the binary exponents are the reverse of our binary logs! So `log2(1024) === 10` corresponds with `2^10 === 1024`. Flash cards may be helpful to memorize these values, but that's not required.

In order to calculate a binary logarithm in JavaScript, we can use the `Math.log2` function.

```js
Math.log2(1024) === 10
Math.log2(512) === 9
Math.log2(256) === 8
// etc.
```

---

### `Logarithmic Time Complexity`

We have already learned how to identify and implement algorithms with Constant O(1), Linear O(n), and Quadratic O(n^2) time complexities. Now we will learn the extremely efficient logarithmic O(log n) time complexity!

Log curves grow so slowly that they are virtually constant. They are between the constant and linear curves on our graph.

<img src="https://i.ibb.co/XxHTsn0/growthcurves.png" width="500">

### `Binary Search`

In order to perform a binary search in logartihmic time, the following 2 conditions must be true.

- Data is sorted
- Data can be accessed by index in constant time

Say we have an array consisting of numbers from 1 - 100. We want to find the number 32. Using a binary search, we would start at the middle index (50). We know that `32 < 50`, so we will take the first half of numbers and find the middle index again (25). `32 > 25` so we would take the second half and repeat the process until we find the number.

```js
arr = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
       53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
       82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100]
target = 32

// First define the rage of possible locations.

low = 0 // lowest possible index
high = arr.length - 1 // highest possible index

// Next find the mid-point of the range.

mid = Math.floor((low + high) / 2) // 15 in this case

// Next check the value of the array at the mid-point. If the number in that index is less than our target, then that means our target must be in the upper half of the array, so we reassign our low to be the mid-point + 1. If the number is greater than our target, we reassign our high to be the mid-point - 1.

  if (arr[mid] === target) {
      // We found the target!
      return arr[mid];
  } else if (arr[mid] < target) {
      // The target is in the upper half of the array.
      low = mid + 1
  } else {
      // The target is in the lower half of the array.
      high = mid - 1
  }

  // Repeat the process until we find the target or until the low and high indices cross. (return -1 if not found)
```

Here is some example pseudo-code for the binary search algorithm.

```js
function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

    // Find the midpoint between high and low indices

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index

    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1

    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

}
```

### `Identifying O(log n) Time Complexity`

Looking at our `binary search`, if the search of an array with the length of 32 took 5 comparisons, this is equal to `log2(32)`. Since the range of possibility is divided by 2 on each comparison, the time complexity is described as `O(log n)`.

- This is vastly superior to the linear time complexity of `O(n)`! A search through 1 billion elements would take 30 comparisons instead of 1 billion using a `logarithmic` approach.
- Also Binary search only uses 3 slots in memory to store the low, high and mid points, so it's space complexity is `O(1)`!

## Project Time

- [Binary Search Practice](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-11---binary-search-and-trees/binary-search-practice) (30m)

- Binary Search Walkthru(until finished or EOD)

If we finish early, get a headstart on homework! 😊
