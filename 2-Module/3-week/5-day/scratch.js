function binaryToString(binaryBlob) {
  // Your code here
let str = ''

//grab 8 chars from the blob
for (let i = 0; i < binaryBlob.length; i += 8){
  let binStr = binaryBlob.slice(i, i + 8)
  // console.log(binStr)
//first go go from bin to dec
let dec = parseInt(binStr, 2)
// console.log(dec)
//the go ascii fromCharCode
let ascii = String.fromCharCode(dec)
// console.log(ascii)

str += ascii

}

return str
}
console.log(Number(0b1010))
console.log(parseInt(1010, 2))
