# M1W3D4

## Practice: 20 mins

- [Destructuring Quiz]
- [Destructure Array]

## Destructuring Discussion

- Destructuring is just matching a pattern.

  ```js
    let person = "Emily";
    let { person: person2, animal } = { person: "Caleb", animal: "elephant" };
    // let person = (the Object).person
    // let animal = (the Object).animal
    console.log(person, person2, animal);

    let [game, player] = ["Dota 2", "Mylo"];
    // let game = (the Array)[0]
    // let player = (the Array)[1]
    console.log(game, player);

    [player, game] = [game, player];
    console.log(game, player);
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
