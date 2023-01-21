/****************************************************************************** 
Uncompress
Write a function uncompress(str) that takes in a "compressed" string as an arg. 
A compressed string consists of a character immediately followed by the number 
of times it appears in the "uncompressed" form. The function should return the 
uncompressed version of the string. See the examples. 

Hint: you can use the built-in Number function should convert a numeric string 
into the number type. For example. Number("4") // => 4
******************************************************************************/
// your code here
function uncompress(str){
    let res = ""
    for (let i = 0; i < str.length; i+=2){ 
    // since the string is each letter immediately followed by the count, we 
    // can increase by 2 so we're not accidentally adding any extra letters
        let currentChar = str[i] // the letter
        let currentCount = str[i + 1] // how many times we need it
        for (let j = 0; j<currentCount; j++){
        // for currentCount many times,
        res += currentChar; // append our current character to the res string
        }
    }
    return res;
}




console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'