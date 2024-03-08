class Vampire {
    constructor(name, age, eatsHumans, eatsAnimals) {
        this.name = name;
        this.age = age;
        this.eatsHumans = eatsHumans;
        this.eatsAnimals = eatsAnimals;
    }

    drinkBlood() {
        console.log(`${this.name} is drinking blood!!! Oh no!!`)
    }
}

const johnnyVamp = new Vampire("Johnny", 312, true, true);

//johnnyVamp.drinkBlood();

//Exporting Vampire so I can use it elsewhere. Not putting it in an object because we don't 
//have multiple things to export.
module.exports = Vampire;