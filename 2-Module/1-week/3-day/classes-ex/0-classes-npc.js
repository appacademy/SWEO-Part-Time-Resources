// I am creating a game and I want to create NPC that contain certain and behaviors

// Classes are just special functions that are like blueprints / template that we then use in order to create INSTANCES (objects from that blueprint)
// we just feed the class raw data, and it will create the object for us

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

//when we instantiate a class, 3 things happen:
// 1) new empty object created (i.e. {})
// 2) constructor method is called, and `this` is bound to the object that was just created
// 3) constructor builds the new object and new object is IMPLICITLY returned from the constructor method.
const gnomeChild = new MonsterNPC("Gnome Child", "gnomes", 2, true, "Small, even by gnome standards", "Tree Gnome Stronghold");

console.log(gnomeChild); //our class constructor when instantiated, created an object for us

console.log("------displayData() instance method-----")
//we used the displayData() instance method on the gnomeChild instance
gnomeChild.displayData()

console.log("------Encapsulation: using getter method to access private data-----")
console.log(gnomeChild.getLifePoints());

console.log("------update properties with instance method-----")
gnomeChild.takeDamage(20);
gnomeChild.displayData()