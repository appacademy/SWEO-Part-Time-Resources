/*NOTES LINK (ctrl + left-click to open): 
https://hackmd.io/ibCTcNIERy2irC8OUTRcFQ?view#Array-Methods---splice-split-join
*/

// array.splice mutates the array that it is called on. 
//That is, array.splice will modify the existing array and NOT return a new array.
//syntax --> .splice(start, amount-to-remove, data-to-add)

let gameOfThrones = [
    "got-s0","got-s1", "got-s2", "got-s3", "got-s4", 
    "got-s5", "got-s6", "got-s7", "got-s8", "got-sBonus"];
let returnVal = gameOfThrones.splice(8,2,"REAL SEASON FNALE");
console.log("Mutated GoT:", gameOfThrones); // [ 'got-s0', ...,'got-s7', 'REAL SEASON FNALE']
console.log("returnVal-what-removed:", returnVal); // [ 'got-s8', 'got-sBonus' ]