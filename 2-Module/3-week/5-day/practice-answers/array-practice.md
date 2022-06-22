# Array practice

Identify the time complexity of each of these functions with a 1 sentence justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Adding to the end of an array requires no shifting and happens in place.

[push on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Removing from the end of an array requires no shifting and happens in place.

[pop on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Removing from the front of the array requires all other values to shift to the left by 1. This happens in place.

[shift on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: depends if n amount was unshift.
Justification: Adding to the front of the array requires all other values to shift to the right by 1 to make space for the first value. This happens in place.

[unshift on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Splice will add or remove elements to the middle of the array in-place. This requires shifting all elements to the right of the new location.

[splice on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: This will create a new copy of the array with some elements sliced out. The remaining _n_ values will need to be copied to the new location.

[slice on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: This will search visit each item in the array until it finds the value. No extra space is needed.

[indexOf on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Map creates a new array (O(n) space) with some function mapped to each element. This is assuming the time complexity of the map callback has a time complexity of O(1).

[map on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Filter creates a new array (O(n) space) with a filter applied to each element. This is assuming the time complexity of the filter callback has a time complexity of O(1).

[filtetr on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Reduce applies a reducer function to each element in the array. This is assuming the time complexity of the accumulator has a time complexity of O(1).

[reduce on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Reverse will move all n elements in-place.

[reverse on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: The spread operator will copy all n elements in the original array to a new array of length n.

[spread on MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax]
