# Array Methods Time Complexity

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

## Indexing

What is the time complexity of arr[5]?

Answer: Constant O(1) - Because the index of an array is constant, the time complexity is constant. The index is just the address of the element in the array, so we don't have to loop through the array to find that element, we just go to that address immediately.

## .indexOf()

What is the time complexity of arr.indexOf(7)?

Answer: Linear O(n) - Because we have to loop through the array to find the element, the time complexity is linear.

## Adding and Removing Elements

What is the time complexity of arr.push(11)?

Answer: Constant O(1) - Because we just add an element to the end of the array and this does not affect the indeces of any other elements the time complexity is constant. However, if we have not pre-allocated memory for the array then the worst case time complexity is Linear O(n) due to the fact that it will have to be given a new place in memory to allow for the new element.

What is the time complexity of arr.unshift(1)?

Answer: Linear O(n) - Because we have to increment the index of every other element in the array by 1 when we add something to the beginning of the array, the time complexity is linear.

What is the time complexity of arr.pop()?

Answer: Constant O(1) - Just like with push, we are just removing the last element from the array, which does not affect any of the other indeces.

What is the time complexity of arr.shift()?

Answer: Linear O(n) - Same as .unshift(), when we remove the first element, we have to decrement the index of every other element in the array by 1.

## Advanced Array Methods

What is the time complexity of all of the following methods?

Array,filter(), Array.map(), Array.find(), Array.reduce(), Array.forEach()

Answer: Linear O(n) because each of these methods are iterative. They are going to go through the entire array.

What is the time complexity of .splice()?

Answer: Linear O(n) because when we remove certain items or add others we will have to update the indices of other items in the array.
