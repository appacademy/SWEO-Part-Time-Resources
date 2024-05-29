
Saving Matrix graph coordinates in a set as strings rather than as elements in an array is important for several reasons.

### Sets and Arrays in JavaScript
- **Arrays**: Arrays are ordered collections of elements. They allow duplicate values and preserve the order of insertion. Elements in an array are accessed by their index.
```js
let arr = [1, 2, 3]; console.log(arr[0]); // 1
```


- **Sets**: Sets are collections of unique values. They do not allow duplicate values and do not preserve the order of insertion. Sets are optimized for checking the presence of an element.
```js
let set = new Set([1, 2, 3]);
console.log(set.has(1)); // true
```


### Comparing Arrays vs. Strings in Sets

1. **Uniqueness and Comparisons**:
- **Arrays**: Arrays are reference types, meaning each array is a different object in memory, even if they have the same contents. This makes it difficult to ensure uniqueness based on the contents of the array.
```js
let arr1 = [0, 1];
let arr2 = [0, 1];
let set = new Set();
set.add(arr1);
set.add(arr2);
console.log(set.size); // 2, because arr1 and arr2 are different objects

```

- **Strings**: Strings are primitive types and are compared by value. If two strings have the same contents, they are considered equal. This makes it easy to ensure uniqueness based on the contents of the string.
```js
let set = new Set();
set.add("0,1");
set.add("0,1");
console.log(set.size); // 1, because the two strings are considered equal

```

2. **Efficiency in Lookups**:
**Sets with Arrays**: When using arrays as elements in a set, checking for the presence of a specific coordinate pair requires deep comparison, which is not natively supported by JavaScript for complex types like arrays.
```js
let set = new Set();
set.add([0, 1]);
console.log(set.has([0, 1])); // false
```

**Sets with Strings**: Sets are optimized for checking the presence of primitive values like strings. This makes it efficient to check if a specific coordinate pair exists in the set.
```js
let set = new Set();
set.add("0,1");
console.log(set.has("0,1")); // true, because it checks by value
```


3. **Simplicity in Implementation**:
    - **Arrays**: Ensuring uniqueness with arrays requires additional logic to compare the contents of arrays, making the implementation more complex.
        
    - **Strings**: Converting coordinates to strings simplifies the implementation since you can leverage the native behavior of sets to handle uniqueness and presence checks.
      
      
### Conclusion
Using strings to represent matrix graph coordinates in a set offers several advantages:

1. **Ensures Uniqueness**: Strings ensure that each coordinate pair is unique based on its contents.
2. **Efficient Lookups**: Sets are optimized for primitive values like strings, making lookups efficient.
3. **Simpler Implementation**: Strings simplify the implementation by leveraging native set behavior for checking presence and ensuring uniqueness.

Matrix Traversal:
[[Traversing Adjacency Matrix Graphs]]