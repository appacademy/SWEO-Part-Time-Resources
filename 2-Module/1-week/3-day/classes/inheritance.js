// What does in mean for something to be inherited? 
// in the dictionary it says if something is inherited it is derived from one's ancestors.
// inheritance with classes works the same way. It's a trait that's inherited by the child 
// instance from the parent class. 


// Implementation inheritance means that the properties and methods defined on a parent 
// class are available on objects created from classes that inherit from those parent classes. 
// This also means a child class has access to all the implementation (the doing) that 
// was written in its parent class.

// say we have a human class.

class Human{
  constructor(age, gender, height){
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.hungry = true;
  }

  ageUp(){
    this.age++
    console.log(`Happy birthday, you're now ${this.age} years old!`);
  }

  eat(food){
    if (this.hungry === true){
      this.hungry = false;
      console.log(`I love eating ${food}!`)
    } else {
      this.hungry = true;
      console.log(`I cant eat ${food}, I'm not hungry`);
    }
  }

  static burp(){
    console.log(`BURRRRRP, excuse me!`)
  }
}

// let dmytro = new Human(25, 'male');
// console.log(dmytro);
// dmytro.eat('sandwiches');
// dmytro.ageUp();
// // dmytro.burp();
// Human.burp();


// When we create a class it is automatically inheriting from the js Object class.
// If we want it to inherit traits from another class - we say it extends that class.
// When a child class extends (or inherits from) a parent class it inherits the methods
// of that class, so you can use all of those methods without having to redifine them.

class Programmer extends Human{
  program(){
    console.log(`I love creating new things!`)
  }
}

const kenneth = new Programmer();
kenneth.eat('shrimp')
console.log(kenneth.age);


// If you want to define a new constructor for your class, but still want to inherit from 
// the parent's constructor as well, you use the `super` function inside the child class' 
// constructor method to call the constructor method of the parent class as well.

// the `super` function is a way to keep our code dry, and can ONLY be used inside a constructor.


class Mother extends Human{
  constructor(age, height, numberOfChildren){
    super(age, `female`,height);
    this.numberOfChildren = numberOfChildren
  }

  
}

const alex = new Mother(25, "5'4", 3)
console.log(alex);


