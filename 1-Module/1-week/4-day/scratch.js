
// -------------- IF ELSE IF ELSE Conditional Statements-------------

// if(300 === 300){ //true
// 	console.log("THIS IS 300!");
// }

// if(300 === true){ // (300 === true) => false => is false a truthy value?
// 	console.log("300!"); //then expression
// }

// if(300){ // (300) = 300 is a truthy value => is truthy so we execute the then expression
// 	console.log("300!"); //then expression
// }

// if(""){ //"" is a fasly value, only truthy values will execute the then expression
// 	console.log("empty string works!");
// }

// if(false === false){ //express false === false --> true 
// 	console.log("IS THIS A FALSY VALUE?");
// }

// if (0) { 
//     console.log("first index is always 0");
// }

// if (0 === 0) { 
//     console.log("0___0");
// }

// if (null === null) { 
//     console.log("I want null-body null-body but you");
// }

// if (true) { 
//     if (true === 'true'){ //true === 'true' --> false --> false is not truthy.
//         console.log("trueception");
//     }

// }

// console.log(true === 'true'); //true is a boolean datatype, while 'true' is a string datatype


// console.log(true == 'true'); //false --> value of true is boolean true, value of 'true' is a string 'true'

// let number = "hi";

// if (number > 5) { // check to see if our number is greater than 5
//   console.log("The num is greater than 5");
// } else if (number < 5) { // check to see if our number is less than 5
//   console.log("The num is less than 5");
// } else if (number === 5){ //check to see if number is equal to 5.
//   console.log("It's 5");
// }
// else{
// 	console.log("this is not a number and it's not 5");
// }

// ----------------------Problems----------------------
// ----------------------isOdd----------------------
function isOdd(num) {
    //how can we determine if num is odd? we can use num % 2 for this
    //where if num % 2 !== 0, then it is odd (true), otherwise it is even (false).
    if (num % 2 !== 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
// ----------------------printFives----------------------
// function printFives(max){
//   for(let i =0; i<max; i++){
//     //i gives us every number, so now we have to find the numbers that is divisible by 5
//   	if(i % 5 === 0){
//     	console.log(i);
//     }
//   }

// }

// Example:
// function printFives(max){
//   let i = 0; //initial step 
//   while(i < max){ //condition  
//   	console.log(i);
//     //step to get closer to where our condition is false
//     i+=5; 
//   }
// }

// function printFives(max){
//   //for key word, initial start, stop when condition met, step / increment
//   for(let i=0; i<max; i++){
//   	console.log(i);
//   }
// }

// printFives(100) // prints out:

// // 0
// // 5
// // 10
// // 15

// 
// ----------------------logBetweenStepper----------------------
function logBetweenStepper(min, max, step) {
    for (let i = min; i <= max; i += step) {
        console.log(i);
    }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9


logBetweenStepper(-10, 15, 5)  // prints out:
// -10
// -5
// 0
// 5
// 10
// 15
// ----------------------threeOrSeven----------------------
function threeOrSeven(num) {
    //   if(num % 3 ===0 || num % 7 ===0){
    //   	return true;
    //   }

    //   return false;
    let result = (num % 3 === 0 || num % 7 === 0); //(num % 3 ===0 || num % 7 ===0) --> evaluates to a value or result --> then we can store it in a variable
    return result;
}

console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false

// ----------------------sumArray----------------------
function sumArray(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        counter = counter + currentNum;
        console.log("index: " + i + ' ' + '; currentNum: ' + currentNum + '; counter: ' + counter);
    }
    return counter;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

// ----------------------addArrays----------------------
function combineArray(array1, array2) {
    return array1.concat(array2);

}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]


// ----------------------doubler----------------------

function doubler(numbers) {
    let result_arr = [];
    for (let i = 0; i < numbers.length; i++) {
        let old_num = numbers[i];
        let new_num = old_num * 2;
        //concat: how developers did it, they allow other datatypes to 
        //be passed to argument of the 
        //concat() method and then convert it to an array
        result_arr = result_arr.concat(new_num);

    }
    return result_arr;

}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]


// ----------------------countVowels----------------------
// function countVowels(word) {
//   let counter = 0;
//   for(let i=0; i<word.length; i++){
//   	let letter = word[i];
//     if(letter === 'a'){
//     	counter++;
//     }
//     else if(letter === 'e'){
//     	counter++;
//     }
//     else if(letter === 'i'){
//     	counter++;
//     }
//     else if(letter === 'o'){
//     	counter++;
//     }
//     else if(letter === 'u'){
//     	counter++;
//     }
//   }
//   return counter;
// };

function countVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (vowels.includes(letter.toLowerCase())) {
            counter++;
        }
    }
    return counter;

};

console.log(countVowels("bootcAmp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2