// Write a function rotate(array, num) that takes in an 
// array and a number as args. When the num is positive, 
// the elements of the array should be rotated to the right. 
// When the num is negative, the elements of the array should 
// be rotated to the left. The function should mutate the original array. 

// Define this function using function expression syntax.

let rotate = function(arr, num){
	// check if the num is positive
  // if it is i want to iterate through my array
  // remove the last element
  // add it to the beginning num times
  // if it's not positive, do the opposite;

  if (num > 0){
    for (let i = 0; i < num; i++){
      let lastEle = arr.pop();
      arr.unshift(lastEle);
    }
  } else {
    for (let i = num; i < 0; i++){
      let firstEle = arr.shift();
      arr.push(firstEle);
    }
  }
  return arr;
}



let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]