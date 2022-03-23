// function binaryToString(binaryBlob) {
//   let binaryBlobArray = binaryBlob.split("")
//   // console.log(binaryBlobArray)
//   let binaryArray = []
//   let i = 0
//   let substring = ''
//   while (binaryBlobArray.length){
//     if(i === 8){
//       binaryArray.push(substring)
//       i = 0
//       substring = ''
//     }
//     let currentChar = binaryBlobArray.shift()
//     substring+= currentChar  
//     i++
//   }
//   binaryArray.push(substring)
  
//   let myNumArr = binaryArray.map(el => parseInt(el, 2))
//   let myLetterArr = myNumArr.map(el => String.fromCharCode(el))
//   return myLetterArr.join('')


// }


// function binaryToDecimal(binary) {
//   if (!binary) return 0;
//   return binaryToDecimal(binary.slice(1)) + Number(binary[0]) * (Math.pow(2, binary.length - 1))
// }
// function binaryToString(binaryBlob) {
//   if(!binaryBlob) return "";
//   return String.fromCharCode(parseInt(binaryBlob.slice(0,8), 2)).concat(binaryToString(binaryBlob.slice(8)))
// }
// const  binaryToString =  (binaryBlob) => !binaryBlob ?  "" : String.fromCharCode(parseInt(binaryBlob.slice(0,8), 2)).concat(binaryToString(binaryBlob.slice(8)))


// function binaryToString(binaryBlob) {
//   let res = []
//   let binaryArray = binaryBlob.split("");
//   let byte;
//   let base10;
//   let str;
  
//   while(binaryArray.length > 0){
//     byte = binaryArray.splice(0, 8).join(""); // '00110011'
//     base10 = parseInt(byte, 2); // 65
//     str = String.fromCharCode(base10); // A, B , C
//     res.push(str);
//   }

//   return res.join("");
// }

// function binaryToString(binaryBlob) {
//   let arr = [];
//   for(let i = 0; i < binaryBlob.length; i+= 8){
//    arr.push(binaryBlob.substring(i,i+8));
//   }
//  return arr.map(element => {
//    return String.fromCharCode(parseInt(element,2));
//   }).join('');
// }

// let helpFunc = binArr => {
//   let bytes = [];
//   for (let i = 0; i < binArr.length; i += 8) {
//     bytes.push(binArr.slice(i, i + 8));
//   }
//   return bytes;
// }
// let binaryToString = binaryBlob => {
//   let res = '';
//   let bytes = helpFunc(binaryBlob.split('')); // [[0,1,0,1,0,1,0,1], [0,1,0,1,0,1,0,1], ]
//   for (let i = 0; i < bytes.length; i++) {
//     let byte = bytes[i].join('');
//     res += String.fromCharCode(parseInt(byte, 2));
//   }
//   return res;
// }

// binaryToString('010000010100001001000011');  // 'ABC'


module.exports = binaryToString;