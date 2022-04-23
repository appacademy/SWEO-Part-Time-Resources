# W1D5

0. Lots of practice!
1. Function Expression
2. Mutability
3. Array Methods
4. Nested Loops
5. Practice Assessment

**_Quick Notes_**:
1. The assessment: 
   1. **Hint**: it will be very similar to your practice assessment (study conditional statements ;))
   2. **Thursday and Today** is heavy on the content, but don't worry, most will not be on the first assessment (Doesn't mean we can slack off! Snowball effect).
      1. It might be a lot, but don't worry, we want that 'desired level of difficulty'. 
      2. Active learning is definitely not easy. Gotta keep ya on ya toes! If it's too easy, then we're not learning!
      3. Can't have an obstacle in life and go back to what is easy. Don't give up, keep on growing!



2.  **Best way to learn:**
    1.  Code it 
        1.  - TRY ANYTHING, even if you don't know the syntax.
    2.  Run code
    3.  See error
    4.  See if you can debug the error (5 minutes)
        1.  **IMPORTANT: DO NOT stare down your code. Mandatory to ask for help after 5 minutes of being stuck**
    5.  Raise a hand, ask for live & guided help.

3. New question format + order of resources when stuck on a problem: 
   1.  **Your current knowledge**: Think about the tools you have and learned, for example:
       1. Conditionals - execution of code block if condition is met
       2. Arrays - container to hold a list of different data
       3. **IMPORTANT**: if stuck for 5minutes, go to step #2, asking a question. We will teach you how to look for resources. How to not be stuck.
       4. **Avoid the biggest trap**: Staring down your code.
   2. **Asking live question channel:** `I need help in room #`
      1. Instructors will provide hints, direct students to resources, go over some concepts, etc.
         1. Because students are first learning, they need to be directed and shown **HOW to** access resources and not be stuck.
   3. Quiz!

4. **LESS passive walkthroughs, MORE active practice, and Homework:** 
   1. We won't go over every problem during discussion
   today to allow more time to practice. 
   1. This makes it even **more important** for you to **ask for help** if you don't
   understand a problem. We are more than happy to pop into your room and help!
   1. At the end of the day, it's still a **reverse classroom** style course. So doing **HOMEWORK** is soooo important.
      1. End of day, we'll talk more about how to approach and tackle the best curriculum on the planet.




---

## Practice Set 1 - 25m

New Zoom format for when question is asked:
   1.  This allows every student to have an equitable experience and an equal chance to be heard.  
```javascript=
if(hand_raised_reaction === true){
    return 'student unmutes and provide their answer!'
}
else{
    return 'feel free to put answer on the chat';
}
```

- [Intermediate Functions Quiz]
- [Reverse String]
- [Range]
- [Log Between Stepper Recall]

---

## Function Expression - 20m

### `First Class Functions`

1. Can be stored in a variable.
2. Passed into a function as an argument.
3. Returned from a function (will use this next week).

```js
let name = "Alvin";
let age = 1000;
let getAvg = function (num1, num2) {
  return (num1 + num2) / 2;
};

console.log(name, age, getAvg(4, 2)); // "Alvin", 1000, 3

const arr = [getAvg, name, age];

console.log(arr[0](6, 4)); // 5
```

### `Function Expression Syntax`

1. variable assignment (name)
2. `function` keyword
3. parenthesis with the functions parameter(s)
4. code block
5. semi-colon

```js
//declaration syntax
function greet(name) {
  console.log("Hello, " + name);
}

//expression syntax
let greet = function (name) {
  console.log("Hello, " + name);
};
```

---

## Practice Set 2 - 25m

- [My Includes]
- [Sum Array Recall]
- [Factors Of]

---

## Mutability - 10m

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

## Practice Set 3 - 25m

- [My Index Of]
- [Vowel Counter Recall]
- [Has Vowel]

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

## Practice Set 4 - 40m

- [FizzBuzz Array]
- [First Vowel]
- [Even Numbers]
- [Is Prime Recall]

---

## Lunch! 30m

Be back at:

1. East: 3:30
2. West: 12:30

The second attendance check on Saturdays is after the lunch break, don't get a strike!

---

## Practice Assessment - 1hr

We will be treating this as a mock assessment to get you used to how assessments
will work at aA.

You have access to:

- aA open
- MDN
- any code you have written outside of code from previous assessments.
- US! (but to elaborate and explain question)
- REPL (to run code)
- VSCode

You are not permitted to use:

- Google
- Notes
- Wes's lecture notes
- anything not in the listed resources

During this time we will only answer questions about technical issues and
questions about clarifying what is expected of you.

---

## Practice Assessment Walkthrough - 45m
Mandatory


## STUDY TIME: Things to work on...
- Practice Assessment!!! Repeat
- Recommend Problems to do!!
  - []
  - []
- Objectives to Know for Assessment
  - How to access and read data from an array
  - ...
- syntax

## Extra Problems

- [Min Value]
- [Two Sum]
- [Pig Latin Recall]
- [Least Common Multiple]

---

## Nested Loops - 30m (Optional for today, will cover more next week)
Refer to homework! For this section!

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

## Practice Set 5 - 40m

- [Last Vowel]
- [Pit Pat]
- [Remove Last Vowels]
- [Pairs Maker]

---

[unique pairs in arrays]: ./images/unique_pairs_in_arrays.png
[pairs in arrays]: ./images/pairs_in_arrays.png

