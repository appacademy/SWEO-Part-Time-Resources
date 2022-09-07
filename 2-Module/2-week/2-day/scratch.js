// class Test {
//    constructor(name){
//     this.name = name
//    }

//     testFunc() {
//       console.log(this);
//       console.log(this)
//       console.log(`this is equal to test1: ${this === test1}`);
//     }
//   }
  
  //? The class just creates the function, doesn't run it.
  // const test1 = new Test('test1');
  // Calling the method on the instance
  // test1.testFunc(); // evaluates to true, because this is equal to the instance of test1
  // console.log(test1)
  
  // Calling on a different instance
  // const test2 = new Test('test2');
  // test2.testFunc(); // evaluates to false, because this keyward is not equal to instance of test1
  
  //!
  
  // Calling the method outside the class
  // const test1Func = test1.testFunc;
  // console.log(test1Func, 26); // 
  // test1Func(); // /
  // test1.testFunc()
//   test1.testFunc() // 

  
  // // Using this in Function Declaration Syntax
  // function someFunc() {
  //   console.log(this);
  // }

  // someFunc(); // global object
  
  // let someFunc = function () {
  //   console.log(this);
  // };
  // someFunc(); // global object
  
  const someFunc = () => {
    console.log(this);
  };
  
  someFunc(); // empty object || undefined
