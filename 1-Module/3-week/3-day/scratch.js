// POJOs (Plain Old JavaScript Objects)
// let car = {
//   make: 'Toyota',
//   model: 'Celica',
//   year: 2001,
//   isInsured: true,
//   trunkStuff: {},
//   variable: 'here it is',
//   timeTwo: (num) => { 
//     return num * 2;
//   },
//   arr: [1, 2, 3]
// };
// console.log(car.arr[1])

// let variable = [1, 2, 3];
// variable[num](4);
// console.log(car[model]);

// console.log(car);
// console.log( car.make );
// console.log( car[variable] );

// car['engine'] = 'k9'
// console.log(car);
// console.log( car.variable )

// console['log']('hello');
// console.log( car.timeTwo(2) );

//------------------------------------

// let keys = Object.keys( car );
// let vals = Object.values( car );
// let entries = Object.entries( car );
// console.log( keys, vals );
// console.log(entries);
// if (keys.includes(vals)) console.log(true)

// if ( car[variable] !== undefined ) console.log(true);

//----------------------------------

// for (let i in car) {
//   console.log( i, car[i] );
// }
// car.trunkStuff.tire = 'big one';
// car.trunkStuff.maps = ['Ohio State Map', 'Kansas Highways']
// console.log(car.trunkStuff)

// object to keep track of the number of letters in a string
let sentence = 'the quick brown fox jumped over the lazy dog';

const letterCounter = (string) => {
  // let array = string.split(' ').join('').split('');
  let counter = {};
  // console.log( counter['T'] )

  for (let i = 0; i < string.length; i++) {
    // if ( counter[ string[i] ] ) {
    //   counter[ string[i] ]++;
    // } else {
    //   counter[ string[i] ] = 1
    // }

    let char = string[i];
    if (char in counter) {
      counter[char]++;
    } else {
      counter[char] = 1
    }
  }

  delete counter[' '];

  return counter;
}

console.log(letterCounter(sentence));

//============================================================================
// Practice Solutions
//============================================================================
// Iterate through Obj
function printObject(obj) {
  // your code here...
  // get all keys

  // iterate over those keys
  // for (let key in obj) {
  //   // print key - value
  //   console.log( key + ' - ' + obj[key] );
  // }

  //   let entries = Object.entries(obj); //[[]]

  //   for (let i = 0; i < entries.length; i++) {
  //     let entry = entries[i];
  //     console.log( entry[0] + ' - ' + entry[1] );
  //   }

  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    console.log(key + ' - ' + obj[key]);
  }
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120

// Using Object.keys I
const obj = {
  first: "1",
  second: 2,
  third: "three"
}

// Write your solution here.

// let keys = Object.keys(obj);
// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   console.log( obj[key] );

// let keys = Object.keys(obj);
// for (let key of keys) {
//   console.log( obj[key] );
// }

for ( let key in obj ) {
console.log( obj[key] );
}
// Using Object.keys II
const obj = {
  red: "circle",   // 1 + 1
  blue: "square",  // 1 + 1
  green: "hexagon" // 2 + 1
}

// Write your solution here.
const countE = (object) => {
let keys = Object.keys(object); //get array of keys

for (let i = 0; i < keys.length; i++) { //iterate through keys
  let key = keys[i]; //getting current key
  // console.log(typeof key, typeof object[key]);
  let keyVal = key + object[key]; //redcircle, bluesquare
  // console.log(keyVal)
  let count = 0; // count of es for current word
  
  for (let j = 0; j < keyVal.length; j++) { // iterate over the word
    let char = keyVal[j]; // current character
    if (char === 'e') count++; //if e, increase count
  }
  
  if (count >= 3) console.log( object[key] ); //if 3 or more es, console.log
}
}

countE(obj);

// Should print "hexagon"

// Using Object.values
const obj = {
  first: "1",
  second: 2,
  third: "three"
}


const printValues = obj => {
// Write your solution here.
let vals = Object.values(obj);

for (let i = 0; i < vals.length; i++ ) {
  let val = vals[i]
  console.log( val );
}
}

printValues(obj);       // "1", 2, "three" (not apparent in terminal, but the 1 would be a string)

// Using Object.entries
const obj = {
  Jacky: "Honda",
  Ramon: "Kia",
  Lexi: "Mercedes",
  Eli: "Honda",
  Bradley: "Honda",
  Cecily: "BMW",
  Manny: "Audi"
}

const printOwners = obj => {
  // Write your solution here.
let entries = Object.entries(obj); // [['Jacky', 'Honda],['Ramon', 'Kia'] ...]

for (let i = 0; i < entries.length; i++) {
  let owner = entries[i][0];
  let brand = entries[i][1];
  
  if (owner.length > 5) {
    if (brand === 'Honda') {
      console.log( owner );
    }
  }
}
}

printOwners(obj);               // Bradley

// Writing Object Methods
const obj = {
  Jacky: "Honda",
  Ramon: "Kia",
  Lexi: "Mercedes",
  Eli: "Honda",
  Bradley: "Honda",
  Cecily: "BMW",
//     printUniqueValues: () => {
//       let vals = Object.values(obj) // []
//   let seen = []; //see if unique array

//   for (let i = 0; i < vals.length - 1; i++ ) {
//     if ( !seen.includes( vals[i] ) ) {
//       seen.push( vals[i] );
//       // console.log( vals[i] );
//     }
//   }

//   // console.log( seen.join(' ') );
//   return seen.join(' ')
//     }
}

// Write your solution here.
obj['printUniqueValues'] = () => {
let vals = Object.values(obj) // []
let seen = []; //see if unique array

for (let i = 0; i < vals.length - 1; i++ ) {
  if ( !seen.includes( vals[i] ) ) {
    seen.push( vals[i] );
    // console.log( vals[i] );
  }
}

// console.log( seen.join(' ') );
return seen.join(' ')
}

// console.log(obj);
console.log( obj.printUniqueValues() );               // Honda Kia Mercedes BMW

// Refactoring Iteration
const obj = {
  a: "get",
  b: "all",
  c: "of",
  d: "the",
  e: "keys"
}

const printValues = obj => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let key of Object.keys(obj)) {
      if(vowels.indexOf(key) >= 0) {
          console.log(obj[key]);
      }
  }
}

const printValuesRefactored = obj => {
  // Write your solution here.
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let key in obj) {
  if ( vowels.includes(key) ) console.log( obj[key] );
}
}

printValues(obj);               // get values
printValuesRefactored(obj);     // get values