//FOREACH

// let friends = ['Ludo', 'Hoggle', 'Sarah', 'Sir Didymus']
// for (let i = 0; i < friends.length; i++){
//    return console.log(friends[i])
// }
// for each example
// YOU CANNOT RETURN FROM A FOREACH
// used to do something to each thing in an array,
// but will not return anything.
// this method can mutate the original array if the
// code in your callback function mutates it.
// let newArr = []
// let string = "string"
// string.forEach(function(ele) {
//     console.log(ele)
// })
// let newArr = []
// let friends = ['Ludo', 'Hoggle', 'Sarah', 'Sir Didymus']
// friends.forEach(function(ele) {
// //  friends[i] = ele.toUpperCase(); //mutates original
// return console.log(ele)
// newArr.push(ele.toUpperCase())
// })
// console.log(friends);
// console.log(newArr)


// Every other advanced method will return something
// set it to a variable to get access to it!
// These methods do not mutate the original array
// unless the code in your callback function mutates it.

// let nums = [2,4,6,8,10,12,14,16,18]
// map example
// returns and array with every element in the array
// after the changes have been made to each element.

// let doubles = nums.map(function(num){
//   return num * num
// })

// // console.log(doubles)
// console.log(nums)



// filter example
// returns an array with only the elements that returned
// true
// let arr = [[1, 2], [1, 2], 3]
// arr.forEach(function(ele) {
//     if (Array.isArray(ele)){
//         ele.forEach(function(el){
//         })
//     }
// })
let friends = ['Ludo', 'Hoggle', 'Sarah', 'Sir Didymus']
// let newArr = []
 let longestFriends = friends.filter(function(friend){
    return friend.length > 4
})
// console.log(newArr)
// console.log(friends)
// console.log(longestFriends)


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
let nums = [2,4,6,8,10,12,14,16,18]
let sum = nums.reduce(function(accum, num){
    console.log("ACCUM:", accum)  //100 //102
    console.log("NUM", num) //2 //4
  return accum += num
}, 100)

console.log(sum);

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



//PRACTICE ASSESSMENT:

function keyAdderUniqueVal(object, key, value) {
    // console.log(object)
    let values = Object.values(object)  // this returns an array of the object's values
    // let keys = Object.keys(object)
    // console.log(values)
    // console.log(keys)
    // let newArr = []
    // for (let keys in object){
    //     // let key = keys
    //     // console.log(key)
    //     let val = object[keys]
    //     newArr.push(val)
    // //     console.log(values)
    // }
    // console.log(newArr)
    if(!values.includes(value)){
        object[key] = value
    }
    return object

    }


    
function duplicateCharMinCount(string, minCount) {
	// Your code here
	let obj = {}
	for (let i = 0; i < string.length; i++){
		let letter = string[i]
		// console.log(letter)
		if(obj[letter] === undefined){
			obj[letter] = 1
		} else {
			obj[letter] += 1
		}
	}
	// console.log(obj)

	let returnArr = []
	console.log(obj)
for (let key1 in obj){
	// console.log("KeY at iteration:", key1) // this key is a p l e
	let values = obj[key1] // BAD obj."a"
	console.log(key1, values)
	if (values >= minCount){
		returnArr.push(key1)
	}
}

	return returnArr
}
