# M1-W3-D3

## Objects Lecture 1

An object is an unordered reference data type that is at the core of JavaScript
functionality. Objects store `values` at specific reference points called `keys`

```js
let dog = {
  name: "Cali",
  age: 5,
  breed: "mixed",
  size: {
    heightInFt: 3,
    weightInLbs: 45,
  },
};

//how would I print the first name?

//how would I add a location key with the value of 'TN'?

//how would I change her age to 1001?

//how would I print her weight?
```

### Dot Notation

Keys are generally strings and so rather than always needing to key into an
object using bracket notation `object[key]` you can use dot notation
`object.key`.

```js
let obj = {
  first: "a",
  second: "b",
  third: "c",
};

console.log(obj.first, obj["first"]);
```

### Using Variables as Keys

Often when programming the goal is to write functions and processess that can be
generalized, one way to accomplish this goal is to use variables. This is a
common pattern when working with objects.

When using variables as keys you cannot use dot notation and must use bracket
notation.

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

console.log(obj[someVariable]);
console.log(obj[some + variable]);
console.log(obj[time.toLowerCase()]);
```

---

## Practice Session 1 (Solo, 20m)

- Cat Builder
- Iterate Through Object

---

## Objects Lecture 2

### Checking if a key exists

- obj[key] !== undefined
- key in obj

```js
let myObj = {
  one: 1,
  two: 2,
  three: 3,
};

console.log(myObj["one"] === undefined);
console.log(myObj["five"] === undefined);

console.log("one" in myObj);
console.log("five" in myObj);
```

### Iterating Through Objects

- for in loop
- Object.keys
- Object.values
- Object.entries

### Primitive vs Reference Types

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
<tr>
  <th>Before</th>
  <th>After</th>
</tr>
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

## POJO Project (Paired)

The goal is to get through problems 1-7

---
