# W5D5 - Function Hoisting, IIFE, & Falsy Values

## Project time (1.5h)

## Practice Assessment (until lunch)

## Lunchtime (30m)

## Practice Assessment Walkthru

## Function Hoisting Prep

Function Hoisting Lecture Video (20m)

## Discussion (30m)

## Function Hoisting

```js
// function declaration

hello(); // hello

function hello() {
  console.log("hello!");
}

// function expression

hello(); // Reference Error

let hello = function () {
  console.log("hello!");
};

// function declaration with let/const

let foo = "I'm a variable";

function foo() {
  return "I'm a function";
}

console.log(foo); // Syntax Error
```

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


(function(name){
  console.log(`Hello, ${name}!`)
})("Zaviar");
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

## IIFE and Truthy/Falsy Quizzes

- Primitive Data Types Quiz
- Falsey Values in JavaScript Quiz
- IIFE Quiz

## Project Time (until EOD)
- Continue working on recursion project
- **HIGHLY recommend** focusing on problems like  #11 `flatten.js`(part 3) & problem 13 `sort.js` (part 4)
- Problems 14 and beyond are bonus problems. Nothing remotely close to that level of difficulty on the assessment, but definitely give it a try if you're comfortable with today's content.

## aA Open Links

- [Function-Hoisting](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-5---recursion/function-hoisting-lecture)
- [Primitive-Data-Types-Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-5---recursion/primitive-data-types-quiz)
- [Falsy-Values-Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-5---recursion/falsey-values-in-javascript-quiz)
- [IIFE-Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-5---recursion/iife-quiz)
