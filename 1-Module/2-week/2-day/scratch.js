//EAST


// console.log(arr[0][0])
// console.log(arr[1][0])
// console.log(arr[2][2])

//INDEXING 2d Array


//Iterating 2d Array
let arr = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

// for(let i = 0; i < arr.length; i++){
//     let subArr = arr[i]
//     console.log(subArr, 'in outter for loop arr[i]')
//     // console.log()
//     for(let j = 0; j<subArr.length; j++){
//         let ele = subArr[j]
//         // console.log()
//         console.log(ele, 'in inner for loop subArr[j]')
//     }
// }





/* 
> Write a function that removes all of the
> consonants from a string and returns that new string.
>
> Write your function in function expression syntax.
> Use the `Array.splice` method in your implementation.
>
> Feel free to look up the `Array.splice` method on MDN.


make a plan
write a function removeCons takes in string as param
save a vowels variable of a string of all vowels
split string into an array
iterate over our split string
    create letters variable of each element
check if vowels includers our current letter
    splice our newArr 

return our newArr joined into a string 

*/
/*



let removeCons = function(str){
    let vowels = 'aeiou '
    let stringArr = str.split('')
    for(let i = 0; i < stringArr.length; i++){
        let letter = stringArr[i]
        let lower = letter.toLowerCase()
        if(!vowels.includes(lower)){
            stringArr.splice(i, 1)
            // console.log(stringArr)
            i--
        }
    }
    return stringArr.join('')
}



console.log(removeCons('keyboard')); // eoa
console.log(removeCons('avocado')); // aoao
console.log(removeCons('myrmecophilous')); // eoiou
console.log(removeCons('happy birthdAay')); // a iAa



*/

// SUM ARRAY 
 /* 
 write a function sumArray that takes in an array
 create a sum variable
 loop over our array
 grab each element in the array
 add that element to our sum
 
 return our sum
 */
//  function sumArray(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
      
//       return sum 
//     }
    
    
    
//     console.log(sumArray([4, 3, -1, 10])); // 16
//     console.log(sumArray([6, 7, 2])); // 15
//     console.log(sumArray([])); // 0

// ROTATE RIGHT
/* 
write function rotateRight takes in an array and a number using functiion expression 
make a copy of the original array using slice
iterate up to the number passed in as parameters 
grab the ending element 
add the element onto the front of the copied array



*/
// let rotateRight = function(arr, num){
// 	let newArr = arr.slice()
// 	for(let i = 0; i < num; i++){
//       	let last = newArr.pop()
//     	newArr.unshift(last)
//     }
//   return newArr
// }






// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]


// TWO DIMENSIONAL SUM

/* 
write a function twoDimensionalSum that takes in an array
declare a sum variable
loop over our array
grab each element or subArray save to a variable
loop over our subArray
	add each element of subarray to our sum
    
return our sum

*/
// let twoDimensionalSum = function(arr){
// 	let sum = 0
//     // let newArr = arr.flat()
//     // for(let i = 0; i < newArr.length; i++){
//     // 	sum += newArr[i]
//     // }
//     for(let i = 0; i<arr.length; i++){
//     	let subArr = arr[i]
//         for(let j = 0; j < subArr.length; j++){
//         	let num = subArr[j]
//             sum += num
//         }
//     }
// 	return sum
// }

// let arr1 = [
//     [1, 3],
//     [-4, 7, 10],
//     [2]
// ];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [
//     [],
//     [3, 1, 2],
// ];
// console.log(twoDimensionalSum(arr2)); // 6

// AVERAGE VALUE
/* 
write a function avgVal takes in an array
declaring a sum variable
loop over the entire array
adding the element to the sum

return our sum divided by ammount of nums in array
*/
// let avgVal = function(arr){
// 	let average = 0
//     if(arr.length === 0) return null

  
//   	for(let i = 0; i < arr.length; i++){
//     	let ele = arr[i]
//         average += ele
//     }
//   return average / arr.length
// }


// console.log([] === [])

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

// MY INDEX OF 
/* 
write a function that takes in an array and a target value
loop through our array 
check if the current element is the target
	return the index of that element
    
otherwise we return -1 
*/

// let myIndexOf = function(arr, target){
// 	for(let i = 0; i < arr.length; i++){
//     	let ele = arr[i]
//         if(ele === target){
//         	return i
//         }
//     }
//   return -1
// }



// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
// console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
// console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

// TRIPLER
/* 
write a function tripler takes in an array
create a new array variable
loop over the current array
grab each element and multiply it by 3
push that element into new array
return new array
*/

// let tripler = function(arr){
// 	let newArr = []
//     for(let i = 0; i < arr.length; i++){
//     	let ele = arr[i]
//         let multiplied = ele * 3
//         newArr.push(multiplied)
//     }
    
//     return newArr
// }



// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]


//LONG WORDS

// your code here
/* 
write a function longWords takes in array as param
save new array variable
loop over array 
	check the length of each word and if it is more than 5
    add that to a new Array
    
return that newArray


*/

// let longWords = function(words){
// 	let newArr = []
//     for(let i = 0; i < words.length; i++){
//     	let ele = words[i]
//         if(ele.length > 5){
//         	newArr.push(ele)
//         }
//     }
//     return newArr
// }



// console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

// REMOVE E WORDS
// your code here

/* 
write removeEWords function takes in a string 
turn that string into an array
create new array variable
loop over that array
check if the current element does not contains an e
	add that element to a new array
    
return that new array joined to a string
*/

// let removeEWords = function(sentence){
// 	let split = sentence.split(' ')
//     let newArr = []
//     for(let i = 0; i < split.length; i++){
//     	let ele = split[i]
//         let lower = ele.toLowerCase()
// 		if(lower.indexOf('e') === -1){
//         // if(!lower.includes('e')){
//         	newArr.push(ele)
//         }
//     }
//   return newArr.join(' ')
// }


// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('EntEr the building')); // 'building'

// MAX VALUE

// your code here
/* 
write a function maxValue takes in an array of numbers
set a max variable to our first Element
loop over our array
check if the current element is larger than max
	reassing max to current element
    
return our max

*/

// let maxValue = function(nums){
//     if(!nums.length) return null
//       let max = nums[0]
//       for(let i = 0; i < nums.length; i++){
//           let ele = nums[i]
//           if(ele > max){
//               max = ele
//           }
//       }
//     return max
//   }
  
  
//   console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
//   console.log(maxValue([-2, -3, -7, 3 ])); // 3
//   console.log(maxValue([])); // null
  

//WEST 





//INDEXING 2d Array

//Iterating 2d Array


// let removeCons = function (str) {

// };

// console.log(removeCons('keyboard')); // eoa
// console.log(removeCons('avocado')); // aoao
// console.log(removeCons('myrmecophilous')); // eoiou
// console.log(removeCons('happy birthday')); // a ia