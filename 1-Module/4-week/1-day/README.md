# M1W4D1

## Assessment

## Callbacks

`Code it out`

- [useACallback]

`Vocabulary`

- First Class Function | MDN: [First-class Function]

  1. Stored in a variable (last week)
  2. Passed as an argument to a function (today)
  3. Returned from a function (today/more tomorrow)

- Higher Order Function
  - A function that intakes and/or returns another function.

- Callback
  - A function passed into another function

`First Class Objects`

- Stored in a variable

  ```js
  let func1 = function(){
    console.log('I\'m stored in a variable');
  };

  console.log(func1());
  ```

- Passed as an argument to a function

  ```js
  let higherOrderFunction = function(callback){
    callback();
  };

  let intoAFunction = function() {
    console.log('I\'m being passed into a function');
  };

  let intoAFunctionPt2 = function() {
    console.log('I\'m ALSO being passed into a function');
  }

  higherOrderFunction(intoAFunction);
  higherOrderFunction(intoAFunctionPt2);
  ```

- Returned from a function - NEXT WEEK

  ```js
  function HOF(){
    return function(){
      console.log('I\'m being returned from a function');
    }
  }

  console.log(HOF()); // this will be the inner function

  HOF()(); // this will invoke the inner function

  let returnFromFunc = HOF(); // we could also save it to a variable

  console.log(returnFromFunc); // this will be the inner function

  returnFromFunc(); // then call the variable

[useACallback]: ./useACallback.js
[First-class Function]: https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
