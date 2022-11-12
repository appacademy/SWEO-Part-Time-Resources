# M1-W5-D5

---

## Solo Practice and Review (1h30m)

---

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

---

## Truthy and Falsy

Falsy Values

|       |           |
| ----- | --------- |
| 0     | -0        |
| 0n    | ""        |
| null  | undefined |
| false | NaN       |

Everything else is Truthy;

---

## Solo Practice and Review (until lunch)

---

## Solo Practice and Review (1h)

---

## Practice Assessment (1h)

---

## Practice Assessment Walkthrough

---
