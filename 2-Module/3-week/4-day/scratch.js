const someThing = 7;
// request to reserve some variable
//  that can hold a number;
// set that reserved memory to 7;

const someOtherThing = 8;
// request different space
// that space must also be able to hold a number
// store an 8 in that space

console.log(someThing + someOtherThing);
// read the memory at someThing
// read the memory at someOtherThing
// add those two values together

const someTerribleArray = [
  [
    'a',
    'b',
    'c'
  ]
];

const someStack = [7, 7, 7];

someStack.push(7);
someStack.push(7);
someStack.push(7);
someStack.push(7);
someStack[2];
// find someStack in memory
// go to position 2
// position 2 is datatype * 2
// datatype is 8 bits
// 2 * 8 = 16
// start reading from 16th bit of occupied space
someStack.pop();
