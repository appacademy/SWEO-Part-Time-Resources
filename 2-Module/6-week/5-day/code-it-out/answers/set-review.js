// will this return true or false?
const setOne = new Set();
let a = [0, "hello"] //different array 
setOne.add(a);

let b = [0, "hello"] //different array
console.log(setOne.has(b)); //true or false? two variables that are referencing different arrays. // FALSE


// will this return true or false?
const setTwo = new Set();
let x = [0, "hello"];
setTwo.add(`${x[0]},${x[1]}`) //expect my data to look: "0,hello"; actual: 
console.log("setTwo", setTwo);

let y = [0, "hello"];
console.log(setTwo.has(`${y[0]},${y[1]}`)); //true or false? //TRUE strings are primitive and so they hold the same form, and "h" === "h"