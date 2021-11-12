// const someNum = 7;
// // lock(someNum)
// // I need some memory
// // what kind? how much?
// // well it has to hold a number
// // I need space to hold a pointer
// // and additional info about the stuff
// // that the pointer points to
// // AND space to hold a number
// // 00000011 00000001 01000000
// // 65 => 00000000000111111111100000000000
// // cool! great!

// const someOtherNum = 8;

// console.log(someNum + someOtherNum);
// // read the data at someNum
// // read the data at someOtherNum
// // try to add them together
// // if that doesn't fail, print the result to the screen

// // pointer to the start, size of the data stored, length
// console.log(
//   [1, 2, 7, 2, 56, 568, 678, 567, 456]
// );

// const someOtherArray = [34, 563456, 23, 2345];

// someOtherArray[1] = 'blah';

// 288 bits of space
// 36 memory chunks
// memory chunks[0]
// 32 * index

const someStack = [];
someStack.push(7);
someStack.push(4);
someStack.push(8);
someStack.push(1);
someStack.push(0);
someStack.pop(); // => 0
someStack.pop(); // => 1
someStack.pop(); // => 8
someStack.push('notANumber');
someStack.pop(); // => 'notANumber'
someStack.pop(); // => 4

const someArray = [];
console.log(someArray.length);
someArray[1000] = 7;
// this array doesn't have 1001 spots
// mr. OS Kernel can I please have 1001 slots
console.log(someArray);
