# W5D5 - Function Hoisting, IIFE, & Falsy Values,

## Debugger Warmup (10m)
- run `aa_update`
- in `code-it-out` folder do `debug-lineCount.js`

## Project Time (1hr15m)
- Continue working on recursion project
- **HIGHLY recommend** focusing on problems like  #11 `flatten.js`(part 3) & problem 13 `sort.js` (part 4)
- Problems 14 and beyond are bonus problems. Nothing remotely close to that level of difficulty on the assessment, but definitely give it a try if you're comfortable with today's content.

## Sort Warmup (20m)
- in `code-it-out` folder do `sort.js` (same problem as your project 😄)


## Practice Assessment (until lunch)
- If you're stuck, feel free to ask us for help, we'll provide the help to get ya going

## Lunch (30m)

## Practice Assessment Walkthrough

## Function Hoisting Prep (20min)

Function Hoisting Lecture Video

## IIFE
Immediately Invoked Function Expression

Key pieces of an IIFE. [MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

1. The first is that it is an anonymous function with its own scope which prevents outside world from accessing its variables (tinted window - outside cannot see the inside of the car) 
2. IIEF prevents pollution of the global scope (disappear after it has been invoked)
3. The second part creates the immediately invoked function expression ()
   through which the JavaScript engine will directly invoke the function.

```js
(function () {
  console.log("I run immediately");
})();


(function(name){
  console.log(`Hello, ${name}!`)
})("Wes");
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
---
Everything else is Truthy;

## IIFE and Truthy/Falsy Quizzes

- Primitive Data Types Quiz
- Falsey Values in JavaScript Quiz
- IIFE Quiz

## aA Open Links

- [Function-Hoisting](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-5---recursion/function-hoisting-lecture)
- [Primitive-Data-Types-Quiz](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-5---recursion/primitive-data-types-quiz)
- [Falsy-Values-Quiz](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-5---recursion/falsey-values-in-javascript-quiz)
- [IIFE-Quiz](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-5---recursion/iife-quiz)
