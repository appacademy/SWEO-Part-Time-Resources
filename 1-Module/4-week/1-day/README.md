# W4D1

## Assessment (1h20m)

---

## First Class Functions (20m)

`Videos`

- [First Class Objects Lecture]
- [First Class Objects Demo]

## Discussion 1 (10m)

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

---

## Callbacks (25m)

`Vocabulary`

- Higher Order Function
  - A function that intakes and/or returns another function.

- Callback
  - A function passed into another function

`Videos / Readings`

- [Callbacks Reading]
- [Using Callbacks Pt 1]
- [Using Callbacks Pt 2]
- [Multiple Callbacks]

## Practice Problem (15m)

```js
/*
Write a higher order function called printVals that:
  1. Intakes two parameters
    1. An object
    2. An optional callback
  2. If a callback is passed in
    1. Return the result of passing in an array of values from the obj to the cb
  3. Otherwise return an array of values from the obj
*/
```

---

[First Class Objects Lecture]:https://open.appacademy.io/learn/js-py---pt-jun-2021-online/week-4---callbacks--scope--and-closure/functions-as-first-class-objects-lecture
[First Class Objects Demo]:https://open.appacademy.io/learn/js-py---pt-jun-2021-online/week-4---callbacks--scope--and-closure/functions-as-first-class-objects-demo
[First-class Function]:https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
[Callbacks Reading]:https://open.appacademy.io/learn/js-py---pt-jun-2021-online/week-4---callbacks--scope--and-closure/callbacks-reading
[Using Callbacks Pt 1]:https://open.appacademy.io/learn/js-py---pt-jun-2021-online/week-4---callbacks--scope--and-closure/using-callback-functions-demo-1
[Using Callbacks Pt 2]:https://open.appacademy.io/learn/js-py---pt-jun-2021-online/week-4---callbacks--scope--and-closure/using-callback-functions-demo-2
[Multiple Callbacks]:https://open.appacademy.io/learn/js-py---pt-jun-2021-online/week-4---callbacks--scope--and-closure/multiple-callbacks-demo
