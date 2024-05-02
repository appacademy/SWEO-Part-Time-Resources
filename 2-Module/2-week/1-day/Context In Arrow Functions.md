# Arrow Functions & Context

### What is an arrow function?
Arrow functions are not only a different way of defining functions. Arrow functions also apply context differently.

Before discussing what an arrow function ***is***, we have to talk about what an arrow function ***isn't***.

#### An arrow function **is not**:
- An arrow function ***is not*** a replacement for the `function` keyword. 

#### An arrow function **is**: 
- An arrow function is **always** anonymous (i.e. function without a name)

----
### Why are Arrow Functions useful?
#### Single line expressions
Arrow functions are a great use case for ***single-line expressions***. Consider the following code: 
```js
let numbers = [1,2,3];
let subtractOne = numbers.map(function (number) {
    return number - 1
});

console.log(subtractOne) // [0, 1, 2]
```
We can reduce this code down to a single line with an arrow function, which saves us a lot of typing while making the code more readable: 
```js
let numbers = [1,2,3];
let subtractOne = numbers.map((number) => number - 1);
console.log(subtractOne) // [0, 1, 2]
```
#### Single argument functions
Arrow Functions also give us the ability to remove parenthesis when only using a single argument function.
The above example would now become this:  
```js
let numbers = [1,2,3];
let subtractOne = numbers.map(number => number - 1);
console.log(subtractOne) // [0, 1, 2]
```

### Arrow Function Context is Lexically Bound
- Arrow functions do not have inherent bindings to a `this` object based on context; instead, their `this` is lexically bound. 

- Arrow Functions inherit the value of "this" from the enclosing scope. This feature can be advantageous when dealing with callback functions where the value of "this" can be uncertain. 

An arrow function's `this` refers to whatever code `contains` it, not `calls` it. This makes them more flexible for use in method callbacks than normal anonymous functions. 

