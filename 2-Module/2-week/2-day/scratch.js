class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    ageUp(message) {
      this.age++;
      console.log(
        `Happy birthday! ${this.name} is ${this.age} years old! ${message}`
      );
    }

    eat(food) {
      console.log(`${this.name} says yum i love ${food}`);
    }
  }
  let joe = new Person("Joe", 24);
// joe.ageUp("What we've seen")
  let aging = joe.ageUp;

    // // //CALL AND APPLY
    let boundEat = joe.eat
    // boundEat()
    // // //comma separated args for call
    // boundEat.call(joe, "apples", "new arg");


    // //array of args for apply
    // boundEat.apply(joe, ["pears", "in an array"]);


//     aging() // TypeError: Cannot read properties of undefined (reading 'age')
//   // once we assigned that method to a variable we lost the context.

// let newBind = joe.ageUp.bind(joe, "New Arg")
// newBind()
//     //BIND
//   let boundAging = aging.bind(joe, "YAY!");
//   // notice we are using the function that wouldn't work before,
//   // can use the method as well by saying joe.ageUp.bind(joe);

//   boundAging(); // prints `Happy birthday! Joe is 25 years old! YAY!











  //ARROW FUNC
  // class Fruit {
  //     constructor(name) {
  //       this.name = name;
  //     }

  //     eat = () => {
  //       console.log(`${this.name} has a bite mark`);
  //     };
  //   }

  //   const apple = new Fruit('apple');

  //   const eatFruit = apple.eat;
  //   eatFruit();
  //   setTimeout(eatFruit, 1000);
 