# `M1W2D1`

## Function Expression

### `First Class Functions`

1. Can be stored in a variable
2. Returned from a function (will use this next week)
3. Passed into a function as an argument (following week)

```js
let name = "Alvin";
let age = 1000;
let getAvg = function (num1, num2) {
  return (num1 + num2) / 2;
};

console.log(name, age, getAvg(4, 2)); // "Alvin", 1000, 3

const arr = [getAvg, name, age];

console.log(arr[0](6, 4)); // 5
```

### `Function Expression Syntax`

1. variable assignment (name)
2. `function` keyword
3. parenthesis with the functions parameter(s)
4. code block
5. semi-colon (optional)

```js
//declaration syntax
function greet(name) {
  console.log("Hello, " + name);
}

//expression syntax
let greet = function (name) {
  console.log("Hello, " + name);
};
```

---

## How to Study Workshop
Go through and follow the [workshop on AAOpen](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-2---intermediate-functions/how-to-study-workshop).

---

## Nested Loops

`Nested Loops`
```js
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```

`Pairs In Arrays`
```js
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = 0; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

![Pairs In Arrays]

`Unique Pairs In Arrays`
```js
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

![Unique Pairs In Arrays]
