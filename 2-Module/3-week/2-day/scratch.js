// Big O
// time complexity
// space complexity

// takes in a string that takes into account our timer
// console.time('timer 1');

// console.timeLog('timer 1');

// console.timeEnd('timer 1');

// const start = Date.now();

// for(let i = 0; i < 10; i++){
// 	console.log(i)
// }

// const end = Date.now();

// console.log(end - start + 'ms');


// constant time
// o(1)


function sayHello(n){
	for(let i = 0; i < 5; i++){
		console.log(n)
	}
}

// console.time('timer 1');

// sayHello(10000000)

// console.timeEnd('timer 1');


// linear time
// o(n)
// n = number of values or number of elements
function logNumbers(n){
	for(let i = 0; i < n; i++){ // o(n)
		console.log(i)
	}
	// for(let i = 0; i < n; i++){ // o(n)
	// 	console.log(i)
	// }
}

// o(n) + o(n)
// big O
// o(n)

// console.time('timer 1');
// logNumbers(10000)
// console.timeEnd('timer 1');

// quadratic time
// o(n^2)

function logNumbersTwice(n){
	for(let i = 0; i < n; i++){  // o(n^2)
		for(let j = 0; j < n; j++){
			console.log(i, j)
		}
	}

	for(let i = 0; i < n; i++){ // o(n)
		console.log(i)
	}
	for(let i = 0; i < 5; i++){ // o(5) simplifies o(1)
		console.log(n)
	}
	for(let i = 0; i < 5; i++){ // o(5) simplifies o(1)
		console.log(n)
	}
}

// o(n) + o(n^2) + o(1) + o(1)
// big O
// o(n^2)


// console.time('timer 1');
// logNumbersTwice(100)
// console.timeEnd('timer 1');

// big O
// worst case
// average case
// best case


//space complexity

// constant space
// o(1)

let num = 0;

function addNumbers(n){
	for(let i = 0; i < n; i++){
		num += i
		// num = num + 1
	}
}

// addNumbers(10001231)

// console.log(num)

// linear space
// o(n)

let numArr = [];

function pushNumbers(n){
	for(let i = 0; i < n; i++){
		numArr.push(i)
	}
}

// pushNumbers(100)
// console.log(numArr)

// quadratic space
// o(n^2)

let numArr2 = [];

function logNumbersArrTwice(n){
	for(let i = 0; i < n; i++){
		for(let j = 0; j < n; j++){
			numArr2.push(`${i} ${j}`)
		}
	}

	return numArr2
}

// logNumbersArrTwice(100)
// console.log(numArr2)

const obj = {'one' : 1,
'two' : 2,
'three' : 3,
'four' : 4,
'five' : 5,
'six' : 6}

// constant time operation
// when keying into an object
// console.log(obj.four) // 4


const arr = [1,2,3,4,5]

// constant time operation
// when indexing an array
arr[3] // 4



const matrix = [[1,2, 3],
				[4,5, 6],
				[7,8, 9]]

const arr1 = [1,2,3,4,5,6,7,8,9]


// matrix??

// time complexity o(n * m)
// o(n)
for(let row = 0; row < matrix.length; row++){
	let col = matrix[row]
	for(let innerCol = 0; innerCol < col.length; innerCol ++){
		console.log(matrix[row][innerCol])
	}
}

for(let i = 0; i < arr1.length; i++){ // 4
	for(let j = 0; j < 2; j++){ // 4 + 4 + 4 + 4

	}
}

// 2^n

// time complexity?
// o(n)
