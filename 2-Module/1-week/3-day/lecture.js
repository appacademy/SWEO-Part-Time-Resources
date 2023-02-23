// OOP?
// What is OOP?
// Object oriented programming?


// Well its an approach that breaks down complex problems
// into smaller more manageable parts.

// Good use of turning real life scenarios into code

// 4 pillars that make up OOP

// Inheritance
// Encapsulation
// Polymorphism

// Abstraction

// Classes
// Are denoted capital letters
// Array, String, Number, Boolean

// What is a class?
// A class is a blueprint that creates objects
// Object factory

// syntax?

function add(){
	console.log(1 + 1)
}


class User{
	#email;

	constructor(name, lastName, location, age, email, gender, email2){
		this.name = name;
		this.lastName = lastName;
		this.location = location;
		this.age = age;
		this.gender = gender;
		this.isStudent = false;
		this.allowance = 2000;

		// private
		this.#email = email
	}

	// instance method
	sayName(){
		console.log(`Hello my name is ${this.name}`)
	}

	showAllowance(){
		// console.log(`My current allowance is ${this.allowance}`)
		return this.allowance
	}

	payForSomething(){
		this.allowance -= 1000
		// console.log(`I paid 1000 to something`)
		// return this.allowance
	}

	// getter
	showEmail(){
		console.log(this.#email)
		return this.#email
	}

	// setter
	setEmail(email){
		this.#email = email
		return this.#email
	}

}

// instance
// is a copy of that class that we initialized that is
// stored inside a variable

// new keyword creates an instance of that class

// instance properties are the properties that belong to an instance
const newUser = new User('Alex', 'Betita', 'Irvine', 31, 'alex@demo.com')
const newUser2 = new User('Kate')
// console.log(newUser, ' USER CLASS')
// console.log(newUser.name)
// newUser.lastName = 'Betita'
// newUser.age = 31
// newUser.location = 'Irvine'
// console.log(newUser)
// console.log(newUser2)
// console.log(newUser2.name)

// instance methods
// are functions that belong to the instance of a class

// newUser.sayName()
// newUser.showAllowance()
// newUser.payForSomething()
// console.log(newUser.showAllowance())
// newUser.payForSomething()
// newUser.showAllowance()

// newUser2.showAllowance()


// Encapsulation

// Basically it brings together data and the methods which operate on that data,
// into a single unit.
// Also hiding the methods and properties from the user
// Only allowing methods to interact with the properties.

// Getters and Setters
// getters is a instance method that display a property
// Setters is a instance method that ineracts with properties

// newUser.#email = 'alex@demo.com'

// newUser.showEmail()
// newUser.setEmail('alex@demo2.com')
// newUser.showEmail()

// newUser.email2 = 1
// newUser.email2 = 'whatever'

// console.log(newUser.email2)

// newUser.useGlobalFunction()

// Inheritance
// allows us to create a child class that takes all of the functionality
// from the parent class and allows us to add more

// keyword is extends when inheriting from another class
// super is how we use/interact with the inherited properties

class Admin extends User{
	constructor(position, name, lastName, location, age, gender){
		super(name, lastName, location, age, gender)
		this.position = position
		this.accessLevel = 1;
		this.department = 'IT';
	}

	showAccessLevel(){
		console.log(this.accessLevel)
	}

	useParentInstanceMethod(){
		super.sayName()
	}
}


const newAdmin = new Admin(null, 'Alex', 'Betita', 'Irvine', 31, 'Male')

console.log(newAdmin, 'new Admin')
// newAdmin.sayName()
// newAdmin.showAccessLevel()
// newAdmin.useParentInstanceMethod()

// Abstraction
// hiding complexity from the user
// design process


// class Toyota{
// 	constructor(){

// 	}
// }

class Car{
	constructor(){

	}
}

const toyota = new Car()
const testla = new Car()
