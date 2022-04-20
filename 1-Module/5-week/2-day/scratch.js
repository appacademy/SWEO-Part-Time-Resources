// [
// 	4,
// 	3,
// 	2,
// 	1
// ]

// const stack = [1, 2, 3]; // 4]
// // when I push, I must pop to remove

// const queue = [2, 3, 4] // [1,
// // when I push, I must shift to remove

// function foo() {
//   debugger
//   let fooRes = 2 + bar();
//   debugger;
//   return fooRes;
// }

// function bar() {
//   debugger;
//   let barRes = 6 + baz();
//   debugger;
//   return barRes;
// }

// function baz() {
//   debugger;
//   let bazRes = 3;
//   debugger;
//   return bazRes;
// }

// console.log(foo());

/*
[

]
*/

/*
[
	baz() => 3
	bar() => 6 + baz()'s return value
	foo() => 2 + bar()'s return value
]
*/

/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1
*/

// Base case => when n === 1
// Recursive case => n + rec_sum()
// Recursive step => n - 1

const rec_sum = (n) => {
  debugger;

  if (n === 1) {
    return 1;
  }

  let sum = 0;
  debugger;

  let recursiveResponse = rec_sum(n - 1);
  debugger;
	
  sum += n + recursiveResponse;
  debugger;

  return sum;
};

console.log(rec_sum(5));

// const loop_sum = (n) => {
// 	let sum = 0;

// 	for (let i = 0; i <= n; i++) {
// 		sum += i
// 	}

// 	return sum
// }

// console.log(loop_sum(5))
