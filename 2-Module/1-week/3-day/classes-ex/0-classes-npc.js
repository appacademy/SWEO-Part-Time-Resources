// Classes are just special functions that are like blueprints / template that we then use in order to create INSTANCES (objects from that blueprint)

// Classes allow us to identify, group, and organize related data (good for bigger applications)

// we just feed the class raw data, and it will create the object for us - using the class constructor

console.log("----------MonsterNPC Class---------")
// I am creating a game and I want to create NPC that contain certain related data and behaviors 
class MonsterNPC {
    //require constructor to get the raw data and initialize our properties
    constructor(name, race, lifepoints, attackable, description){
        //Properties /fields 
        this.name = name;
        this.race = race;
        this.lifepoints = lifepoints;
        this.attackable = attackable;
        this.description = description;
        this.npc = true; //every instance (the obj created from class) will have this property of `npc` === `true`
        //`this` represents the TO BE instance object that will be attached to `this` when instantiated
        this.family = [];
        this.isDead = false;
    }

    //the accessing and updating of data should only be done through the INSTANCE METHODS (getter & setters)
    getLifePoints(){ //'getter' method to get the lifepoints property
        return this.lifepoints;
    }

    //remeber that classes can have methods that represent the action / verb of our object and also have actions or verbs done to it as well.

    //so let's create an INSTANCE METHOD that will do damage to our class, we should update our lifepoints property to reduce by the amount of damage done to this instance.
    takeDamage(damage){
        // check if monster is attackle
        if(this.attackable === true){
            //reduce monster's life point by the damage dealth
            this.lifepoints = this.lifepoints - damage;
            //if monster life point is zero or below zero, display message
            if(this.lifepoints<= 0){
                this.lifepoints = 0;
                this.isDead = true;
                console.log(`You have slain ${this.name}, they did not stand a chance against your might!`)
            }
            //else display the damage and the remaining life
            else{
                console.log(`You dealt ${this.damage} damage to ${this.name}, they have ${this.lifepoints} left`)
            }
        }
    }

    displayData(){
        console.log(`name: ${this.name}`)
        console.log(`race: ${this.race}`)
        console.log(`lifePoint remaining: ${this.getLifePoints()}`)
        console.log(`description: ${this.description}`)
    }
}

//instantiating the MonsterNPC class in order to create gnomeChild INSTANCE (obj)
//when we instantiate a class, 3 things happen:
// 1) new empty object created (i.e. {})
// 2) constructor method is called, and `this` is bound to the object that was just created
// 3) constructor builds the new object and new object is IMPLICITLY returned from the constructor method.
const gnomeChild = new MonsterNPC("Gnome Child", "Gnomes", 2, true, "Small, even by gnome standards");  //`this` will now reference the instance object that was created here. (gnomeChild)
console.log(gnomeChild);

console.log("--------gnome child takes damage-------")
gnomeChild.takeDamage(20);
gnomeChild.displayData();

console.log("--------Goblin Child-------")
const goblin = new MonsterNPC("Goblin Child", "Goblin", 5, true, "Small, even by goblin standards")//`this` will now reference the instance object that was created here (goblin)

// console.log(goblin.lifepoints); //we don't want to directly access the properties from our object. THIS IS EXAMPLE OF BAD PRACTICE. (Encapsulation)

module.exports = MonsterNPC;




