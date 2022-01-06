# M2-W1-D4

- Static Methods and Properties
- Polymorphism

---

## Class Syntax II Quiz && Warmup Problem (Solo, 20m)

- [Class Syntax II Quiz]

```js
/*
Make a parent animal class and a child class that extends the parent class.
Use at least two properties on the parent that the child can inherit.
Use at least one method on the parent that the child can inherit.
Make at least one unique property on the child.
Make at least on unique method on the child.
*/

//Example

class Parent {
  constructor(){
    prop1
    prop2
  }

  method1(){}
}

class Child extends Parent{
  constructor(){
    super()
    prop3
  }
  method2(){}
}
```
---

## Static Properties and Methods (20m)

Static Properies and Methods are attached directly to the class, rather than the
instance of the class.

They are declared like any other variable or method, but using the `static`
keyword.

```js
/*
I want to keep track of ALL instances of iceCream
  Create a Static variable that will hold all of the iceCream Instances
  Add each instance to that variable at construction time
I want to see how much money I've made on ALL iceCream
  Create a Static method that will iterate over the static variable
  Return the sum of all the prices
*/

class IceCream {
  constructor(flavor, toppings) {
    this.flavor = flavor;
    this.toppings = toppings || [];
    this.price = 1.5 + this.toppings.length * 0.5;
  }
}

let vanilla = new IceCream('Vanilla', ['sprinkles', 'strawberry']);
let chocolate = new IceCream('Chocolate', ['peanut butter', 'caramel', 'Oreo']);
let orange = new IceCream('Orange Sherbert')
```

---

## Polymorphism Quiz && Warmup Problem 2 (Solo, 20m)

- [Polymorphism Quiz]

```js
/*
Make a class called Pets.
Make at least 3 properties.
Make at least 1 instance method.
Make at least 1 static variable.
Make at least 1 static method.
*/
```

---

## Polymorphism (15m)

- Function overloading: sending a different number or type of parameters to a particular function.
- Function overriding: a child class gives its own version of the implementation
  of a function from one of its ancestor classes (usually the parent)

Primary Idea: When a function or class has a different implentation of the same
thing in different places.

```js
class Animal {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }

  makeSound(){
    console.log('an animal sound');
  }
}

class Dog extends Animal {
  constructor(name){
    super(name, 'dog')
  }
}

class Cat extends Animal {
  constructor(name){
    super(name, 'cat')
  }
}

```

---

## Friendly and Evil Dragons Project (Paired)

Start Paired tonight, finish Solo for fridays homework.

- [Friendly and Evil Dragons]

---
[Class Syntax II Quiz]:https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-7---oop/class-syntax-ii-quizS
[Polymorphism Quiz]:https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-7---oop/polymorphism-quiz
[Friendly and Evil Dragons]:https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-7---oop/friendly-and-evil-dragons-phase-1-and-2
