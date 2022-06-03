const MonsterNPC = require("./0-classes-npc");

console.log(MonsterNPC);

// What if I wanted to add a boss and create an instance(object) of that boss from the monsterNPC class? How would I differentiate that this boss is a boss and not just a standard npc?
console.log("--------------------------inheritance------------------------")
//Inheritance: allow classes to receive the properties and methods of their parent class. (does not inherit properties from instances, only classes)

class Bosses extends MonsterNPC{
    constructor(name, race, lifepoints, attackable, description, lootTable){
        super(name, race, lifepoints, attackable, description) //super allows us to inherit the constructor from our previous parent class
        this.lootTable = lootTable;
        //-------^same as:------
        // this.name = name;
        // this.race = race;
        // this.lifepoints = lifepoints;
        // this.attackable = attackable;
        // this.description = description;
        // this.npc = true; 
        // this.family = [];
        // this.isDead = false;
        //this.lootTable = lootTable;
    }

    //the boss child class will have a simple instance method to display the lotoTable Data
    displayLootTable(){
        console.log(this.lootTable);
    }
}

console.log("---create vorkath instance's data w/ raw data---")
const lootTable = {
    dragon_necklace: 1,
    dragon_bones: 1,
    dragon_hide: 2,
    magic_logs: 100,
    spirit_seed: 1,
    coins: 100000,
}

const vorkath = new Bosses("Vorkath", "dragons", 1000, true, "Big, even by dragon standards", lootTable);
vorkath.displayLootTable();

console.log("----display new child class's method----")
vorkath.takeDamage(100);
vorkath.displayData();