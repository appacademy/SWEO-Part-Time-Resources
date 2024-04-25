//OOP - Object Oriented Programming language

//OBJECT CLASS - A class that helps us to create objects

// CREATE CLASS
class Animal {
    // CREATE CONSTRUCTOR
    //The constructor method helps us "Construct" the objects. We tell it what properties we want each instance
    // to have, and then we pass in the values of those properties as arguments on initialization
    // constructor(age, species, name, color){
        // ADD SOME PROPERTIES

    constructor(age, species, name, color){
        this.age = age
        this.color = color
        this.name = name
        this.species = species
        this.func = hello

        function hello(){

        }

    //options object as parameter to set instance variables
    // constructor(options){
        // console.log(age)
        //THIS - The "THIS" keyword accesses properties on the instances of a class
        // this.age = options.age
        // this.color = options.color
        // this.name = options.name
        // this.species = options.species

    }
    // CREATE INSTANCE METHODS
    printObject(){
        const keys = Object.keys(this)
        const information = {}
        for(let key of keys){
            information[key] = this[key]
        }
        return information
    }

    printInformation(){
        return `Animal Age: ${this.age}\nAnimal Species: ${this.species}\nAnimal Name: ${this.name}\nAnimal Color: ${this.color}`
    }


    // CREATE STATIC/CLASS METHOD
}


//OBJECT INSTANCE - an Object that was created from a class

const optionsObj = {age: 4, species: 'Cat', name: 'Cow', color: 'Black/white'}
// const cat = new Animal(optionsObj)
const cat = new Animal(4, 'Cat', 'Cow', 'Black/white')
// console.log(cat.printObject())
// console.log(cat.printInformation())
// console.log(cat)
// const dog = new Animal(3, 'Dog', 'Rocky', 'Black/white')

// console.log(Object.keys(cat).length)
// console.log("dog:", dog)
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
class Dog extends Animal {
    constructor(age, species, name, color, breed, claws = 18){
        super(age, species, name, color)
        this.breed = breed
        this.claws = claws
    }

    woof(){
        return 'Woof Woof'
    }
}

// class Breed extends Dog {
//     constructor(){

//     }
// }

const dog2 = new Dog(3, 'Dog', 'Bailey', 'Brown', 'Shih tzu')
console.log(dog2.woof())
// console.log(dog2.printInformation())
console.log(dog2.printObject())
// console.log(dog2 instanceof Animal)

// console.log(cat2.printInfo())
// console.log(cat2.meow())

//Static and Instance methods
//Instance methods - Methods that are invoked on an instance of a class
//Static methods (class methods) - Methods that are invoked on the class itself

//To create a static method its the same as an instance method, except we must add static in front
// of the declaration


//Polymorphism - The ability to call the same method on different objects and each object responds differently

//Two common types of polymorphism - "Overloading" and "Overriding"

//Overloading - Sending a different number or type of parameters into a function
//Overriding - When a child class gives its own implementation of a function inherited from a parent
