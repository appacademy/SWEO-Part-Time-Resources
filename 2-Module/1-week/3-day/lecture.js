// OOP?
// What is OOP?
// Object oriented programming

// it is a way for us to break down complex problems
// into more smaller manageable parts.

// 4 pillars that make up OOP

// Encapsulation - implemented
// Inheritance - implemented
// Abstraction - design
// Polymorphism - implemented

// Classes
// they are blueprints for objects
// they are denoted with capital letters

// Array, Number, Boolean

// keyword 'class'
// syntax

class User{

	#email;
	constructor(firstName, lastName, age, location, email){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.location = location;
		this.allowance = 2000;

		//
		this.#email = email
	}

	// instance methods
	sayName(){
		console.log(`Hello my name is ${this.firstName}`)
	}

	sayFullName(){
		this.sayName()
		console.log(` and my last name is ${this.lastName}`)
	}

	// encapsulation
	addAllowance(amount){
		this.allowance += amount
		return this.allowance
	}

	// getter
	showFirstName(){
		return this.firstName
	}

	// setter
	setFirstName(firstName){
		this.firstName = firstName
		return this.firstName
	}

	// getter
	showEmail(){
		return this.#email
	}

	// setter
	setEmail(email){
		this.#email = email
		return this.#email
	}
}

// 'this' keyword refers to the instance of that class

// instantiated is when we create an instance of a class
// and save into a variable

// instance properties
// 'constructor' keyword allows us to create properties within our class

// instance methods
// they are functions that we can use that are part of the class instance

// to create an instance of a class we use the 'new' keyword
const person1 = new User('Alex', 'Betita', 31, 'Irvine', 'alex@demo.com')
const person2 = new User('Kate', 'Cizewski')

// console.log(person1.showFirstName())
// console.log(person2)

// person1.firstName = 'Test'

// console.log(person1.firstName)

// console.log(person1.allowance)
// person1.allowance += 1000
// console.log(person1.allowance)

// person1.addAllowance(10000)
// console.log(person1.allowance)

// person1.sayName()
// person2.sayName()

// person1.sayFullName()
// person2.sayFullName()

// console.log(person1.sayFullName())

// Encapsulation
// basically it brings together data and methods which operate
// on data

// getters and setters
// getter is a way for us to get an instance property with the use of a method
// setter is a way for us to set/edit the properties of an instance with the use of a method

// console.log(person1.setFirstName('Test'))
// console.log(person1.firstName)

// console.log(person1.showEmail())
// person1.setEmail('new@email.com')
// console.log(person1.showEmail())

// person1.#email = 'new@email.com'

// console.log(person1.#email)

// person1.#email = 1

// console.log(person1.#email)

// Inheritance
// allows us to create child classes that takes all of the properties
// and methods from the parent class
// and we can add additional properties and methods to the child class

// 'extends' keyword

class Admin extends User{
	constructor(clearance, department, firstName, lastName, age, location, email){
		super(firstName, lastName, age, location, email)
		this.clearance = clearance;
		this.department = department;
	}

	minusAllowance(){
		this.allowance -= 500
		return this.allowance
	}

	addAllowanceMultiplyBy2(amount){
		super.addAllowance(amount * 2)
		return this.allowance
	}
}

const newAdmin = new Admin('high level', 'IT', 'Kate', 'Cizewski', 22, 'unkown', 'kate@demo.com')

// console.log(person1)
console.log(newAdmin)
console.log(newAdmin.showEmail())
newAdmin.setEmail('kate2@demo.com')
console.log(newAdmin.showEmail())
newAdmin.minusAllowance()
console.log(newAdmin)

console.log(newAdmin.addAllowanceMultiplyBy2(1000))
console.log(newAdmin)
// newAdmin.lastName = 'Cizewski'
// newAdmin.age = 22
// console.log(newAdmin)

// 'super' keyword
// super allows us to access the parents properties and methods

// Abstraction
// the design process of only showing users the data they need to see

// class Toyota{

// }

// class Mitshubishi{

// }

// class Tesla{

// }

// class Car{

// }

// const toyota = new Car()
