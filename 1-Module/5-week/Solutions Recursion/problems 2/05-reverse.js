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
// 1. understanding the problem
// it was us to write it recursively
// we know that it takes in a string
// return is the string in reverse
// if given an empty str just return an empty string

// 2. make a plan
// since its going to be done recursively
// we need a base case
// we'll look at what our recursive case is
// recursive step
// our base case will be when the string itself is empty return an empty string
// our recursive case will be as long as we have a string that isn't empty
// we just continue recursion
// since we have a string we can use an advance method to achieve
// the base case
// the advanced method that ill be using is slice
// with a string we can add them together
// returning back a string value


// 3. execute plan

// function reverse(str) {
//   	// base case
// 	if(!str.length) return ''

// 	// recursive step
// 	return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
// }

// function reverse(str) {
// 	// base case
//   if(!str.length) return ''

//   // recursive step
//   return reverse(str.slice(1)) + str[0]
// }


// const reverse = str => {


// 	let resArr = [];

// 	if (str === ""){
// 	  return str;
// 	}

// 	if (str.length <= 0){
// 		return resArr;
// 	}

// 	resArr.push(str.slice(str.length-1));

// 	return resArr.concat(reverse(str.slice(str[0], str.length -1))).join('');
// }


// function reverse(string){
// 	// base case
// 	if(string.length === 0) return ''

// 	// recusive step
// 	return string[string.length - 1] + reverse(string.slice(0, string.length - 1))
// }


const reverse = (string) => string.length === 0 ? '' : reverse(string.slice(1)) + string[0]

console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("house")); // "esuoh"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
// try {
//   module.exports = reverse;
// } catch (e) {
//   module.exports = null;
// }
