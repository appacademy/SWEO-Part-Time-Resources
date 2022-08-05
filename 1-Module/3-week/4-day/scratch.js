//   let obj = { person: "Caleb", animal: "elephant" };
  
//   let person = obj.person
//   let animal= obj.animal
//   console.log(person, animal)
// let {person, animal} = obj
// person = 'james thompson'
//   console.log(person, animal)
//   console.log(obj)

//  let {person: personAlias, animal: animalAlias} = obj

//  console.log(personAlias, animalAlias)
//  console.log(person)
//  console.log(obj)
  

// let arr = ["Rocket League", "James"];
// //   let game = arr[0]
// //   let player = arr[1]
// //   console.log(game, player)
// let [game, player] = arr;

// [game, player] = [player, game];

// console.log(game)
// console.log(game)

//     arr = [player, game]
//     console.log(game)

// console.log(game) // 
// let [game, player] = ['rocket league', 'james']
// let game = 'Rocket Leageue';
// let player = 'James';

// [game, player] = [player, game]
// console.log(player, game)

//   let yellEverything = function (str1, ...strings) {
//     for (let i = 0; i < strings.length; i++) {
//       strings[i] = strings[i].toUpperCase();
//     }
//     return str1 + ' ' +  strings.join(' ');
// };

// console.log(yellEverything('this', 'funciton', 'is', 'yelling', 'at', 'me'))


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2)
// let arr3 = [...arr1, ...arr2]
// console.log(arr3)

// console.log([...arr1, ...arr2])

//  let obj1 = { person: "Caleb", animal: "elephant" };
//  let obj2 = {name: 'James', person: 'baseball'}

//  let spreadObj = {...obj1, ...obj2}

//  let arr = [...Object.keys(obj1), ...Object.values(obj2)]
// //  arr.push(spreadObj)

// console.log(arr)


// function adder(num1, ...otherNums) {
//     console.log("The first number is: " + num1);
//     let sum = num1;
  
//     // captures all other arguments into an array and adds them to our sum
//     for(let i = 0; i < otherNums.length; i++){
//         sum += otherNums[i]
//     }
  
//     console.log("The sum is: " + sum);
//   }
  
//   adder(2, 3, 4, 4, 5,6,7,8,9,10);