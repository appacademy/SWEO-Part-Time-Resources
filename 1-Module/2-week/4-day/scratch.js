//DETERMINING TYPES 

//Binary Operators
//Operators that change two seperate values
// +, -, *, /        1 + 3;

//UNARY OPERATORS
//Operate on one value

//TYPE OF OPERATOR
//Gives us the datatype of a value in the form of a string - console.log(typeof num); // Returns 'number'

/*
let num = 4;
let str = "hiiii";
let bool = true;
let arr = [];

console.log(typeof num); // Returns 'number'
console.log(typeof str)
console.log(typeof bool)

function reverse(string) {
    return string.split('').reverse().join('');
}

console.log(typeof arr);
*/

//Type of Arrays - Array.isArray(arrayName); returns a true or a false

/*
let arr = [];
console.log(Array.isArray(arr));
*/

//NULL - Data type

//A couple different meanings - All of them are true, and all of them are false;
// - The absence of a value or no value;
// - It's an unknown value;
// - Null just sucks;

/*
function reverse(str) {
    if (typeof str !== 'string') {
        return null;
    } 
    return str.split('').reverse().join(''); 
}

console.log(reverse("taco"));
*/