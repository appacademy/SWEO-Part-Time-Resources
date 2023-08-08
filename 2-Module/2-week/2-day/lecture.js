// Bind

// allows us to add context to a function
// it also allows to add variables when invoking function

// it returns a bounded function
// also known as 'exotic functions'
// an exotic function will always have the same context
// bind functions depend on how it is invoked
// takes in more than 2 arguments

// Syntax
// Function.prototype.bind(thisArg, (optional))
// Function.bind(thisArg, ...arg)

// Function.bind(null, args)
// Function.bind(undefined, args)

//

function sum(...args){
	// console.log(this)
	// return x + y
	// return `${this.number1 + x + this.number2 + y}`
	const _default = this.number1 + this.number2
	return args.reduce((accu, cur)=> {
		return accu + cur
	}, _default)
}

const numbers = {
	'number1' : 10,
	'number2' : 20
}

// console.log(sum(1, 2))

const newSum = sum.bind(numbers, 1,2,3)

// console.log(newSum) // exotic function
// newSum()
// console.log(newSum(15, 12))


// Call
// since it starts with 'c' its comma seperated
// therefore it takes more than one argument

// Syntax
// Function.call(thisArgs, arg1, arg2, ...)
// Function.call(thisArgs, ...args)

// Apply
// since it starts with 'a' it only takes in two arguments
// the second being an array

// Syntax
// Function.apply(thisArgs, [..args])

// It calls/invoke the function when applied or called on


const calledSum = sum.call(numbers, 1,2,3)

// console.log(calledSum)

const appliedSum = sum.apply(numbers, [1,2,3,15,12])

// console.log(appliedSum)


class Person{
	constructor(name){
		this.name = name
	}

	// instance method/function
	sayHello(){
		console.log('sayHello = ', this)
	}

	sayHelloArrow = () => {
		console.log('sayHelloArrow = ',this)
	}

	sayHelloArrow2(){
		const innerArrow = () => {
			console.log('innerArrow = ', this)
			const nestednestedArrowFunction = () => {
				console.log('nestednestedArrowFunction = ', this)
			}

			nestednestedArrowFunction()
		}

		innerArrow()
	}

	sayHello2(){
		function innerHello(){
			console.log('innerHello = ', this)
		}

		innerHello()
	}
}

// Context in Arrow Functions
// Arrow functions don't have an inherent binding
// to a 'this' based on context

// they are lexically bound
// meaning scoped bound or locally bounded

// we cannot use call, apply, and bind on an arrow function
// all this means is that arrow functions 'this' refers to the code that
// contains it

// it does not depend on when it was invoked, what method was used on it or constructor style
// it only cares on where you invoked it.

// const arrowSum = (...args) => {

// 	console.log(this)
// 	// const _default = this.number1 + this.number2
// 	// return args.reduce((accu, cur)=> {
// 	// 	return accu + cur
// 	// }, _default)
// }

// arrowSum()

// const bindedArrowSum = arrowSum.bind(numbers)

// bindedArrowSum()

const newPerson = new Person('Alex')

// newPerson.sayHello2()
newPerson.sayHelloArrow2()
