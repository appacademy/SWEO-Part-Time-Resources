//first try to process the information that they provide. I.e run 8 bits at a time inside of String.fromCharCode and see the output

function binaryToString(binaryBlob) {
  //i need to split binaryBlob by 8 bits each section

  //create a variable word to add all the ascii characters to
  let word = "";

  //convert binaryBlop into an array of `0`s and `1`s
  const binaryBlopArr = binaryBlob.split(""); //["0", "1", ...]


  //example has 24 bits. So if we divide 24 by 8, we will have 3 characters. 32 / 8 = 4 characters ...
  const amountOfChars = binaryBlopArr.length / 8; // 24/ 8 = 3; 3 characters that i know i will need to add to word
  for(let i=0; i<amountOfChars; i++){ //each character represents 8 bits
    //now we need to remove 8 digits from our binaryBlopArr each time
    const binary8bits = binaryBlopArr.splice(0, 8); // i.e. at i=0; binary8bits = ['0','1', '0', '0', '0', '0', '0', '1']

    const binaryStr = "0b" + binary8bits.join(""); //"0b01000001"

    //get ascii value from our binaryStr
    const asciiValue = String.fromCharCode(binaryStr); //"A"

    word += asciiValue;
  }
  return word;
}

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;