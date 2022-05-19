// 2. Smaller Big-O function is more desireable than a larger one.
//   -We want to use a minimal amount of time and space.

// 3. Big-O describes the worst case scenario for our code

// 4. Big-O function should be simplified to show only its most dominant
//     mathematical term.

//     Key Terms:
//     n: the size of the input
//     T(f): an unsimplified mathematical function
//     O(f): the Big-O simplified mathematical function

//     - Simplify Products: if the function is a product of many terms, we drop the
//       terms that don't depend on the size of the input.

//     Unsimplified	        Big-O Simplified
//     T( 5 * n2 )	            O( n2 )
//     T( n * n )	        O( n )
//     T( n / 12 )	            O( n )
//     T( 42 * n * log(n) )	O( n * log(n) )
//     T( 12 )	                O( 1 )

//     // - Simplify Sums: if the function is a sum of many terms, we keep the term
//     //   with the largest growth rate and drop the other terms.

//     Unsimplified	        Big-O Simplified
//     T( n3 + n2 + n )	    O( n3 )

let addNums = (n) => {
	let sum = 0
	for(let i = 1; i <=n;i++){
			sum+=i
	}
	return sum
}

// console.time("My Add Num Func")
// console.log(addNums(1000000000))
// console.timeEnd("My Add Num Func")

// let startTime = Date.now()  // number of milliseconds from some time in 1970
// addNums(1000000000)
// let endTime = Date.now()

// console.log(endTime - startTime)

// let someNum = 1000000000

// for(let i = someNum; i <= 10 * someNum; i+=someNum){
//     let startTime = Date.now()
//     addNums(i)
//     let endTime = Date.now()
//     console.log(endTime - startTime)
// }

// O(1) Constant Complexity
// It is constant because it does not depend on the input growing
// let constantTimeFunc = (n) => {
//     let something = 1 + 2 // constant space
//     return n + 1 // Time Complexity O(1)
// }

// console.time("My Constant Func")
// console.log(constantTimeFunc(100000000))
// console.timeEnd("My Constant Func")

// let linearTimeFunc = (n) => {
//   // Our time grown linearly with our input, the bigger our input gets the longer the code takes to run
//   // Space grow the same because we are pushing each number into an array
//   let arr = []; // Space complexity is Linear O(n)
//   let arr2 = [1, 2, 3, 4]; // constance space O(1)
//   for (let i = 1; i <= n; i++) {
//     // Linear Time Complexity O(n)
//     // The time the loop takes grows when the input size grows
//     arr.push(i); //
//   }
//   return arr;
// };

// console.time("My Linear Func")
// linearTimeFunc(10000)
// console.timeEnd("My Linear Func")

// let startTime1 = Date.now()
//     linearTimeFunc(1000)
// let endTime1 = Date.now()
// let startTime2 = Date.now()
//     linearTimeFunc(10000)
// let endTime2 = Date.now()
// let startTime3 = Date.now()
//     linearTimeFunc(100000)
// let endTime3 = Date.now()

// console.log(endTime1 - startTime1)
// console.log(endTime2 -startTime2)
// console.log(endTime3 - startTime3)

// Still O of N^2
// let helperFunc = (n) => {
//     let arr = []
//     for(let j = 1; j <= n; j++){
//         arr.push(j)
//     }
// }

// let quadTimeFunc = (n) => {
//     let arr = [] // ??
//     // This is exponential Time complexity because I have to complete my inner
//     // loop before I can go to the next iteration of my outer loop  O(n^2)
//     for(let i = 1; i <= n; i++){
//         for(let j = 1; j <= n; j++){
//             arr.push(j)
//         }
//     }
// }

// console.time("My Linear Func")
// quadTimeFunc(1000)
// console.timeEnd("My Linear Func")

// What is the time complexity of printTwo?


function printTwo(x) {

	for (let i = 0 ; i < x ; i++) {
		console.log('2')
	}

	for (let i = 0 ; i < x ; i++) {
			console.log("2");
	}

}





//What is the time complexity of printThree?

function printThree(n) {

	for (let i = 0 ; i < n ; i++) {
console.log(n + 1);
	}

	for (let j = 0 ; j < n ; j++) {
console.log(n + 1);
	}

	for (let b = 0 ; b < n ; b++) {
console.log(n + 1);

	}

console.log(n + 1);

}




//What is the time complexity of printOne?

function printOne(n) {
for (let b = 0; b < n; b++) {
	console.log(n + 1);
}

for (let a = 0; a < n; a++) {
	for (let b = 0; b < n; b++) {
		console.log(n + 1);
	}
}

for (let d = 0; d < n; d++) {
	console.log(n + 1);
}
}




function printNSquared(n) {
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
				for (let k = 1; k <= n; k++) {
					console.log("N Squared")
			}
		}
	}
}


function factorial(n) {
	if (n === 1) return;

	for (let i = 1; i <= n; i++) {
		factorial(n - 1);
	}
}
