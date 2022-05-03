/*
A logarithm (or log for short) is the inverse of an exponent.
 The logarithm base-n of a number is how many times it must
 be divided by n to reach 1. For example, to find the log base-2 of 32 (log2(32) = ?),
 you divide by the base until you hit 1:
 once (16), twice (8), three times (4), four times (2), and five (1), so log2(32) = 5.
*/

const findLog = (number, base) => {
	let count = 0;
	while(number > 1){
		number /= base;
		count++
	}

	return count
}


console.log(findLog(512, 2)) // 9

console.log(Math.log2(512)) // 9

// console.log(Math.log2(1));    // 0
// console.log(Math.log2(2));    // 1
// console.log(Math.log2(4));    // 2
// console.log(Math.log2(8));    // 3
// console.log(Math.log2(16));   // 4
// console.log(Math.log2(32));   // 5
// console.log(Math.log2(64));   // 6
// console.log(Math.log2(128));  // 7
// console.log(Math.log2(256));  // 8
// console.log(Math.log2(512));  // 9
// console.log(Math.log2(1024)); // 10

// 2 ** 0   // 1
// 2 ** 1   // 2
// 2 ** 2   // 4
// 2 ** 3   // 8
// 2 ** 4   // 16
// 2 ** 5   // 32
// 2 ** 6   // 64
// 2 ** 7   // 128
// 2 ** 8   // 256
// 2 ** 9   // 512
// 2 ** 10  // 1024


/*

Data must be sorted
Data can be accessed by index on constant time

*/
