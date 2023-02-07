// Sorting
// There isn't a singular end-all-be-all sorting algorithm, instead there are many clever ones with different strengths and weeknesses.
// Bubble Sort
// Insertion Sort
// Selection Sort
// Quick Sort

// JS does have a built-in sort function which will work 99% of the time.
// Almost every coding problem, both in technical interviews and on the job, come down to data manipulation. Some variation of read data from a data structure, process the data, move it around, then report to the user. Sorting algorithms will teach you clever techniques for moving data around in a logical fashion.

// These techniques include: in-place array swaps, sliding windows, divide-and-conquer, and more.
let testArr = [3,4,1,2,5];
console.log(testArr.sort((a, b) => b - a));
// value swapping
let arr1 = [5,4,3,2,1];

// for (let i = 0; i < arr1.length - 1; i++) {
//   // [arr1[i], arr1[i+1]] = [arr1[i+1], arr1[i]]

//   let temp = arr1[i];
//   arr1[i] = arr1[i+1];
//   arr1[i+1] = temp;
//   console.log(arr1);
// }

// value shifting
// for (let i = 1; i < arr1.length; i++) {
//   arr1[i] = arr1[i -1]
//   console.log(arr1);
// }
for (let i = arr1.length - 1; i > 0; i--) {
  arr1[i] = arr1[i-1]
  console.log(arr1);
}