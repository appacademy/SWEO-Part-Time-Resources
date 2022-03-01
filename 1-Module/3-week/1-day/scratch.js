// > Zip up an array of inputs.
// >
// > Input === an array of elements.
// >
// > Output === an array of subarrays containing the the element and an index marker.
// >
// > Examples:
// >
// > I: `[1,2,3,4]` -> O: `[[0,1], [1,2], [2,3], [3,4]]`
// >
// > I: `["Tom", "William", "Phillip"]` -> O: `[[0, "Tom"], [1, "William"], [2, "Philip"]]`

let zipUp = function(array){

	let result = [];

	for(i = 0; i < array.length; i++){

		result.push([i, array[i]])

	}

	return result;
}

console.log(zipUp([1,2,3,4]))
console.log(zipUp(["Tom", "William", "Phillip"]))
