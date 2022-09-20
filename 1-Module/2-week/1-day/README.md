# Week 2 Day 1

## <span style="color:#674ea7;">Nested Loops</span>

`Nested Loops`

- Watch [Nested Loop Homework Video Review](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-1---intro-to-javascript/nested-loops)

```javascript
//type and run code below and analyze the output
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```

---
`Pairs In Arrays`

- Watch [Pairs In Arrays Homework Video Review](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-1---intro-to-javascript/pairs-in-array)

```javascript
//type and run code below and analyze the output
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = 0; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

![pairs in arrays](https://i.imgur.com/VQ7NOLi.png)

---
`Unique Pairs In Arrays`

- Watch [UNIQUE Pairs in Arrays Homework Video Review](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-1---intro-to-javascript/unique-pairs-in-array)

```javascript
//type and run code below and analyze the output
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

![unique pairs](https://i.imgur.com/ftyoktg.png)
