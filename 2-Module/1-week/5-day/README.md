# M2-W1-D5

---

## Static Methods and Properties

```js
class Dog {
  constructor(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;

    Dog.dogs.push(this);
  }

  static dogs = [];

  static printDogs(){
    Dog.dogs.forEach((dog, i)=> {
      console.log(`${i + 1}: ${dog.name} is a ${dog.age} year old ${dog.color} dog.`);
    })
  }

  print(){
    console.log(`${this.name} is a ${this.age} year old ${this.color} dog.`);
  }
};

const cali = new Dog('Cali', 5, 'black');
const chandler = new Dog('Chandler', 4, 'yellow');

cali.print();
console.log('------')
Dog.printDogs();
```

---

## Polymorphism

- Function overloading: sending a different number or type of parameters to a
  particular function. (Doesn't exist in JS)
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

## Friendly and Evil Dragons Project + Review Time (Solo)

---

## Practice Assessment (35m)

---

## Practice Assessment Walkthrough

---

## Kahoot

---
