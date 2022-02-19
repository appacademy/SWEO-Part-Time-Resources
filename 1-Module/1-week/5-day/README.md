# W1D5

0. Lots of practice!
1. Function Expression
2. Mutability
3. Array Methods
4. Nested Loops
5. Practice Assessment

**_Quick Notes_**:

1. We won't be able to go over every problem during lecture periods
   today. This makes it even more important for you to ask for help if you don't
   understand a problem. If you run into any confusion ask for help in the
   questions channel. We are more than happy to pop into your room and help!

2. question format: `I need help in room 1`

3. Make sure to use the raise hand reaction when asking a question in zoom! This
   allows every student to have an equitable experience and an equal chance to be
   heard. Also, remember to mute yourself after you finish speaking :)

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

## Practice Set 5 - 40m

- [Last Vowel]
- [Pit Pat]
- [Remove Last Vowels]
- [Pairs Maker]

---

## Nested Loops - 30m

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

## Practice Assessment - 1hr

We will be treating this as a mock assessment to get you used to how assessments
will work at aA.

You have access to:

- aA open
- MDN
- any code you have written outside of code from previous assessments.

You are not permitted to use:

- Google
- Notes
- Teacher's lecture notes
- anything not in the listed resources

During this time we will only answer questions about technical issues and
questions about clarifying what is expected of you.

---

## Optional Practice Assessment Walkthrough (Patrick) - 45m

### If you feel comfortable with the practice assessment, you can continue working through the following problems, we will still be available to answer questions

- [Min Value]
- [Two Sum]
- [Pig Latin Recall]
- [Least Common Multiple]

---

## Office Hours 1hr

Sign-Up sheet is posted in your slack channels. You are able to sign up for 30
minute slots on a first come first serve basis. Patrick will also be doing his eod
during that time and will be free to answer questions for the group.

---

[intermediate functions quiz]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/intermediate-functions-quiz
[reverse string]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/reverse-string
[range]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/range
[log between stepper recall]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/log-between-stepper-recall
[my includes]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/my-includes
[sum array recall]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/sum-array-recall
[factors of]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/factors-of
[my index of]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/my-index-of
[vowel counter recall]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/vowel-counter-recall
[has vowel]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/has-vowel
[array.prototype.push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[array.prototype.pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[array.prototype.unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[array.prototype.shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[fizzbuzz array]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/fizz-buzz-array
[first vowel]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/first-vowel
[even numbers]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/even-numbers
[is prime recall]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/is-prime-recall
[last vowel]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/last-vowel
[pit pat]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/pit-pat
[remove last vowels]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/remove-last-vowel
[pairs maker]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/pairs-maker
[min value]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/min-value----
[two sum]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/two-sum
[pig latin recall]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/pig-latin-recall
[least common multiple]: https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-1---intro-to-javascript/least-common-multiple
[unique pairs in arrays]: ./images/unique_pairs_in_arrays.png
[pairs in arrays]: ./images/pairs_in_arrays.png
