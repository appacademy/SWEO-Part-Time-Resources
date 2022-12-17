// IIFE - Immediately Invoked Fuction Expression
  // An anonymous function that runs immediately upon definition.
  let saved = (function() {
    let bName = 'Barry';
    return 1 + 1;
  })()
  // console.log(saved);
  // console.log( bName );

  // Syntax
  // (() => {})()
  // (function() {})()

// Recap on Variable Hoisting
// var - the variables are hoisted, and assigned the default of undefined.
// let and const - the variables are hoisted, Temporal Dead Zone, a place without a default value.

let func = () => {
  // let first = TDZ
  // const second = TDZ
  // var third = undefined

  console.log( first, second, third );

  let first = 1;
  const second = 2;
  var third = 3;
}

// Intro to Function Hoisting
// multiply = multiply;
// console.log( multiply(3) );
// console.log( undefined(3) );

// Function Declarations are hoisted with their assignment.
function multiply( num ) {
  return num * 2;
}
// Function Expression are hoisted without thier assignments.
// var multiply = (num) => num * 2;

// Falsey Values
// console.log( Boolean( -0 ) );
// if ( arr.length )
// NaN, false, 0, -0, '', undefined, null, 0n