let nums = [0,1,0,2,4,15,0]
// A note on 'funky' sorts
function moveZeroes(arr) {
  let first = null;

  for (let i = 0; i < arr.length; i++) {
    if (first === null & arr[i] === 0) {
      first = i;
    }
    if (arr[i] !== 0) {
      [arr[i], arr[first]] = [arr[first], arr[i]];
      first++;
    }
  }

  return arr;
}
// Array.sort()
// console.log(nums.sort((a,b) => a-b))
// a - b === 0 : leave the order as is
// a - b > 0   : b before a
// a - b < 0   : a before b

function zeroComapre(a, b) {
  if (a === 0) return  1;
  if (b === 0) return -1;
  else return 0;
}
console.log(nums.sort(zeroComapre));