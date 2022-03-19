

// let myLogFunc = (n) => { // Time Complex Log O(log(n)) Because I am only looping through half my array, less than O(n) more than O(1)
//     let arr = []
//     for(let i = 0; i < n /2; i++){
//         arr.push(i)
//     }
// }

// myNLogNFunc = (n) => { // O(n log(n)) Higher than linear but less than quadratic
//     let arr = []
//     for(let i = 0; i < n; i++){ // O(n)
//         for(let j = 0; j < n /2 ;j++){ // O(log(n))
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


// Binary is base 2 meaning we only have digits, 0 and 1
// when we run out of digits the left increases and right got back to 0
// each number of binary is one bit, and 8 bits are a byte 
// one letter is one byte, 8 bits of information
// // 0b01101100011
// // Base 2, because there is only 2 digits
// Ob in the front to tell people this is binary

// 0 - 0000
// 1 - 0001
// 2 - 0010
// 3 - 0011
// 4 - 0100
// 5 - 0101
// 6 - 0110
// 7 - 0111
// 8 - 1000
// 9 - 1001
// 10 - 1010
// 11 - 1011
// 12 - 1100
// 13 - 1101
// 14 - 1110
// 15 - 1111
// 16 - 10000

// How do we convert binary to decimal base 10 numbers
// create a function that takes in a string of binary
// look at each index of the string starting from the right
// create a sum variable to keep track of your sum
// the equation for conversion is base to the power(**) of the index multiplied by the value at that index 
// return your sum 


// let binaryToDec = (string) => {
//     let output  = 0
//     let stringLength = string.length - 1
//     for(let i = 0; i < string.length; i++){
//         output+= (2** (stringLength -i) * string[i])
//     }
//     return output
// }
// const binaryToDec = (bin) => {
//     let val = 1;
//     let num = 0;
//     for(let i = bin.length-1; i > 1; i--) {
//       if(Number(bin[i])) num += val;
//       val *= 2;
//     }
//     return num;
//   }
//   // String starts with "0b"
// // console.log(binaryToDec("0b1010"));
// // console.log(parseInt('10000', 2))
// // console.log(binaryToDec('0010101110'))

// console.log(binaryToDec('0b0101010101100111101000101110011010101011101010101011010010'))
// console.log(parseInt('0101010101100111101000101110011010101011101010101011010010', 2))

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

// // Base 16 because we have 16 available digits 
// // you will see it in the wild with the prefix of 0x
// // Hex / decimal
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
// 11- 17
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
// '1E'  -30
// '1F' - 31
// 20 - 32


// const hexToDec = (hexCode) => {
//     let obj = {
//         "A": 10,
//         "B": 11,
//         "C": 12,
//         "D": 13,
//         "E": 14,
//         "F": 15
//     }

//     let sum = 0
//     let reverseStr = hexCode.split('').reverse()
//     for(let i = 0 ; i < reverseStr.length; i++){
//         let currentVal = reverseStr[i]
//         if(currentVal === 'x') return sum
//         let num;
//         if(Object.keys(obj).includes(currentVal)){
//             num = 16**i * obj[currentVal]
//         }else{
//             num = 16**i * currentVal
//         }
//         sum+=num
//     }
//     return sum
// }

// console.log(hexToDec('0x1C'))

// console.log(parseInt('1C', 16))

// let num = 1234

// console.log(num.toString(10))

// console.log(String.fromCharCode('0b1000010') + String.fromCharCode('0x41') + String.fromCharCode(89))

// console.log(typeof String.fromCharCode(32)

// Bytes, kilobytes, megabytes, gigabytes, terabytes:
// 1 byte = 8 bits
// one binary digit is one bit 

// kilo - thousand // 3.2 kilobytes
// mega - million 
// giga - billion
// tera - trillion
// peta - quadrillion
// exa - quintillion
// zetta - sextillion
// yotta - septillion





const nameToBin = (name) => {
    let binArr = []
    for(let i = 0 ; i < name.length ; i ++){
        let letter = name[i]
        let charCode = letter.charCodeAt()
        binArr.push('0' + charCode.toString(2))
    }
    return binArr.join('')
}

console.log(nameToBin('Baylen'))



