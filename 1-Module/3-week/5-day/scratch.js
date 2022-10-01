
let friends = ['Ludo', 'Hoggle', 'Sarah', 'Sir Didymus']
// for each example
// YOU CANNOT RETURN FROM A FOREACH
// used to do something to each thing in an array,
// but will not return anything.
// this method can mutate the original array if the
// code in your callback function mutates it.

friends.forEach(function(str, i){
  friends[i] = str.toUpperCase();
})

console.log(friends);


// Every other advanced method will return something
// set it to a variable to get access to it!
// These methods do not mutate the original array
// unless the code in your callback function mutates it.

let nums = [2,4,6,8,10,12,14,16,18]
// map example
// returns and array with every element in the array
// after the changes have been made to each element.

let doubles = nums.map(function(num){
  return num * num
})

console.log(doubles)
console.log(nums)


// let friends = ['Ludo', 'Hoggle', 'Sarah', 'Sir Didymus']
// filter example
// returns an array with only the elements that returned
// true

// let longestFriends = friends.filter(function(friend){
//   return friend.length > 4
// })

// console.log(longestFriends)

// let nums = [2,4,6,8,10,12,14,16,18]
// reduce example
// reduce is going to return a single value (the accum's
// final value).
// the default value of the accum is the first ele in
// the array, or you can give it a different value as the
// second param after the callback function.
// Usually good to name this param accum while you're still
// learning, but you can name it whatever you want.
// the first arg to the callback function will always
// be the accumulator, the second arg is the ele in the
// array.

// let sum = nums.reduce(function(accum, num){
//   return accum += num
// }, 20)

// console.log(sum);

// const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {})
// // countedNames is:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
// console.log(countedNames)
