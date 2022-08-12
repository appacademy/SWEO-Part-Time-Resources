
// const sumFunc = arr => {
//     let sum = 0
//     arr.forEach(ele => sum += ele)
//     return sum
// }

// console.log(sumFunc([1,2,3,4]))

// const oneLineSumFunc = arr => arr.reduce((accum, ele) => accum += ele)

// console.log(oneLineSumFunc([1,2,3,4]))

// // console.log(sumFunc)

// const arrayConcat = (arr1, arr2) => [...arr1, ...arr2]


// console.log(arrayConcat([1,2,3], [4,5,6]))



/*
I want to start a new business that sells robots to people.

Level One
I need to build a factory that will produce robots to people that say, "Hello" when they run them.

Level Two
Customers would like it if they could decide what the robots said.

Level Three
Customers would like it if they robots said their names

Level Four
Customers would like it if the robots kept track of ALL the names they've spoken to.
*/

const factory = function (voiceChip) {
    // console.log('Booting up factory...');
    // console.log('Creating a new empty array...');
    let names = [];
    console.log('Returning a new robot that says ' + voiceChip + '...');
    return function robot(name) {
        // console.log('Booting up ' + voiceChip + ' robot...');
        // console.log('Adding ' + name + ' to names...');
        names.push(name);
        // console.log('Returning the correct phrase...');
        return voiceChip + ' ' + names.join(' and ');
    };
};

const hiBot = factory('Hello');
// console.log('---Done---');
const byeBot = factory('Leave me alone')

// console.log('This is the return of hiBot: ', hiBot); // 
console.log('---Done---');


// console.log(hiBot('James'));
// console.log('---Done---');
// console.log(hiBot('Crystal'));
// console.log('---Done---');


console.log(byeBot('James'));
console.log('---Done---');
console.log(byeBot('Crystal'));
// console.log('---Done---');

let str = 'hello';

// function something(str) {
//     return str;
// }

// something(str);
// First Class Function - A feature of a coding language (JavaScript)
/* 
JavaScript functions are first-class function
Strings are first-class
Arrays are first-class
1. Assigned to a variable - true for JS
2. Passed into a function - true for JS
3. Returned from a function - true for JS
*/

// Higher Order Function
/* 
sandwich maker is a higher order function BECAUSE it returns another function
1. Intake another function
2. Return another function
3. OR Both
*/