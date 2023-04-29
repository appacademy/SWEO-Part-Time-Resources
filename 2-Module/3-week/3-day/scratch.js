<<<<<<< HEAD
// const binary = '0b11001010'

// const binaryToDecimal = (binaryStr) => {
//   // Remove the "Ob" prepended to the str
//   const raw = binaryStr.slice(2)
//   // Reverse the string for the next step
//   const reversed = raw.split('').reverse().join('')
//   // crete a sum to return
//   let sum = 0
//   // loop over our reversedstring
//   for(let i = 0; i < reversed.length; i++){
//     let ele = parseInt(reversed[i])
//     // Convert string to integer
//     const expo = 2 ** i
//     // add number to sum
//     sum += expo * ele

//   }

//   return sum
//   // return sum
// }

// console.log(binaryToDecimal(binary), 'answer 24')

// const hexChars = {
//   A: 10,
//   B: 11,
//   C: 12,
//   D: 13,
//   E: 14,
//   F: 15,
// }

// const hex1 = '0xF23C'

// const hexToDecimal = (hexStr) => {
//   // Remove the Ox
//   const raw = hexStr.slice(2)
//   // Reverse remaining hex
//   const reversed = raw.split('').reverse().join('')
//   // create a sum to return
//   let sum = 0
//   // loop over our reversed string
//   for(let i = 0; i < reversed.length; i++){
//     let char = reversed[i]
//     let expo = 16 ** i
//     // If it is a char use the value from the hexChars object
//     if(hexChars[char]){
//       sum += expo * hexChars[char]
//     } else {
//       // If it is a number we will convert the currentChar to a string
//       sum += expo * Number(char)
//     }
//   }
//   return sum
// }

// console.log(hexToDecimal(hex1))


// console.log(String.fromCharCode(65)); // prints ascii A

// const str = 'ABC';
// console.log(str.charCodeAt(0)); // converts ascii to decimal passing in index of the string which is A // returns 65

// let hexNum = parseInt('0xa1', 16);      // 161
// console.log(hexNum)
// let hexStr = Number(hexNum).toString(16);  // 'a1'
// console.log(hexStr)

let binNum = parseInt('10110', 2);      // 22
console.log(binNum)
let binStr = Number(binNum).toString(2);   // '10110'
console.log(binStr)
=======
const binary = '0b11001010'

const binaryToDecimal = (binaryStr) => {
  // Remove the "Ob" prepended to the str
  const rawBinary = binaryStr.substring(2)
  // Reverse the string for the next step
  const reversedBinary = rawBinary.split('').reverse().join('')

  let sum = 0

  for (let i = 0; i < reversedBinary.length; i++) {
    // Convert string to integer
    const currentInt = parseInt(reversedBinary[i])
    const num = Math.pow(2, i) * currentInt
    sum += num
  }

  return sum
}

console.log(binaryToDecimal(binary))

const hexChars = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
}

const hex1 = '0xF23C'

const hexToDecimal = (hexStr) => {
  // Remove the Ox
  const rawHex = hexStr.substring(2)
  // Reverse remaining hex
  const reverseHex = rawHex.split('').reverse().join('')

  let sum = 0

  for (let i = 0; i < reverseHex.length; i++) {
    const currentChar = reverseHex[i]
    if (hexChars[currentChar]) {
      // If it is a char use the value from the hexChars object
      let num = Math.pow(16, i) * hexChars[currentChar]
      sum += num
    } else {
      // If it is a number we will convert the currentChar to a string
      let num = Math.pow(16, i) * parseInt(currentChar)
      sum += num
    }
  }

  return sum
}

console.log(hexToDecimal(hex1))
>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6
