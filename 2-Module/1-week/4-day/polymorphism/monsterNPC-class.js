//classes: blueprint / definition
//class towns{}
//class weapons{}
//class food{}

// I am creating a game and I want to create NPC that contain certain data and behaviors

// Classes are just special functions that are like blueprints / template that we then use in order to create INSTANCES (objects from that blueprint)
// we just feed the class raw data, and it will create the object instance for us that acts as our interface
class MonsterNPC {
    //requires a constructor
    constructor(name, race, lifepoint, attackable, description ){
        //PROPERTIES
        this.name = name;
        this.race = race;
        this.lifepoint = lifepoint;
        this.attackable = attackable;
        this.description = description;
        //`this` represents the TO BE instance object that could be created from this class. 
    }

    //instance METHODS
    displayData(){
        console.log(`name: ${this.name}`)
        console.log(`race: ${this.race}`)
        console.log(`lifePoint remaining: ${this.getLifepoint()}`)
        console.log(`description: ${this.description}`)
    }

    getLifepoint(){
        return this.lifepoint;
    }

    takeDamage(damage){
        //check if monster is attackable
        if(this.attackable === true){
            //reduce monster life point by the damage
            this.lifepoint -= damage;
            //if monster life point is zero or below, display message
            if(this.lifepoint <= 0){
                this.lifepoint = 0;
                console.log(`You have slain ${this.name}, they did not stand a chance against your might!`);
            }
            //else display damage and remaining life
            else{
                console.log(`You dealt ${damage} damage to ${this.name}, they have ${this.lifepoint} left`);
            }

        }
        //if monster is not attackable
        else{
            console.log(`You cannot hurt ${this.name}!`)
        }
    }
}

//when we instantiate a class, 3 things happen:
// 1) new empty object created (i.e. {})
// 2) constructor method is called, and `this` is bound to the object that was just created
// 3) constructor builds the new object and new object is IMPLICITLY returned from the constructor method.

// instances: object created from desired class
// Notice the use of the 'new' keyword to instantiate and and create a new instance
//`this` now represents and references this specific instance object: `gnomeChild`


// const gnomeChild = new MonsterNPC("Gnome Child", "Gnomes", 2, true, "Small, even by gnome standards");

// console.log(gnomeChild); //outputs the object that represents the gnomeChild and its properties

// console.log("---display the gnomeChild instance's data using the instance method---")
// gnomeChild.displayData();

// console.log("---use an instance method to update the properties of an instance object---")
// gnomeChild.takeDamage(20);
// console.log(gnomeChild.getLifepoint());


// console.log("---display the gnomeChild instance's data using the instance method---")
// gnomeChild.displayData();


// //instanceof operator: may be used to check if an object is an instance of a specific class.
// console.log(gnomeChild instanceof MonsterNPC);

module.exports = MonsterNPC;