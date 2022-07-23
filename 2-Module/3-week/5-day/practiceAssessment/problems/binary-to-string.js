function binaryToString(binaryBlob) {
  let arr = [];
  for (let i = 0; i < binaryBlob.length; i += 8){ // we know we want to split this blob into 8 bit binary values, so incrementing by 8 each time
    let current = binaryBlob.slice(i, i + 8) // grabbing 8 digits at a time to break this blob up and pushing to the arr.
    arr.push(current);
  }

  let chars = arr.map(binary => { // creating an arr of the ASCII chars
    let decimal = parseInt(binary, 2) // Gotta have a decimal to use String.fromCharCode
    let char = String.fromCharCode(decimal); // always used for ASCII 
    return char // dont forget to return in a map!
  })

  return chars.join(''); // joining the ASCII chars back together into a single string.
}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;