/*

Write a function called contains that searches for a value in a nested object.
It returns true if the object contains that value.
Takes in an object and a value

*/

/*
const nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: "foo2",
					},
				},
			},
		},
	},
};

//console.log(contains(nestedObj, 44)) //true

function contains(obj, val) {
    for (let key in obj) {

        if (obj[key] === val) {
            return true;
        } else if (typeof obj[key] === "object") {
            return contains(obj[key], val);
        }
    }
    return false;
}

console.log(contains(nestedObject, 44));
*/

//IIFE - Immediately Invoked Function Expression
//Defines an anonymous function and then immediately invokes it

//SYNTAX:
/*

(function() {
    statements;
})();

*/

/*
IIFE's keep our global namespace unpolluted by function or variable names
that we DO NOT intend to reuse
*/

//We can use IIFE's to make private functions or variables
//Because its only invoked once

//Assigning IIFE's to variables = AGAIN, we're assigning the RETURN not the function
//let apple = (function() {console.log("apple")})();

//console.log(apple);

//UNASSIGNED VARIABLES IN JS
//Declared variables with no value have a value of.... undefined

//You can declare LET and VAR without assigning them to a value
//and their value will be set to undefined

//example;

/*
let hello;
var hi;

console.log(hi, hello)
*/

//CONST
//CANNOT be declared without a value

//const goobye;

//IMPORTANT!!!!!!!!!!!!!!!!!!!!!
//Default values and hoisting variable NAMES are two very different things

//PRIMITIVE DATA TYPES
//WE CANNOT ASSIGN OR CALL METHODS ON PRIMITIVE

//Primitives with Object wrappers
//Capitalized data type objects ; Number, String, Object

/*
Object
String
Number
*/

// let students = [
//     'Dylan McDougall',
//     "Ledian Fekaj",
//     "Carlos Stich",
//     "Emily Norman",
//     "Dylan Berry",
//     "Enea Jorgji",
//     "Manuel Tobal",
//     "Dorian Rivas",
//     "Yassin Tantawy",
//     "Adrienne Tran",
//     "Gino Farfaglia",
//     "Stephen Raymond Sy",
//     "David Soto",
//     "Emmanuel Rivera",
//     "Joshua Krienke",
//     "Katherine Standridge",
//     "Myles Spikes",
//     "Terson Modeste",
// ]

// let deathWheel = array => array[Math.floor(Math.random() * array.length)]

// console.log(deathWheel(students))

/*
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.
Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.
There are many ways to accomplish this task but here's a simple algorithm:
1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
*/

/*
function sort(nums, sorted = []) {
    if (!nums.length) return sorted;

    let smallestIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[smallestIndex]) {
            smallestIndex = i;
        }
    }

    sorted.push(nums[smallestIndex]);

    nums.splice(smallestIndex, 1);

    return sort(nums, sorted);
}
*/