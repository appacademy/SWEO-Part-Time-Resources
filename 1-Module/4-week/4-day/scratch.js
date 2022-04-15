// function myFuncName() {
//   console.log('Hello');
// }

// const myFuncName = function () {
//   console.log('Hello');
// };

// const myFuncName = () => {
//   console.log('Hello');
// }

// myFuncName();

// const multilineName = name => {
//   return 'My name is '+ name;
// };

// console.log(multilineName('Zaviar'))

// const returnName = name => 'My name is ' + name;
// const returnName = (name) => {
//   return 'My name is ' + name;
// };
// console.log(returnName('Will'));

// const arr = [1, 2, 3];
// const addOne = arr.map((num) => num + 1);
// const addOne = arr.map((num) => {
//   return num + 1;
// });
// const addOne = arr.map(function (num) {
//   return num + 1;
// });
// console.log(addOne);

// let add5 = function (num) {
//   return num + 5;
// };

// console.log(add5(20));

// const addANum = (num) => {
//   return (anotherNum) => {
//     return num + anotherNum;
//   };
// };

// console.log(addANum)
// const add10 = addANum(10);
// console.log(add5(125));
// console.log(add5(5));
// console.log(add5(65));

// const add32 = addANum(32);
// console.log(add32(125));
// console.log(add32(5));
// console.log(add32(65));

const factory = (voiceChip) => {
  const nameArr = []; // ["Zaviar", "Will"]

  return (name) => {
    nameArr.push(name);
    return voiceChip + ' ' + nameArr.join(' and ');
  };
};

// const helloRobot = factory('Hello');
const whatsUpRobot = factory('Whats up');
// const whatsUpRobot = function (name) {
//   nameArr.push(name);
//   return voiceChip + ' ' + nameArr.join(' and ');
// };
const howdyRobot = factory('Howdy');

// console.log(helloRobot('Zaviar'));
// console.log(helloRobot('Will'));
// console.log(whatsUpRobot('Zaviar'));
// console.log(whatsUpRobot('Will'));
// console.log(whatsUpRobot('Foul Tarnished'));

// console.log(howdyRobot('Chosen Undead'));
// console.log(howdyRobot('Godrick'));

/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/

// your code here!

// const arrowRestSum = ((...params) => {
//   let final = params.reduce((accum, num) => {
//     return accum + num
//   }, 0)
//   return final
// })

const arrowRestSum = (...num) => num.reduce((num1, num2) => num1 + num2);

/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

// your code here!

const arrowAvgValue = (array) => {
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });

  return sum / array.length;
};

/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

// your code here

const arrowMirrorArray = (array) => {
  let newArr = array;

  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }

  return newArr;
};

/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:

Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

Example 2:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

***********************************************************************/

const countDownTimer = (n) => {
  if (n === 0) return 'Happy New Year!';

  return () => {
    n--;
    if (n === 0) return 'Happy New Year!';
  };
};

// let oneDay = countDownTimer(1); // returns a function
// console.log(oneDay()); // prints "Happy New Year!"

// let twoDays = countDownTimer(2); // returns a function
// console.log("A DAY HAS PASSED")
// console.log(twoDays()); // returns a function
// console.log("A DAY HAS PASSED")
// console.log(twoDays()); // prints "Happy New Year!"

// let threeDays = countDownTimer(3); // returns a function
// console.log("A DAY HAS PASSED")
// console.log(threeDays()); // returns a function
// console.log("A DAY HAS PASSED")
// console.log(threeDays()); // returns a function
// console.log("A DAY HAS PASSED")
// console.log(threeDays()); // prints "Happy New Year!"

/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds.

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:

function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


***********************************************************************/

const funcTimer = (time, func) => {
  setTimeout(func, time);
};

/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/

const lazyAdder = (firstNum) => {
  return (secondNum) => {
    return (thirdNum) => {
      return firstNum + secondNum + thirdNum;
    };
  };
};

// // Example 1:
// let firstAdd = lazyAdder(1);
// let secondAdd = firstAdd(2);
// let sum = secondAdd(3);
// console.log(sum); // prints 6

// // Example 2:
// let func1 = lazyAdder(10);
// let func2 = func1(20);
// let total = func2(3);
// console.log(total); // prints 33

/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

const recVolume = (height) => {
  const dimArr = [height];

  const multiply = (dimension) => {
    if (dimArr.length < 3) {
      dimArr.push(dimension);
    }
    if (dimArr.length === 3) {
      return dimArr.reduce((prev, next) => prev * next);
    }

    return multiply;
  };

  return multiply;
};

/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again: 
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

// const interrupter = (word) => {
//   return (string) => {
//     let sentenceArray = string.split(' ');
//     return sentenceArray.join(' ' + word + ' ');
//   };
// };

const interrupter = (word) => (sentence) =>
  sentence.split(' ').join(' ' + word + ' ');

let rudePerson2 = interrupter('yo'); // => returns a function
console.log(rudePerson2('Oh say can you see the american flag')); // prints "I yo love yo dogs"
