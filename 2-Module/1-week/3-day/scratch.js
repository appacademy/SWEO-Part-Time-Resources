//OOP - Object Oriented Programming language

//OBJECT CLASS - A class that helps us to create objects

// CREATE CLASS
class Animal {
    // CREATE CONSTRUCTOR
    //The constructor method helps us "Construct" the objects. We tell it what properties we want each instance
    // to have, and then we pass in the values of those properties as arguments on initialization
    constructor(age, species, name){
        // ADD SOME PROPERTIES
        //THIS - The "THIS" keyword accesses properties on the instances of a class
        this.age = age
        this.species = species
        this.name = name
    }
    // CREATE INSTANCE METHODS
    printObject(){
        return {
            age: this.age,
            species: this.species,
            name: this.name
        }
    }

    printInfo(){
        return `Animal Age: ${this.age}\nAnimal Species: ${this.species}\nAnimal Name: ${this.name}`
    }

    static printSpecies(animalArr){
        return animalArr.map((animal) => animal.species)
    }


    // CREATE STATIC/CLASS METHOD
}



//OBJECT INSTANCE - an Object that was created from a class
// const cat = new Animal(4, 'Cat', 'Cow')
const fish = new Animal(6, 'Fish', 'Bud')

// console.log(cat.age)
// console.log(dog.age)

// console.log(cat)
// console.log(cat.printObject())
// console.log(cat.printInfo())
// console.log(cat instanceof Animal)



//INHERITANCE
//Inheritance allows us to create a class that takes all functionality (properties or methods)
//from a parent class, and then allows to add more


//If we don't want to add any new initialized properties then we don't have to define a new constructor, it will just use the parent
//constructor

//If we want to define a NEW constructor inside the child class, but still access the code from the parent, then we will define a constructor
//and then we will add a SUPER method


//To inherit from a parent class you MUST use the extends keyword
class Cat extends Animal {
    static claws = 18
    static count = 0

    constructor(age, species, name, paws = 4){
        super(age, species, name)
        this.paws = paws
        Cat.count++
    }

    meow(){
        return 'Meooowwww'
    }
}

// console.log(Cat.count)
const cat2 = new Cat(5, 'Cat', 'Noodles')
// console.log(Cat.count)
const cat3 = new Cat(12, 'Cat', 'Mama')
// console.log(Cat.count)

// console.log('cat age:', cat2.age)
// console.log('cat paws:', cat2.paws)
// console.log(cat2.printInfo())
// console.log(cat2.meow())

// console.log('Cat Class claws', Cat.claws)
// console.log(cat2.claws)

// console.log(Animal.printSpecies([fish, cat2, cat3]))

//Static and Instance methods
//Instance methods - Methods that are invoked on an instance of a class
//Static methods (class methods) - Methods that are invoked on the class itself

//To create a static method its the same as an instance method, except we must add static in front
// of the declaration


//Polymorphism - The ability to call the same method on different objects and each object responds differently

//Two common types of polymorphism - "Overloading" and "Overriding"

//Overloading - Sending a different number or type of parameters into a function
//Overriding - When a child class gives its own implementation of a function inherited from a parent
