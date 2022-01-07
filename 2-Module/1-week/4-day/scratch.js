/*
Make a parent animal class and a child class that extends the parent class.
Use at least two properties on the parent that the child can inherit.
Use at least one method on the parent that the child can inherit.
Make at least one unique property on the child.
Make at least on unique method on the child.
*/

// class Animal {
//   constructor(speed, color){
//     // console.log(this)
//     this.speed = speed;
//     this.color = color;
//     // console.log(this)
//   }

//   move(){
//      console.log(`animal moves at ${this.speed} mph`)
//   }
// }

// class Dog extends Animal{
//   constructor(speed, color, sound){
//     super(speed, color);
//     this.sound = sound;
//   }

//   speak(){
//     console.log(this.sound);
//   }
// }

// const test = new Animal(9001, 'orange')
// test.move()
// console.log(test)

// const alf = new Dog(5, 'grey', 'woof')
// alf.move();
// alf.speak();

//------------------------------------------------------------------------------
/*
I want to keep track of ALL instances of iceCream
  Create a Static variable that will hold all of the iceCream Instances
  Add each instance to that variable at construction time
I want to see how much money I've made on ALL iceCream
  Create a Static method that will iterate over the static variable
  Return the sum of all the prices
*/

// class IceCream {
//   constructor(flavor, toppings) {
//     this.flavor = flavor;
//     this.toppings = toppings || [];
//     this.price = 1.5 + (this.toppings.length * 0.5);
//     IceCream.iceCreamTracker.push(this);
//   }

//   static iceCreamTracker = [];

//   static allMyMoney(){
//     let arr = IceCream.iceCreamTracker;
//     return arr.reduce((sum, iceCream) => sum + iceCream.price, 0)
//   }
// }

// let vanilla = new IceCream('Vanilla', ['sprinkles', 'strawberry']);
// let chocolate = new IceCream('Chocolate', ['peanut butter', 'caramel', 'Oreo']);
// let orange = new IceCream('Orange Sherbert')

// console.log(IceCream.iceCreamTracker);
// console.log(IceCream.allMyMoney());

// ------------------------------------------------------------


/*
Make a class called Pets.
Make at least 3 properties.
Make at least 1 instance method.
Make at least 1 static variable.
Make at least 1 static method.
*/

// class Pets {
//   constructor(name, type, age){
//     this.name = name;
//     this.type = type;
//     this.age = age;
//     Pets.myPets.push(this);
//   }

//   static myPets = [];

//   static getPetNames(){
//     let pets = Pets.myPets;
//     return pets.map(pet => pet.name);
//   }

//   print(){
//     console.log(this);
//   }
// }

// const juice = new Pets('Juice', 'cat', 0.7);
// const alf = new Pets('Alf', 'dog', 1);
// juice.print()
// console.log(Pets.getPetNames());

//-------------------------------------------------------------------

// class Animal {
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }

//   makeSound(){
//     console.log('an animal sound');
//   }
// }

// class Dog extends Animal {
//   constructor(name){
//     super(name, 'dog')
//   }

//   makeSound(){
//     console.log('woof');
//   }
// }

// class Cat extends Animal {
//   constructor(name){
//     super(name, 'cat')
//   }

//   makeSound(){
//     console.log('meow');
//   }
// }

// const animal = new Animal('callie', 'dog');
// const alf = new Dog('alf');
// const juice = new Cat('juice');

// animal.makeSound()
// alf.makeSound()
// juice.makeSound()
