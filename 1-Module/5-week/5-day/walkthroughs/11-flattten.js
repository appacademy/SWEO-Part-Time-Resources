/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, result = []) {
    debugger;
    //part 0: base case where arr.length is 0, then return result
    if (!arr.length) return result;

    //part 1: get the front element, determine if that element is an array or if it's an element
    const frontEl = arr[0];
    if (Array.isArray(frontEl)) {
        //if frontEl is an array, we want to `flatten` it again
        flatten(frontEl, result);
    }
    else {
        //else if it is not an array, just push it to result
        result.push(frontEl);
    }

    //part 2: now we've done it for the front el, we need it to do that for the REST of the array. ex: [1, [2], [[3]]] --> we just did 1, not we need to do [2] & [[3]]
    flatten(arr.slice(1), result)

    //return result after extracting all numbers into it
    return result;
}

//------ Adam Warren's Solution--------
// function flatten(arr) {
// 	if (arr.length === 0){
// 	  return []
// 	}
// 	if (Array.isArray(arr[0])){
// 	  return [...flatten(arr[0]), ...flatten(arr.slice(1)) ]
// 	} else {
// 	  return [arr[0],...flatten(arr.slice(1))]
// 	}
// }

//------ Aman Kaur's Solution--------
// function flatten(arr) {
//     if (arr.length === 0) {
//         return [];
//     }
//     else {
//         const [frontItem, ...rest] = arr;
//         if (Array.isArray(frontItem)) {
//             return [...flatten(frontItem), ...flatten(rest)]
//         }
//         else {
//             return [frontItem, ...flatten(rest)]
//         }
//     }
// }



console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]