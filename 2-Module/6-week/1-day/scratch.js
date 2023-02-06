// Sorting
// There isn't a singular end-all-be-all sorting algorithm, instead there are many clever ones with different strengths and weeknesses.
// Bubble Sort
// Insertion Sort
// Selection Sort
// Quick Sort

// JS does have a built-in sort function which will work 99% of the time.
// Almost every coding problem, both in technical interviews and on the job, come down to data manipulation. Some variation of read data from a data structure, process the data, move it around, then report to the user. Sorting algorithms will teach you clever techniques for moving data around in a logical fashion.

// These techniques include: in-place array swaps, sliding windows, divide-and-conquer, and more.

// value swapping

// let arr1 = [5, 4, 3, 2, 1]
// for (let i = 0; i < arr1.length; i++) {
//   [arr1[i], arr1[i + 1]] = [arr1[i + 1], arr1[i]]
//   //or
//   // let temp = arr1[i];
//   // arr1[i] = arr1[i + 1];
//   // arr1[i + 1] = temp;
// }
// console.log(arr1);

// value shifting
// let arr2 = [0, 1, 2, 3, 4, 5]
// let arr3 = [0, 1, 2, 3, 4, 5]
// //forward shifting will overwrite all vals
// for (let i = 1; i < arr2.length; i++) {
//   arr2[i] = arr2[i - 1];
// }
// for (let i = arr3.length - 1; i >= 0; i--) {
//   arr3[i] = arr3[i - 1];
// }
console.log(arr2);
console.log(arr3);

// ----------------------------------------------------------------------------

// const isSorted = (res, sol) => res.join('') === sol.join('');
// const unsorted = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const solution = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Bubble Sort
// function bubbleSort(arr) {
//   while (true) {
//     let hasSwap = false;

//     arr.forEach((el, i) => {
//       if (arr[i] > arr[i + 1]) {
//         hasSwap = true;
//         arr[i] = arr[i + 1];
//         arr[i + 1] = el;
//       }
//     })

//     if (!hasSwap) return arr;
//   }
// }
// // Insertion Sort
// function insertionSort(arr) {
//   let div = 0;

//   while (div < arr.length) {
//     let curr = arr[div];

//     for (let i = div; i >= 0; i--) {
//       if (arr[i - 1]) {
//         if (arr[i - 1] > curr) arr[i] = arr[i - 1]
//         else arr[i] = curr;
//       } else {
//         arr[i] = curr;
//       }
//     }

//     div++;
//   }

//   return arr;
// }
// // Selection Sort
// function selectionSortIP(arr) {
//   let div = 0;
//   while (div < arr.length) {
//     let minVal = arr[div];
//     let minIdx = div;
//     for (let i = div; i < arr.length; i++) {
//       let curr = arr[i];
//       if (curr < minVal) {
//         minVal = curr;
//         minIdx = i;
//       }
//     }
//     for (let i = minIdx; i > div; i--) {
//       let temp = arr[i];
//       arr[i] = arr[i - 1];
//       arr[i - 1] = temp;
//     }
//     div++;
//   }
//   return arr;
// }
// function selectionSortOP(arr) {
//   let sorted = [];

//   while (arr.length) {
//     let minVal = arr[0];
//     let minIdx = 0;

//     for (let i = 0; i < arr.length; i++) {
//       let curr = arr[i];

//       if (curr < minVal) {
//         minVal = curr;
//         minIdx = i;
//       }
//     }

//     sorted.push(minVal)
//     arr.splice(minIdx, 1);
//   }

//   return sorted;
// }
// // QuickSort
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   let pivot = arr[arr.length - 1];

//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   if (leftArr.length && rightArr.length) return [...quicksort(leftArr), pivot, ...quickSort(rightArr)]
//   if (leftArr.length) return [...quickSort(leftArr), pivot]
//   if (rightArr.length) return [pivot, ...quickSort(rightArr)]
// }

// console.log('BUBBLE:    ', isSorted(bubbleSort(unsorted.slice()), solution));
// console.log('INSERTION: ', isSorted(insertionSort(unsorted.slice()), solution));
// console.log('SELECTION');
// console.log('- SELECTION IP:', isSorted(selectionSortIP(unsorted.slice()), solution));
// console.log('- SELECTION OP:', isSorted(selectionSortOP(unsorted.slice()), solution));
// console.log('QUICKSORT: ', isSorted(quickSort(unsorted.slice()), solution));