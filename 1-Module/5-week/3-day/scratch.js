// const recRev = (array, arr = []) => {
//   let arr = []
//   //base case: when array is empty, return []
//   //recursive case: as long as array has values, recurse
//   //step case: removing val from array
//   if (array.length === 0) return [];

//   // return [...recRev(array.slice(1)), array[0]]
//   return [array[array.length - 1], ...recRev(array.slice(0, array.length - 1))]
// }

// // recRev([])     = []
// // recRev([2])    = [2]
// // recRev([1, 2]) = [2, 1]

// const arr = [1, 2, 3];
// console.log(recRev(arr))
// console.log(arr)

const _range = (start, end) => {
  //base case
  if (start === end) return [];

  //recursive case
  return [start, ..._range(start + 1, end)];
};

const __range = (start, end, arr = []) => {
  if (start === end) return arr;
  arr.push(start);
  return __range(start + 1, end, arr);
};

const range = (start, end) => {
  let arr = [];
  function inner() {
    if (start === end) return arr;
    arr.push(start);
    start += 1;
    return inner();
  }
  return inner();
};

console.log(__range(4, 12, [1, 2]));
