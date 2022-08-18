/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""


base case -- if out str does not have length
recursive step -- str.slice(1)
recursive case is calling our funciton passing in our step
***********************************************************************/


function reverse(str) {
  // Your code here
  if(str.length === 0){
    return str
  }
  let res = reverse(str.slice(1)) + str[0]
  return res
}


reverse("house"); // "esuoh"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}