# M2W2D1

## Quizzes(30m)

- [Bind Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/bind-quiz)
- [Call and Apply Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/call-and-apply-quiz)
- [Arrow Functions Review and Context Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/arrow-functions-review-and-context-quiz)

## Lecture(20m)

### [Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

- the `bind()` function is used to make a function that, no matter how it is called, is called with a particular `this` value.

```js
let boundFunc = func.bind(context);
```

- When bind is called it returns an `exotic function` (a function with it's `this` bound no matter where it's invoked).

```js
class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  };

  ageUp(){
    this.age++;
    console.log(`Happy birthday! ${this.name} is ${this.age} years old!`);
  };

  eat(food){
    console.log(`yum i love ${food}`);
  };
}

let joe = new Person('Joe', 24);
let aging = joe.ageUp

// aging() // TypeError: Cannot read properties of undefined (reading 'age') 
// once we assigned that method to a variable we lost the context.

let boundAging = aging.bind(joe);
// notice we are using the function that wouldn't work before, can use the method as well by saying joe.ageUp.bind(joe);
boundAging(); // prints `Happy birthday! Joe is 25 years old!`
```

- Important to remember that bind will update the context of any function with any context.
- if you want to use a method from one class on an instance of a different class, you can set that method to a variable and bind the other item! (may not work as you expect if you don't have the correct properties though)
- used to guarantee the context of a function.

### Call and Apply

- Will immediately invoke your bound function and return the return value of that function called with the specific context you assign.
- Easy way to guarantee the context of a function call and be able to pass args to that function at the same time.

#### Syntax

- the first arg for both Call and Apply is the `this` that you want to bind the functions context to.

- [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
  - expects comma-separated values for the args after `this`

  ```js
  joe.eat.call(joe, 'apples'); // prints `yum i love apples`
  ```

- [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
  - expects an array of args after `this`

  ```js
  joe.eat.apply(joe, ['pears']) // prints `yum i love pears`
  ```

### Arrow Functions are the best

- Context works differently in arrow functions. Instead of applying the context based on where the code is `called` (`invoked`), the context of an arrow function is based on where the function was `defined`.

```js
class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  };

  // to test, copy these functions and paste into the setTimeout in ageUp.

  // function(){
  //   console.log(`Happy birthday! ${this.name} is ${this.age} years old!`);
  // }
  
  // () => {
  //   console.log(`Happy birthday! ${this.name} is ${this.age} years old!`);
  // }

  ageUp(){
    this.age++;
    setTimeout(() => {
      console.log(`Happy birthday! ${this.name} is ${this.age} years old!`);
    }, 2500);
  };
}

const joe = new Person('Joe', 24);
// try the function declaration syntax first
joe.ageUp(); // prints Happy birthday! undefined is undefined years old!
// the context of this has been lost!

// try the arrow syntax next
joe.ageUp(); // prints Happy birthday! Joe is 25 years old!
// the context is correct because the arrow function was
// defined in the class itself, so this is referring to the instance
// at the time the function was defined.
```

Why not just define all methods with arrows so the context is never lost?

- if you define a method with an arrow function, JS will create a new function and store it in memory for every instance you create of that object. If you have 1000 people you will have 1000 corresponding functions saved in memory. That can get messy quickly!
- The only time you should define a class method as an arrow function is if you'll be using that function more times than the amount of instances you're creating, or if you don't care about app memory and wont be creating too many instances.

## Project Time (until EOD)

- Going to finish our [Context Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-8---context-and-tdd/context-project--phase-4-11) from yesterday. This is the same project, however we are going to pair today, so you will need a new repo and just start from phase 4.
- This project does have 1 or 2 problems that require knowledge that we did not go over together. Please look up bind, call, and apply on MDN first and try to solve these problems using research before you ask a question! 😊

- If you finish your project, please do the Formative Quiz for today and get started on tomorrows homework.
