//ARRAY AND STRING METHODS

//let arr = ["tacos", "sitting cat", "DENISE"]

//PUSH
//Adds an element to the end of an array.
/*
arr.push("curry");
console.log(arr);
*/

//POP
//Remove the last item of the array.
/*
arr.pop()
console.log(arr);
*/

//SPLICE
//Removes elements beginning at the first index, second parameter asks how many elements to remove,
//and third parameter takes a value to replace the removed elements with.
//arr.splice(index to start, # of elements removed, element to replace with);

//SHIFT
//Remove the first element of an array.
/*
arr.shift()
console.log(arr);
*/

//UNSHIFT
//Add an element to the beginning of an array AND its going to return the length of the array.
/*

console.log(arr.unshift("charizard"));
console.log(arr);
*/

//STRING.SPLIT
//Takes a pattern and divides a string into an ordered list, then returns that list as a new array.
/*
let string = "The quick brown fox jumps over the lazy dog";

let strArr = string.split(' ');

//JOIN
//Creates and returns a new string by concatenating each element inside an array. Each element
//is seperated by the seperator in the parameters.

console.log(strArr.join('a'));
*/

//RETURN STATEMENTS
// - Every function has a return statement whether or not we specify what it will return
// -If we do not give it a return statement it will return UNDEFINED

// -When we hit a return statement, we immediately exit the function and jump back to the function call.
//Then it will evaluate the call to the value it has returned.
// - Every function call evaluates to its return statement

/*
function adding(x, y) {
    let add = x + y;
    return add;
    console.log("underneath");
    return false;
}
*/

//adding(2, 3) === return statement

/*
function sum(x, y) {
    return x + y;
}

console.log(sum(3, 4));
*/
