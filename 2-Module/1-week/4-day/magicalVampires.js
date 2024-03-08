const Vampire = require('./vampire');

class MagicalVampire extends Vampire {
    constructor(name, age, eatsHumans, eatsAnimals, powers, spell) {
        super(name, age, eatsHumans, eatsAnimals);
        this.powers = powers;
        this.spell = spell;
    }

    magicSpell() {
        console.log(`${this.name} has just used ${this.spell} on you!! Oh no!!`);
    }
}

let gildaVampire = new MagicalVampire("Gilda", 9000, false, true, ["Invisibility", "Fly", "Sourdough Starter"], "BREAD");

gildaVampire.drinkBlood()