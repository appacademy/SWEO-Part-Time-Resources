//OOP - Object Oriented Programming language

// A way of programming in which we break down complex problems into smaller parts

//Encapsulation - Bringing together data, & methods which operate on that data into one single unit

//CLASSES - A class is like a blueprint that we can use to create objects. (Object factory)
// An object that was created from a class is referred to as an instance of that class

//THIS - The "THIS" keyword accesses properties on the instances of a class

//The constructor method helps us "Construct" the objects. We tell it what properties we want each instance
// to have, and then we pass in the values of those properties as arguments on initialization

//OBJECT CLASS - A class that helps us to create objects

//OBJECT INSTANCE - an Object that was created from a class

//

// class Animal {
//     constructor(name, age, species) {
//         this.name = name;
//         this.age = age;
//         this.species = species;

//         Animal.numAnimals++;
//     }

//     getInformation(howdy) {
//         return `This animal is named ${this.name}. ${howdy}`
//     }

//     static getSpecies(...animals) {
//         return animals.map((a) => a.species)
//     }

//     static numAnimals = 0;
// }

// let kingCat = new Animal("King", 13, "Cat");
// //console.log(Animal.numAnimals)

// let onyxDog = new Animal("Onyx", 6, "Dog");
// //console.log(Animal.numAnimals)

//console.log(Animal.getSpecies(kingCat, onyxDog))

// console.log(onyxDog.getInformation("Beep"))

//INHERITANCE 
//Inheritance allows us to create a class that takes all functionality (properties or methods)
//from a parent class, and then allows to add more

//To inherit from a parent class you MUST use the extends keyword

//If we don't want to add any new initialized properties then we don't have to define a new constructor, it will just use the parent 
//constructor

//If we want to define a NEW constructor inside the child class, but still access the code from the parent, then we will define a constructor
//and then we will add a SUPER method

// class Cat extends Animal {
//     constructor(name, age, color) {
//         super(name, age)
//         this.species = "CAT"
//         this.color = color
//     }

//     meow() {
//         console.log("MEOW")
//     }
// }

// let king2 = new Cat(4, "King2", "black and white")

//console.log(king2)

//Static and Instance methods
//Instance methods - Methods that are invoked on an instance of a class
//Static methods (class methods) - Methods that are invoked on the class itself

//To create a static method its the same as an instance method, except we must add static in front
// of the declaration


//Polymorphism - The ability to call the same method on different objects and each object responds differently

//Two common types of polymorphism - "Overloading" and "Overriding"

//Overloading - Sending a different number or type of parameters into a function
//Overriding - When a child class gives its own implementation of a function inherited from a parent

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    funcOverLoad() {
        console.log("Hi")
    }

    funcOverRide() {
        console.log("Howdy")
    }
}

class Cat extends Animal {
 
    funcOverLoad(name) {
        console.log("Hi, " + name)
    }

    funcOverRide(num1, num2) {
        return num1 + num2
    }
}

let cat = new Cat("King", 13)

cat.funcOverLoad("King")
console.log(cat.funcOverRide(1, 2))