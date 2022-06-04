
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

        //our constructor gets invoked each time we instantiate using the class to build our instance (obj)
        Bosses.bossesAlive += 1;
    }

    //create an static variable
    static bossesAlive = 0; //determines how many Bosses instances were created

    

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
    static lootNameKeys(instanceObj){
        const lootObj = instanceObj.getLootTable(); //i.e. {dragon_necklace: 1, dragon_bones: 1,...}
        const lootNames = [];
        for(let key in lootObj){ //key = "dragon_necklace"
            lootNames.push(key);
        }
        return lootNames // ["dragon_necklace", ...]
    }




    //Problem 1: build a static method called: `compareBossesRace` in the Bosses class, that will
    //1) take in two arguments, both being an instance of Bosses
    //2) check if both boss instances are the same race! If they are return true, if they are not, return false!
    //3) SEE EXAMPLE AT THE BOTTOM OF THE FILE

    //hint: remember to use the getRace() method, and not access the data directly!! (Encapsulation: hiding/protecting your properties behind methods!)
    static compareBossesRace(firstBossInstance, secondBossInstance){
        if(firstBossInstance.getRace() === secondBossInstance.getRace()){
            return true;
        }
        return false;
    }

    


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
console.log(vorkathInstance.bossesAlive); //undefined
console.log(Bosses.bossesAlive); //1
const bowser1 = new Bosses();
console.log(Bosses.bossesAlive); //2


console.log("-----STATIC METHOD TESTS-----");
// Applying the static method from Bosses CLASS
const lootNames = Bosses.lootNameKeys(vorkathInstance) //["dragon_necklace", "dragon bones", ...]
console.log(lootNames);


console.log("-----PROBLEM 1: YOUR CODE TEST-----");
//EXAMPLE
const donkeyKong = new Bosses("Donkey Kong", "monkey", 10, true, "Big, even by monkey standards", {}); //race = "monkey"

const donkeyKongJR = new Bosses("Donkey Kong JR", "monkey", 5, true, "Small little guy!", {}) //race = "monkey"

const bowser = new Bosses("Bowser", "turtle", 20, true, "Turtle Evil!", {}); //race = "turtle"


const compare1 = Bosses.compareBossesRace(donkeyKong, bowser) 
console.log(compare1); // ==> false

const compare2 = Bosses.compareBossesRace(donkeyKong, donkeyKongJR) 
console.log(compare2); // ==> true

//Bosses class's static variable
console.log(Bosses.bossesAlive);