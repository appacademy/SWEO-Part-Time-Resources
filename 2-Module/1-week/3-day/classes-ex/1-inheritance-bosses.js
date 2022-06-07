class MonsterNPC {
    //constructor, initially feed the raw data to our constructor
    constructor(name, race, lifepoints, attackable, description, location){
        //PROPERTIES / FIELDS - Nouns/Adjectives that object represents
        this.name = name;
        this.race = race;
        this.lifepoints = lifepoints;
        this.attackable = attackable;
        this.description = description;
        this.location = location;
        //`this` represents the TO BE instance object that could be created from this class.
    }

    //instance methods - VERBS - update, read data, etc.
    displayData(){
        console.log(`name: ${this.name}`)
        console.log(`race: ${this.race}`)
        console.log(`lifePoint remaining: ${this.getLifePoints()}`)
        console.log(`description: ${this.description}`)
    }

    //the only way that users should access our instances data, is through instance methods! (getter, setter methods)
    getLifePoints(){
        return this.lifepoints
    }

    //takeDamage will update the NPCs lifepoint and subtract the lifepoint based on the damage dealt to it
    takeDamage(damage){
        //check if monster is attackable
        if(this.attackable === true){
            //reduce monster's life by the damage
            this.lifepoints = this.lifepoints - damage 
            //if monster life point is zero or below, display message
            if(this.lifepoints <= 0){
                this.lifepoints = 0;
                console.log(`You have slain ${this.name}, they did not stand your might!`)
            }
            //else display remaining life
            else{
                console.log(`You dealt ${damage} to ${this.name}}, they still have ${this.lifepoints} left`)
            }
        }
    }



}

const gnomeChild = new MonsterNPC("Gnome Child", "gnomes", 2, true, "Small, even by gnome standards", "Tree Gnome Stronghold");

console.log(gnomeChild); //our class constructor when instantiated, created an object for us

console.log("--------------------------inheritance------------------------")
//what if we wanted to be more specific and categorize a different type of monster like bosses? 
//We can add another field to the MonsterNPC to check if it's a boss...
//then add all the boss related methods as well... but we'll have to make sure that it's a boss first...
 
class Bosses extends MonsterNPC{
    constructor(name, race, lifepoint, attackable, description, location,lootTable){
        //super() gets the parent constructor and EXPLICITLY give it the properties to set. 
        super(name, race, lifepoint, attackable, description, location)
        this.lootTable = lootTable;
        //-------^same as:------
        // this.name = name;
        // this.race = race;
        // this.lifepoint = lifepoint;
        // this.attackable = attackable;
        // this.description = description;
        // this.location = location;
        // this.lootTable = lootTable;
    }

    //new method in the this new child class to show the loot table
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

const vorkath = new Bosses("Vorkath", "dragons", 1000, true, "Big, even by Dragon standards", "some island", lootTable)

vorkath.displayData(); //still use the method from the parrent on our child instance
console.log("----new instance method----");
vorkath.displayLootTable(); //new instance method we are calling on // log out lootTable data
vorkath.takeDamage(100);