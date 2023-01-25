/*******************************************************************************
Write a function evenRange(start, end) that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

Examples:

evenRange(13, 20) => [ 14, 16, 18, 20 ]
evenRange(4, 11) => [ 4, 6, 8, 10 ]
evenRange(8, 5) => []
*******************************************************************************/

function evenRange(start, end) {
  // Your code here
  let evens = [];
  // let i = start;
  // while(i <= end){
  //   if ( i % 2 === 0) evens.push(i)
  //   i+=1;
  // }

  //          CONDITION   ? ifTrue    : ifFalse;
  // start = start % 2 === 0 ? start + 1 : start;
  while (start <= end) start % 2 === 0 ? evens.push(start++) : start++
  
  return evens;
}

console.log(evenRange(13, 20)) // => [ 14, 16, 18, 20 ]
console.log(evenRange(4, 11)) // => [ 4, 6, 8, 10 ]
console.log(evenRange(8, 5)) //=> []
/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = evenRange;