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
let sentence = 'The Quick Brown Fox Jumped Over The Lazy Dog';

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
    if ( char in counter ) {
      counter[ char ]++;
    } else {
      counter[ char ] = 1
    }
  }

  delete counter[' '];

  return counter;
}

console.log( letterCounter(sentence) );