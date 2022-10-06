// function summer () {
// 	console.log("It's summer time");
// }

// const summer = function (aVariable) {
//   console.log("It's summer time");
// };

// const summer = (aVariable) => {
//   console.log("It's summer time");
// };

// summer()

//--------------------------------------------------------------

// const returnName = (name, age) => 'My name is ' + name;
// const returnName = name => {
//  	return 'My name is ' + name;
// }
// console.log(returnName('Will'));


//--------------------------------------------------------------


const arr = [1, 2, 3];

// const addOne = arr.map(function (num) {
// 	return num + 1
// });

// const addOne = arr.map((num) => {
// 	return num + 1
// });

// const addOne = arr.map(num => num + 1);
// console.log(addOne);

// const funcName = () => {
// 	return 5
// }
// console.log(funcName())
// console.log(addOne)


//----------------------------------------------------------------
//CLOSURES

// - Before we look at closures: Remmember that functions (inner functions)
//can be return from another function (higher order func)

// - A function that is bundled together with references with any of its surrounding state (lexical scope)
// - lexical environment consists of any variables available within the scope
// in which the closure was declared (which are the local inner scope, outer function's scope, and global scope).


// - Closure, it's the ability for an `inner function` (declared inside of another function) to access, or to change `variables` that were initialized in an `outer function's` scope (outer function's variables).
//     - Summary: `innerFunc` access `outerFunc` variables.

// - The inner function is creating a `CLOSURE` around the outer function's (higher order func) variables.
//closing over or 'capturing' the outer functions variables

//     -Therefore, the inner function will always have access to those variables
// even if we return / stop execution of the outer function.

const addNum = (num) => {
  return function addNewNum (newNum) {
		return num + newNum;
	};
};

// console.log(addNum)
// console.log(addNum(5))

// const add5 = addNum(5)
// console.log(add5(10))
// console.log(add5(100))

// const add100 = addNum(100)

// console.log(add100(20))


///--------------------------------------
