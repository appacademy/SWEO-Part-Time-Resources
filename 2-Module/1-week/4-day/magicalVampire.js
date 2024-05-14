const { Vampire, johnnyVamp } = require('./vampire');

class Power {
    constructor(name) {
        this.name = name
    }
}

class MagicalVampire extends Vampire {
    constructor(name, age, eatsHumans, eatsAnimals, powers, spell) {
        super(name, age, eatsHumans, eatsAnimals);
        this.powers = powers;
        this.spell = spell;
        this.arr = [];
    }

    static numofvamp = 0;

    magicSpell() {
        console.log(`${this.name} just cast ${this.spell}!! OH NO!!`)
    }

    createNewPower(power) {
        let magicPower = new Power(power)
    }
    
}

let gregVamp = new MagicalVampire("Gregward", 718, true, true, ["Flgiht", "great listener", "chef", "emo"], "Sulking")

function twoObj(obj1, obj2) {
    obj1.name;
    obj2.age;
}


console.log(gregVamp);

gregVamp.magicSpell();

gregVamp.drinkBlood();