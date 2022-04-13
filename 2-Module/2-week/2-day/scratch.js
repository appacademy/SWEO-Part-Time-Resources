// bind
// Function.prototype.bind()


// returns/creates a new function
// it does not invoke the function

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	showContext(){
		// console.log(this);
		// console.log(this.name);
		// console.log(this.age);

		function declaredFunc(){
			console.log(this)
		}

		declaredFunc() //

		// does not have the this keyword
		// does not have the super keyword
		const arrowFunc = () => {
			console.log(this)
		}

		arrowFunc() //
	}
}

const newPerson = new Person('Alex', 30);

newPerson.showContext();

// class Animal{
// 	constructor(name, age){
// 		this.name = name;
// 		this.age = age;
// 	}

// 	bark(){
// 		console.log(`${this.name} goes arf arf`);
// 	}
// }

// const cat = {
// 	"name" : "Gwendolyn"
// }

// const dog = {
// 	"name" : "Maxie"
// }

// const newPerson = new Person('Alex', 30);
// const newAnimal = new Animal('Gwendolyn', 8);
// //
// const newFunction = newPerson.showContext;
// const animalFunc = newAnimal.bark;

// const newContext = animalFunc.bind(newPerson)
// newContext()

// setTimeout(newPerson.showContext.bind(newPerson), 2000)
// bind(context, arg1, ..., argN)
// const bindedFunction = newFunction.bind(newPerson)

// bindedFunction()

// const bindedFunction2 = newFunction.bind(cat)
// bindedFunction2()
// const bindedFunction3 = newFunction.bind(dog)
// bindedFunction3()


// function number(arg1, arg2, arg3){
// 	console.log(arg1, arg2, arg3)
// }

// const bindArg = number.bind(null, 34, 'hello', 'world')

// bindArg()


// call and apply

// Function.prototype.call()
// Function.prototype.apply()

// they invoke the function
// call(context, ...args)
// apply(context, [args])


// animalFunc.apply(newPerson)

function addAnyNumberOfArgs(){
	console.log(arguments)
}



// addAnyNumberOfArgs.call(null, ['Hello', 'World', 'Javascript'])
// addAnyNumberOfArgs.apply(null, ['Hello', 'World', 'Javascript'], '123')
