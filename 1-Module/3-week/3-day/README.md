# `M1W3D3`

## POJO Quizzes - 15 min

- Learning Boost (Wednesday)
- Object Notation Quiz

## POJO Discussion

`What are objects`

- an unordered collection of key-value pairs (properties)
- mutable data type
- [*OBJECTS ARE UNORDERED*]

`Why objects`

- Instant look up time
- Allows us a term/definition (key: value)
- Groups `like` information together

```js
let cohort = {
  startMonth: "May",
  instructors: [{
    name: "Philip",
    currentGame: "Pokemon Unite",
    mostPlayed: [
      "Cinderace", 
      "Charizard"
    ] 
  }, {
    name: "Alan",
    currentGame: "Zelda: Tears of the Kingdom",
    hours: 50
  }],
}

//How would I print the starting month of the cohort from the object?

//How would I add the timezone, EST?

//How would I change hours played to 100?

//How would I add "Pikachu" to the mostPlayed array?
```

`Dot notation`

- Since keys are usually strings, and we'd hate to have to write [''] all the time, we have dot notation.

```js
let obj = {
  first: 'a',
  second: 'b',
  third: 'c'
}

console.log(obj.first, obj['first']) //
```

`Using a variable`

```js
let someVariable = "firstName";
let some = "second";
let variable = "Name";
let time = "FrEQUENcY";

let obj = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
};

console.log(obj[someVariable]); // 
console.log(obj[some + variable]); // 
console.log(obj[time.toLowerCase()]); //
```

`Checking if a key exists`

- obj[key] !== undefined
- key in obj

`Iterating over an Object`

- for in loop
- Object.keys
- Object.values
- Object.entries

`Why objects`

- Instant look up time
- Allows us a term/definition (key-value)
- Groups `like` information together

## Project Time

POJO Project

[*OBJECTS ARE UNORDERED*]: https://2ality.com/2015/10/property-traversal-order-es6.html
