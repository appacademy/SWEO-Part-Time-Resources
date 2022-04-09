/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

// more verbose
function doesKeyExist(obj, key) {

	// loop over each key in the object
	for (let eachKey in obj) {
		// if the key in the object is === the passed in key, return true
		if (eachKey === key) {
			return true
		}
	}

	// once the loop is over, if we never found a matching key, return false
	return false
}

// faster version
function doesKeyExist(obj, key) {
	// get an array with all keys, does it include the passed in key?
	// if it does, this evaluates to true, so true is returned
	// if not, evaluates to false, so false is returned.
	return Object.keys(obj).includes(key)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
