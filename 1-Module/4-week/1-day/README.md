# M1W4D1

## Assessment

## First Class Objects - 18 min

`Videos`

- [First Class Objects Lecture]
- [First Class Objects Demo]

### Discussion: First Class Objects

- First Class Function | MDN: [First-class Function]

  1. Stored in a variable (last week)
  2. Passed as an argument to a function (today)
  3. Returned from a function (Later this week)

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

- Returned from a function (Later this week)

## Callbacks

`Vocabulary`

- Higher Order Function
  - A function that intakes and/or returns another function.

- Callback
  - A function passed into another function

`Videos / Readings`

- [Callbacks Reading]
- [Using Callbacks Pt 1]
- [Using Callbacks Pt 2]
- [Multiple Callbacks Demo]

`Code it out`

- [useACallback]

### Discussion useCallbacks

[useACallback]: ./useACallback.js
[First-class Function]: https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
[First Class Objects Lecture]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-4---callbacks--scope--and-closure/functions-as-first-class-objects-lecture
[First Class Objects Demo]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-4---callbacks--scope--and-closure/functions-as-first-class-objects-demo
[Callbacks Reading]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-4---callbacks--scope--and-closure/callbacks-reading
[Using Callbacks Pt 1]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-4---callbacks--scope--and-closure/using-callback-functions-demo-1
[Using Callbacks Pt 2]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-4---callbacks--scope--and-closure/using-callback-functions-demo-2
[Multiple Callbacks Demo]: https://open.appacademy.io/learn/js-py---pt-mar-2022-online/week-4---callbacks--scope--and-closure/multiple-callbacks-demo
