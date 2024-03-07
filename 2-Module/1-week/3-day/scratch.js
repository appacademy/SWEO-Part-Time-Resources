//OOP - Object Oriented Programming - An approach to programming in which we break down complex
// problems into smaller pieces

//Encapsulation - Brings together data and methods which operate on that data together into a single unit

//Classes - A class is like a blueprint for creating objects (Object factory)

//Class - A class that creates objects
//Instance - An object that was created by a class

//"THIS" - the this keyword allows us to access/add/manipulate properties of future instance objects

//Constructor - The constructor method helps us "construct" new objects by adding properties onto the object
// and then if we want to, we can use the parameters to specify unique values on the object

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getInformation() {
//         return `This animal is named ${this.name}.`
//     }
// }

// let kingCat = new Animal("King", 13, "CAT");

// //console.log(kingCat.getInformation())

// let onyxDog = new Animal("Onyx", 13, "DOG");

//console.log(onyxDog.getInformation())

//console.log(kingCat instanceof Animal)

//INHERITANCE - Allows us to define class that takes all the functionality of a parent class
//              and manipulates/adds on to it

//Extends - In order to inherit from a parent class we must use the extends keyword

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getInformation() {
//         return `This animal is named ${this.name}.`
//     }
// }

//If we don't define a new constructor, it will take it's parents constructor

// class Cat extends Animal {
//     constructor(name, age, likesTreats) {
//         super(name, age);
//         this.likesTreats = likesTreats;
//     }


//     meow() {
//         console.log("MOW")
//     }
// }

// let bunny = new Animal("Bunny", 2);

// let king = new Cat("King", true)

// console.log(king)

//STATIC VS INSTANCE METHODS

//Instance methods - Methods that are invoked on instances of a class
//Static methods (class methods) - Methods that are invoked on class itself

//Static variables - Variables that only exist in and are accessible by the class

// class Animal {
//     constructor(name, age, species) {
//         this.name = name;
//         this.age = age;
//         this.species = species;

//         Animal.numOfAnimals++;
//     }

//     getInformation() {
//         return `This animal is named ${this.name}.`
//     }

//     static getSpecies(animals) {
//         return animals.map((a) => a.species);
//     }

//     static numOfAnimals = 0;
// }

// let kingCat = new Animal("King", 13, "CAT");

// console.log(Animal.numOfAnimals)

// let onyxDog = new Animal("Onyx", 13, "DOG");
// console.log(Animal.numOfAnimals)

// //console.log(kingCat.getInformation())
// //console.log(Animal.getSpecies([kingCat, onyxDog]))


// //
// class Cat extends Animal {
  
// }

// let cat = new Cat("King", 13, "CAT")

// console.log(Animal.numOfAnimals)

//POLYMORPHISM - The ability to call the SAME METHOD on different objects and each object
//               responds differently

//Two main types - Overloading & Overriding

//Overloading - Refers to sending a different amount or a different type of parameter(s) to a method
//Overriding - The function does something completely different
//^^^ Child class gives its own implementation of the function

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    funcOverLoad(num) {
        console.log("Here is: ", num)
    }

    funcOverRide() {
        console.log("Hi!")
    }
}

class Cat extends Animal {
    funcOverLoad(num1, num2) {
        console.log("Here is: ", num1, num2)
    }

    funcOverRide() {
        return "beepboop"
    }
}

let kingCat = new Animal("King", 13, "CAT");
kingCat.funcOverLoad(3)

let cat2 = new Cat("King2", 13, "CAT")

cat2.funcOverLoad(3, 4)