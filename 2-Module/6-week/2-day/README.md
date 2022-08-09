# `M2W6D2`

## `Finish the sorts`

[Merge Sort Practice](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-12---sorts-and-graphs/merge-sort-practice)

## `.sort()`

The sorting algorithm used by this function depends on which browser you use! Each one runs their own version with their own sort, however it will be an in-place sort (no new spaces in memory needed because it sorts within the input array) with O(1) space complexity and it will be performed in O(n log n) time. (could be worse right?).

### Sorting is weird

> hint: the next paragraph is important. Remember this!

JavaScript's sort method sorts numbers in *alphabetical*, **NOT** numerical order. It stores everything, even numbers, as strings. To rectify this, just use the following function and pass it to .sort as an argument! (like a callback)

```js
function compareNums(a,b){
  return a - b;
}

nums.sort(compareNums);
// or
nums.sort((a, b) => {
  return a - b;
});
```

If a is larger than b, it will return a positive value and b will be sorted ahead of a. Otherwise it will return a negative number and the values wont be swapped.

- Basically with .sort, you can control the rules with how things are sorted with your callback. Create conditionals and if you want the nums to be swapped, the conditional should return a positive value.

Take this example, it will order the nums from lowest to greatest with the even numbers first and the odd numbers last.

> the callback will be called repeatedly until no swaps happen.

```js
nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function oddEvenCompare(a, b) {
  // this first swaps all the evens and odds to order the array 
  // with evens first followed by the odds, then sorts them from 
  // smallest to greatest!
  if (a % 2 === 1 && b % 2 === 0) {
    return 1; // if a positive 1 is returned, a will be swapped with b
  }
  if (a % 2 === 0 && b % 2 === 1) {
    return -1;
  }
  return a - b; // if a is greater than b, 1 will be returned, so they will swap.
}

console.log(nums.sort(oddEvenCompare)); // [2, 4, 6, 8, 1, 3, 5, 7, 9]
```

## `Project Time`

With the sorts, lecture is less helpful than actual practice. Let's hop right in!

[Custom Sorting Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-12---sorts-and-graphs/custom-sorting-project)

- If you finish this project early, please work on the leetCode problem provided ([Pancake Sorting](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-12---sorts-and-graphs/leetcode---pancake-sorting)) then get a headstart on homework for Wednesday, because there is a lot!
