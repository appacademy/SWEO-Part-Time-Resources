//OOP
//What is oop?
//Object oriented programming

//An approach to programming where we break down complex problems into smaller more 
//manageable parts

//OOP can be a great to make your code more readable and maintainable

//Encapsulation

//Basically, it brings together data and the methods which operate on that data
//into a single unit

//Used it's most commonly used to hide access to certain properties from users

//Encapsulation is a way to restrict direct access to some components of an object, so that
//users cannot access state values for all of the variables of particular object.

//Classes
//A class is like a blueprint to create objects
//An object factory!

//If an object has been made from a class, it is called an instance

//SYNTAX

// class ClassName {
//     constructor(poperties) {
//         this.properties = properties;
//     }
// }

//Constructor method helps "construct" an object
//We give parameters and when we use the class, the arguments that we pass in
//become the properties of that object


//THIS is keyword that stands for the object that it exists inside of

//OBJECT CLASS - A class that help define (build) objects
//OBJECT INSTANCE - An object that was made from a class
//POJO (Plain old javascript object) - let cat = {}


//Defining Methods
//Classes can have methods
//Classes can use these methods to perform actions
//Class methods are typically invoked on an INSTANCE of the class that has been stored in a variable


//Instance operator checks if an object is an instance of a certain class
//SYNTAX : object instanceof Class

//INHERITANCE
//Inheritance allows us to create a child class that takes all of the functionality
//from the parent class and allows us to add more
//SYNTAX    class ChildClassName extends ParentClass

//To inherit from a class  we MUST use the extends keyword


//SUPER
//If you want to define a new constructor in the child class, but still have access to the code 
//from the parent class
//Use the super method INSIDE of the child class' constructor



class Animal {
    constructor(name, age, species, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
        this.species = species;
    }

    // getInformation() {
    //     return `${this.name} is a ${this.species}`;
    // }

    speak() {
        console.log(this.sound)
    }
}

class Dog extends Animal {
    constructor (name, age) {
        super(name, age, "Dog", "Woof");
    }
}

class Dog extends Animal {}

const haru = new Dog("Haru", 1);

haru.speak()

// haru.speak();

// const valvoline = new Animal("Val", 2)

// const king = new Animal(
//     "King",
//     12,
//     "Cat"
// )

//console.log(king instanceof Animal)