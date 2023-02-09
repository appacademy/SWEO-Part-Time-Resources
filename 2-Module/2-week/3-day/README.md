## Bind, Call, Apply

```js
class Cat {
  purr() {
    console.log('meow');
  }

  purrMore() {
    this.purr();
  }
}
let cat = new Cat();

let sayMeow = cat.purrMore;
sayMeow(); // TypeError: this.purr is not a function

// You can now use the built in Function.bind to ensure your context, `this`,
// is the cat object
let boundCat = sayMeow.bind(cat);

// You still *need* to invoke the function
boundCat(); // prints "meow"
```
## Bind vs. Call and Apply

- Apply takes in an array of arguments while call spreads them out in comma-separated values. You can remember this by thinking: a  is for array and c is for comma.
- Notice that call and apply are essentially interchangeable and follow the same rules as bind with the main difference being that call and apply invoke the function they're being called on, whereas bind returns the function with its context set.


## Arrow functions

- Arrow functions do not have inherent bindings to a this object based on context; instead, their *this* is lexically bound.

- This just means that an arrow function's this refers to whatever code contains it, not calls it. This makes them much more flexible for use in method callbacks than normal anonymous functions.


## Quizzes + Lecture

- Bind Quiz
- Call and Apply Quiz
- Arrow Functions Review and Context Quiz