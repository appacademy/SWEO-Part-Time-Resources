// function summer () {
// 	console.log("It's summer time");
// }

// const summer = function (aVariable) {
//   console.log("It's summer time");
// };

// const summer = (aVariable) => {
//   console.log("It's summer time");
// };

// summer()

// const returnName = (name, age) => 'My name is ' + name;
// const returnName = name => {
//  	return 'My name is ' + name;
// }
// console.log(returnName('Will'));

// const arr = [1, 2, 3];
// const addOne = arr.map((num) => {
// 	return num + 1
// });
// const addOne = arr.map(function (num) {
// 	return num + 1
// });
// const addOne = arr.map(num => num + 1);
// console.log(addOne);

// const funcName = () => {
// 	return 5
// }

// function summer () {

// }

// console.log(funcName())

// const addNum = (num) => {
//   return function addNewNum (newNum) {
// 		return num + newNum;
// 	};
// };

// console.log(addNum)
// console.log(addNum(5))

// const add5 = addNum(5)
// console.log(add5(10))
// console.log(add5(100))

// const add100 = addNum(100)

// console.log(add100(20))

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

  const counting = () => {
    n -= 1;
    if (n === 0) return 'Happy New Year!';
    else return counting;
  };

  return counting;
};

// console.log(countDownTimer(0)); // prints "Happy New Year!"
// let oneDay = countDownTimer(1); // returns a function
// console.log("A DAY HAS PASSED")
// console.log(oneDay()); // prints "Happy New Year!"

// let twoDays = countDownTimer(2); // returns a function
// console.log('A DAY HAS PASSED');
// console.log(twoDays()); // returns a function
// console.log('A DAY HAS PASSED');
// console.log(twoDays()); // prints "Happy New Year!"

// let threeDays = countDownTimer(3); // returns a function
// console.log('A DAY HAS PASSED');
// console.log(threeDays()); // returns a function
// console.log('A DAY HAS PASSED');
// console.log(threeDays()); // returns a function
// console.log('A DAY HAS PASSED');
// console.log(threeDays()); // prints "Happy New Year!"

/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

const sandwichMaker = () => {
  let myAwfulSand = 'One sandwich with tomato';

  // let badIngrend = ['tomato'];

  return (str) => {
    myAwfulSand = myAwfulSand + ' and ' + str;
    return myAwfulSand;
    // badIngrend.push(str)
    // return 'One sandwich with ' + badIngrend.join(' and ');
    //
  };
};

// let sandwich = sandwichMaker(); // => returns a function
// console.log(sandwich('spinach')); // => "One sandwich with tomato and spinach"
// console.log(sandwich('jelly')); // => "One sandwich with tomato and spinach and jelly"
// console.log(sandwich('bread')); // => "One sandwich with tomato and spinach and jelly and bread"
// let myAwfulSand = 'One sandwich with tomato and spinach';
// let myAwfulSand = 'One sandwich with tomato and spinach + next';

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

const interrupter = (word) => {
  // return (str) => str.split(' ').join(' ' + word + ' ');

  return (str) => {
    let mySentArr = str.split(' '); // ["how", "are", "you"]
    return mySentArr.join(' ' + word + ' ');
  };
};

// const interrupter = word => str => str.split(' ').join(' ' + word + ' ');

// let rudePerson = interrupter('what'); // => returns a function
// console.log(rudePerson('how are you')); // prints "how what are what you"
// console.log(rudePerson('I like pie')); // prints "I what like what pie"

// const interrupter = (interruptingWord) => {
//   return function (string) {
//     let words = string.split(' ');

//     for (let i = 0; i < words.length; i++) {
//       // also could do  && words[i] !== interruptingWord
//       if (words[i] !== words[words.length - 1]) {
//         words.splice(i + 1, 0, interruptingWord);
//         i++;
//       }
//     }

//     return words.join(' ');
//   };
// };

// let rudePerson = interrupter('what'); // => returns a function
// console.log(rudePerson('how are you')); // prints "how what are what you"
// console.log(rudePerson('I like pie')); // prints "I what like what pie"

/***********************************************************************
Write a function using fat arrow syntax named `arrowMyMap` that accepts an array
and a callback as arguments. The function will return an array of new elements
obtained by calling the callback on each element of the array, passing in the
element. Assign the below function to a variable using the const keyword.

Do not use the built in Array#map - use Array#forEach for iteration.


Examples:
let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

***********************************************************************/

const arrowMyMap = (arr, cb) => {
  let newArr = [];
  arr.forEach((el) => {
    newArr.push(cb(el));
  });

  // console.log(newArr)
  return newArr;
};
/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.
**Hint**: Use rest parameter syntax!
Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/

const arrowRestSum = (...params) => {
  let finalSum = params.reduce((start, num) => {
    return start + num;
  }, 0);
  return finalSum;
};
