class Test {
    testFunc() {
      debugger;
      console.log(this);
      console.log(`this is equal to test1: ${this === test1}`);
    }
  }
  
  //? The class just creates the function, doesn't run it.
  const test1 = new Test();
  // Calling the method on the instance
//   test1.testFunc(); // 
  
  // Calling on a different instance
//   const test2 = new Test();
//   test2.testFunc(); // 
  
  //!
  
  // Calling the method outside the class
//   const test1Func = test1.testFunc;
//   console.log(test1Func, 39);
//   test1Func(); // 
//   test1.testFunc() // 
  
  // // Using this in Function Declaration Syntax
  // function someFunc() {
  //   console.log(this);
  // }
  // someFunc(); // 
  
  // let someFunc = function () {
  //   console.log(this);
  // };
  // someFunc(); // 
  
  // const someFunc = () => {
  //   console.log(this);
  // };
  
  // someFunc(); // 