# W3D3

## POJO Practice (SOLO, 20m)

- [Cat Builder]
- [Iterate Through Obj]

---

## POJO Discussion (~30m)

```js
let dog = {
  name: "Alf",
  age: 1,
  breed: "mixed",
  size: {
    heightInFeet: 3
    weightInLbs: 100
  }
};

//How would I print Alf's name from the object?
//
//How would I add his location, Tennessee?
//
//How would I change his age to 1001?
//
//How would I print his weight?
```

`Dot notation`

- Since keys are usually strings, and we'd hate to have to write [''] all the time\
  we have dot notation.

```js
let obj = {
  first: "a",
  second: "b",
  third: "c",
};

console.log(obj.first, obj["first"]); //
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

---

## Project Time pt1 (PAIRED, 1h)

Todays goal is to complete problems 1-7.

[POJO Project]

---

## Discussion pt2 (~30m)

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

| RAM  | VAR | VAL |
| ---- | --- | --- |
| #001 | age | 10  |
| #002 | NOF | 10  |

</td><td>

| RAM  | VAR | VAL |
| ---- | --- | --- |
| #001 | age | 11  |
| #002 | NOF | 10  |

</td></tr> </table>

`Reference`

```js
let biff = {
  type: "dog",
  age: 10,
};

let buster = biff;
buster.age = 0;

console.log(biff, buster);
```

  <table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

| RAM  | VAR    | VAL   |
| ---- | ------ | ----- |
| #003 | biff   | --    |
| \|   | type   | 'dog' |
| \|   | age    | 10    |
| #004 | buster | #003  |

</td><td>

| RAM  | VAR    | VAL   |
| ---- | ------ | ----- |
| #003 | biff   | --    |
| \|   | type   | 'dog' |
| \|   | age    | 0     |
| #004 | buster | #003  |

</td></tr> </table>

---

## Project Time pt2

[POJO Project]

---

[cat builder]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-3---node--pair-programming--pojo--adv--arrays/cat-builder
[iterate through obj]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-3---node--pair-programming--pojo--adv--arrays/iterate-through-obj
[pojo project]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-3---node--pair-programming--pojo--adv--arrays/pojo-project-part-1
[*objects are unordered*]: https://2ality.com/2015/10/property-traversal-order-es6.html
