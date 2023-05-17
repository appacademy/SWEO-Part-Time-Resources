<!-- markdownlint-disable MD033 -->
# M1W3D3

## POJO Practice

- [Cat Builder]
- [Iterate Through Obj]

## POJO Discussion

```js
let obj = {
  name: "Mylo",
  age: 1000,
  game: {
    name: "Dota 2",
    position: 5,
    favHero: "Dazzle"
  }
}

//How would I print Mylo's name from the object?
//
//How would I add his location, Chicago?
//
//How would I change his age to 1001?
```

`Dot notation`

- Since keys are usually strings, and we'd hate to have to write [''] all the time\
we have dot notation.

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

[*OBJECTS ARE UNORDERED*]

- for in loop
- Object.keys
- Object.values
- Object.entries

`Why objects`

- Instant look up time.
- Allows us a term/definition (key-value)
- Groups `like` information together

## Project Time

[POJO Project]

## Formative Quiz

[Cat Builder]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-3---node--pair-programming--pojos--adv--arrays/cat-builder
[Iterate Through Obj]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-3---node--pair-programming--pojos--adv--arrays/iterate-through-obj
[POJO Project]: https://open.appacademy.io/learn/js-py---pt-sept-2021-online/week-3---node--pair-programming--pojos--adv--arrays/pojo-project-part-1
[*OBJECTS ARE UNORDERED*]: https://2ality.com/2015/10/property-traversal-order-es6.html
