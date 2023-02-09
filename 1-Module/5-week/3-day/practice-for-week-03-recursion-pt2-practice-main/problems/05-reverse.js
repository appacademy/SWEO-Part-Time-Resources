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

// knowing the problem
// knowing what data types we work with
// string - primitive data type
// slice is way for us to remove 1 string at time
//

function reverse(str) {
  	// Your code here
	// base case
	// if (str.length === 0) return '' // base cases
	// // console.log(str.charAt(0), 'strCharAt')
	// if (str.length === 1) return str // base cases
	debugger
	if(str.length <= 1) return str
	// if(!str) return ''

	// first recursive call
	// house
	// str.slice(1) = ouse
	// str[0] = h

	// second recursive call
	// ouse
	// str.slice(1) = use
	// str[0] = o

	// third recursive call
	// use
	// str.slice(1) = se
	// str[0] = u

	// fourth recursive call
	// se
	// str.slice(1) = e
	// str[0] = s

	// fifth recursive call
	// e
	// str.slice(1) = ''
	// str[0] = e
    // return e

	return reverse(str.slice(1)) + str[0]
};

// console.log(reverse("")); // ""
// console.log(reverse("q")); // "q"
// console.log(reverse("id")); // "di"

console.log(reverse("house")); // "esuoh"
// console.log(reverse("dog")); // "god"
// console.log(reverse("atom")); // "mota"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
