# M1-W3-D4

---

## Warmup Challenge Problem (SOLO, 20m)

Try to solve this challenge problem, I will do a walkthrough after the breakout
session time is over.

```js
/*
Write a function called countVowels that counts the vowels contained
in an input string.

Store the count of each vowel individually in an object.

The key should be the vowels with the count being the value contained at the key.

I: "hello world"
O: {
      e: 1,
      o: 2
   }

I: "apple"
O: {
      a: 1,
      e: 1
   }

I: "coding is as much an art as a science"
O: {
      o: 1,
      i: 3,
      a: 5,
      u: 1,
      e: 2
   }
*/
```

---

## Destructuring Lecture

Destructuring is just matching a pattern.

It is never necessary, but can be used to make your code cleaner.

```js
// array destructuring
let [game, player] = ["Dota 2", "Mylo"];
console.log(game, player);

//swapping values
[player, game] = [game, player];
console.log(game, player);

//object destructuring
let person = "Emily";
let { person: person2, animal } = { person: "Caleb", animal: "elephant" };
// let person = (the Object).person
// let animal = (the Object).animal
console.log(person, person2, animal);
```

---

## Practice (Solo, 20m)

- Destructuring Quiz
- Destructure Array

---

## Rest and Spread Lecture

- Rest Parameter takes the `rest` of the arguments and puts them into an array and single parameter

  ```js
  let makeThemBig = function (...strings) {
    //console.log(Array.isArray(strings));
    let result = strings.map(function (string) {
      return string.toUpperCase();
    });
    return result.join(" ");
  };

  console.log(makeThemBig("hello", "world"));
  console.log(makeThemBig("hello"));
  console.log(makeThemBig("Hello", "world,", "how's", "it", "going", "today?"));
  ```

- Spread Operator takes some data and `spreads` it out of it's containing brackets.

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, arr1, arr2];
  let arr4 = [0, ...arr1, ...arr2];
  console.log(arr3);
  console.log(arr4);

  let obj1 = { name: "Mylo" };
  let obj2 = { animal: "elephant", game: "Dota 2" };
  let obj3 = { obj1, obj2, movie: "Fantastic Mr. Fox" };
  let obj4 = { ...obj1, ...obj2, movie: "Fantastic Mr. Fox" };
  console.log(obj3);
  console.log(obj4);
  ```

---

## Project Pt 2 (PAIRED)

Same pair as yesterday
Problems 8-14

---
