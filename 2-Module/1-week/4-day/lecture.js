// Polymorphism
// The ability to call the same method but with different
// functionality, it will respond differently

// Two common ways to achieve polymorpishm in oop

// Overloading -- the idea of adding more parameters to the
// the given method

// Overiding -- the idea of changing the functionality of
// the given method


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

	static getAges(...animals){
		// takes in instances of the class animal
		animals.forEach((animal)=> console.log(animal.age))
	}

	static generateAnimals(number){
		const arr = []
		for(let i = 0; i < number; i++){
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

	// overriding
	makeSound(){
		return 'bark bark'
	}

	// overload
	addAge(...age){
		for(let i = 0; i < age.length; i++){
			const currentAge = age[i]
			this.age += currentAge
		}
		return this.age
	}
}


const newAnimal = new Animal()
const newAnimal2 = new Animal()
const newAnimal3 = new Animal()

newAnimal2.age = 5
newAnimal3.age = 10

// console.log(newAnimal.makeSound())

// const newDog = new Dog()

// console.log(newDog.makeSound())

// console.log(newAnimal)
// console.log(newDog)

// newAnimal.addAge(2,1,2,3,5)
// console.log(newAnimal)

// newDog.addAge(1,2,3, 10, 2)
// console.log(newDog)

// Static methods && variables

// Static methods are methods directly invoked on the class
// instance methods are methods invoked on the instance of the class

// 'static' keyword

// Static variable
// is like global variable that is available to class itself


// Animal.getAges(newAnimal, newAnimal2, newAnimal3)

// console.log(newAnimal.animals)
// console.log(newAnimal2.animals)
// console.log(newAnimal3.animals)

// console.log(Animal.animals)

// newAnimal.getAges()

const newlyCreatedAnimals = Animal.generateAnimals(5)

console.log(newlyCreatedAnimals)
