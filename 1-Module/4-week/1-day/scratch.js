// What is a 'callback'?
// callbacks are functions passed as arguments into other functions
  // Functions are Objects Proof
  let proof = () => true;
  // console.log( proof instanceof Object);
// Named Callbacks
let math = (num1, num2, cb) => {
  let sum = num1 + num2;
  let res = cb( sum )

  return res;
}

let times2 = (num) => {
  return num * 2;
}

// console.log( math( 1, 2, times2) );
// Anonymous Callbacks
console.log( math( 3, 2, (num) => {
  return num * num;
}));
// Using Built-in Methods as Callbacks
console.log( Math.sqrt( 25 ) );

console.log( math( 19, 6, Math.sqrt ) );
// Optional Callbacks
let add = ( num1, num2, cb ) => {
  if ( cb === undefined ) {
    return num1 + num2;
  } else {
    return cb( num1 + num2 );
  }
};

console.log( add( 1, 2 ) );
console.log( add( 1, 2, times2 ));

// Examples
// takes in a callback, string => string all uppercase
let caps = (string, cb) => {
  return cb(string);
}
console.log( caps( 'good job everyone', function(string) {
  return string.toUpperCase();
}))

// .map but with a named function as a argument, double all values
let arr = [2, 4, 6, 8]

let doubler = el => el * 2;
let newArr = arr.map( doubler );
console.log( newArr );