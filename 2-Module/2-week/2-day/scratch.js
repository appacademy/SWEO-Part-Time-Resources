// class Cat {
//   purr() {
//     console.log('meow');
//   }

//   purrMore() {
//     this.purr();
// 		// console.log(this)
//   }
// }

// const myObj = {
// 	name: "Zaviar"
// }

// console.log(myObj.name)
// const n = myObj.name
// myObj.name = "Will"
// console.log(n)
// console.log(myObj.name)

// let cat = new Cat();

// let sayMeow = cat.purrMore;
// cat.purrMore()
// let otherMeow = cat.purr // this works because we don't care about context
// otherMeow()
// sayMeow(); // TypeError: Cannot read props of undefined

// // You can now use the built in Function.bind to ensure your context, `this`,
// // is the cat object
// let boundCat = sayMeow.bind(cat);
// console.log(boundCat)
// // You still *need* to invoke the function
// boundCat(); // prints "meow"

// //? Classes
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     console.log(this.name);
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// //! Instances

// let cat = new Cat('Meowser');

// let dog = new Dog('Fido');

// // console.log("This is the cat", cat)
// // console.log("This is the dog", dog)

// let sayNameFunc = cat.sayName;
// // console.log(sayNameFunc)

// let sayHelloCat = sayNameFunc.bind(cat);
// // console.log(sayHelloCat)
// sayHelloCat(); // prints Meowser

// let sayHelloDog = sayNameFunc.bind(dog);
// // sayHelloDog(); // prints Fido
// // let newFunc = sayHelloDog.bind(cat)
// // newFunc()

// function greeting(...messages) { // = ["Hello class!"] behind the scenes, not real code
//   const that = this;
// 	// console.log(messages)
//   return messages.map(function(message) {
//     return `${that.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: 'Derek'
// };

//!
// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));
// console.log(derekMessages("Hi class!"));
//!
// const derekMessages = greeting.bind(derek, "Hello class!", "Goodbye class!");
// console.log(derekMessages());
//!
// const derekMessages = greeting.bind(derek);
// console.log(derekMessages("Hello class!", "Goodbye class!"));

// function hello() {
// 	// console.log(this) // .performance.nodeTiming.name
//   return `Hello ${this.firstName}`;
// }
// // console.log(hello())

// const derek = {
//   firstName: 'Derek'
// };

// const helloDerek = hello.bind(derek);
// console.log(helloDerek());

// function hello() {
//   return `Hello ${this.firstName}`;
// }

// const derek = {
//   firstName: 'Derek'
// };

// console.log(hello.bind(derek)); // bind
// console.log(hello.bind(derek)()); // call and apply

// function eatFruits(...fruits) {
// 	console.log({fruits})
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.call(mylo, 'apple', 'orange', 'banana'));
// console.log(eatFruits.bind(mylo, 'apple', 'orange', 'banana'));
// console.log(eatFruits.bind(mylo, 'apple', 'orange', 'banana')());

// function greeting(...messages) {
//   const that = this;
//   return messages.map(function(message) {
//     return `${that.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: 'Derek'
// };

// const derekMessages = greeting.call(derek, "Hello class!");
// console.log(derekMessages)
// console.log(derekMessages("Goodbye class!"));

// function eatFruits(...fruits) {
//   // console.log(fruits.join(' and '));
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.call(mylo, ['apple', 'orange', 'banana'])) // Mylo ate apple,orange,banana
// console.log(eatFruits.call(mylo, [['apple'], [['orange'], ['banana']]])) // Mylo ate apple,orange,banana

// function eatFruits(...fruits) {
// 	console.log(fruits)
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.apply(mylo, ['apple', 'orange', 'banana']));

// function eatFruits(...fruits) {
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.apply(mylo, 'apple', 'orange', 'banana'));

//! Arrow functions

// class Dog {
// 	constructor(name) {
//     this.name = name;
//   }

//   delayedBark() {
//     setTimeout(function() {
//       console.log(this);
//       console.log(this.name);
//     }, 1000);
//   }
// }

// let dog = new Dog("Fido");
// dog.delayedBark()  

class Dog {
	constructor(name) {
    this.name = name;
  }

  arrowBoundBark() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
}

let dog = new Dog("Fido");
dog.arrowBoundBark();     // "Fido" (after 1 second)