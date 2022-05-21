# W1D5

0. Lots of practice!
1. Function Expression
2. Mutability
3. Array Methods
4. Nested Loops
5. Practice Assessment

**_Quick Notes_**:

1. The assessment:

    - **Hint**: it will be very similar to your practice assessment (study conditional statements ;))
    - **Thursday and Today** is heavy on the content, but don't worry, most will not be on the first assessment (Doesn't mean we can slack off! Snowball effect).
      - It might be a lot, but don't worry, we want that 'desired level of difficulty'.
      - Active learning is definitely not easy. Gotta keep ya on your toes! If it's too easy, then we're not learning!
      - Can't have an obstacle in life and go back to what is easy. Don't give up, keep on growing!

2. **Best way to learn:**

    - Code it
      - TRY ANYTHING, even if you don't know the syntax.
    - Run code
    - See error
    - See if you can debug the error (5 minutes)
      - **IMPORTANT: DO NOT stare down your code. Mandatory to ask for help after 5 minutes of being stuck**
    - Raise a hand, ask for live & guided help.

3. New question format + order of resources when stuck on a problem:

    - **Your current knowledge**: Think about the tools you have and learned, for example:
      1. Conditionals - execution of code block if condition is met
      2. Arrays - container to hold a list of different data
    - **MDN**
    - **Google**
    - **Ask a question**
      - **IMPORTANT**: if stuck for 15 minutes ask a question!! We will teach you how to look for resources. How to not be stuck.
      - **Avoid the biggest trap**: Staring down your code.
    - **Asking live question channel:** `I need help in room #`
      - Instructors will provide hints, direct students to resources, go over some concepts, etc.
      - Because students are learning, they need to be directed and shown **HOW to** access resources and not be stuck.

4. **LESS passive walkthroughs, MORE active practice, and Homework:**
   1. We won't go over every problem during discussion
   today to allow more time to practice.
   1. This makes it even **more important** for you to **ask for help** if you don't understand a problem. We are more than happy to pop into your room and help!
   1. At the end of the day, it's still a **reverse classroom** style course. So doing **HOMEWORK** is **soooo important**.
      1. End of day, we'll talk more about how to approach and tackle the best curriculum on the planet.

- Zoom format for when question is asked:

  - This allows every student to have an equitable experience and an equal chance to be heard.  

```javascript
if(hand_raised_reaction === true){
    return 'student unmutes and provide their answer!'
}
else{
    return 'feel free to put answer in the chat';
}
```

---

## Practice Set 1 - 25m

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
// All of the following are first class objects!
let name = "Alvin";
let age = 1000;
let getAvg = function (num1, num2) {
  return (num1 + num2) / 2;
};

console.log(name, age, getAvg(4, 2)); // "Alvin", 1000, 3

// fun fact, you can store functions in an array and invoke them using the index they are located at!
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

- We will be treating this as a mock assessment to get you used to how assessments
will work at aA.

- If you have already done it. DELETE, REPEAT --> all about that syntax drilling.

You have access to:

- aA open
  - including homework
  - problems you did
  - REPL (to run code)
- MDN
- any code you have written outside of code from previous assessments.
- US! (but to elaborate and explain question)
- VSCode

You are not permitted to use:

- Google
- Notes
- Lecture notes
- PREVIOUS ASSESSMENTS ARE NOT ALLOWED
- anything not in the listed resources

During this time we will only answer questions about technical issues and
questions about clarifying what is expected of you.

---

## Practice Assessment Walkthrough - 45m

- _It is mandatory to attend this walkthrough :)_

## STUDY TIME: Suggested things to work on

- Practice Assessment!!! DO, DELETE, REPEAT
- Recommend Problems to do!!
  - [Vowel Counter (using If, else if, ...)]
  - [Three or Seven]
  - [Fizz Buzz Array]
- Objectives to Know for Assessment
  - How to access and read data from an array
  - Mutability
  - Order of operations
  - Conditionals
  - Modulo Operator
  - Strict equality === vs. loose equality ==
- Continue working on problems + syntax
  - DO, DELETE, REPEAT (put in those reps!!)

---

## Nested Loops - 30m (Optional for today, will cover more next week)

Refer to homework for this section!

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

## Extra Problems

- [Min Value]
- [Two Sum]
- [Pig Latin Recall]
- [Least Common Multiple]

---

[unique pairs in arrays]: ./images/unique_pairs_in_arrays.png
[pairs in arrays]: ./images/pairs_in_arrays.png
[Intermediate Functions Quiz]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/intermediate-functions-quiz)
[Reverse String]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/reverse-string)
[Range]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/range)
[Log Between Stepper Recall]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/log-between-stepper-recall)
[My Includes]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/my-includes)
[Sum Array Recall]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/sum-array-recall)
[Factors Of]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/factors-of)
[My Index Of]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/my-index-of)
[Vowel Counter Recall]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/vowel-counter-recall)
[Has Vowel]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/has-vowel)
[FizzBuzz Array]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/fizz-buzz-array)
[First Vowel]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/first-vowel)
[Even Numbers]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/even-numbers)
[Is Prime Recall]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/is-prime-recall)
[Last Vowel]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/last-vowel)
[Pit Pat]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/pit-pat)
[Remove Last Vowels]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/remove-last-vowel)
[Pairs Maker]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/pairs-maker)
[Min Value]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/min-value----)
[Two Sum]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/two-sum)
[Pig Latin Recall]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/pig-latin-recall)
[Least Common Multiple]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/least-common-multiple)
[Array.prototype.push]: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
[Array.prototype.pop]: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
[Array.prototype.unshift]: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
[Array.prototype.shift]: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
[Vowel Counter (using If, else if, ...)]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/vowel-counter----)
[Three or Seven]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/three-or-seven)
[Fizz Buzz Array]: (https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/fizz-buzz-array)
