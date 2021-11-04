class Test {
  testFunc(name, num) {
    console.log(name, num)
    console.log(this === test1);
  }
}

const test1 = new Test();

// setTimeout(test1.testFunc.bind(test1, "Mylo", 3), 1000); // wait 1 second, true

/* 
Using this in Function Declaration Syntax
Could I make `this` equal to test1 in this function?
*/
// function someFunc() {
//   console.log(this);
// }

// someFunc.call(test1); // (undefined) Test {...}




// function greeting(...messages) {
//   return messages.map((message) => {
//     return `${this.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: 'Derek',
// };

// const derekMessages = greeting.bind(derek, 'Hello class!');
// console.log(derekMessages('Goodbye class!'));

class Fruit {
  constructor(name) {
    this.name = name;
  }

  eat = () => {
    console.log(`${this.name} has a bite mark`);
  };
}

const apple = new Fruit('apple');
const eat = apple.eat;
eat();
setTimeout(eat, 1000);
