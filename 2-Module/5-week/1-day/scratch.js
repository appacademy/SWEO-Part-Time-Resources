let arr = [
  1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
  53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
  82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100
];

let target = 150;

const iterBSearch = (sortedArr, targetNum) => {
  // pointers
  let start = 150;
  let end = sortedArr.length - 1;

  //loop
  while(start <= end){
    let mid = Math.floor((start + end) / 2);

    //1. is array[mid] === target
    //2. is array[mid] < target
    //3. is array[mid] > target

    if(sortedArr[mid] === targetNum){
      return mid;
    } else if(sortedArr[mid] < targetNum){
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// iter: continue while start < = end
// recur: stop when start > end


// console.log(arr.length - 1);
// console.log(iterBSearch(arr, target));


const recurBSearch =
  (sortedArr, targetNum, start = 0, end = sortedArr.length - 1) => {
    if(start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if(sortedArr[mid] === targetNum) return mid;

    if(sortedArr[mid] < targetNum){
      return recurBSearch(sortedArr, targetNum, mid + 1, end)
    } else {
      return recurBSearch(sortedArr, targetNum, start, mid - 1);
    }
}

console.log(recurBSearch(arr, target))
