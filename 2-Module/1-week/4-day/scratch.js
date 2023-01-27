//Static methods & variable

//Instance methods - methods that are invoked on an instance of a class

//Static methods - methods that are invoked directly on the class

//SYNTAX - static methodName () {}

//Static Variables
//Only exists in and is accesible by the class it's in

//Polymorphism
//The ability to call a method on different objects & each object responds differently

//Overloading - Sending a different number, or different types of parameters
//into a particular method

//Parent Class

// sum(num1, num2) {
//     return num1 + num2;
// }

//Child Class

// sum(numArray) 

//Overriding - When a child class gives it's own implementation (or variation)
//of a method from one of it's ancestor classes


class Animal {
    static numberOfAnimals = [];
    constructor(species) {
        this.species = species;

        Animal.numberOfAnimals.push(this.species);
    }

    static getSpecies(...animals) {
        return animals.map((animal) => animal.species)
    }
}

let king = new Animal("Cat");

let haru = new Animal("Dog");

console.log(Animal.numberOfAnimals);


//let speciesArray = Animal.getSpecies(king, haru);

//console.log(speciesArray.join(', '));

