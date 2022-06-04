
const MonsterNPC = require("./monsterNPC-class");

console.log("--------------------------inheritance------------------------")
class Bosses extends MonsterNPC {

    constructor(name, race, lifepoint, attackable, description, lootTable) {
        //super() gets the parent constructor and EXPLICITLY give it the properties to set. 
        super(name, race, lifepoint, attackable, description);
        this.lootTable = lootTable;
        //-------^same as:------
        // this.name = name;
        // this.race = race;
        // this.lifepoint = lifepoint;
        // this.attackable = attackable;
        // this.description = description;
        // this.lootTable = lootTable;
    }

    getRace() { //instance method to get the boss's race
        return this.race;
    }

    getLootTable() {
        return this.lootTable;
    }

    displayLootTable() {
        console.log(this.lootTable);
    }

    displayData() {
        console.log(`name: ${this.name}`);
        console.log(`race: ${this.race}`);
        console.log(`lifePoint remaining: ${this.getLifepoint()}`);
        console.log(`description: ${this.description}`);
        console.log(`lootTable: ${this.lootTable}`);
    }
}

console.log("-----Instantiating the Class-----");
const lootTable = {
    dragon_necklace: 1,
    dragon_bones: 1,
    dragon_hide: 2,
    magic_logs: 100,
    coins: 100000,
}

const vorkathInstance = new Bosses("Vorkath", "dragons", 1000, true, "Big, even by Dragon standards", lootTable); //vorkathInstance is the obj instance that we are working with.


vorkathInstance.displayData();



// PRACTICE POLYMORPHISM!!
("------------inheritance + Polymorphism ------------")
/*
Create a boss class of your own that extends from bosses!!
For example: SoulsBosses, SM64Bosses, WOWBosses, etc...

You can do whatever you want, the only rule is that you need to:
OVERRIDE the displayData() method to be DRY and also accomodating to your boss class.
*/
class SuperMarioBosses extends Bosses {
    //default inherit parent constructor: don't really need to add any raw data besides the original, therefore i'm going to just leave it as default (inherit the constructor from the parent class)

    //take the display method, and OVERRIDING it with my new method
    //YOUR TASK: CREATE YOUR OWN BOSS EXTENSION AND DRY THIS UP!
    displayData() {
        console.log(`----------Super Mario Bros Boss: ${this.name} INFO------`)
        const bossKeys = Object.keys(this);// ['name', 'race', ...]
        // console.log("bossss keys!:", bossKeys);
        for (let i = 0; i < bossKeys.length; i++) {
            const currentKey = bossKeys[i];
            const value = this[currentKey] //fakeBowser["name"] --> "Fake Bowser"
            // console.log("valueeee:" , value)
            console.log(`${currentKey}:`, value)
        }
    }

    // // christopher's solution!
    // displayData() {
    //     for (let i in this) {
    //         console.log(`${i}: ${this[i]}`)
    //     }
    // }


}

const fakeBowser = new SuperMarioBosses("Fake Bowser", "fake turlte", 100, true, "Fake, but still evil!", { point: 100 });
fakeBowser.displayData();







