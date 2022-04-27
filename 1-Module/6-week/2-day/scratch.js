// --------------- Problem 2 ---------------------------
// const foo = (a, b) => {
// 	console.log('time is up');
// 	console.log(`${a} ${b}`);
// 	console.log('end');
// }

// setTimeout(foo, 1000, 'potato', 'tomato');

// --------------- Problem 3 ---------------------------
// const foo = (a, b) => {
// 	console.log('time is up');
// 	console.log(`${a} ${b}`);
// }

// const res = setTimeout(foo, 1000, 'potato', 'tomato');
// clearTimeout(res);

// --------------- Problem 1 ---------------------------
// const foo = (a, b) => {
// 	console.log('time is up');
// 	console.log(`${a} ${b}`);
// }

// setInterval(foo, 1000, 'potato', 'tomato');

// --------------- Problem 2 ---------------------------
// const foo = (a, b) => {
// 	console.log('time is up');
// 	console.log(`${a} ${b}`);
// }

// const interval = setInterval(foo, 1000, 'potato', 'tomato');
// clearInterval(interval);

// --------------- Problem 3 ---------------------------
// const cb = () => {
// 	console.log('time is up');
// 	count--;

// 	if (count === 0) {
// 			clearInterval(intervalObj);
// 	}
// }
// const intervalCount = (count, delay) => {
// 	const intervalObj = setInterval(cb, delay);
// }

// const intervalCount = (count, delay) => {
// 	const intervalObj = setInterval(() => {
// 			console.log('time is up');
// 			count--;

// 			if (count === 0) {
// 					clearInterval(intervalObj);
// 			}
// 	}, delay);
// }

// intervalCount(3, 5000);


/***********************************************************************
Write a function, `postponeWithArgs`, that accepts a callback and a delay in 
milliseconds as arguments. `postponeWithArgs` should return a new function that
accepts any number of arguments. When the returned function is called, it should 
invoke the callback after the given delay, passing any arguments it receives to 
the callback.

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Examples

const greet = (person) => console.log('Hello ' + person + '!');
const slowGreet = postponeWithArgs(greet, 1000);
slowGreet('Rose'); // prints 'Hello Rose!' after 1000 ms
slowGreet('Alex'); // prints 'Hello Alex!' after 1000 ms

const printSum = (num1, num2) => console.log(num1 + num2);
const slowPrintSum = postponeWithArgs(printSum, 500);
slowPrintSum(4, 3); // prints '7' after 500 ms
slowPrintSum(2, 8); // prints '10' after 500 ms

***********************************************************************/

const postponeWithArgs = (cb, delay) => {
	// return (...args) => {
	// 	setTimeout(cb, delay, ...args)
	// }
	return (...args) => {
		setTimeout(() => cb(...args), delay)
	}
}

const printSum = (num1, num2) => console.log(num1 + num2);
const slowPrintSum = postponeWithArgs(printSum, 500);
slowPrintSum(4, 3); // prints '7' after 500 ms
slowPrintSum(2, 8); // prints '10' after 500 ms