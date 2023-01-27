//Static methods & variables

//Instance methods - A method that is invoked on an instance of a class

//Static methods (class methods) - invoked directly on the class

//Syntax 
//static calculateBonus() {}


//Static Variables
//Variables that only exist in and are accessible by the class it's in.
//Commonly used to keep track of data related to the class


class Animal {
    constructor(species) {
        this.species = species

        Animal.numAnimals++;
    }

    static getSpecies(...animals) {
        return animals.map((animal) => animal.species)
    }

    static numAnimals = 0;
}


// let haru = new Animal("Dog");

// let king = new Animal("Cat")

// let aniArray = Animal.getSpecies(haru, king);

// //console.log(aniArray.join(', '));
// console.log(Animal.numAnimals);

//Polymorphism
//The ability to call the same method on different objects and each object
//responds differently

//The two most common ways achieve polymorphism is by "Overloading" "Overriding"

//Overloading - refers to sending a different number of parameters to a particular
//function

// sum(num1, num2);

// sum(numArray)

//Overriding - When a child class has a different implementation of a method
//than the parent class
