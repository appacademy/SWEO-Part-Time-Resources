// // function sum(num1, num2) {
// //   return num1 + num2
// // }

// const sum = (num1, num2) => num1 + num2;

// console.log(sum(3, 5));

// const arr = [1, 2, 3];

// console.log(arr.map((el) => el * 3));

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

console.log('This is hiBot: ', hiBot); // function
console.log('---Done---');
console.log('This is byeBot: ', byeBot); // function
console.log('---Done---');

console.log(hiBot('Mylo'));
console.log('---Done---');
console.log(hiBot('JM'));
console.log('---Done---');

console.log(byeBot('JM'));
console.log('---Done---');
console.log(byeBot('Mylo'));
console.log('---Done---');
