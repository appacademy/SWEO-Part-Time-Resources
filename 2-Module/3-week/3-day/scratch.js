// const binNum = '0b11001010';

// const binaryToDecimal = (binStr) => {
//   // const actualBin = binStr.slice(2)
//   const actualBin = binStr.substring(2);
//   const reversedBin = actualBin.split('').reverse().join('');

//   let sum = 0;

//   for (let i = 0; i < reversedBin.length; i++) {
//     const current = reversedBin[i];
//     const expo = 2 ** i;
//     // const expo2 = Math.pow(2, i)
//     sum += expo * Number(current);
//   }

//   return sum;
// };

// console.log(binaryToDecimal(binNum));

// const myHex = '0xF23C';

// const hexChars = {
//   A: 10,
//   B: 11,
//   C: 12,
//   D: 13,
//   E: 14,
//   F: 15,
// };

// 		// if (isNan(Number(curr))) {
// 		// 	// same as binary
// 		// } else {
// 		// 	// figure out hex stuff
// 		// }

// const hexToDecimal = (hexStr) => {
//   const actualHex = hexStr.slice(2);
//   const reversedHex = actualHex.split('').reverse().join('');

//   let sum = 0;

//   for (let i = 0; i < reversedHex.length; i++) {
//     const curr = reversedHex[i];

// 		// let expo = Math.pow(16, i)

// 		// if (hexChars[curr]) {
//     //   sum += expo * hexChars[curr];
//     // } else {
//     //   sum += expo * Number(curr);
//     // }

// 		if (hexChars[curr]) {
// 			let expo = Math.pow(16, i) * hexChars[curr]
// 			sum += expo
// 		} else {
// 			let expo = Math.pow(16, i) * Number(curr)
// 			sum += expo
// 		}
//   }
// 	return sum
// };

// console.log(hexToDecimal(myHex))

// console.log(String.fromCharCode(7));
// console.log(String.fromCharCode(140));
// console.log(String.fromCharCode(20));
// console.log(String.fromCharCode(80));
// console.log(String.fromCharCode(118));
// console.log(String.fromCharCode(122));

// console.log(String.fromCharCode(65));

// const str = 'ABC';
// console.log(str.charCodeAt(1));

// //? Convert Hexadecimal to Base10 & back
// // let hexNum = parseInt('0xA1', 16); // 161
// let hexNum = parseInt('A1', 16); // 161
// console.log(hexNum);

// let hexStr = Number(hexNum).toString(16);  // 'a1'
// console.log(hexStr)

// //? Convert Binary to Base10 & back
// let binNum = parseInt('10110', 2);      // 22
// console.log(binNum)
// let binStr = binNum.toString(2);   // '10110'
// console.log(binStr)