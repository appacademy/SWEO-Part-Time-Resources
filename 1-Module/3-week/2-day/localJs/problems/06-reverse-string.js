/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  // Your code here
  // let res=[];
  // let word = ""
  // console.log(string)
  // for (let i = 0; i < string.length; i++){
  //   let char = string[i]
  //   console.log(char)
  //   if (char !== "-") word+= char;
  //   else {
  //     console.log("DASH FOUND!")
  //     console.log("add", word,"...")
  //     res.unshift(word)
  //     console.log(res)
  //     word=""
  //   }
  // }
  // res.unshift(word)
  let res = string.split("-")
  res.reverse()
  return res.join("-")
}

reverseString("Go-to-the-store") 
reverseString("Jump,-jump-for-joy") 

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = reverseString;