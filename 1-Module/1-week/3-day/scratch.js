// ---------------strings------------
// syntax
let string = 'Hi I\'m a string'
// wrap in single or double quotes, can use the escape character if needed for an apostrophe

string = 'Hello, I\'m a string!'
// reassignment - when you want to change the value of your string variable. You can not update the current value, only reassign to a new value.

//.length
console.log(string.length)
// length starts at 1, so counts each character.

// indexing
console.log(string[7])
console.log(string[string.length - 1])
// use square brackets, enter the number of the character you need.
// if you want the last character and dont know how many characters there are just use string.length - 1! the length is always 1 greater than the last index (indeces start at 0!)

//.indexof
console.log(string.indexOf('m'))
// will return the number index of the character inside the method call. (will always be the first instance of that character!)

//+ concatenation
let string2 = 'Hello, I\'m also a string'
let string3 = string + ' ' + string2;
// will join the strings together starting with the last character of the first string and the first character of the second string! If you want a space you have to manually add it!

console.log(string)
console.log(string2)
console.log(string3)

//------------function declaration + invocation--------------
// Function declaration / definition // console.log inside
function addNums(num1, num2){
  let sum = num1 + num2;
  console.log('this is the console.log', sum);
  return sum; // function will return undefined unless you include a return statement!
  let product = sum * 2 // this code will not run because it is after the return.
  console.log(product)
};

// Function invocation
console.log('this is the return', addNums(2, 3));
let theSum = addNums(5,6) // you can call this function as many times as you want with different information.
console.log(theSum)


// -------------------POLYA's PLAN------------
//A good plan is neccessary before you write any code
// choose a problem and do it together using Polya's Problem Solving Method.

//understand the problem --> see inputs and outputs if question doesn't make sense     
//write a plan - in english as closely as you can, resemble to code            
//execution - write the code from the plan  
//refactor, see if we can improve, etc.
    

// -------------------Lets do a problem together!------------


