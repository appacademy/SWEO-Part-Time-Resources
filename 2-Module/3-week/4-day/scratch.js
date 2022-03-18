

// let myLogFunc = (n) => { // Time Complexity O(log(n)) because I am only looping to half my input.  Less than linear more than constant 
//     let arr = []
//     for(let i = 0; i < n /2; i++){
//         arr.push(i)
//     }
// }

// myNLogNFunc = (n) => { // O(n log(n)) because we have a log loop inside of a linear loop.
//     let arr = []
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n /2 ;j++){
//             arr.push(j)
//         }
//     }
// }





// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24


// // 0b01101100011
// // Base 2, because there is only 2 digits

// 0 - 0000
// console.log(parseInt('0000', 2))
// 1 - 0001
// console.log(parseInt('0001', 2))
// 2 - 0010
// console.log(parseInt('0010', 2))
// 3 - 0011
// console.log(parseInt('0011', 2))
// 4 - 0100
// console.log(parseInt('0100', 2))
// 5 - 0101
// console.log(parseInt('0101', 2))
// 6 - 0110
// console.log(parseInt('0110', 2))
// 7 - 0111
// console.log(parseInt('0111', 2))
// 8 - 1000
// console.log(parseInt('1000', 2))
// 9 - 1001
// console.log(parseInt('1001', 2))
// 10 - 1010
// console.log(parseInt('1010', 2))
// 11 - 1011
// console.log(parseInt('1011', 2))
// 12 - 1100
// console.log(parseInt('1100', 2))
// 13 - 1101
// console.log(parseInt('1101', 2))
// 14 - 1110
// console.log(parseInt('1110', 2))
// 15 - 1111
// console.log(parseInt('1111', 2))
// 16 - 10000
// console.log(parseInt('10000', 2))
// console.log(parseInt('00110101010101', 2))

// console.log(0b00110101010101)

// converting from binary to decimal 
// base to the power of(^) position/index multiplied by the value/number at that position, starting from the right, moving the the left
// the sum of that operation on every position 
// return that sum



// let binaryToDecimal = (binary) => {
//     // base ^ index times the vales at that index starting from the right
//     let nums = binary.split('').reverse()
//     let sum = 0
//     for(let i = 0; i < nums.length; i++){
//         sum += (2**i * nums[i])
//     }
//     return sum
// }

// console.log(binaryToDecimal('00110101010101'))




// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16

// 0 - 0
// 1 - 1
// 2 - 2
// 3 - 3
// 4 - 4
// 5 - 5
// 6 - 6
// 7 - 7
// 8 - 8
// 9 - 9
// 'A' - 10
// 'B' - 11
// 'C' - 12
// 'D' - 13
// 'E' - 14
// 'F' - 15
// 10 - 16
// 11 - 17
// 12 - 18
// 13 - 19
// 14 - 20
// 15 - 21
// 16 - 22
// 17 - 23
// 18 - 24
// 19 - 25
// '1A' - 26
// '1B' - 27
// '1C' - 28
// '1D' - 29
// '1E' - 30
// '1F' = 31
// let num = 97
// let binary = num.toString(2)
// let hex = num.toString(16)

// console.log(String.fromCharCode(num))
// console.log(String.fromCharCode(binary))
// console.log(String.fromCharCode('0x61'))
// console.log(String.fromCharCode(97))
// console.log(String.fromCharCode('0b1100001'))
// let num = 3414

// console.log(num.toString(2))
// console.log(num.toString(36))

// let hexHelper = (char) => {
//     let numberObj = {
//         'A': 10,
//         'B': 11,
//         'C': 12,
//         'D': 13,
//         'E': 14,
//         'F': 15
//     }
//     if(Number(char) || Number(char) === 0){
//         return char
//     }
//     return numberObj[char]
// }


// let hexToDec = (hex) => {
//     let sum = 0;
//     let arr = hex.split('').reverse()
//     arr.forEach((el, i) => {
//         let num = hexHelper(el)
//         sum += 16**i * num
//     });
//     return sum
// }

// console.log(hexToDec("A1"))
// console.log(parseInt('0xA1', 16))

// Bytes, kilobytes, megabytes, gigabytes, terabytes:
// 1 byte = 8 bits

// kilo - thousand
// mega - million
// giga - billion
// tera - trillion
// peta - quadrillion
// exa - quintillion
// zetta - sextillion
// yotta - septillion