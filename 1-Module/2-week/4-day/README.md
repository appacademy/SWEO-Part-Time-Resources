# Types

There are 8 data types in JavaScript:
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

At App Academy, you only need to worry about the first 5.\
For more information, you can visit [MDN's](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) page on datatypes.

You've already learned about strings, numbers, and boolean. You might have already started using "undefined", but now it's time to add "null" into the mix, and see how that differs from other data types.


## Undefined Data Type
**Definition**: Undefined is a primitive value, representing "undefined". A value that doesn't exist.
- It is a falsy value
- You can't mutate the value of "undefined"

Undefined is a placeholder "value" that JavaScript uses before a value is determined by the programmer.


## Null Data Type

**Definition**: Null is a data type that represents the *intentional* absence of any object value.
- It is a primitive value, so it can be mutated
- The "null" keyword is saved by Javascript, so you can't call a variable "null"
- It is a falsy value
- See more on [MDN's](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) website


## Null vs Undefined
- In practice, "undefined" will typically be an absence of a value when it's *unintentional*
- Example: If you don't specify a "return" value for a function, JavaScript returns "undefined" for you automatically
   ```js
   function isGreaterThanFive(num) {
        if(num > 5) {
            return true
        }
   }

   console.log(isGreaterThanFive(6)) // This will print 'true', like it should
   console.log(isGreaterThanFive(2)) // This will print 'undefined', because we did not specify what should return if the number isn't greater than 5
   ```
- Another place you might see "undefined" is when you declare a variable, but don't give it value
   ```js
   let myVariable;
   console.log(myVariable) // This will print 'undefined'
   ```
    - Maybe you did intend to start "myVariable" with no value, but if that's the case, using "null" would be better

- This is because JavaScript does not assign non-values as "null" by itself
    - Any time JavaScript does need to assign a non-value, it'll use "undefined"




# Typeof
JavaScript allows you to see the data type of a value.\
Examples:
```js
console.log(typeof "hello world") // Prints: "string"
console.log(typeof 123) // Prints: "number"
console.log(typeof ['a', 'b', 'c']) // Prints: "object". Note that an array is listed as an "object"
console.log(typeof true) // Prints: "boolean"

let myVariable = "good morning"
console.log(typeof myVariable) // Prints: "string"

let myFunction = function() {
    return "I dream of electric sheep"
}
console.log(typeof myFunction) // Prints: "function"
```

What about the type of falsy values?
Examples:
```js
console.log(typeof undefined) // Prints: ???
console.log(typeof null) // Prints: ???

console.log(typeof false) // Prints: ???

console.log(typeof NaN) // Prints: ???
```


When considering falsy values, and their data types. Things can get weird.\
Check out what happens if we compare falsy values with each other:
```js
// Undefined comparisons
console.log(undefined === undefined) // Prints: "true"
console.log(undefined == undefined) // Prints: "true"

console.log(undefined === null) // Prints: "false"
console.log(undefined == null) // Prints: "true"

// Null comparisons
console.log(null === null) // Prints: "true"
console.log(null == null) // Prints: "true"

console.log(null === false) // Prints: "false"
console.log(null == false) // Prints: "false"


// Not a Number comparisons
console.log(NaN === null) // Prints: "false"
console.log(NaN == null) // Prints: "false"

console.log(NaN === undefined) // Prints: "false"
console.log(NaN == undefined) // Prints: "false"
```

Using "==" will perform type conversions with the items you are comparing.\
However, you shouldn't use "==" as it can increase the leeway in your code, opening it to possible bugs.
