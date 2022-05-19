// const binNum = '0b11001010';

// const binaryToDecimal = (binaryStr) => {
//   const rawBinary = binaryStr.slice(2);
//   const reversedBinary = rawBinary.split('').reverse().join('');

//   let sum = 0;

//   for (let i = 0; i < reversedBinary.length; i++) {
//     const curr = reversedBinary[i];

//     // let expo = Math.pow(2, i)
//     let expo = 2 ** i;
//     sum += expo * Number(curr);
//   }

//   return sum;
// };

// console.log(binaryToDecimal(binNum));

// const myHex = '0xF23C'; // 62012

// const hexChars = {
//   A: 10,
//   B: 11,
//   C: 12,
//   D: 13,
//   E: 14,
//   F: 15,
// };

// const hexToDecimal = (hexStr) => {
//   const rawHex = hexStr.slice(2);
//   const hexArray = rawHex.split('').reverse();

//   let sum = 0;

//   for (let i = 0; i < hexArray.length; i++) {
//     const expo = 16 ** i;
//     const curr = hexArray[i];
// 		// if (isNaN(parseInt(curr))) {
// 		// 	// in this if, curr is ABCDEF
// 		// } else {
// 		// 	// in this if, curr is a num
// 		// }

// 		if (hexChars[curr]) {
// 			sum += expo * hexChars[curr]
// 		} else {
// 			sum += expo * curr
// 		}

//   }

//   return sum;
// };

// console.log(hexToDecimal(myHex));

// console.log(String.fromCharCode(65));
// // console.log(String.fromCharCode(1));

// const str = 'ABC';
// console.log(str.charCodeAt(0));

// // Convert Hexadecimal to Base10 & back`
// let hexNum = parseInt('0xA1', 16);      // 161
// console.log(hexNum)
// let hexStr = hexNum.toString(16);  // 'a1'
// console.log(hexStr)


// // Convert Binary to Base10 & back`
// let binNum = parseInt('10110', 2);      // 22
// console.log(binNum)
// let binStr = Number(binNum).toString(2);   // '10110'
// console.log(binStr)


console.log(Number("0b10110"))
console.log(Number("0xA1"))