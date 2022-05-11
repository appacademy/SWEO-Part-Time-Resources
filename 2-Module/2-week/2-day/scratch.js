// class Cat {
//   purr() {
//     console.log('meow');
//   }

//   purrMore() {
//     this.purr();
//   }
// }
// let cat = new Cat();

// let sayMeow = cat.purrMore;
// // sayMeow(); // TypeError: this.purr is not a function

// // You can now use the built in Function.bind to ensure your context, `this`,
// // is the cat object
// let boundCat = sayMeow.bind(cat);

// // You still *need* to invoke the function
// boundCat(); // prints "meow"
// // boundCat.purr() // TypeError

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
// // console.log(cat.name)
// // console.log(dog.name)

// let sayNameFunc = cat.sayName;
// // let sayNameFunc = function () {
// // 	console.log(this.name)
// // }
// // console.log(sayNameFunc())

// let sayHelloCat = sayNameFunc.bind(cat);
// sayHelloCat(); // prints Meowser

// // // Can be chained together
// // let sayNameAgain = cat.sayName.bind(cat)
// // sayNameAgain()

// let sayHelloDog = sayNameFunc.bind(dog);
// sayHelloDog(); // prints Fido

// function greeting(...messages) {
//   const that = this;
//   return messages.map(function(message) {
// 		// Where am I? I've been bound to derek
//     return `${that.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: 'Derek'
// };

// const zaviar = {
// 	firstName: "Zaviar"
// }

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));

// const zaviarMessages = greeting.bind(zaviar, "Hello class!");
// console.log(zaviarMessages("Goodbye class!"));

// function hello() {
// 	// console.log(this.performance.nodeTiming.name)
// 	// console.log(this)
//   return `Hello ${this.firstName}`;
// }

// // hello()
// // console.log(hello())

// const derek = {
//   firstName: 'Derek'
// };

// const helloDerek = hello.bind(derek);
// console.log(helloDerek)
// console.log(helloDerek());

// function hello() {
//   return `Hello ${this.firstName}`;
// }

// const derek = {
//   firstName: 'Derek'
// };

// console.log(hello.call(derek));
// console.log(hello.apply(derek));
// console.log(hello.bind(derek));

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
// console.log(eatFruits.bind(mylo, 'apple', 'orange', 'banana'));
// console.log(eatFruits.bind(mylo, 'apple', 'orange', 'banana')());
// console.log(eatFruits.call(mylo, 'apple', 'orange', 'banana'));
// console.log(eatFruits.apply(mylo, ['apple', 'orange', 'banana']));

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
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.apply(mylo, 'apple', 'orange', 'banana'));

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
// console.log(eatFruits.call(mylo, ['apple', 'orange', 'banana']));

// function eatFruits(...fruits) {
//   return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.apply(mylo, ['apple', 'orange', 'banana']));

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//   arrowBoundBark() {
//     setTimeout(() => {
//       console.log(this);
//       console.log(this.name);
//     }, 1000);
//   }
// }

// let dog = new Dog('Fido');
// dog.arrowBoundBark(); // "Fido" (after 1 second)

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//   delayedBark() {
//     setTimeout(function () {
//       console.log(this); // Timeout Object
//       console.log(this.name); // undefined
//     }, 1000);
//     console.log(this.name); // Fido
//   }
// }

// let dog = new Dog('Fido');
// dog.delayedBark();
// const myBark = dog.delayedBark.bind(dog)          // undefined
// myBark()
