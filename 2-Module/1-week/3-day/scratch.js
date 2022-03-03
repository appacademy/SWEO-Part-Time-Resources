//? What is a class?
// - Blueprint for something you want to use many times

// const myArr = Array(5, 20, 'hello', null);

// myArr.map((el) => console.log(el));

// class MyArr {
// 	constructor() {

// 	}

// 	myMap(cb) {
// 		cb()
// 	}
// }

// const myObj = {
//   aVal: 25,
//   aFunc: () => {
//     console.log('Heyo');
//   },
// };

// console.log(myObj['aVal']);
// myObj.aFunc();

// Length is just a value
// const l = 'length';
// console.log(myArr[l]);
// console.log(myArr.slice());
// const p = console.log;

// p('hello ');

//! Crazy Version
class ChipotleBurrito {
  constructor(meat, toppings = [], spork = false) {
    this.meat = meat;
    this.toppings = toppings;
    this.tortillaType = 'Corn';
    this.spork = spork;
    if (this.spork) {
      this.printThis(this.meat);
    }
  }

  doorDash() {
    return `Order me a ${
      this.meat
    } burrito with these toppings: ${this.toppings.join(', ')}`;
  }

  printThis(aString) {
    console.log(aString);
  }
}

//* Normal version
// class ChipotleBurrito {
//   constructor(meat, toppings = []) {
//     this.meat = meat;
//     this.toppings = toppings;
//     this.tortillaType = 'Corn';
//   }

//   doorDash() {
//     return `Order me a ${
//       this.meat
//     } burrito with these toppings: ${this.toppings.join(', ')}`;
//   }
// }

// const zOrder = new ChipotleBurrito('Chicken', [
//   'White Rice',
//   'Black Beans',
//   'Sour Cream',
//   'Salsa',
//   'Guac',
// ]);
// const bOrder = new ChipotleBurrito('Double Chicken', [
//   'Brown Rice',
//   'Pinto Beans',
//   'Corn',
//   'Sour Cream',
//   'Cheese',
// ]);

// // console.log(myOrder.meat);
// console.log(zOrder.packASpork());
// console.log(
//   '___________________________________________________________________________'
// );
// console.log(bOrder.packASpork());
// console.log(
//   '___________________________________________________________________________'
// );
// console.log(jOrder.packASpork());

// const jOrder = new ChipotleBurrito(
//   'Barbaquo',
//   ['White Rice, Guac'],
//   'Spork please'
// );

// console.log(jOrder.doorDash());

//? Let's create a Dog class

// class Dog {
//   constructor(name, age, breed, smell, weight, favToy) {
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//     this.smell = smell;
//     this.weight = weight;
//     this.favToy = favToy;
//     this.goodDog = true;
//   }

//   // Something to do with wagging a tail
//   countWags() {}

//   // Anything about barking
//   bark() {}

//   destroy() {}
// }

// Bike
// class Bike {
//   constructor(model, wheels, rimSize, spinners) {
//     this.model = model;
//     this.wheels = wheels;
//   }
// }

// // Icecream

// class Icecream {
//   constructor(flavor, cone, brand, toppings) {
//     this.flavor = flavor;
//     this.cone = cone;
//   }
// }
