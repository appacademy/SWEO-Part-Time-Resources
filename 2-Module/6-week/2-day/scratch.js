let arr = [0,1,0,4,15,0];

function moveZeroes(arr) {
  let first = null;

  for (let i = 0; i < arr.length; i++) {
    if (first === null && arr[i] === 0) first = i;
    if (arr[i] !== 0) {
      [arr[i], arr[first]] = [arr[first], arr[i]];
      first++
    }
  }
  return arr;
}

// console.log(moveZeroes(arr));
//Array.sort()
// console.log(arr.sort((a, b) => a - b));
// -val :a before b
// 0    :keep order as is
// +val :b before a

function zeroCompare(a, b) {
  if (a === 0) return  1;
  if (b === 0) return -1;
  else return 0;
}
console.log(arr.sort(zeroCompare))