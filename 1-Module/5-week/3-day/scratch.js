// String Interpolation
  let firstName = `Tristan`;
  let lastName = 'Huckabee';
  let age = 27;
  let findAge = (num) => {
    if (age > 100) return 'old'
    else return 'not old';
  }
  

  console.log( firstName + ' ' + lastName + ' is ' + age + ".");
  console.log( `${firstName} ${lastName} is ${findAge(age)}.` )
// Default Parameters
const multiply = (num1, num2 = 5) => num1 * num2

console.log( multiply(1, 2) ) // 2
console.log( multiply(1) )    // 5

const addToArray = ( el, array = []) => {
  array.push( el )
  return array;
}

console.log( addToArray( 'First' ))
console.log( addToArray( 'First', ['second', 3]))

