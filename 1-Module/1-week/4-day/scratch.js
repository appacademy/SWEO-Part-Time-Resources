// let name = 'Zaviar';
// if (name) {
//   console.log("You're talking to the instructor");
// } else if (name === "Zach") {
//   console.log("You're talking to a traitor");
// } else {
// 	console.log("Idk who you're talking about")
// }

// function myFunc (aNum) {

// }

// let num = 10;
// console.log(num % 2)
// if (num % 2 === 0) {
//   // console.log('This value was truthy');
//   console.log('This value was even');
// } else {
//   // console.log('This value was falsy');
//   console.log('This value was odd');
// }

// function isFive(num) {
//   if (num === 5) {
//     return true;
//   }
//   return false;
//   // else {
//   // 	return false
//   // }
// }

// function isFive(num) {
//   return 5 === num;
// }

// console.log(isFive(0));
// console.log(isFive(5));
// console.log(isFive(6));

// function isAnimal() {
//   let c = 'turtle';

//   if (c === 'dog') {
//     return "I'm a dog!";
//   } else if (c === 'turtle') {
//     return "I'm a turtle!";
//   } else if (c === 'potato') {
//     return "I'm a potato";
//   }
//   console.log("This won't run");
//   return "I don't know what I am";
// }
// function isAnimal() {
// if (c === 'dog') {
//   console.log("I'm a dog!");
// } else if (c === 'turtle') {
//   console.log("I'm a turtle!");
// } else if (c === 'potato') {
//   console.log("I'm a potato");
// }
// console.log("I don't know what I am");
// console.log("I don't know what I am");
// console.log("I don't know what I am");
// console.log("I don't know what I am");
// console.log("I don't know what I am");
// console.log("I don't know what I am");
// }
// console.log(isAnimal());

// let i = 0;

// while (i < 5) {
//   console.log('This run, i is', i);
//   i++;

// }

// (starting point; when I want to stop; how much to increment by)
// for (let i = 0; i < 5; i++) {
//   console.log('This run, i is', i);
// }

//! ------- Practice problems from AAO

//////////! Is Five

// function isFive(num) {
// 	if (num !== 5) {
// 		return false
// 	} else {
// 		return true
// 	}
// }

//////////! Log Between

// function logBetween (lowNum, highNum) {
//   	let newLow = lowNum
// 	for (let i = 0; i <= (highNum - lowNum); i++) {
//      	console.log(newLow)
//       	newLow++
//     }
// }

// function logBetween (lowNum, highNum) {
// 	for (let myNumber = lowNum; myNumber <= highNum; myNumber++) {
//     	console.log(myNumber)
//     }
// }

// function logBetween (lowNum, highNum) {
// 	for (let i = lowNum; i <= highNum; i++) {
//     	console.log(i)
//     }
// }

// function logBetween (lowNum, highNum) {
//   	let i = lowNum
// 	while(i <= highNum) {
//       console.log(i)
//       i++
//     }
// }

// function logBetween(lowNum, highNum) {
//   while (lowNum <= highNum) {
//     console.log(lowNum);
//     lowNum++;
//   }
// }

//////////! Print Fives

// function printFives(max) {
// 	let i = 0;
//   	while ( i < max ) {
//     	console.log(i)
//       	i += 5
//     }
// }

//////////! Log Between Stepper

// function logBetweenStepper (min, max, step) {
// 	for (let i = min; i <= max; i+= step) {
//     	console.log(i)
//     }
// }

// function logBetweenStepper (min, max, step) {
// 	// create a counter to keep track of my current number
//   	let currNum = min

//   	// start a while loop
//     while (currNum <= max) {
// 		// will run until counter is equal to max
//   	// it will print counter
//     	console.log(currNum)
//   	// increment counter by step
//       	currNum += step
//     }
// }

//////////! Three Or Seven

// function threeOrSeven(num) {
// 	let ans = false
//     if (num % 7 === 0 || num % 3 === 0) {
//     	ans = true
//     }
//   	return ans
// }

// function threeOrSeven(num) {
// 	return num % 7 === 0 || num % 3 === 0
// }

// function threeOrSeven(num) {
//   if (num % 7 === 0) {
//     return true;
//   } else if (num % 3 === 0) {
//     return true;
//   } // else {
//   //   	return false
//   //   }
//   return false;
// }

//! ----------------

// function give5() {
//   return 5;
// }

// console.log(give5)
// console.log(give5())
// let str = "Me"

// console.log(str[0])
// console.log(str[1])

// let arr = [1, 'hello', false, undefined, [1, 2, 3], give5, give5()];

// console.log(arr);

// function myFunc() {
//   // return 'Hello';
//   let arr = [1, 'hello', false];

//   // let myVal = arr[2]
//   // console.log(arr)
//   // return myVal

//   // return arr.indexOf("hello")

//   return arr.length;
// }

// console.log(myFunc());
// console.log(['a', 'b', 6, 48].length);
// let arr = [1, 2];
// let secondArr = [3, 4]
// let thirdArr = [5, 6]

// console.log(arr.concat(secondArr, thirdArr))
// console.log(secondArr.concat(arr))

// console.log("Hello" + " " + "World")
// console.log(arr);
// arr.push(5);
// console.log(arr);
// arr.push(0);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr.length);

// function sumArray(array) {
//   	// create a variable to keep track of my sum
//   	let sum = 0
// 	// loop through my array
//     for (let i = 0; i < array.length; i++) {
// let currVal = array[i]
// each array value gets added to my sum
//  sum += currVal

//         // console.log(currVal)
//     	// console.log(array[i])
//     }

//   	// return my sum
//   	return sum
// }

// function sumArray(array) {
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//  sum += array[i]
// }
// return sum
// }

// function potatoSpeak() {
//   console.log("I am potato!");
// }
// function sadSpeak() {
//   console.log("I am NOT potato :(");
// }

// function isThisPotato(word) {
//   if (word === "potato") {
//     potatoSpeak();
//   } else {
//     sadSpeak();
//   }
// }

// isThisPotato("papaya")
