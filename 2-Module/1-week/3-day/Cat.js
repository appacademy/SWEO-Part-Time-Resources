const { Animal } = require('./Animal')

class Cat extends Animal {
    static claws = 18
    static count = 0

    constructor(age, species, name, paws = 4){
        super(age, species, name)
        this.paws = paws
        Cat.count++
    }

    //Overloading - Sending a different number or type of parameters into a function
    meow(typeOfMeow){ //will either uppercase or lowercase meow, depending on if the string 'quiet' or 'loud' was passed in
        if(typeOfMeow === undefined){
            return 'Meooowwww'
        }
        if(typeof typeOfMeow === 'boolean'){ //checking type of data to perform a different operation
            return 'huh?'
        }
        else if(typeOfMeow === 'quiet'){
            return 'Meooowwww'.toLowerCase()
        }
        else if (typeOfMeow === 'loud'){
            return 'Meooowwww'.toUpperCase()
        }
    }

    //Overriding - Sending a different number or type of parameters into a function
    printInfo(){
        return `Cat Age: ${this.age}\nCat Species: ${this.species}\nCat Name: ${this.name}\nCat Paws: ${this.paws}\nCat Claws: ${Cat.claws}`
    }
}

module.exports = {
    Cat
}

