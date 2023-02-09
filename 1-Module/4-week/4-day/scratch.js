// function sum(num1, num2) {
//     return num1 + num2;
// }

// let sum = (num1, num2) => num1 + num2;

// console.log(sum(3, 4));

// const arr = [1, 2, 3];

// const tripler = (arr) => arr.map((el) => el * 3);

// console.log(tripler(arr));

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
    console.log('Booting up factory...');
    console.log('Creating a new empty array...');
    let names = [];
    console.log('Returning a new robot that says ' + voiceChip + '...');
    return function robot(name) {
        console.log('Booting up ' + voiceChip + ' robot...');
        console.log('Adding ' + name + ' to names...');
        names.push(name);
        console.log('Returning the correct phrase...');
        return voiceChip + ' ' + names.join(' and ');
    };
};

const hiBot = factory('Hello');
console.log('---Done---');
const byeBot = factory('Goodbye');
console.log('---Done---');

console.log('This is the return of hiBot: ', hiBot); // function
console.log('---Done---');
console.log('This is the return of byeBot: ', byeBot); // function
console.log('---Done---');

console.log(hiBot('Mylo'));
console.log('---Done---');
console.log(hiBot('JM'));
console.log('---Done---');

console.log(byeBot('JM'));
console.log('---Done---');
console.log(byeBot('Mylo'));
console.log('---Done---');

let str = 'hello';

function something(str) {
    return str;
}

something(str);
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