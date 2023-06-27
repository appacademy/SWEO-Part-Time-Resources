# `M2W3D2`

## Time and Space Complexity

Big O Notation is a mathemetical notation that describes the time and space complexity of a function.

In other words, it describes the performance of an algorithm / function as the amount of data increases.

It is machine independent.

---

## Time Complexity

- **Big-O** is not concerned with exact values, but rather it's used to describe the *shape of the growth curve*. (meaning *how long* this function is going to take to complete. (**Time complexity**))
- We use *complexity analysis* to determine the *number of operations* that are performed relative to the *input size* and describe the shape of the resulting growth curve.

  <img src="https://i.ibb.co/XxHTsn0/growthcurves.png" width="500">

[Source](https://www.bigocheatsheet.com/)

- The growth curve can be described in many different ways, but the 3 we are going to focus on for now are:
  - Constant: O(1)
  - Linear: O(n)
  - Quadratic: O(n^2)

  Other curves include:
  - Exponential: O(2^n)
  - Logarithmic: O(log n)
  - Loglinear: O(n log n)
  - Factorial: O(n!)
  - and many more.

- A key concept in **Big-O** notations is that it is only concerned with *very large values*. Small inputs will return within a few milliseconds even if our code is inefficient.
- As your **input** grows, the growth curve will also grow.
- The steeper the curve the faster the performance will degrade.

---

### Linear Growth (0(n))

```js
function addNums(n) {
  total = 0;

  for (let i = 1 ; i <= n ; i++) {
    total += i;
  }

  return total;
}
```

In the case of the above `addNums` function, the critical operation is the line `total += i`. This operation is performed `n` times, so if we double `n`, it will double the runtime. This is an example of a **Linear** (0(n)) growth curve.

- Generally if you have a for-loop that iterates through 'n' elements, that block of code is **Linear** O(n).

---

### Constant Growth (0(1))

```js
function addFirstAndLast(nums) {

  const firstNum = nums[0];
  const lastNum = nums[nums.length - 1];

  return firstNum + lastNum;
}
```

**Constant** (0(1)) growth is the case where the number of operations is constant regardless of the input size. In the above function, it doesn't matter if the nums array has 2 nums or 7 million, it will always take the same amount of time to complete.

```js
function printLetters() {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0 ; i < letters.length ; i++) {
    console.log(letters[i]);
  }
}
```

For the above function, you might initially think that this function has Linear O(n) growth, but it actually has **Constant** O(1) growth. This is because the letters variable is defined in the function, it's not input, so it wont change and is therefore constant.

---

### Quadratic Growth (0(n^2))

```js
function addManyNums(n) {

  let total = 0;

  for (let i = 0 ; i < n ; i++) {
    total += addNums(i);
  }

  return total;
}
```

This function calls the `addNums` function `n` times. Since addNums is Linear O(n), and this function calls it `n` times, the time complexity is n * n, or  O(n^2). This is known as **Quadratic** growth.

- a good way to immediate identify a function as Quadratic O(n^2) is if you see a nested for-loop. However, you should be sure to look at the range of each loop to be sure.

```js
function printPairSums(n) {

  for (let i = 0 ; i < n ; i++) {

    for (let j = 0 ; j < n ; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    }

  }
}
```

Because each of the loops in the function above are based off of `n`, they are both Linear O(n). This makes this function Quadratic O(n^2).

---

### Nested Loops

```js
function printLettersNTimes(n) {

  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0 ; i < letters.length ; i++) {

    for (let j = 0 ; j < n ; j++) {
      console.log(letters[i]);
    }
  }
}
```

The above function has 2 for loops nested inside of each other. At first glance you might think this is **Quadratic** O(n^2), but it's actually Linear O(n) because only the inner loop is iterating through `n` elements. Letters.length is 26 so the time complexity is O(26n). The number 26 is constant, so it gets dropped and this gets simplified to O(n) (**Linear**).

```js
function printNumbersTwice(n) {

  for (let i = 0 ; i < n ; i++) {
    console.log(i);
  }

  for (let j = 0 ; j < n ; j++) {
    console.log(j);
  }
}
```

This function has 2 adjacent loops. Since they are not nested, each loop is only executed Once. This means that the time complexity is O(2n). (we have to wait on a single loop based on `n` 2 times). Since the 2 is constant, it gets dropped and this gets simplified to O(n) (**Linear**).

```js
function printPairSumsThenPrintNums(n) {

  for (let i = 0 ; i < n ; i++) {

    for (let j = 0 ; j < n ; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    }
  }

  for (let k = 0 ; k < n ; k++) {
    console.log(k);
  }
}
```

This function has a nested loop and a lone loop. All 3 are based on `n`. The nested loop is Quadratic O(n^2), and the lone loop is Linear O(n), so currently we are looking at O(n^2 + n). When simplifying our time complexity, we only care about the *most significant factor*. Since the nested loop is going to impact our runtime the most, we simplify this to O(n^2) (**Quadratic**).

---

## Space Complexity

Closely related to time complexity, the **space complexity** is the amount of memory that is used by the function. Again we are going to focus on the following 3 types of space complexity:

- Constant: O(1)
- Linear: O(n)
- Quadratic: O(n^2)

```js
function addNums(n) {
    let total = 0;

    for (let i = 1 ; i <= n ; i++) {
        total += i;
    }

    return total;
}
```

In order to figure out how much memory this function will use, we need to know how many elements are being stored in memory. We have our input variable `n`, also a variable `total`, and finally a loop variable `i`. It doesn't matter if the values are large or small each integer occupies a constant amount of memory, meaning this function has a **Constant** O(1) space complexity.

```js
function getNumList(n) {
    let nums = [];

    for (let i = 0 ; i < n ; i++) {
        nums.push(i);
    }

    return nums;
}
```

In this function, there are 3 variables as well, an array that contains a total of `n` elements, and the single `n` and `i` integers. Because the array requires `n` slots to store `n` elements, this function requires enough memory to store `n` + 2 elements, O(n + 2). Since the 2 is constant, it gets dropped and this gets simplified to O(n) (**Linear**) space complexity.

```js
function getNumPairsList(n) {
    let pairs = [];

    for (let i = 0 ; i < n ; i++) {
        for (let j = 0 ; j < n ; j++) {
            pairs.push([i, j]);
        }
    }

    return pairs;
}
```

This function also has 3 variables. The array that is holding every possible pair in the range of `n`, and the two `i` and `j` integers. Since the array requires `n` * `n` slots to store `n` * `n` elements, this function requires enough memory to store `n` * `n` + 2 elements, O(n^2 + 2). Since the 2 is constant, it gets dropped and this gets simplified to O(n^2) (**Quadratic**) space complexity.

---

### Space Hacks

Since we can pass an arr to a function as a reference and have the ability to modify that array, we can do that instead of creating a new one to optimize space! Take the following example:

```js
function increaseByOne(nums) {

    const increased = [];

    for (let i = 0 ; i < nums.length ; i++) {
        increased.push(nums[i] + 1);
    }

    return increased;
}
```

This function takes in an array `nums` and returns a new array `increased` that holds `n` elements . This means that the space complexity is O(n) (**Linear**). `nums` still exists in memory unchanged, plus another array with every number from `nums` incremented by one.

```js
function increaseByOneInPlace(nums) {

    for (let i = 0 ; i < nums.length ; i++) {
        nums[i]++;
    }

    return nums;
}
```

Now let's take a look at this function! We are no longer creating a new array in memory, but modifying our `nums` array instead. Since we are not creating any new spots in memory, this function has an O(1) (**Constant**) space complexity.

If space is an issue, this may be the way to go when you are dealing with large data sets, However if you want to keep a clean copy of the original array, you will need to sacrifice space complexity and go with the first option.

- Some questions...
  - Why can't we effectively use 'time' to test the efficiency of our code?
    - answer
  - What is Big-O notation concerned with?
    - Best, average or worst case?
      - answer
    - Specific tests run or general trend of many tests run?
      - answer
    - Tests with similar sizes, or tests with different sizes?
      - answer
    - What are the three complexities we read about?
      - answer
      - answer
      - answer
    - So... what is Big-O?
      - answer
