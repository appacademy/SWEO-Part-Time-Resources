//OOP - Object oriented programming
//It's an approach to programming by breaking down complex problems
//into smaller parts

//OOP can be a great way to make your code readable and maintainable

//Encapsulation - hiding states from users
//Basically just bringing together data and the methods which operate on that data
//into a single unit

//A common use for encapsualion is keeping states private from users

//We could do this by having private and public objects

//Public objects would be accessible by other objects
//Private objects would only be accessible to the object that it is in
//Closures are probably the most common way to encapsulate data


//Classes 
//A class is like a blueprint to create objects. or an object factory!

//SYNTAX

// class Classname {
//     constructor(properties) {

//     }
// }

// const instanceobj = new Classname(propertyValues)

//this - has the value of the object that it exists inside of
//The constructor method helps "construct" an object. We tell it was the property values
//will be when we create an object using the class

//OBJECT CLASS - A class that helps define objects
//OBJECT INSTANCE - An object that has been created from a class
//POJO - Plain old javascript object

//instanceof operator - It tells us if an object is an instance of a certain class
//SYNTAX - instanceName instanceof ClassName

/*
const king = new Animal(
    "King",
     12,
    "Cat"
)

const haru = new Animal(
    "haru",
    13,
    "Dog"
)
*/

//Inheritance - allows us to define a class that takes all the functionality of a parent class
//and it allows us to add more

//If we want to define a new constructor, but still have access to the code in the parent class
//we will use the super method inside of the child class' constructor

class Animal {
    constructor(name, age, species, sound) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.sound = sound;
        this.color = "rainbow";
    }

    getSpecies() {
        return `${this.name} is a ${this.species}`;
    }

    speak() {
        console.log(this.sound);
    }
}


class Dog extends Animal {  
    constructor(name, age, squekyToy) {
        super(name, age, "Dog", "Woof")
        this.squekyToy = squekyToy;
    }

    destroyAHouse() {}
}

let haru2 = new Dog("Haru", 13, "ball")



class Cat extends Animal {
    constructor(name, age) {
        super(name, age, "Cat", "Meow")
    }
}

const haru = new Dog(
    "Haru",
    13,
)

console.log(haru2.squekyToy)

