# W2D3

Make sure to call us into your breakout room during practice time if you are at all confused with what you are working on!

## Warm Up

```js
// You are given a 2-D array of nums. Find the subarray with the highest sum and return that sum. 
// The main block of code is written out for you. Try to refactor it to incorporate a helper function.

function findSum(arr) {

};

function highestSum(arr) {
  let highestSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let sum = 0;

    for (let j = 0; j < subArr.length; j++) {
      let num = subArr[j];

      sum += num;
    };

    if (sum > highestSum) {
      highestSum = sum
    };
  };

  return highestSum;
};

console.log(highestSum([[1,2,3], [3,5], [2,5]]))  // 8
console.log(highestSum([[2,6,7], [1,5,6], [4,5]])) // 15
```

---

## Practice 1 (30m)

- [Two Sum Recall]
- [Reverse Sentence]
- [Initials]

## Discussion 1

- Questions?

---

## Practice 2 (30m)

- [Two Dimensional Product]
- [Popper]
- [Choose Primes]

## Discussion 2

- Questions?

---

## Practice 3 (30m)

- [Longest Word]
- [Abbreviate]
- [Product Array]

## Discussion 3

- Questions?

---

[two sum recall]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/two-sum-recall
[reverse sentence]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/reverse-sentence
[initials]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/initials
[two dimensional product]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/two-dimensional-product
[popper]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/popper
[choose primes]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/choose-primes
[longest word]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/longest-word
[abbreviate]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/abbreviate
[product array]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/product-array
