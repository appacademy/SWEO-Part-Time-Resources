# W3D4

## Warmup Challenge Problem (SOLO, 20m)

```js
/*

Write a function called countVowels that counts the vowels contained in an input string. Store the count of each vowel individually in an object. The key should be the vowels with the count being the value contained at the key.

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

## Destructuring Discussion (40m)

- Destructuring is just matching a pattern.

  ```js
  let person = "Patrick";
  let { person: person2, animal } = { person: "Caleb", animal: "hippopotamus" };
  // let person = (the Object).person
  // let animal = (the Object).animal
  console.log(person, person2, animal);
  let [game, player] = ["League", "Alex"];
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
    //let result = strings.map(function (string) {
      //return string.toUpperCase();
    //});
	let result = []
	for (let i = 0; i < strings.length; i++){
		result.push(strings[i].toUpperCase())
	}
    return result.join(" ");
  };
  console.log(makeThemBig("hello", "world"));
  console.log(makeThemBig("hello"));
  console.log(makeThemBig("Hello", "world,", "how's", "it", "going", "today?"));
  ```

- Spread takes some data and 'spreads' it out of its containing brackets.

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, arr1, arr2];
  let arr4 = [0, ...arr1, ...arr2];
  console.log(arr3);
  console.log(arr4);
  let obj1 = { name: "Alex" };
  let obj2 = { animal: "hippopotamus", game: "League" };
  let obj3 = { obj1, obj2, movie: "The Lord of the Rings: The Return of the King " };
  let obj4 = { ...obj1, ...obj2, movie: "The Lord of the Rings: The Return of the King " };
  console.log(obj3);
  console.log(obj4);
  ```
  
  ---

## Project Pt 2 (PAIRED)

Problems 8-14.

[destructuring quiz]: https://open.appacademy.io/learn/js-py---pt-june-2022-online/week-3---node--pair-programming--pojo--adv--arrays/destructuring-quiz
[destructure array]:https://open.appacademy.io/learn/js-py---pt-june-2022-online/week-3---node--pair-programming--pojo--adv--arrays/destructure-array
