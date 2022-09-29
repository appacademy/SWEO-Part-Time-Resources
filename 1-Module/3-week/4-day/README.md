# M1W3D4

## Practice: 20 mins

- [Destructuring Quiz]
- [Destructure Array]

## Destructuring Discussion

// Destructuring Discussion
// Destructuring is just matching a pattern.

```
let animals = ["dragon", "panda", "gorilla", "lion"];

// instead of doing this:
// let firstAnimal2 = animals[0]
// let firstAnimal3 = animals[1]
// let firstAnimal4 = animals[2]
// let firstAnimal5 = animals[3]

let [firstAnimal, secondAnimal, thirdAnimal] = animals; //firstAnimals variable holds the first animal "dragon";

// console.log("firstAnimal:", firstAnimal);
// console.log("secondAnimal:", secondAnimal);

let cohort = {
  startMonth: "September",
  instructors: [
    {
      name: "William",
      currentGame: "Dark Souls",
      mostPlayed: ["Knight", "Mage"],
    },
    {
      name: "Blake",
      currentGame: "Escape from Tarkov",
      hours: 50,
    },
  ],
};

// //what is the value of the variable `startMonth`?
// let { startMonth } = cohort;
let { startMonth } = cohort;
let cohortArr = [startMonth];
// console.log(cohortArr);
// console.log("startMonth: ", startMonth);

// //given this cohort obj, destructure the "instructors" and give instructors an alias of `teachers`
let { instructors: teachers } = cohort;
// console.log(instructors);
// console.log("teachers: ", teachers);
// console.log(cohort);

// //given this cohort obj, destructure the object inside of instructors array
let {
  instructors: [William, Blake],
} = cohort;

let william2 = cohort.instructors[0].name;
console.log("William: ", William);
console.log("Blake: ", Blake);```
  ```

## Rest and Spread

- Rest takes the `rest` of the arguments and puts them into an array and single parameter

  ```js
  let makeThemBig = function (...strings) {
      //console.log(Array.isArray(strings));
      let result = strings.map(function (string) {
          return string.toUpperCase();
      });
      return result.join(' ');
  };

  console.log(makeThemBig('hello', 'world'));
  console.log(makeThemBig('hello'));
  console.log(makeThemBig('Hello', 'world,', "how's", 'it', 'going', 'today?'));
  ```

- Spread takes some data and 'spreads' it out of it's containing brackets.

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, arr1, arr2];
  let arr4 = [0, ...arr1, ...arr2];
  console.log(arr3);
  console.log(arr4);

  let obj1 = { name: 'Mylo' };
  let obj2 = { animal: 'elephant', game: 'Dota 2' };
  let obj3 = { obj1, obj2, movie: 'Fantastic Mr. Fox' };
  let obj4 = { ...obj1, ...obj2, movie: 'Fantastic Mr. Fox' };
  console.log(obj3);
  console.log(obj4);
  ```

## Project Pt 2

## Formative Quiz

[Destructuring Quiz]: https://open.appacademy.io/learn/part-time-canonical/pt-week-3-canonical/destructuring-quiz
[Destructure Array]: https://open.appacademy.io/learn/part-time-canonical/pt-week-3-canonical/destructure-array
