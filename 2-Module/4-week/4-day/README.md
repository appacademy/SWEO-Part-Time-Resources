# M2W4D4 Sets and Caching

## **`Sets`**

A `set` is a collection of **unique**, *unordered* values.

- Contains **no duplicates**.
- **No order**.
- can check if an element is contained in **`O(1)` time**.

`Sets` are usually implemented using `hash tables` to achieve `O(1)` lookup time. They are basically an object with only keys, no values.

> The main reason to use a `set` over an `array` beyond wanting to guarantee that only unique values are stored is that when comparing `set.has()` vs `array.includes()`, `set.has` has an `O(1)` lookup time vs. `array.includes()` that has an `O(n)` lookup time.

### **`Implementation`**

Since a `set` is an ADT we usually use `hash tables` (`hash maps`) to achieve the `O(1)` `.has()` functionality.

You can think of this as an `object` that stores only keys, no values. Under the hood it uses an `array` with a preallocated number of buckets and hashes the keys. It will have a worst-case of `O(n)` for collision handling if the `load factor` exceeds 0.7. if you add a duplicate key to a `hash table` (`hash map`) then **the old key will just be overwritten unless you implement a linked list or something**, but since we want unique values, that's the functionality we are looking for.

## **`Caching`**

Given a slow frequently used calculation, you calculate it once and store the result, then every time it's called, you look up the answer instead of recalculating it. Basically you're trading space for time, which is almost always a good trade.

### `Pure functions`

A Function whos output *depends only on its input* and causes no side effects. (also known as `stateless functions`). **Used for their predictability**. You can cache their results with their inputs as the key, and then have a reference to that later to save time!

- Just create a unique key that is the input
- store the output for that input
- next time you run the function, check to see if the key exists, if not run the calculation and store the key for later
- if it does exist just return that output.

## `Memoization and Tabulation`

Both are forms of *dynamic programming*, which means solving sub-problems only once and using those results to speed up future calculations. The names aren't important nor are the differences between them, As long as you rememeber they are both forms of caching.

## `Tips for todays project`

- look up the `array.fill()` method on MDN.
- look up the `sha256` npm package on npmjs.org
- refer to last week for how to change a base 16 num to a base 10 num
- For this project if we have a hash collision we want to store the data as a linked list.
- remember that the act of adding a node as the `.next` of another node is what adds it to the linked list.

## `Project Time`

-[Hash Table Practice Pt1](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-10---data-structures/hash-table-practice-part-1)

- Discussion pt1

-[Hash Table Practice Pt2](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-10---data-structures/hash-table-practice-part-2)

- Discussion Pt2

-[Hash Table Practice Pt3](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-10---data-structures/hash-table-practice-part-3)

- Discussion Pt3

-[Hash Table Practice Pt4](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-10---data-structures/hash-table-practice-part-4)

- Discussion Pt4
