const myArr = [1, 2, 3];
const otherArr = [...myArr];

let myNum = 5;
let otherNum = myNum;

otherArr.pop();
otherNum += 100;

console.log(myArr);
console.log(otherArr);
// console.log(myNum);
// console.log(otherNum);
