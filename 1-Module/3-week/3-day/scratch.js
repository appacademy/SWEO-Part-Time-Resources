// POJOs (Plain Old JavaScript Objects)

let car = {
  make: 'Toyota',
  model: 'Highlander',
  year: 2002,
  isInsured: false,
  trunkStuff: {
    maps: ['Ohio', 'Kansas', 'Arizona']
  }
}

let obj = {}

obj.first = 1;
obj['second'] = 2;

// console.log(car);
car.engine = '2.5 v6'
car['tires'] = 'black ones'
// console.log(car);
car.trunkStuff.spare = true;
car.trunkStuff.nevada = 'Nevada'
let maps = car.trunkStuff.maps;
// console.log(car)

let arr = [];

arr.push('hi');
arr['push']('hi');

let newKey = 'james';

obj[newKey] = 'Harden';
obj.newKey = 'Eldredge';
// console.log(obj);
 // ------------------------------------------

let keys = Object.keys(car); //[]
let vals = Object.values(car); //[]
// console.log(keys, vals);

let entries = Object.entries(obj) //[[key, values],[],[]]
// console.log( entries );

// console.log( obj );
// --------------------------------------------
// if ( car.headlight !== undefined ) console.log( true );
// console.log( car.headlight )
// if ( !('headlight' in car) ) console.log( true );
// --------------------------------------------

// for...in 
for (let key in car) {
  // console.log( key );
  // if (typeof car[key] === Object) {
  //   for (let innerkey in key) {
  //     console.log(key[innerkey]);
  //   }
  // }
}

for (let key in car.trunkStuff) {
  // console.log(key);
}
// -------------------------------------------

const times2 = num => num * 2;
// console.log( typeof times2 )
obj.timesTwo = (num) => {
  return num * 2;
}

// console.log(obj.timesTwo(3))


// --------------------------------------------------

// function, takes in a string, returns an object that counts the letters of the string
// function
 // res object = {}
 // iterate over string
  // get char
  // if char is a key in res
    // increment up
  // add char as key in res
    // set to val of 1
 //return res

let test = 'abcdefghiiiiiiiii'

const strCount = str => {
  let res = {}; // a: 4

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // res[char] !== undefined
    // char in res
    if ( res[char] ) {
      res[char] += 1;
    } else {
      res[char] = 1;
    }
  }

  return res;
}

// console.log( strCount(test) );