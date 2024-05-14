class Vampire {
    constructor(name, age, eatsHumans, eatsAnimals) {
        this.name = name;
        this.age = age;
        this.eatsHumans = eatsHumans;
        this.eatsAnimals = eatsAnimals;
    }

    drinkBlood() {
        console.log(`${this.name} is drinking blood!! Oh no!`)
    }
}

let johnnyVamp = new Vampire("Johnny", 372, true, false);

// console.log(johnnyVamp);

// johnnyVamp.drinkBlood();

module.exports = {
    Vampire,
    johnnyVamp
};