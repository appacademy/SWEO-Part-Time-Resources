// your code here

//1. define rotate function
let rotate = function(array, num){
	//if the num is positive, rotate right num amount of times
  	for(let i=0; i<num; i++){
      //directly mutating and remove the last element from array
      let lastEl = array.pop();
      array.unshift(lastEl);
    }
  
  	//else if num is negative, rotate left
  	//if num = -2 --> num = 2
  	for(let i=num; i <0; i++){
      let firstEl = array.shift();
      array.push(firstEl);
    }
}



let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]