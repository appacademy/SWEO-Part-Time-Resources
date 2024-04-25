const { Animal } = require('./Animal')

class Dog extends Animal {
    constructor(age, species, name, color, breed, claws = 18){
        super(age, species, name, color)
        this.breed = breed
        this.claws = claws
    }


    //POLYMORPHISM
    // overloading
    woof(typeOfWoof){ // return a uppercase or lowercase woof depending on if the typeOfWoof parameter is a string value of 'quiet' or 'loud'
        if(typeOfWoof === undefined){
            return 'Woof Woof'
        }
        else if(typeOfWoof === 'quiet'){
            return 'Woof Woof'.toLowerCase()
        }
        else if(typeOfWoof === 'loud'){
            return 'Woof Woof'.toUpperCase()
        }
        else if(typeof typeOfWoof === 'boolean'){
            return 'huh?'
        }
    }

    // overriding
    printInformation(){
        return `Dog Age: ${this.age}\nDog Species: ${this.species}\nDog Name: ${this.name}\nDog Color: ${this.color}\nDog Claws: ${this.claws}`
    }

}

module.exports = {
    Dog
}

//Polymorphism - The ability to call the same method on different objects and each object responds differently

//Two common types of polymorphism - "Overloading" and "Overriding"

//Overloading - Sending a different number or type(data) of parameters into a function

//Overriding - When a child class gives its own implementation of a function inherited from a parent
