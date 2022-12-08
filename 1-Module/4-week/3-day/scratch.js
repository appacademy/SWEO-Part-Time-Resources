// Scope => Global, Local or Function, Block, Lexical
// What is scope? The Set of variables available for use within a program


// Global Scope
// let global = 'hello world';

// let func = () => {
//   // Local Scope
//   let local = 'Local Scope Only';
//   // console.log( global );
//   // console.log( local  );
//   if ( local ) {
//     let block = 'Block Scope Only';
//     // console.log( block )
//   }
// }
// func();
// console.log( global );

// let first = 1;

// let func = () => {
//   if (first % 2 === 0) {
//     console.log( 'even' );
//   }
//   first = 2;
// }

// console.log(first); 1
// func(); 2
// console.log(first); 2
// func(); even

// let person = 'Rae';

// function sayHello() {
//   let person = 'Jeff';

//   function greet() {
//     console.log( 'Hi, ' + person + '!');
//   }
//   greet();
// }

// let and const => block scope
// var => local scope

// let hoisting = () => {
//   console.log( testHoist );
//   if (true) {
//     var testHoist = 32;
//   }
//   console.log( testHoist );

//   var testHoist = 3;
//   console.log( testHoist );
// }

// hoisting();

// sayHello();
// console.log( person );

// Closures
// What is a closure? A closure is the combination of a function and the lexical environment within which that function was declared.

function climbTree( treeType ) {
  let treeString = 'You climbed a ';

  function sayClimbTree() {
    return treeString + treeType;
  }

  return sayClimbTree;
}

const oak = climbTree("Oak");
// console.log(oak());
const pine = climbTree('Pine');
// console.log(pine());

function makeAdder( x ) {
  let ys = []

  return function ( y ) {
    ys.push(y);
    return x + y;
  }
}

// const add5 = makeAdder( 5 );
// const add3 = makeAdder( 3 );
// console.log( add5( 2 ) );
// console.log( add3( 7 ) );
// console.log( add3( 3 ) );

function checkEven( string ) {
  if ( string === 'odd') {
    return function( x ) {
      if (x % 2 !== 0) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return function( x ) {
      if (x % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}

let isEven = checkEven('even');
let isOdd = checkEven('odd');
// console.log( isEven(3) );
// console.log( isOdd(3) );

function elephantCollector() {
  const elephants = ['dumbo'];

  return function( name ) {
    elephants.push( name );
    return elephants;
  }
}

let elephantParade = elephantCollector();
let elephantParade2= elephantCollector();
// console.log( elephants );
elephantParade2( 'Sandsy' );
elephantParade( 'Sandsy' );
elephantParade( 'Augi' );
console.log( elephantParade(( 'Raena' )) );
console.log( elephantParade2(( 'Raena' )) );


