function foo() {
    debugger;
    let res = 2 + bar();
    debugger;
    return res
}

function bar() {
    debugger;
    let res = 6 + baz();
    debugger;
    return res
}

function baz() {
    debugger;
    let res = 3;
    debugger;
    return res;
}

console.log(foo());


//Is JS single-threaded or multi-threaded? What does this mean?
// Single Threaded - Can only do one thing at a time
// What is a 'stack'?
// First in - Last out (FILO)
//-------------------------------------------------------------------

// What is a recursive function?
// A function that calls itself, until it doesn't
// What are the 'parts' of a recursive function?
// Base Case (When should we stop)
// Recursive Case (When should we recurse/call the function(itself))
// Recursive Step (How do I move toward the BC or move out of the RC)

//-------------------------------------------------------------------


// let countdown = (startingNumber) => {
//     for(let i = startingNumber; i > 0; i--) {
//         console.log(i);
//     }

//     return "Time's up!";
// }


// let countdown = (startingNumber) => {
// 	//BASE CASE
//     if (startingNumber === 0) {
//         return "Time's up";
//     }

//     console.log(startingNumber);

// 	//RECURSIVE CASE
// 	//RECURSIVE STEP
//    return countdown(startingNumber - 1);
// }



// console.log(countdown(5))

// let arr = [1,2,3,4,5]
// const recurseSum = (arr) => {
//     console.log("ARR", arr)

// 	//BASE CASE
//     if (arr.length === 1) {
//           return arr.pop();
//       }
// 	  //RECURSIVE STEP
//       let popped = arr.pop()

// 	  //recursive case
//     return popped + recurseSum(arr);
//   };



//   console.log(recurseSum(arr));

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
//2 + 1 --3
//3+ 3 = 6
//4 + 6 = 10
// return 5 + 10 = 15
