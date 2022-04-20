const [addNums, addManyNums] = require("./phase-1");

// `console.time()`, `console.timeLog()` and `console.timeStop()`

// function addNums10Timing(increment) {

// 	// Fill this in

// 	let res = []
// 	let total = 0
// 	for(let i = increment; i <= 10 * increment; i+= increment){
// 		console.time('timer')
// 		console.timeLog(`timer`)
// 		console.log('start')
// 		total = addNums(i)
// 		console.timeEnd(`timer`)
// 		console.log('end')
// 		res.push(total)
// 	}
// 	return res
// }


function addNums10Timing(increment) {

	// Fill this in

	let time1;
	let time2;
	let startTime;
	let finalTime;

	startTime = Date.now()

	let arr = [];

	for (let i = 1; i <= 10; i++) {
	  time1 = Date.now()
	  arr.push(addManyNums(i * increment))
	  time2 = Date.now()
	  console.log(time2 - time1 + 'ms')
	}

	finalTime = Date.now()
	console.log(finalTime - startTime + 'ms')
	return arr;

}



// function addManyNums10Timing(increment) {
// 	let newArr = [] // space o(1)
// 	let n = 0 // space o(1)

// 	for (let i = 1; i <= 10; i++) { // time o(1)
// 	  n = i * increment
// 	  console.time('timer') // creates the timer
// 	  console.timeLog(`timer`)
// 	  console.log('start')
// 	  newArr.push(addManyNums(n)) // time o(n^2)
// 	  console.timeEnd(`timer`)
// 	  console.log('end')
// 	}
// 	return newArr
// }


n = 1000000
console.log(`addNums(${n}): `);


addNums10Timing(10000);

// console.log("\n***********\n");

// n = 1000
// console.log(`addManyNums(${n}): `);
// addManyNums10Timing(5000);
