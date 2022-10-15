# M1-W1-D5

- Function Expressions
- Mutability
- Array Methods
- Nested Loops
- Practice Assessment

---

## Practice Session 1 (25m, SOLO)

1. Intermediate Functions Quiz
2. Reverse String
3. Range
4. Log Between Stepper Recall

---

## Function Expressions

---

### Function Expression Syntax

1. variable assignment (name)
2. `function` keyword
3. parenthesis with the functions parameter(s)
4. code block
5. semi-colon

```js
//declaration syntax
function greet(name) {
  console.log("Hello, " + name);
};

//expression syntax
let greet = function (name) {
  console.log("Hello, " + name);
};
```

---

### First Class Functions

1. Can be stored in a variable.
2. Passed into a function as an argument.
3. Returned from a function.

---

## Practice Session 2 (25m, SOLO)

1. My Includes
2. Sum Array Recall
3. Factors Of

---

## Mutability

1. Mutable types
   - Arrays
   - Objects (we will learn these later)
2. Immutable Types
   - Numbers
   - Strings
   - NaN
   - undefined
   - null

```js
let arr = [1, 2, 3];
arr[1] = 7;
console.log(arr); //[1,7,3]

let str = "abc";
str[1] = "x";
console.log(str); // 'abc';

//reassigning !== mutable
let str = "abc";
str += "d"; // str = str + 'd';
console.log(str); // 'abcd'
```

---

## Practice Session 3 (25m, SOLO)

1. My Index Of
2. Vowel Counter Recall
3. Has Vowel

---

## Array Methods

---

### Array.push (MDN: [Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push))

- Syntax
  - `arr.push(el1, el2)`
- Description
  - Adds one or more elements to the end of an array and returns the new
    length of the array.
  - mutates the array it is called on.
- Arguments
  - The elements(s) to add to the end of the array.
- Return Value
  - The new length property of the array that the method was called on.
  - This is super critical to note, forgetting can lead to a very common
    mistake. Which is usually saving the new length rather than the actual array.

  ```js
  let animals = ["ant", "bear", "dog"];

  // appends "cat" to animals && returns length
  let animalLength = animals.push("cat");

  console.log(animals); // ["ant", "bear", "dog", "cat"]
  console.log(animalLength); // 4
  ```

---

### Array.pop (MDN: [Array.prototype.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop))

- Syntax
  - `arr.pop()`
- Description
  - Removes the last element from an array and returns that element.
  - Mutates the array it is called on.
- Arguments
  - None
- Return Value
  - Returns the removed element from the array.

  ```js
  let dogs = ["Fido", "Rover"];

  let lastDog = dogs.pop();

  console.log(dogs); //['Fido']
  console.log(lastDog); //'Rover'
  ```

---

### Array.unshift (MDN: [Array.prototype.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift))

- Syntax
  - `arr.unshift(ele1, ele2)`
- Description
  - Adds one or more elements to the beginning of an array and returns the new
    length of the array.
  - mutates the array it is called on
- Arguments
  - The element(s) to add to the beginning of the array.
- Return Value
  - The new length property of the array on which the method was called.

  ```js
  let cats = ["Whiskers", "Garfield"];
  let catsLength = cats.unshift("Jasper");

  console.log(cats); //['Jasper', 'Whiskers', 'Garfield']
  console.log(catsLength); //3
  ```

---

### Array.shift (MDN: [Array.prototype.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift))

- Syntax
  - `arr.shift()`
- Description
  - Removes the first element from an array and return the removed element
  - mutates the array it is called on
- Arguments
  - None
- Return Value
  - The removed element from the array.

  ```js
  let cats = ["Paprika", "Whiskers", "Garfield"];
  //removes 'Paprika' from cats and returns 'Paprika'
  let firstCat = cats.shift();

  console.log(firstCat); // 'Paprika'
  console.log(cats); // ['Whiskers', 'Garfield']
  ```

---

## Practice Session 4 (40m, SOLO)

1. Fizz Buzz Array
2. First Vowel
3. Even Numbers
4. Is Prime Recall

---

## Nested Loops

`Nested Loops`

```js
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```

`Pairs In Arrays`

```js
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = 0; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

`Unique Pairs In Arrays`

```js
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

---

## Practice Session 5 (Until Practice Assessment Time 2PST/5EST, SOLO)

1. Last Vowel
2. Pit Pat
3. Remove Last Vowels
4. Pairs Maker
5. Min Value
6. Two Sum
7. Pig Latin Recall
8. Least Common Multiple

---

## Practice Assessment (1hr, SOLO)

We will be treating this as a mock assessment to get you used to how assessments
will work at aA. This won't be a normal practice, we are doing it just this week
to make sure that you all have a good understanding of how assessments will work.

Remember to Share your screen and be unmuted in your breakout room to simulate
what is required during the actual assessment.

You have access to:

- aA open
- MDN
- any code you have written outside of code from previous assessments.

You are not permitted to use:

- Google
- Notes
- William's lecture notes
- anything not in the listed resources

During this time we will only answer questions about technical issues and
questions about clarifying what is expected of you.

---

## Practice Assessment Walkthrough

Walkthrough Recording will be provided.

---

## Office Hours

Walkthrough of as many of the days problems as I can fit into the hour of time,
or any problems you want specific walkthroughs of.

---
