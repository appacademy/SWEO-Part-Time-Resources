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

base case -- str.length === 0
recursive step -- pass str.slice(1) to our recursive call
recursive call -- call our function passing in str.slice()
***********************************************************************/


function reverse(str) {
  // Your code here
  debugger
  if(str.length === 0) return str

  let res = reverse(str.slice(1)) + str[0]
  debugger
  return res
}

reverse("house"); // "esuoh"

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}