# W7D4

## Learning Boost(5m)

## Polymorphism

- Polymorphism in OOP is the idea that one method can have a different implementation
even though it has the same name because the result is equivalent.
- The two most common types of polymorphism are Overloading and Overriding.

### Overloading

- refers to sending a different number or type of params to a particular function. If you have a function sum(num1, num2) and sum(nums) the implementation is going to be different. num1 + num2 vs nums.reduce.

### Overriding

- when a child class gives its own - or a variation of - the implementation of a func from one of its ancestor classes (usually the parent). Refer to the fighting game, look at NPC's attack method and the Mage's attack method. They are named the same, but Mage's attack is going to override the NPC's attack and give a different output!

## Static Methods and Variables

### Static Methods

- Static methods are methods that are invoked on a class, instead of an instance of the class.
- use the static keyword then define the function (no function keyword here either!)
- Because they aren't invoked on an instance, they cant use the `this` keyword to access an instance! You can however pass one or more instances to a static method in the params to perform actions on those instances.
- Can be used to perform utility actions (independent of any instance, but related to the object type in some way) like comparing two instances.
- Look up the Math object on MDN. It only consists of static methods, which is why we have to say Math.floor(Math.random()) etc.
- see the fighting game for examples!
- Let's create a static method that will compare two instances together for the Healer class.

### Static Variables

- similar to static methods, they are not accessible via instances.
- are NOT declared inside the constructor.
- useful for caching information about the class
- see the fighting game for examples!

## Project Time (until end of class)

- [Class Syntax Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/class-syntax-ii-quiz)
- [Polymorphism Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/polymorphism-quiz)

- [Firendly and Evil Dragons](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/friendly-and-evil-dragons-phase-1-and-2)

- If you finish early do homework or go back and create flash cards from readings!
- Remember the test is MCQ only, please study accordingly!
