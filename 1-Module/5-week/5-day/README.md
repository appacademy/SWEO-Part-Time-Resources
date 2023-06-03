# `M1W5D5`

## Function Hoisting Prep (20min)

Function Hoisting Lecture Video

## Function Hoisting

Similar to how JS can hoist variables it can also hoist functions.

- Variable Hoisting

```js
//var
const withVar = () => {
  console.log(animal);
  var animal = "Cat";
};

withVar(); // undefined

//const

const withConst = () => {
  console.log(animal);
  const animal = "Dog";
};

withConst(); // Reference Error
```

- Function Hoisting

```js
// function declaration

hello(); // hello

function hello() {
  console.log("hello!");
}

// function expression

_hello(); // Reference Error

let _hello = function () {
  console.log("hello!");
};

// function expression with var

__hello(); // Type Error

var __hello = function () {
  console.log("hello!");
};

// function declaration with var

var foo = "I'm a variable";

function foo() {
  return "I'm a function";
}

console.log(foo); // I am a variable

// function declaration with let/const

let foo = "I'm a variable";

function foo() {
  return "I'm a function";
}

console.log(foo); // Syntax Error
```

## IIFE and Truthy/Falsy (25 minutes)

- Primitive Data Types Quiz
- Falsey Values in JavaScript Quiz
- IIFE Quiz

## IIFE

Immediately Invoked Function Expression

The two important pieces of an IIFE. [MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2. The second part creates the immediately invoked function expression ()
   through which the JavaScript engine will directly interpret the function.

```js
(function () {
  console.log("I run immediately");
})();
```

Primarily used to avoid polluting the global namespace. Useful for situations
where you only need a function to run once.

## Truthy and Falsy

Falsy Values

|       |           |
| ----- | --------- |
| 0     | -0        |
| 0n    | ""        |
| null  | undefined |
| false | NaN       |

Everything else is Truthy;
