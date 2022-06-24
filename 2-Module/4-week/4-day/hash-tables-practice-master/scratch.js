//a array with a length of 5 and all of it is null
//[null, null, null, null, null]

const arr = new Array(5).fill(null);

console.log(arr);

//-------------phase 2:
const sha256 = require('js-sha256');

const hexStr64Char = sha256("this-key-super-kool") //hash our string key and gives us a 64 character long hexadecimal string.
console.log(hexStr64Char); //7deb95144cc3a2878192cd69e14fe221eda0c5e2729072e9ef5c1fd1635ceb85