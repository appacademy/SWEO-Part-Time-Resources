# `M2W1D4`

## Polymorphism

- Polymorphism in OOP is the idea that one method can have a different implementation
even though it has the same name because the result is equivalent
- The two most common types of polymorphism are Overloading and Overriding

### Overloading

- Refers to sending a different number or type of params to a particular function
  - If you have a function sum(num1, num2) and sum(nums) the implementation is going to be different. num1 + num2 vs nums.reduce

### Overriding

- When a child class gives its own - or a variation of - the implementation of a func from one of its ancestor classes (usually the parent)

## Static Methods and Variables

### Static Methods

- Methods that are invoked on a class, instead of an instance of the class
- Use the static keyword
- Because they aren't invoked on an instance, they cant use the `this` keyword to access an instance
  - Can pass one or more instances to a static method as params
- Can be used to perform utility actions (independent of any instance, but related to the object type in some way) like comparing two instances

### Static Variables

- Similar to static methods, they are not accessible via instances
- Are NOT declared inside the constructor.
- Useful for caching information about the class

## Project Time
