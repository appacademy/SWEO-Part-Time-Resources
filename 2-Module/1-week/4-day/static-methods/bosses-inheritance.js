
const MonsterNPC = require("./monsterNPC-class");

console.log("--------------------------inheritance------------------------")
class Bosses extends MonsterNPC{
    
    constructor(name, race, lifepoint, attackable, description, lootTable){
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

    

    getRace(){ //instance method to get the boss's race
        return this.race;
    }

    getLootTable(){ 
        return this.lootTable;
    }

    displayLootTable(){
        console.log(this.lootTable);
    }

    getBossesAlive(){ 
        //ask the Bosses class to provide current instance the static data variable
    }


    
    //static method that will take the instance object, grab its loot table, and returns all the name of the loot (keys) in an array.




    //Problem 1: build a static method called: `compareBossesRace` in the Bosses class, that will
    //1) take in two arguments, both being an instance of Bosses
    //2) check if both boss instances are the same race! If they are return true, if they are not, return false!
    //3) SEE EXAMPLE AT THE BOTTOM OF THE FILE

    //hint: remember to use the getRace() method, and not access the data directly!! (Encapsulation: hiding/protecting your properties behind methods!)

    


}
console.log("-----Instantiating the Class-----");
const lootTable = {
    dragon_necklace: 1,
    dragon_bones: 1,
    dragon_hide: 2,
    magic_logs: 100,
    spirit_seed: 1,
    coins: 100000,
}
const vorkathInstance = new Bosses("Vorkath", "dragons", 1000, true, "Big, even by Dragon standards", lootTable); //vorkathInstance is the obj instance that we are working with.

console.log("-----INSTANCE METHOD TESTS-----");
// Applying the instance method from INSTANCE
vorkathInstance.displayData();

console.log("-----STATIC VARIABLE TESTS-----");


console.log("-----STATIC METHOD TESTS-----");
// Applying the static method from Bosses CLASS



// console.log("-----PROBLEM 1: YOUR CODE TEST-----");
// //EXAMPLE
// const donkeyKong = new Bosses("Donkey Kong", "monkey", 10, true, "Big, even by monkey standards", {}); //race = "monkey"

// const donkeyKongJR = new Bosses("Donkey Kong JR", "monkey", 5, true, "Small little guy!", {}) //race = "monkey"

// const bowser = new Bosses("Bowser", "turtle", 20, true, "Turtle Evil!", {}); //race = "turtle"


// const compare1 = Bosses.compareBossesRace(donkeyKong, bowser) 
// console.log(compare1); // ==> false

// const compare2 = Bosses.compareBossesRace(donkeyKong, donkeyKongJR) 
// console.log(compare2); // ==> true

// //Bosses class's static variable
// console.log(Bosses.bossesAlive);