// Big O Examples

// O(1)
// accessing element of array
// returns element of an input array given the index
function getElement(arr, index) {
  return arr[index];
}

// O(1)
// inserting to end of array
// adds input element to end of input array
function addElement(arr, element) {
  arr.push(element);
}

// O(n)
// adds 5 to every element in the array
function addFiveToArray(arr) {
  arr.forEach((index) => {
    arr[index] = arr[index] + 5;
  });
}

// O(n)
// prints every value of array
function printArr(arr) {
  arr.forEach((el) => {
    console.log(el);
  });
}

// O(n^2)
// add each element to every other element in an array
function nestedComparison(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i] + arr[j]
    }
  }
}

function nestedPush(arr) {
  let arr = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr.push(j)
    }
  }
}


// time complexity
// array insertions/deletions at the beginning of array will be o(n) (at a minimum)

// array insertions/deletions at the end of an array will always be o(1)

// let total = 0
// console.time("Timer 1")
// const startTime = Date.now()
// for(let i = 0; i < 100000000; i++){
//     total += i
// }
// const endTime = Date.now()
// console.timeLog("Timer 1")

// console.log(endTime - startTime)

function addNums(n) {
  total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

let increment = 1000000;
for (let n = increment; n <= 10 * increment; n += increment) {
  startTime = Date.now();
  addNums(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}
