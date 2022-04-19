// const stack = [1, 2, 3]; // 4]
// // when I push, I must pop to remove

// const queue = [2, 3, 4]; // [1,
// // when I push, I must shift to remove

// function foo() {
//   // debugger;
//   let fooRes = 2 + bar();
//   // debugger;
//   return fooRes;
// }

// function bar() {

//   let barRes = 6 + baz();
//   // debugger;
//   return barRes;
// }

// function baz() {
//   // debugger;
//   let bazRes = 3;
//   // debugger;
//   return bazRes;
// }

// console.log(foo());

/* Call Stack

[
11
]

*/

/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1
*/

// What's base => when n === 1
// What's case => n + rec_sum()
// What's step => n - 1

const rec_sum = (n) => {
  debugger;
  if (n === 1) {
    debugger;
    return 1;
  }
	let sum
	if (n === 2) {
		sum = n + rec_sum(n - 1); // n = 5, => 5 + rec_sum(4)
	} else {
		sum = n + rec_sum(n - 1); // n = 5, => 5 + rec_sum(4)
	}
	debugger;
  return sum;
};

// const loop_sum = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// };

console.log(rec_sum(5));
