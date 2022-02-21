/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter 
and returns an array containing:  all the keys from the object **and** all the 
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
***********************************************************************/
// write a function that takes an object as a param
// create a variable that is equal to object . keys passing in my object
// create a variable that s equal to object . values passing my my object
// then return an array with each array spread into it.


function breakDownObj(obj) {
    
}
// Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

// let object2 = {location: 'NY', borough: 'Brooklyn'};
// breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;
