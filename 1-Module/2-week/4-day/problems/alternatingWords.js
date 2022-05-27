// Write a function alternatingWords that accepts an 
// array of words as an argument. The function should 
// mutate the input array such that the words alternate 
// between fully uppercase or lowercase. The first word 
// should be uppercase.

function alternatingWords(arr){
	// iterate through our words
  // for odd indexes, change them to uppercase
  // for evens, change to lowercase
  // return the mutated array
  for (let i = 0; i < arr.length; i++){
    let ele = arr[i];
    if (i % 2 === 0){
      arr[i] = ele.toUpperCase();
    } else {
      arr[i] = ele.toLowerCase();
    }
  }
  return arr;
}


let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]