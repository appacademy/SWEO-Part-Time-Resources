// Polymorphism
// The ability to call the same method but with
// different functionality and also
// to change the response of the method


// two common ways to achieve polymorphism

// Overriding -- changing the function into a new function
// making it act differently

// Overloading -- adding more parameters to the given function

class Animal{
	constructor(){
		this.sound = 'chirp chirp'
		this.age = 1

		Animal.animals++
	}

	makeSound(){
		return this.sound
	}

	addAge(age){
		this.age += age
		return this.age
	}

	// static method
	static createAnimals(num){
		const arr = []
		for(let i = 0; i < num; i++){
			arr.push(new Animal())
		}
		return arr
	}

	static animals = 0
}


class Dog extends Animal{
	constructor(){
		super()
	}

	// overrding
	makeSound(){
		return 'ruff ruff'
	}

	// overloading
	addAge(...ages){
		ages.forEach((age)=> this.age += age)
		return this.age
	}
}


const newAnimal = new Animal()

const newDog = new Dog()

// console.log(newAnimal.makeSound())
// console.log(newDog.makeSound())
// console.log(newAnimal.addAge(4))
// console.log(newDog.addAge(1,2,3,4))

// Static methods && variables

// Static methods are directly invoked on the class

// Static variables are variables within the class

// 'static' keyword


const createdAnimals = Animal.createAnimals(10)

// console.log(createdAnimals)

console.log(Animal.animals)
// console.log(newAnimal.animals)
