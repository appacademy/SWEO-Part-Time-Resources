# `M1W1D5`

0. Lots of practice!
1. Mutability
2. Array Methods

**_Quick Notes_**:

1.  **Best way to learn:**
    1.  Use Polya's to write down your thought process
    2.  Code it out
    3.  Run code
    4.  See error
    5.  See if you can debug the error
        1.  **IMPORTANT: DO NOT stare down your code. Mandatory to ask for help after 10 minutes of being stuck**
    6.  Ask a question in live-questions channel

2. **LESS passive walkthroughs, MORE active practice, and Homework:** 
   1. We won't go over every problem during discussion
   today to allow more time to practice. 
   2. This makes it even **more important** for you to **ask for help** if you don't
   understand a problem. We are more than happy to pop into your room and help!

---

## Practice Set 1 - 1hr 30min

- Reverse String
- Range
- Log Between Stepper Recall
- My Includes
- Sum Array Recall
- Factors Of
- My Index Of
- Vowel Counter Recall
- Has Vowel

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

## Array Methods - 30m

### Array.push (MDN: [Array.prototype.push])

- Syntax
  - `arr.push(el1, el2) //n amount of elements`
- Description
  - Adds one or more elements to the end of an array and returns the new
    length of the array.
  - mutates the array it is called on. (**_important_**)
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

### Array.pop (MDN: [Array.prototype.pop])

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

### Array.unshift (MDN: [Array.prototype.unshift])

- Syntax
  - `arr.unshift(ele1, ele2) //n amount of elements`
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

### Array.shift (MDN: [Array.prototype.shift])

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

## Practice Set 3 - 40m

- FizzBuzz Array
- First Vowel
- Even Numbers
- Is Prime Recall

---

## Lunch! 30m

Be back at:

1. East: 3:30pm
2. West: 12:30pm
3. Central: 2:30pm

The second attendance check on Saturdays is after the lunch break, don't get a strike!

---

## Nested Loops

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

![Pairs In Arrays]

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

![Unique Pairs In Arrays]

---

## Practice Set 2 - 40m

- FizzBuzz Array
- First Vowel
- Even Numbers
- Is Prime Recall
- Last Vowel
- Pit Pat
- Remove Last Vowel
- Min Value
- Two Sum

[unique pairs in arrays]: ./images/unique_pairs_in_arrays.png
[pairs in arrays]: ./images/pairs_in_arrays.png
