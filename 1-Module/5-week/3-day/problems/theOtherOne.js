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

let reverse = str => {
  // base case when my str.length < 1 return ''
  // grab the str[0] we will concatenate the return value of future function calls with that
  // slice the string to move toward the base case

  if (str.length < 1) return '';

  let newStr = reverse(str.slice(1));
  return newStr += str[0]
}



reverse("house"); // "esuoh"
console.log(reverse("dog")); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""

