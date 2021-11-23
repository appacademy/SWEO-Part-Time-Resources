# M2W4D5

## Sets

- Sets are a collection of unique members
  - Can't have multiples which is cool
  - Constant lookup time, also cool

- Methods/Properties
  - new Set(`/* something to create set from */`) - creates a set
  - Set.add() - adds something to a set
  - Set.delete() - deletes something from a set
  - Set.size - gives you the 'length' of a set
  - Set.has() - let's you know if it's in the set
  - Set.clear() - removes everything from the set

```js
const isUnique = (arr) => {
  let set = new Set(arr);
  return set.size === arr.length;
};

console.log(isUnique([1, 2, 3]));
console.log(isUnique([1, 2, 3, 1]));
```
