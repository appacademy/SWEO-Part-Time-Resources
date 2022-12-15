// String Interpolation
let firstName = 'Joe';
let lastName = 'Mama';
let age = 32;
let array = [1,2,3];

// console.log(firstName + ' ' + lastName + ' is ' + age + '.' );
let sentence = `${firstName} ${array} is ${age}.`
// console.log( sentence );

// sentence.split('').forEach( char => console.log(char))

// Default Parameters
const multiply = ( num1, num2 = 7) => num1 * num2;

// console.log( multiply(2, 5) )
// console.log( multiply(3) )

function allFactorials( n , factorials = [1] ) {
  if ( n > factorials.length ) {
    factorials = allFactorials( n - 1, factorials );
  }

  factorials.push( n * factorials[n - 1]);

  return factorials;
}

console.log(allFactorials(5)) // [1,1,2,6,24,120]