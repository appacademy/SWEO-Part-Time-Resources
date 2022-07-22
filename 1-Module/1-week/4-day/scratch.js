/* EAST */


//WEST

// CONDITIONALS
let instructor = 'something else'

// if(instructor === 'james'){
// console.log('true inside if block')
// } else {
//   console.log('inside else block')
// }
// if(''){
// console.log('true inside if block')
// } else if (instructor === 'crystal'){
//   console.log('inside else if block')
// } else {
//   console.log('inside else block')
// }

// WHILE LOOP
// let myName = 'James'


// let i = 0;
// while(i < myName.length){
//   let char = myName[i]
//   console.log(char, i)
//   i++
// }


// FOR LOOP
// let myName = 'James'
// //  index       condition         step
// for(let i = 0; i < myName.length; i++){
//   let char = myName[i]
//   console.log(char, i)
// }


//ARRAYS
let myArray = [1, 'string', true, [1,2,'string']]

// for(let i = 0; i < myArray.length; i++){
//   let ele = myArray[i]
//   console.log(ele)
// }

//INDEXING
// console.log(myArray[2]) // true
// console.log(myArray[myArray.length -1][1]) // [1,2,'string']
// console.log(myArray[3][1]) // true
// INDEX OF
// console.log(myArray.indexOf(false))

// PROPERTIES / METHODS


// LENGTH

// -------- aaOPEN questions ---------------

// IS FIVE 
// function isFive(num) {
// 	if(num === 5){
//     	return true
//     }
//   return false
  
// }

// console.log(isFive(5)); // => true
// console.log(isFive(13)); // => false

// IS ODD
// function isOdd(number) {
//   return (number % 2 !== 0);
// }

// function isOddConditional(number) {
//   if (number % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true

// LOG BETWEEN

// function logBetween(lowNum, highNum) {
//   for (let i = lowNum; i <= highNum; i += 1) {
//     console.log(i);
//   }
// }

// function logBetweenWhile(lowNum, highNum) {
//   let i = lowNum;
//   while (i <= highNum) {
//     console.log(i);
//     i++;
//   }
// }
// logBetween(-1, 2);

// PRINT FIVES 
// function printFives1For(max) {
//   for (let i = 0; i < max; i += 1) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// function printFives1(max) {
//   let i = 0;
//   while (i < max) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }

// function printFives2(max) {
//   for (let i = 0; i < max; i += 5) {
//     console.log(i);
//   }
// }

// function printFives2While(max) {
//   let i = 0;
//   while (i < max) {
//     console.log(i);
//     i += 5;
//   }
// }

// LOG BETWEEN STEPPER 
// function logBetweenStepperFor(min, max, step) {
//   for (let i = min; i <= max; i += step) {
//     console.log(i);
//   }
// }

// function logBetweenStepper(min, max, step) {
//   let i = min;
//   while (i <= max) {
//     console.log(i);
//     i += step;
//   }
// }

// logBetweenStepper(5, 9, 1);

// logBetweenStepper(-10, 15, 5)  

// THREE OR SEVEN
// function threeOrSeven(num) {
//   // your code here...
//   if(num % 3 === 0 || num % 7 === 0){
//   	return true
//   }
//   return false
// }

// function threeOrSeven(num) {
//  	return (num % 3 === 0) || (num % 7 === 0);
// }


// console.log(threeOrSeven(3));   // => true
// console.log(threeOrSeven(42));  // => true
// console.log(threeOrSeven(8));   // => false

// SUM ARRAY 
// function sumArray(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     let num = array[i];
//     sum += num;
//   }

//   return sum;
// }

// function sumArrayWhile(array) {
//   let sum = 0;
//   let i = 0;

//   while (i < array.length) {
//     let num = array[i];
//     sum += num;
//     i += 1;
//   }

//   return sum;
// }

// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30


//COMBINE ARRAY 
// function combineArray(array1, array2) {
// return array1.concat(array2)
// }

// console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
// console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]