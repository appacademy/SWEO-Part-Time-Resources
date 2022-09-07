class Test {
  constructor(name){
    this.name = name
  }
    testFunc() {
      console.log(this, 'this is inside my testFunc');
      console.log(`this is equal to test1: ${this === test1}`);
    }
  }
  
  //? The class just creates the function, doesn't run it.
  const test1 = new Test('test1');
  // Calling the method on the instance
  // test1.testFunc(); // true 
  
  // Calling on a different instance
  // const test2 = new Test('test2');
  // test2.testFunc(); // false
  
  //!
  
  // Calling the method outside the class
  // const test1Func = test1.testFunc;
  // console.log(test1Func, 24);
  // test1Func(); // false, because the context of 'this' changes with a different invocation
  // test1.testFunc() // true
  

  // // Using this in Function Declaration Syntax
  // function someFunc() {
  //   console.log(this);
  // }
  // someFunc(); // global object
  
  // let someFunc = function () {
  //   console.log(this);
  // };
  // someFunc(); // global object
  
  // const someFunc = () => {
  //   console.log(this);
  // };
  
  // someFunc(); // empty object || undefined

  class Cat {
    purr() {
      console.log("meow");
    }
  
    purrMore() {
      this.purr();
    }
  }

let cat = new Cat();
console.log(cat.purrMore) // 
  
setTimeout(cat.purrMore, 2000);  // 2 sec later: error because setTimeout is on the global object, so we lose context of this when calling purrMore()