// console.log(['thing', 'that', 'we', 'are', 'joining'].join('THING TO JOIN ON'));

// const myFunc = (val) => {
//     val += '!!!';
//     return val;
// };

// 	console.log();

// const myFunc2 = function (val) {
//     return val;
// };

// function myFunc3(val) {
//     return val;
// }

// console.log(isNaN());
// console.log(Array.isArray());

// console.log("Hello" + 1)
// console.log("Hello" * 10)

// const intDivide = (num) => {
//     if (num % 3) {
//         const remainder = num % 3;
//         num -= remainder;
//         return num / 3;
//     } else return num / 3;
// };

// console.log(intDivide(9));
// console.log(intDivide(10));

let myStr = 'Hello';
let otherStr = myStr;

const myArr = [1, 2, 3];
const otherArr = [...myArr];

// otherStr += '!!!';
otherArr.pop();

// console.log(otherStr);
// console.log(myStr);

console.log(otherArr);
console.log(myArr);
