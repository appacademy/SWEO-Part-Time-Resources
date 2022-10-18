# M1-W2-D2

---

## Lecture

---

### Two-Dimensional Arrays

```js
let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

//indexing
console.log(twoDimensional[0]) // -> ['a', 'b', 'c']

console.log(twoDimensional[0][0]) // -> 'a'

//iteration
for(let i = 0; i < twoDimensional.length; i++){
  let subArr = twoDimensional[i];
  console.log(subArr);
  for(let j = 0; j < subArr.length; j++){
    let ele = subArr[j];
    console.log(ele);
  }
}
```

---

### Useful Methods

```js
/*
Splice

1. Mutates input array
2. changes the contents by removing or replacing elements in place

array.splice(start, deleteCount, item1, item2, itemN)

start - index at which to start changing the array
deleteCount - number of items to remove from the start index
item1, ...itemN - elements to add to the input array
*/
let spliceArr = ['James', 'William', 'Jeffrey', 'Blake', 'Kristen'];

spliceArr.splice(1, 1);

console.log(spliceArr);

/*
Split

1. Does not mutate input string
2. Splits a string into a new array

string.split(separator, limit)

separator - The pattern describing where each split should occur
limit - an number specifying a limit on the number of elements in the array
*/
let splitStr = 'this is an input string';

let strArr = splitStr.split(' ');

console.log(strArr);

/*
Join

1. Does not mutate input array
2. Joins an array into a new string

array.join(separator)

separator - A substring to insert into the return string in-between each element
*/
let stringsArr = [ 'this', 'is', 'an', 'input', 'string' ];

let joinedArr = stringsArr.join(' ');

console.log(joinedArr);
```

---

## Practice Session 1 (30m, SOLO)

---

## Discussion 1

Rotate Right Walkthrough

---

## Practice Session 2 (30m, SOLO)

---

## Discussion 2

Tripler Walkthrough

---

## Practice Session 3 (30m, SOLO)

---

## Discussion 3

Remove E Words Walkthrough

---
