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

//reverse("cat") ==>  reverse("at") + c ==> reverse("t") + "a" + "c" ==> reverse("") + "t" + "a" + "c" ==> "" + "t" + "a" + "c" ==> "tac"
function reverse(str) {
  debugger;
  //base case is when str.length is 0, return ""
  if(str.length === 0){
    return "";
  }

  //get the reverse(str.slice(1)) + firstLetter
  const firstLetter = str[0];
  
  //reverse the rest of the result i.e. reverse("at");
  const restOfResult = reverse(str.slice(1));

  //combine restOfResult with firstLetter
  const finalResult = restOfResult + firstLetter;
  return finalResult;
}
console.log(reverse("cat"))


function reverse(str) {
  if (str.length === 0) return '';
  const arr = str.split('').reverse(); //["c", "a", "t"] ==> ["t", "a", ]
  const popped = arr.pop(); //"c"
  return arr.join('') + popped;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}