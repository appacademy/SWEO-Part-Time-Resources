// What is a 'callback'?
// callbacks are functions passed as arguments into other functions
  // Functions are Objects Proof
  // let proof = () => true;
  // console.log( proof instanceof Object);
// Named Callbacks
  let double = ( num ) => num * 2;

  let multiply = ( num, multiplyFunc ) => {
    return multiplyFunc(num);
  }

  console.log( multiply(6, double) );
// Anonymous Callbacks
  let foobar = ( cb ) => {
    console.log( 'foo' );
    cb();
    console.log( 'bar' );
  }

  foobar(() => {
    console.log('hello');
  })
// Using Built-in Methods as Callbacks
  console.log( Math.sqrt( 36 ) ) //6

  let add = (num1, num2, cb) => {
    let sum = num1 + num2;
    let res = cb( sum );
    return res;
  }

  console.log( add( 4, 12, Math.sqrt ) )
// Optional Callbacks
  add = (num1, num2, cb) => {
    if ( cb === undefined) {
      return num1 + num2;
    } else {
      return cb( num1 + num2 );
    }
  }

  console.log( add( 1, 2 ) ) //3
  console.log( add( 1, 2, double ) ) //6


// Examples
// takes in a callback, string => string all uppercase
  let yell = (string, cb) => {
    return cb(string);
  };
  // let thisCB = (string) => string.toUpperCase();
  console.log( yell( 'good job', (string) => {
    return string.toUpperCase();
  }));
  // console.log( yell( 'good job', thisCB));

// .map but with a named function as a argument, double all values
let arr = [1, 2, 3];

double = ( num ) => num * 2;

let cbRes   = arr.map( double )
let anonRes = arr.map( (num) => double(num) )

console.log( cbRes );
console.log( anonRes );