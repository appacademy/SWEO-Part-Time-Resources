// function myFuncName(arg1, arg2) {

// }

// let myFuncName = function (arg1, arg2) {
//   console.log(arg1);
//   return arg2;
// };

// console.log(myFuncName('Hello', 'World'));

// let str = "Zaviar"
// console.log(str[0])
// str[0] = "H"
// console.log(str)
// console.log(str[0])

// let arr = ['Zaviar'];
// console.log(arr);
// console.log(arr[0]);
// arr[0] = 'Zach';
// console.log(arr);
// console.log(arr[0]);

// let arr = ['Zaviar', 'Zach'];
// console.log(arr);
// console.log(arr[0]);
// arr[0] = "newName"
// console.log(arr);
// console.log(arr[0]);

// let num = 5
// let num2 = num
// num++
// console.log(num)
// console.log(num2)

// let namesArr = ['Zaviar', 'Zach', 'Mylo'];
// let agesArr = ['0', '1', '98'];
// console.log(namesArr)

// let newName = "Jake"

// namesArr.push(newName)
// namesArr.push("Jack")

// console.log(namesArr)

// let removedName = namesArr.pop()
// console.log(namesArr)
// console.log(removedName)

// agesArr.push(removedName)
// console.log(agesArr)

// let animals = ['pigs', 'goats', 'sheep'];

// anyArray.push("any number of values")
// console.log(justAVariableName)

// let examplePush = function ("cows") {

// 	['pigs', 'goats', 'sheep'] = ['pigs', 'goats', 'sheep', "cows"]
// 	return ['pigs', 'goats', 'sheep', "cows"].length

// }
// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]

// count = animals.push('duck', 'horse', 'dog');
// console.log(count);
// console.log(animals);

// console.log(animals);
// let myVal = animals.shift();
// animals.shift();
// console.log(myVal);
// console.log(animals);

// animals.push(myVal)
// animals.unshift(myVal)
// console.log(animals)

// let str = "Zaviar, Zach, Mylo, James"
// let str = "Zaviar"

// let myArr = str.split(", ")
// let myArr = str.split("")
// console.log(myArr)
// console.log(myArr)
// console.log(myArr[0])
// console.log(str)
// myArr.pop()
// console.log(myArr)
// myArr.push("k")
// console.log(myArr)
// myArr = myArr.join("")
// console.log(myArr)

// let myLooper = function () {
//   let dogs = ['belka', 'strelka', 'laika', 'dezik'];

// 	// waiting at i = 2
//   for (let i = 0; i < dogs.length; i++) {
//     let dog1 = dogs[i];
//     for (let j = 0; j < dogs.length; j++) {
//       let dog2 = dogs[j];
//       console.log(dog1, dog2);
//     }
// 		console.log("-------------Outerloop-------------")
//   }
// 	return "Here"
// };

// let myLooper = function () {
//   let dogs = ['belka', 'strelka', 'laika', 'dezik'];

//   // waiting at i = 0
//   for(let i = 0; i < dogs.length - 1; i++) {
// 		let dog1 = dogs[i];
// 		for(let j = i + 1; j < dogs.length; j++) {
// 			let dog2 = dogs[j]
// 			console.log(dog1, dog2)
// 		}
// 		console.log("-------------Outerloop-------------")

// 	}
//   return 'Here';
// };

// myLooper();

// let x = 1;
// x++;
// x + 2;
// console.log(x);

//! Practice Assessment

function stringChanger(word, operation) {
  // console.log(word, operation)
  // if capitalize, cap first letter
  if (operation === 'capitalize') {
    let restOfWord = word.slice(1);
    let firstLetter = word.slice(0, 1);

    firstLetter = firstLetter.toUpperCase();

    return firstLetter + restOfWord;
  }
  // if (operation === "capitalize") {

  // 	// seperate string into array
  // 		word = word.split("")

  // 		// find first letter
  // let firstLetter = word[0]

  // 		// capitalize first letter
  // 		firstLetter = firstLetter.toUpperCase()

  // 		// replace first letter in array with capital letter
  // 		word[0] = firstLetter

  // 			// version 2
  // 			 // word.shift()
  // 		 // word.unshift(firstLetter)

  // // join the array into a string
  // 		word = word.join("")
  // return word

  // }

  // if uppercase, cap entire word
  else if (operation === 'uppercase') {
    // let newWord = word.toUpperCase()
    // return newWord
    return word.toUpperCase();
  }

  // if double, return word twice
  else if (operation === 'double') {
    // version 1
    // word = word + word
    // return word

    // version 2
    // word += word
    // return word

    // version 3
    return word + word;
  }

  // if reverse, return word reversed
  else if (operation === 'reverse') {
    // create a starting array
    word = word.split('');
    word = word.reverse();
    word = word.join('');
    return word;
  }
  // else if (operation === "reverse") {
  // 	// create a starting array
  // 	let arr = []
  // // loop over word
  // 	for (let i = 0; i < word.length; i++) {
  // 		// every new character, unshift into array
  // 		arr.unshift(word[i])
  // 	}

  // word = arr.join("")
  // 	// return the array joined
  // 	return word
  // }

  // else if (operation === "unknown")
  else {
    return word;
  }
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (stringChanger('foo', 'capitalize') === 'Foo') score++;
// if (stringChanger('foo', 'uppercase') === 'FOO') score++;
// if (stringChanger('foo', 'double') === 'foofoo') score++;
// if (stringChanger('foo', 'reverse') === 'oof') score++;

// if (stringChanger('foo', 'unknown') === 'foo') score++;

// console.log('You have scored ' + score + '/5 points.');
