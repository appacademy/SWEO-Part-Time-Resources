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


function reverse(str) {
	debugger
	// if(str === '') return '' //base case
	if(str.length <= 1) {
		console.log(str, 'str')
		return str
	} // base case

	// first recursive call
	// str = house
	// str.slice(1) = ouse
	// str[0] = h

	// second recursive call
	// str = ouse
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
	// e === 1
	// str.slice(1) = ''
	// str[0] = e
	// return e

	console.log(str.slice(1), 'str slice')
	console.log(str[0], 'str[0]')
	return reverse(str.slice(1)) + str[0]

	// "esuoh"
}

// console.log(reverse("")); // ""
// console.log(reverse("a")) // 'a'

console.log(reverse("house")); // "esuoh"
// console.log(reverse("dog")); // "god"
// console.log(reverse("atom")); // "mota"
// console.log(reverse("q")); // "q"
// console.log(reverse("id")); // "di"

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
