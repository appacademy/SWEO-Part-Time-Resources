class Animal {
    static count = 0
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

        Animal.count++

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

    //To create a static method its the same as an instance method, except we must add static in front
    // of the declaration
    // CREATE STATIC/CLASS METHOD
    static getAnimalCount(){
        return Animal.count
    }
}

module.exports = {
    Animal
}



//Polymorphism - The ability to call the same method on different objects and each object responds differently

//Two common types of polymorphism - "Overloading" and "Overriding"

//Overloading - Sending a different number or type of parameters into a function
//Overriding - When a child class gives its own implementation of a function inherited from a parent
