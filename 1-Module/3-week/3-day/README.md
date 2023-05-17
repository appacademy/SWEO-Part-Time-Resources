# `M1W3D3`

## POJO Practice - 20 min

- Cat Builder
- Iterate Through Obj

## POJO Discussion

`What are objects`

- an unordered collection of key-value pairs
  - key: value (property)\
- [*OBJECTS ARE UNORDERED*]

`Why objects`

- Instant look up time
- Allows us a term/definition (key: value)
- Groups `like` information together

```js
let cohort = {
  startMonth: "June",
  instructors: [{
    name: "Philip",
    currentGame: "Pokemon Unite",
    mostPlayed: [
      "Cinderace", 
      "Charizard"
    ] 
  }, {
    name: "Blake",
    currentGame: "Escape from Tarkov",
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

- Instant look up time.
- Allows us a term/definition (key-value)
- Groups `like` information together

## Primitive VS Reference

`Primitive`

  ```js
  let age = 10;
  let numberOfFingers = age;
  age = numberOfFingers + 1;
  console.log(age, numberOfFingers);
  ```

<table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

|RAM|VAR|VAL|
|--|--|--|
|#001|age|10|
|#002|NOF|10|

</td><td>

|RAM|VAR|VAL|
|--|--|--|
|#001|age|11|
|#002|NOF|10|

</td></tr> </table>

`Reference`

  ```js
  let biff = {
      type: 'dog',
      age: 10,
  };

  let buster = biff;
  buster.age = 0;

  console.log(biff, buster);
  ```

  <table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

|RAM|VAR|VAL|
|--|--|--|
|#003|biff|--|
|\||type|'dog'|
|\||age|10
|#004|buster|#003|

</td><td>

|RAM|VAR|VAL|
|--|--|--|
|#003|biff|--|
|\||type|'dog'|
|\||age|0
|#004|buster|#003|

</td></tr> </table>

## Project Time

POJO Project

[*OBJECTS ARE UNORDERED*]: https://2ality.com/2015/10/property-traversal-order-es6.html
