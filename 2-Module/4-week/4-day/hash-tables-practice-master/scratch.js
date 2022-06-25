function simpleHash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}


const arrayMap = new Array(10).fill(null);
console.log(arrayMap);

const hashOutput = simpleHash("hello");
console.log(hashOutput); //532
console.log(hashOutput % arrayMap.length) //remainder that represents one of the index of the arrayMap (0-4 if our array length is 5)


// -------------------phase 1-----------------
const array = new Array(7).fill(null)

// -------------------phase 2-----------------
const sha256 = require('js-sha256');
const hexString = sha256("very-kool-key")
console.log(hexString);