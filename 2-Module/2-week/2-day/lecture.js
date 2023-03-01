// Bind

// that allows us to add context to the function
// and allows to add variables to the function when invoked

// returns a bounded function
// a bounded function is also known as an 'exotic function'
// an exotic function is a function that has a context
// and that context cannot be changed and it always be the same context
// takes in more than 1 arguments

// Syntax

// Function.bind(thisArgs)
// Function.bind(thisArgs, (optional))
// Function.bind(thisArgs, arg1,arg2,...)
// Function.bind(thisArgs, ...args)


function multiply(...args){
	// console.log(x * y)
	// console.log(this)

	const total = this.num1 + this.num2 + this.num3

	// console.log(total)

	// this.add(x, y)
	console.log('this = ', this)
	// console.log('x = ', x)
	// console.log('y = ', y)
	console.log('args = ', args)
	// return
};

const context = {
	'num1' : 10,
	'num2' : 20,
	'num3' : 10,
	'add' : function add(x, y){
		console.log(x + y)
	}
}

const newContext = {
	'num4' : 50
}

// multiply(5, 10)
									//this    arg1 = param1, param2
// const bindedMultiply = multiply.bind(context, newContext, 1, 2, 3, 4)

const bindedMultiply = multiply.bind(undefined, newContext, 1, 2, 3, 4)

// console.log(multiply)
// console.log(bindedMultiply)
// bindedMultiply()

// const rebindedMultiple = bindedMultiply.bind(newContext)

// rebindedMultiple()


// Call
// 'c' for comma
// takes in more than 1 argument

// Apply
// 'a' for array
// takes in only 2 arguments

// they don't return a function
// they invoke/call your function

// Syntax for call
// Function.call(thisArgs)
// Function.call(thisArgs, (optional))
// Function.call(thisArgs, arg1,arg2,...)
// Function.call(thisArgs, ...args)

// Syntax for apply
// Function.apply(thisArgs)
// 							objects
// Function.apply(thisArgs, [...args])

// const callMultiply = multiply.call(context, newContext, 1, 2, 3, 4)

// const applyMultiply = multiply.apply(context, [newContext, 1,2,3,4])
// console.log(callMultiply) // undefined

// Context in arrow functions
// arrow functions apply context differently

// arrow functions don't have an inherent binding to the 'this' keyword
// they are lexically bound
// locally scoped bounded

// the context of an arrow function isn't determined by how its invoked,
// by the method used to invoke, or by the constructor style

// const testArrow = () => {
// 	console.log(this)
// }

// // testArrow()

// const bindedTestArrow = testArrow.bind(context)
// console.log(bindedTestArrow)
// bindedTestArrow()

class Person{
	constructor(name){
		this.name = name
	}

	sayName(){
		console.log('sayName = ', this)
		// function innerFunction(){
		// 	console.log('innerFunction = ', this)
		// }

		// innerFunction()
	}

	sayArrowName = () => {
		// console.log('sayArrowName = ', this)
		// const arrowInnerFunction = () => {
		// 	console.log('arrowInnerFunction = ', this)
		// }
		// arrowInnerFunction()
		const testArrow = () => {
			console.log(this)
		}

		// testArrow()

		const bindedTestArrow = testArrow.bind(context)
		// console.log(bindedTestArrow)
		bindedTestArrow()
	}
}

const newPerson = new Person('Alex');

// newPerson.sayName()
newPerson.sayArrowName()
