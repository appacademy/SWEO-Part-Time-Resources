//BIND
//In order to ensure the context for a function we can use bind();

//MDN Definition - "The simplest use of bind() is to make a function that, no matter how it is called,
//                    is called with a particular THIS value. "

//When bind is called it returns the bound function and we call these "Exotic Functions"
// All this means is that no matter where we call it, it has the same context

//SYNTAX :
// let boundFunction = func.bind(context/object);

//The most common use case of bind would be to access a method on an object
//in order to use it on any other object that has the same property name
//as the one the method is accessing

//CALL AND APPLY
//While bind returns the bound function, call and apply invoke the bound function
//immediately return the return value of that function

//SYNTAX
//Call :
//  C is for comma
//  let callReturn = func.call(context, ...args)
// the arguments for call are seperated by commas

//Apply :
// A is for Array!
// let applyReturn = func.apply(context, [...args])

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   barkNTimes(n) {
//     for (let i = 0; i < n; i++) {
//       console.log(`${this.name} yelled at you`);
//     }
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let puppy = new Dog("Charger");
// let kitty = new Cat("King")

// let barkFunction = puppy.barkNTimes;

// barkFunction.call(puppy, 5)

// barkFunction.apply(kitty, [5])


//BIND 
// let puppy = new Dog("Charger");
// let kitty = new Cat("King")

// let dogFunc = puppy.whoAmI;

// let sayHiCat = dogFunc.bind(kitty);
// let sayHiDog = dogFunc.bind(puppy);

// sayHiCat()
// sayHiDog()

// let puppy = new Dog("Charger");

// let sayWho = puppy.whoAmI;

// let sayWhoBound = sayWho.bind(puppy);
// //OR let sayWhoBound = puppy.whoAmI.bind(puppy)

// sayWhoBound()

//CONTEXT IN ARROW FUNCTIONS
//Arrow functions apply context differently!

//Arrow functions don't have an inherent binding to a THIS based on context
//theirs is lexically bound

//All this means is that arrow functions THIS refers to the code that contains it

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   delayedBark() {
//     setTimeout(() => {
//       console.log(this)
//     }, 1500)
//   }
// }

// let puppy = new Dog("Charger");

// puppy.delayedBark()