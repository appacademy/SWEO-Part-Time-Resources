// // your code here
// // Conditionals!


// function isFive(number){
//   if (number > 5){
//       console.log("The num is greater than than 5!");
//   } else if (number < 5) {
//       console.log("The num is less than 5!");
//   } else {
//       console.log("The num is 5!");
//   }
//   return number === 5;
// }

// console.log(isFive(5))

// Loops!

// initial valkue
// let i = 0;
// //  condition to loop while true
// while (i <= 5 || i % 2 === 0){
// 	console.log(i);
//    	i = i + 1;  // increment (work towards loop condition not being true)
// }
// console.log("out of loop:", i)

// for(initial value; condition to loop; increment statement){}
// for(let i = 0; i <= 5 || i % 2 === 0; i++){
// 	console.log(i)
// }
// console.log(i) // out of bounds for i!

// let words = "Journey before destination"

// // let banana = 0

// // while (banana < words.length){
// // 	let char = words[banana]
// //     console.log(char)
// //     banana++
// // }
// for(let banana = 0; banana < words.length; banana = banana + 1){
// 	let char = words[banana]
//     console.log(char)
// }

// arrays!!
// kind of like a list

// let arr1 = [1,2,3,4]

// console.table(arr1)

// let arr2 = [
// 	42,
// 	false,
// 	"Let's go Pens!",
//     undefined,
//     null,
//     0n,
//     [[1], 2, [3]]
// ]

// console.table(arr2)
// let letters = arr2[2].split("")
// let hyphenated = letters.join("-")
// let shouted = hyphenated.toUpperCase()
// console.log(shouted)
// arr2[3] = "no longer undefined :)"
// console.log(arr2[3])

// let name = "Biff"
// name = name.split("")
// console.log(name)
// name[2] = "l"
// name[3] = "l"
// name = name.join("")
// console.log(name)

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8,9]

// let arr4 = arr1.concat(arr2, arr3)

// console.table(arr4)
// // console.log(arr1)

// let arr5 = arr4.slice(2, 5)
// console.log(arr5)
// mutability --- our ability to change the elements in an array

// let arr = []
// console.log(arr.length)
// let pens = "Let's go Pens!"
// for (let i = 0; i < pens.length; i++){
// 	let char = pens[i]
//     // // arr[i] = char
//     // arr.push(char)
//     arr[arr.length] = char
// }
// console.table(arr)

// PROMPT: write a function that will accept an array of numbers and return the sum
// of those numbers. You can trust that only numbers will be in the array

function sumArray(nums){
	console.log("Numbers:")
    console.table(nums)
    let sum = 0
    // for (let mango = 0; mango < nums.length; mango++){
    // 	console.log("CURRENT INDEX     :", mango)
    //     let currNum = nums[mango]
    //     sum += currNum
    //     console.log("SUM AT END OF LOOP:", sum)
    // }
    while (nums.length > 0){
    	let currNum = nums.pop()
         console.log("CURRENT NUM       :", currNum)
        sum += currNum
      console.log("SUM AT END OF LOOP:", sum)
      console.log("------------------------------")
      console.table(nums)
      console.log("------------------------------")
    }
    return sum;
}

console.log(sumArray([1,2,3,4])) // 10
