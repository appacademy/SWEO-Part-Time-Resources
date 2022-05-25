let rotateRight = function(array, num){
	let copy = array.slice();
  // let copy = array; // if you do this, the copy variable will be pointing to the same array in memory
  // and if you mutate the copy you will also be mutating the original. This is like having 2 variables
  // for the same array. You must use .slice to create your copy if you dont want to mutate the original.
  for (let i = 0; i < num; i++){
    let lastEle = copy.pop();
    copy.unshift(lastEle);
  };
  console.log('this is the original', array);
  console.log('this is the copy', copy);
  return copy;
}


let arr = ['a', 'b', 'c', 'd', 'e'];
rotateRight(arr, 2); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

