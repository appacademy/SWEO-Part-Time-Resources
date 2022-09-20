# Week 2 Day 2

## Learning Objectives Quiz

```javascript
let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]];
let string = 'hello';
let sentenceString = 'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.';
let array = ['y','e','s'];
```

- What is the value at matrix[1][1]?
    <details>
    <summary>Answer</summary>
    5
    </details>
- What is the value at matrix[0][2]?
    <details>
    <summary>Answer</summary>
    3
    </details>
- What is the value at matrix[2][0]?
    <details>
    <summary>Answer</summary>
    7
    </details>
- What is the value of string.split('')?
    <details>
    <summary>Answer</summary>
    ['h', 'e', 'l', 'l', 'o']
    </details>
- What is the value of array.join('')?
    <details>
    <summary>Answer</summary>
    'yes'
    </details>
- What is the value of sentenceString.split(' ')?
    <details>
    <summary>Answer</summary>
    ['Hello,', 'My', 'name', 'is', 'Inigo', 'Montoya.', 'You', 'killed', 'my', 'father.', 'Prepare', 'to', 'die.']
    <br>
    *Important to note* There is a space in the argument for .split here, so instead of splitting on every character like it would if we called .split(''), it splits on every space. It will split the sentence on whatever character you put in the arguments.
    </details>
- What is the value of array.splice(2, 1, 'p')?
    <details>
    <summary>Answer</summary>
    ['y', 'e', 'p' ]
    <br>
    The first argument is the starting index, the second argument is the number of elements to delete, the third and any following arguments are elements to add at the starting index.
    </details>


### <span style="color:#674ea7;">Array Methods - .splice, .split, .join</span>

- [array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) allows us to **remove** or/and **replace** items inside an array.
  - **syntax** --> .splice(start, amount-to-remove, data-to-add)

```javascript
// array.splice mutates the array that it is called on.
//That is, array.splice will modify the existing array and NOT return a new array.
//syntax --> .splice(start, amount-to-remove, data-to-add)

let gameOfThrones = [
    "got-s0","got-s1", "got-s2", "got-s3", "got-s4",
    "got-s5", "got-s6", "got-s7", "got-s8", "got-sBonus"];
let returnVal = gameOfThrones.splice(8,2,"REAL SEASON FNALE");
console.log("Mutated GoT:", gameOfThrones); // [ 'got-s0', ...,'got-s7', 'REAL SEASON FNALE']
console.log("returnVal-what-removed:", returnVal); // [ 'got-s8', 'got-sBonus' ]
```

---

- use [array.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method to turn a string into an array
  - **string** --> to --> **array**
  - **DOES NOT MUTATE**. Returns new array (strings are immutable).

```javascript
let sentence = "follow the yellow brick road";
console.log("original string", sentence)
let words = sentence.split(" ");
console.log("new array words:", words); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
console.log("original not mutated:", sentence); // 'follow the yellow brick road'
```

---

- use [array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method to turn an array into a string
  - **array** --> to --> **string**
  - **DOES NOT MUTATE**. Returns a new string.

```javascript
let words2 = ["run", "around", "the", "block"];
console.log("original array:", words2)
let sentence2 = words2.join(" ");
console.log("new joined string:", sentence2); // 'run around the block'
console.log("original not mutated:",words2); // [ 'run', 'around', 'the', 'block' ]
```

---

### <span style="color:#674ea7;">Two-Dimensional Arrays</span>

Outer array contains one or more inner arrays (nested arrays).

- Example of accessing data from 2d arrays:

```javascript
//accessing 2d arrays
let twoDimensional = [["a", "b", "c"], [1, 2, 3], [true, false, true]];

console.log("twoDimensional[1]:",twoDimensional[1]); // [1, 2, 3]
console.log("twoDimensional[1][0]:",twoDimensional[1][0]); // 1

let subArr = twoDimensional[1]; //subArr = [1, 2, 3]
console.log("subArr[0]:", subArr[0]); // 1
```

- Iterating over 2D array:

```javascript
//log each individual element of all the sub arrays (inner arrays).

let arr = [
    ["a", "b", "c"],
    [1, 2, 3],
];

console.log(arr.length) // length = 2, bc only 2 sub arrays.

for (let i = 0; i < arr.length; i++) { // Outer loop iterates over the array
    let subArr = arr[i];  // initialize a variable holding the subarray
    console.log("outer paused here:", subArr, "prints all inner:");
    //OUTER PAUSES FOR INNER
    for (let j = 0; j < subArr.length; j++) { //Inner loop iterates over subarray
        let letter = subArr[j]; // Initialize variable holding each letter
        console.log(letter);  // logs inner elements
    }
}

// Breaking it down, we can see that our outer loop
// is going to let us take a look at the individual subarrays,
// and the inner loop is letting us look at
// the elements inside of each subArray.

// As you can see, our outer loop is "paused" in execution
// until our inner loop can complete.
```
