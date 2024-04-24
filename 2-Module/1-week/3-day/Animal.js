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

    // CREATE STATIC/CLASS METHOD
    static printSpecies(animalArr){
        return animalArr.map((animal) => animal.species)
    }


}

module.exports = {
    Animal
}
