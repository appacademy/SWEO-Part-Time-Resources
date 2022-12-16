//DETERMINING TYPES
//Binary operator : +, -, *, /
//They operate on two values
// 1+ 3

//UNARY OPERATORS
//Only operate on one value

//TYPEOF OPERATOR
//Return a string with the data type of the value

/*
let num = 4;
let str = "howdy";
let bool = true;

console.log(typeof bool); // returns 'boolean';
console.log(typeof num); // returns 'number';
console.log(typeof str); // returns 'string';
console.log(typeof sum); //returns 'function'
*/

//Arrays are a data type that doesn't work with the typeof operator
//instead we use Array.isArray
/*
function sum(str) {
    return str.split('')
}

let arr = [1,2,3,4]

console.log(typeof arr);
console.log(Array.isArray(arr));
*/

//NULL
//Has many definitions and no one can agree which is correct

//-The absence of a value or no value;
//-An unknown value
//-Null just sucks and its awful

//All of these are true, and all them are false

/*
function reverse(str) {
    if (typeof str !== 'string') {
        return null;
    }
    let arr = str.split('');
    arr.reverse();
    return arr.join('');
}

console.log(reverse("taco"));
*/

/*
let a = [];
let x = null;

if (a === null) {
    console.log('a is null');
} else if (x === null) {
    console.log("x seems to be null");
}
*/