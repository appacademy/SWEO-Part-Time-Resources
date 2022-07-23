const findMinimum = arr => {
  return arr.reduce((acc, num) => {
    if (acc > num){
      acc = num
    }
    return acc
  })
};

// time = Linear O(n)
// space = Constant O(1)

// const arr = [7, 5, 2, 3, 4, 1]; 
// console.log(findMinimum(arr)); // => 1

const runningSum = arr => {
    let sum = 0;
    let sums = [];
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      sums.push(sum);
    } 
    return sums;  
};

// time = Linear O(n);
// space = Linear O(n);

// const arr = [1,2,3,4]; 
// console.log(runningSum(arr)); // => [1,3,6,10]

const evenNumOfChars = arr => {
  const evens = arr.filter(str => str.length % 2 === 0); // linear O(n) time 
  return evens.length;
};

// time = Linear O(n);
// space = Linear O(n);

// const arr = ['ab', 'abc', 'a', 'abcd']; 
// console.log(evenNumOfChars(arr)); // => 2

const smallerThanCurr = arr => {
  let counts = new Array(arr.length); // Linear O(n) space.

  for (let i = 0; i < arr.length; i++){ // this nested loop is Quadratic O(n^2) time.
    let current = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++){
      let other = arr[j]
      if (current === other){
        continue;
      } else {
        if (other < current) count++
      }
    }
    counts[i] = count; // since we allocated enough memory, this is Constant O(1) time 
  }
  return counts;
};

// time = Quadratic O(n^2);
// space = Linear O(n);

// const arr = [8,1,2,2,3];
// console.log(smallerThanCurr(arr)); // => [4,0,1,1,3]

const twoSum = (arr, target) => {

  for (let i = 0; i < arr.length; i++){ // linear for loop
    let num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++){ // another linear for loop, makes this Quadratic time
      let num2 = arr[j]
      if (num1 + num2 === target){
        return true;
      }
    }
  }
  return false;
};

// time = Quadratic O(n^2);
// space = Constant O(1);

// const arr = [4, 2, 3, 6, 9]; 
// console.log(twoSum(arr, 10)); // => True

// const arr2 = [4, 2, 3, 6, 9];
// console.log(twoSum(arr2, 16)); // => False

const secondLargest = arr => {
  // max = constant O(1) space 
  const max = arr.reduce((acc, num) => { // touches each ele so its Linear O(n) time
    if (acc < num){
      acc = num
    }
    return acc
  })
  
  let secondMax = arr[0]; // constant O(1) space 
  let final = 0;// constant O(1) space

  arr.forEach(num => { // Linear O(n) time
    if (secondMax < num){
      secondMax = num;
      if (secondMax < max){
        final = secondMax;
      }
    }
  })
  return final;
};

// time = O(2n) simplifies to Linear O(n);
// space = Constant O(1);

// const arr = [4, 2, 3, 6, 8];
// console.log(secondLargest(arr)); // => 6

const shuffle = (arr) => {
  //!!START
  const copy = [...arr]; // linear O(n) time; linear O(n) space
  for (let i = 0 ; i < copy.length ; i++) { // linear O(n) time
    let randomIndex = Math.floor(Math.random() * copy.length); // constant time on both
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]]; // constant time;
  }
  return copy;
  //!!END
};

// time = Linear O(n);
// space = Linear O(n);

const arr = [2, 5, 1, 3, 4, 7];
console.log(shuffle(arr)); // => [2, 3, 5, 4, 1, 7] 


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];