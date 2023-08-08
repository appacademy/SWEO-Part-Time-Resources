// // const binary = '0b11001011'
// // const binary2 = '0b0010'

// // function convertBinary(binary){
// // 	let strLength = binary.length - 2

// // 	let sum = 0
// // 	for(let i = 0; i < strLength; i++){
// // 		sum += Math.pow(2, strLength) * parseInt(binary[i+2])
// // 		strLength--
// // 	}
// // 	return sum
// // }

// // const binary = '0b11001010'

// // const binaryToDecimal = (binaryStr) => {
// //   // Remove the "Ob" prepended to the str
// //   const rawBinary = binaryStr.substring(2)
// //   // Reverse the string for the next step
// //   const reversedBinary = rawBinary.split('').reverse().join('')

// //   let sum = 0

// //   for (let i = 0; i < reversedBinary.length; i++) {
// //     // Convert string to integer
// //     const currentInt = parseInt(reversedBinary[i])
// //     const num = Math.pow(2, i) * currentInt
// //     sum += num
// //   }

// //   return sum
// // }

// // console.log(binaryToDecimal(binary))

// const binary = '11001011'

// function convertBinary(binaryStr) {
//     let num = 0;
//     let power = 0;

//     for (let i = binaryStr.length - 1; i >= 0; i--) {
//         let bit = parseInt(binaryStr[i]);
//         num += bit * Math.pow(2, power);
//         power++;
//     }

//     return num;
// }


// // console.log(convertBinary(binary))

// function decimalToBinary(decimal) {
//     let binary = "";

//     while (decimal > 0) {
//         let badVar = decimal % 2;
//         binary = badVar + binary;
//         decimal = Math.floor(decimal / 2);
//     }

//     return binary;
// }

// console.log(decimalToBinary(4))

const arr = [1,2,3]

arr.push(4)
// space o(1)
// time o(1) or o(n)
// dynamic arrays
// [1,2,3, null, null, null]
// [1,2,3,4,null,null]
// [1,2,3,4,5,null]
// [1,2,3,4,5,6]
// [1,2,3,4,5,6,7,null,null,null,null,null]

arr.pop()
// time o(1)
// space o(1)

arr.shift()
// time o(n)
// space

// ['',2,3]
// [2,3]

arr.unshift(5)
// o(n^2) js
// o(n)
// [1,2,3]

// [null, 1,2,3]
// [5,1,2,3]

// k would be your number of elements
// n would your array length
// k + n

arr.filter()
// time o(n)
// space o(n)

arr.map()
// time o(n)
// space o(n)

arr.reduce()
// time o(n)
// space o(1)

arr.every()
// time o(n)
// space o(1)

arr.reverse()
// time o(n/2) --> o(n)

// [1,2,3,4]
// [4,3,2,1]
