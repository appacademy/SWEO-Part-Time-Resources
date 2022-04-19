// let firstName = "Foul";
// let lastName = "Tarnished";

// // console.log("Hello " + firstName + " " + lastName);

// const nameFunc = str => {
// 	return str
// }

// let greeting = `Hello, ${nameFunc(firstName)} ${lastName}!`;
// console.log(greeting);

const arr = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	let eachNum = arr[i]
// 	sum += eachNum
// }

// console.log(sum)

const recurseSum = (arr) => {
  if (arr.length === 1) {
		return arr.pop();
	}
  return arr.pop() + recurseSum(arr);
};

console.log(recurseSum(arr));
	// Call Stack 5: arr = [1]
		// return 1
	// Call Stack 4: arr = [1, 2]
		// return 2 + Enter Call Stack Again
	// Call Stack 3: arr = [1, 2, 3]
		// return 3 + Enter Call Stack Again
	// Call Stack 2: arr = [1, 2, 3, 4]
		// return 4 + Enter Call Stack Again
	// Call Stack 1: arr = [1, 2, 3, 4, 5]
		// return 5 + Enter Call Stack Again


		const firstTime = ([1, 2, 3, 4, 5]) => {
			// if (arr.length === 1) {
			// 	return arr.pop();
			// }
			return 5 + secondTime([1, 2, 3, 4]); // 5 + 10
		};

		const secondTime = ([1, 2, 3, 4]) => {
			// if (arr.length === 1) {
			// 	return arr.pop();
			// }
			return 4 + thirdTime([1, 2, 3]); // 4 + 6
		};

		const thirdTime = ([1, 2, 3]) => {
			// if (arr.length === 1) {
			// 	return arr.pop();
			// }
			return 3 + fourthTime([1, 2]); // 3 + 3
		};

		const fourthTime = ([1, 2]) => {
			// if (arr.length === 1) {
			// 	return arr.pop();
			// }
			return 2 + fifthTime([1]); // 2 + 1
		};

		const fifthTime = ([1]) => {
			if (arr.length === 1) {
				return 1;
			}
			// return arr.pop() + recurseSum(arr);
		};