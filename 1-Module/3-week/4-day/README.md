# W3D4

## Warmup Challenge Problem (SOLO, 20m)

```js
/*

Write a function called countVowels that counts the vowels contained in an input string. Store the count of each vowel 
individually in an object. The key should be the vowels with the count being the value contained at the key.

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

## Practice (SOLO, 20m)

- [Destructuring Quiz]
- [Destructure Array]

---

## Destructuring Discussion

- Destructuring is just matching a pattern.

  ```js
  let animals = ["dragon", "panda", "gorilla", "lion"]
  
  // instead of doing this:
  // let firstAnimal2 = animals[0]
  // let firstAnimal3 = animals[1]
  // let firstAnimal4 = animals[2]
  // let firstAnimal5 = animals[3]
  
  let [firstAnimal, secondAnimal, thirdAnimal] = animals; //firstAnimals variable holds the first animal "dragon";
  
  console.log("firstAnimal:", firstAnimal);
  console.log("secondAnimal:", secondAnimal);
  
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
  
  //what is the value of the variable `startMonth`?
  let { startMonth } = cohort;
  console.log("startMonth: ", startMonth);


  //given this cohort obj, destructure the "instructors" and give instructors an alias of `teachers`
  let { instructors:teachers } = cohort;

  console.log("teachers: ", teachers);

  //given this cohort obj, destructure the object inside of instructors array
  let { instructors: [Philip, Blake] } = cohort;
  
  console.log("Philip: ",  Philip);
  console.log("Blake: ", Blake);
  ```

## Rest and Spread

- Rest takes the `rest` of the arguments and puts them into an array and single parameter

  ```js
  let makeThemBig = function (...strings) {
    return strings;
  };
  
  console.log(makeThemBig("hello", "world"));
  console.log(makeThemBig("hello"));
  console.log(makeThemBig("Hello", "world,", "how's", "it", "going", "today?"));
  ```

- Spread takes some data and 'spreads' it out of it's containing brackets.

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, arr1, arr2];
  let arr4 = [0, ...arr1, ...arr2];
  
  console.log(arr3);
  console.log(arr4);
  
  let obj1 = { name: "Obi-Wan Kenobi" };
  let obj2 = { master: "Qui-Gon Jinn", apprentices: ["Luke", "Anakin"] };
  let obj3 = { obj1, obj2, gender: "male" };
  let obj4 = { ...obj1, ...obj2, gender: "male" };
  
  console.log(obj3);
  console.log(obj4);
  ```

---

## Project Pt 2 (PAIRED)

Problems 8-14.

[destructuring quiz]: https://open.appacademy.io/learn/js-py---pt-june-2022-online/week-3---node--pair-programming--pojo--adv--arrays/destructuring-quiz
[destructure array]:https://open.appacademy.io/learn/js-py---pt-june-2022-online/week-3---node--pair-programming--pojo--adv--arrays/destructure-array
