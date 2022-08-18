const range = (start, end) => {
  // Base Case start <= end
  if (start >= end) return [];
  // Recursive Case start !== end
  // Recursive Step start + 1
  return [start, ...range(start + 1, end)];
};

// const rangeDefault = (start, end, resArr = []) => {
//   if(start >= end) return resArr

//   resArr.push(start)

//   return rangeDefault(start + 1, end, resArr)
// }

// console.log(range(1,5))
// console.log(rangeDefault(1,5))


const sumArray = (arr, sum = 0) => {
  if(!arr.length) return sum

  let lastEle = arr.pop()
  sum += lastEle
  return sumArray(arr, sum)
}

console.log(sumArray([1,2,3,4]))