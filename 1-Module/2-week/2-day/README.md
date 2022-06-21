# W2D2

## Nested Loops
Refer to homework! For this section!

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


---

## Practice Set 1 (30m)

- [Array Sum]
- [Rotate Right]
- [Two Dimensional Sum]

## Discussion Set 1

- Any Questions?
- Rotate Right Walkthrough (slice)

---

## Practice Set 2 (25m)

- [Avg Value]
- [My Index Of Recall]
- [Tripler]

## Discussion Set 2

- Any Questions?
- Avg Value Walkthrough

---

## Practice Set 3 (30m)

- [Long Words]
- [Remove E Words]
- [Max Value]

## Discussion Set 3

- Any Questions?
- Remove E Words Walkthrough (split, join)

---

## Formative Quiz (10m)

---

[array sum]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/array-sum
[rotate right]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/rotate-right
[two dimensional sum]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/two-dimensional-sum
[avg value]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/avg-val
[my index of recall]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/my-index-of-recall
[tripler]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/tripler
[long words]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/long-words
[remove e words]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/remove-e-words
[max value]: https://open.appacademy.io/learn/js-py---pt-nov-2021-online/week-2---intermediate-functions/max-value
[unique pairs in arrays]: ./images/unique_pairs_in_arrays.png
[pairs in arrays]: ./images/pairs_in_arrays.png
