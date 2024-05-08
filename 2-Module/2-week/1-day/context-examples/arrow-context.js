let someObject = {
    regularFunction: function () {
        console.log("REGULAR: ", this)
    },
    arrowFunction: () => {
        console.log("ARROW FUNCTION: ", this)
    }
}

// someObject.regularFunction(); // "this" = someObject
// someObject.arrowFunction(); // "this" = global context 


// example constructor functions: 
// example function declaration (regular function):
function myConstructor(property1, property2) {
    this.property1 = property1 // "this" = myConstructor | "this.property1" = "prop1"
    this.property2 = property2 // "this" = myConstructor | "this.property2" = "prop2"
}
new myConstructor('prop1', 'prop2'); // instance




// example arrow function:
// const arrowConstructor = (property1, property2) => {
//     this.property1 = property1
//     this.property2 = property2
// }
// new arrowConstructor('prop1', 'prop2'); // throws an error due to arrow functions being lexically bound to their enclosing function
// there is no function enclosing this arrow function, so the `this` keyword refers to its lexical scope, or the "global" scope, or "global" context. 






// **Example of a Dog Class with an instance of `dog` with a `name` property set to "Fido"
// the Dog Class has a name property, and a `bark` method whos `this` is referring to a Dog Class Instance (dog, or "Fido")

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }

//     bark() {
//         console.log(this.name);
//     }
// }

// let dog = new Dog("Fido"); // instance 
// dog.bark()                  // "Fido"



// ** Example of using an anonymous declarative function as an argument to the setTimeout method. 
// we add a `delayedBark` function to the `Dog` class, which uses a `setTimeout` function to log `this.name` to the console after 1 second 

// the SetTimeout function has its own context equivalent to a `SetTimeout Object` 

// declarative functions are bound to the context of the caller function, or in this case, setTimeout

// setTimeout has a "this" context equivalent to a `SetTimeout Object`

// therefore `this` is not a reference to the Dog class instance, `dog`, or "Fido". 

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
//     delayedBark() {
//         console.log(this)
//         setTimeout(function () {
//             console.log(this)
//             console.log(this);
//         }, 1000)
//     }
// }

// let dog = new Dog("Fido");
// dog.delayedBark()           // undefined


// ** Example of using an arrow function within setTimeout inside of Dog class's delayedBark() method: 
// the arrow function is being supplied as an argument to the setTimeout

// the arrow function's context is lexically bound to the function enclosing it, not the function calling it.

// therefore we see the "this" keyword having a context of the enclosing function delayedBark()-

// which has a "this" keyword context referring to an instance of the Dog class, or "Fido"

// class Dog { // context: obj -> Dog 
//     constructor(name) {
//         this.name = name;
//     }
//     delayedBark() {
//         setTimeout(() => {
//             console.log(this.name)
//         }, 1000)
//     }
// }

// let dog = new Dog("Fido");
// dog.delayedBark() 