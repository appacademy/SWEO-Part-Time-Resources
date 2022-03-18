// > Write a function called recRev that takes in an `array` and outputs
// > that array reversed.
// > You must solve this problem using recursion and without mutating
// > the original array.


// sample sets
// recRev([9,0,1,2]) // [2,1,0,9]
// recRev([4,3,2,1]) // [1,2,3,4]

// recRev([0]) // [0]
// recRev([]) // []
// recRev([0, 1]) // [1]

let recRev = arr => {
	// base case
	if(arr.length === 0) return []

	// recursive case

	// recursive step
	return [arr[ arr.length - 1], ...recRev(arr.slice(0, arr.length - 1))]
}

// console.log(recRev([0])) // [0]
// console.log(recRev([0, 1])) // [1, 0]
// console.log(recRev([9,0,1,2])) // [2,1,0,9]

// default paramaters


// let c = "Hello World"
// c = []

function test(a,b,c = 'Hello World'){
	console.log(a) //
	console.log(b) //
	console.log(c) //
}

// test(10, 1, [])


const range1 = (start, end) => {
	if (start === end) return [];
	console.log(start, ' start')
	return [start, ...range1(start + 1, end)];
};

const range2 = (start, end, arr = []) => {
	if (start === end) return arr;
	arr.push(start);
	console.log(arr, 'our array')
	return range2(start + 1, end, arr);
};

// range2(2, 10)
// range1(2, 10)
