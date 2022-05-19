/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god" 
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// method 1: g + reverse("do") --> g + o + reverse("d") --> g + o + d

//method 2: reverse("dog") --> reverse("og") + d --> reverse("g") + o + d --> reverse("") + g + o + d --> "" + g + o + d
// function reverse(str) {
//   //base case is when the string's length is 0, we return "" which is our foundation to build from
//   if(str.length === 0){
//     return "";
//   }
//   //get the first letter
//   const firstLetter = str[0];

//   //get the rest of the result reverse("og")
//   const restOfResult = reverse(str.slice(1))

//   //reverse("dog") -->  reverse("og") + d
//   //reverse("dog") --> reverse("og") + d --> reverse("g") + o + d --> reverse("") + g + o + d --> "" + g + o + d
//   const finalResult = restOfResult + firstLetter
//   return finalResult;
// }


//---------------scott and marcos-----------------
// method 1: g + reverse("do") --> g + o + reverse("d") --> g + o + d
function reverse(str) {
  debugger;
  if( str.length === 0){
    return str
  }
 if (str.length === 1){
   return str;
 }

 let last = str.length-1;

 let word = str.slice(0, str.length-1);
 let char = str[last]
 const result = char + reverse(word);
 return result;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}