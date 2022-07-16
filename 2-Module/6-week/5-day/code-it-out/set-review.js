// will this return true or false?
const setOne = new Set();
let a = [0, "hello"]
setOne.add(a);

let b = [0, "hello"]
console.log(setOne.has(b)); //true or false?


// will this return true or false?
const setTwo = new Set();
let x = [0, "hello"];
setTwo.add(`${x[0]},${x[1]}`)

let y = [0, "hello"];
console.log(setTwo.has(`${y[0]},${y[1]}`)); //true or false?