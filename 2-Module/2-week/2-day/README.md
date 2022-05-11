# M2W2D2 (2's day)

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

## Quizzes + Lecture

- Bind Quiz
- Call and Apply Quiz
- Arrow Functions Review and Context Quiz
