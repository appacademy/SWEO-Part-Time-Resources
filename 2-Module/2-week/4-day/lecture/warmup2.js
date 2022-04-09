// // /*
// // Make a parent animal class and a child class that extends the parent class.
// // Use at least two properties on the parent that the child can inherit.
// // Use at least one method on the parent that the child can inherit.
// // Make at least one unique property on the child.
// // Make at least on unique method on the child.
// // */

// class Child {
//   constructor(name, face, body, thumbs) {
//     this.name = name;
//     this.face = face;
//     this.body = body;
//     this.thumbs = thumbs;
//   }
//   run() {
//     return `${this.name} is running`;
//   }
// }

// class Animal extends Child {
//   constructor(name, face, body, thumbs, tail) {
//     super(name, thumbs);
//     this.face = face;
//     this.body = body;
//     this.tail = tail;
//   }
//   swim(){
//     return `${this.name} is swimming with ${this.tail}`
//   }

// }
// const nemo = new Animal("nemo","young","scrawny","no thumbs","long tail")

// console.log(nemo.run())
// console.log(nemo.swim())
/*
Make a class called Pets.
Make at least 3 properties.
Make at least 1 instance method.
Make at least 1 static variable.
Make at least 1 static method.
make atleast one child that inherits a method.
*/
class Animal {
    constructor(name, type){
      this.name = name;
      this.type = type;
    }

    makeSound(){
      console.log('an animal sound');
    }
//Function overloading: sending a different number or type of parameters to a particular function.
  sum() {

        // if no argument
        if (arguments.length == 0) {
            console.log('You have not passed any argument');
        }

        // if only one argument
        else if (arguments.length == 1) {
            console.log('Pass at least two arguments');
        }

        // multiple arguments
        else {
            let result = 0;
            let length = arguments.length;

            for (i = 0; i < length; i++) {
                result = result + arguments[i];
            }
            console.log(result);
        }
    }

  }

  class Dog extends Animal {
    constructor(name){
      super(name, 'dog')
    }
    //Function overriding: a child class gives its own version of the implementation of a function from one of its ancestor classes (usually the parent)
    makeSound(){
        console.log("woof")
    }
  }

  class Cat extends Animal {
    constructor(name){
      super(name, 'cat')
    }
    makeSound(){
        super.makeSound()
        console.log("MEOW")
    }
  }

  let puppy = new Dog("buddy")
  let kitty = new Cat("missy")

  console.log(kitty.makeSound())
// //Function overloading: sending a different number or type of parameters to a particular function.
// class DemoOverload{
//   public int add(int x, int y){  //method 1
//   return x+y;
//   }

//   public int add(int x, int y, int z){ //method 2
//   return x+y+z;
//   }

//   public int add(double x, int y){ //method 3
//   return (int)x+y;
//   }

//   public int add(int x, double y){ //method 4
//   return x+(int)y;
//   }
// }
