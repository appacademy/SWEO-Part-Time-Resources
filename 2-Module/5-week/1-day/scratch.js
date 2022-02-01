const arr = [
  1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
  53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
  82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100
];

const target = 26;


const iterBinarySearch = (sortedArr, targetNum) => {
  //pointers to section of array we are searching
  let start = 0;
  let end = sortedArr.length - 1;

  while(start <= end){
    let mid = Math.floor((start + end) / 2);

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
// console.log(arr.length - 1);
// console.log(iterBinarySearch(arr, target))

const recurBinarySearch =
  (sortedArr, targetNum, start = 0, end = sortedArr.length - 1) => {
    if(start > end) return - 1;

    let mid = Math.floor((start + end) / 2);

    if(sortedArr[mid] === targetNum) return mid;

    if(sortedArr[mid] < targetNum){
      return recurBinarySearch(sortedArr, targetNum, mid + 1, end)
    } else {
      return recurBinarySearch(sortedArr, targetNum, start, mid - 1)
    }
}

console.log(recurBinarySearch(arr, target))
