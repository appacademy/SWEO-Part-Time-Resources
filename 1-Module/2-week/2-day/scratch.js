//ARRAY METHODS

//PUSH
//Adds an element to the END of an array, and return the length of the new array

/*
let arr = ["cersei", "joffrey", "sansa", "arya"];

arr.push("robb");
console.log(arr);
*/

//POP
//Remove the last element of the array AND return the value

/*
console.log(arr.pop());
console.log(arr);
*/

//SHIFT
//Removes the first element in the array and returns that value

/*
arr.shift();
console.log(arr);
*/

//UNSHIFT
//Add an element to the FRONT of the array & returns the new length of the array

/*
arr.unshift("the hound");
console.log(arr);
*/

//STRING.SPLIT
//Divides a string into substrings based on a seperator and puts them into an array, returns new array

/*
let strArr = string.split('brown');
console.log(strArr);
*/

//ARRAY - JOIN
//Take an array and concatenate into one string based on a seperator, returns a new string

/*
let string = "The quick brown fox jumped over the lazy dog";

let strArr = string.split(' ');

let joinedStr = strArr.join('')

console.log(joinedStr);
*/

//Example 2
/*
let arr = ["cersei", "joffrey", "sansa", "arya"];

let listOfGOT = arr.join(', ');
listOfGOT = "cersei, joffrey, sansa, arya";

console.log(listOfGOT);
*/


//RETURN STATEMENTS
//-Every function has a return statement
//Once you hit a return statement in function, we immediately exit the function
//Jump back to the function call and evaluate the function call to the return statement

//EVERY FUNCTION CALL EVALUATES TO THE RETURN STATEMENT
//The return statement ends the block of code

/*
function sum(x, y) {
    let add = x + y;
    console.log(add);
}

console.log(sum(1, 2));
*/