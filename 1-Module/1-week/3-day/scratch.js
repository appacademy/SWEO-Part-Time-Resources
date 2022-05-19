// ---------------strings------------
// syntax
let string = 'Hi, I\'m a string';
// can wrap in single or double quotes, and use \ to escape a quote if you need to
console.log(string);
//.length
console.log(string.length); // 16
// length starts from 1 so will be the actual count of all characters (including spaces and punctuation!)

// indexing
console.log(string[5]);
// wrapped with square brackets, used to grab a single character from the string.

//.indexof
console.log(string.indexOf('m'));
// indedOf is a method to find the number index of a certain character. It will return the first index where that character is located.

//+ concatenation
let string2 = 'Hello, I\'m also a string';
let string3 = string + ' ' + string2;
// concatenation just means to join things together. We use the plus sign to do that. You must include spaces if you want one between the strings.

// reassignment
string = 'new string';
// you can reassign a variable to have a new value, but you can't change the current value. (strings are not mutable)

console.log(string);
console.log(string2);
console.log(string3);

//------------function declaration + invocation--------------
// Function declaration / definition // console.log inside
function addNums (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

// Function invocation
let theSum = addNums(2,3);
// console.log(addNums(4, 5));
console.log(theSum);


//------------function return statment & undefined------------
// Return undefined and return vs. console.log
function addNums (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

//---------------adding code after return statement--------------
function addNums (num1, num2) {
  let sum = num1 + num2;
  return sum;
  let product = sum * 2 // this code will not run because it is after the return
};

// -------------------POLYA's PLAN------------
//A good plan is neccessary before you write any code
// choose a problem and do it together using Polya's Problem Solving Method.

//understand the problem --> see inputs and outputs if question doesn't make sense     
//write a plan - in english as closely as you can, resemble to code            
//execution - write the code from the plan  
//refactor, see if we can improve, etc.
    

// -------------------Lets do a problem together!------------

function averageOfTwo(num1, num2) {
  // i want to add the two numbers together
  let sum = num1 + num2;
  // then divide by 2 
  let avg = sum / 2
  // the return that average
  return avg
  // return (num1 + num2) / 2
}

console.log(averageOfTwo(3, 7)); // => 5
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75