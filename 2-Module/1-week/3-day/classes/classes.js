// Classes are just special functions that are like blueprints that we then use in 
// order to create INSTANCES (objects from that blueprint)

// Classes allow us to identify, group, and organize related data (good for bigger applications)
// we just feed the class raw data, and it will create the object for us - using the class 
// constructor

// Classes are created by using the class keyword, followed by the capitalized name of the class
// and a set of curly braces.

// Let's create a vampire class. Class Names should always be Capitalized. This is a convention
// that will help you and other devs to correctly identify the name as a class.

// the first thing i need is a construtor, something that will determine what properties 
 // are needed to create a new instance of a vampire. The constructor is like the 
// master vampire, and will be used to create new vampires in the future.
// a constructor function is created with the constructor keyword followed by parens to add 
// parameters and curly braces. You do NOT use the function keyword with a constructor. 
// You're not creating a new function, you're using the `factory` constructor method built 
// into the JS class object. 

// DONT RETURN ANYTHING FROM A CONSTRUCTOR! If you do, you wont get your new vampire object
// back when you create a new instance!


// class Vampire{
//   constructor(strength, stealth, beauty){
//     this.strenth = strength;
//     this.stealth = stealth;
//     this.beauty = beauty;
//     this.hungry = true;
//   }
// }



// the `this` keyword references the newly created object instance. When you create a new 
// vampire in the future, this will refer to that specific instance of a vampire. This 
// is used to create properties and methods on the object instance.

// If we want to create a new instance of a Vampire, we just need to use the `new` keyword.

// console.log(lestat);



// Lets add some methods to our vampire! Methods perform an action for the class.
// since the methods we create are typically invoked on a given instance of the class 
// thats been stored in a variable (like lestat) they are also called `instance methods`.

// Again, we do NOT use the function keyword when creating an instance method, just like with the
// constructor. Notice that you use the `this` keyword in that method as well when referencing
// properties of the class, that's so that it will be referring to whichever instance of the
// vampire you've created. If you have 12 vampires, you want it to refer only to the one you're
// working with currently.


class Vampire{
  constructor(strength, stealth, beauty){
    this.strength = strength;
    this.stealth = stealth;
    this.beauty = beauty;
    this.hungry = true;
  }
  
  feed(){
    if (this.hungry === true){
      this.hungry = false;
      console.log(`Blehhh, i vant to suck your blood!`)
    } else console.log(`You live to see another sunrise, Mortal.`)
  }


}

// let louie = new Vampire(8, 9, 10);
// console.log(louie)
// louie.feed();
// louie.feed();
// louie.feed();
// louie.feed();
// let lestat = new Vampire(8, 7, 9);
// lestat.feed();
// lestat.feed();

let dracula = new Vampire();
console.log(dracula.hungry)
dracula.hungry = false;
console.log(dracula.hungry)



// use the instanceOf operator to check if something is an instance of the vampire class.

// console.log(dracula instanceof Vampire)

