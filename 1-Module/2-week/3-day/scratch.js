// Write a function that gets the sum of of each element plus each number before it
// example: [1, 2, 3] => [1, 3, 6] => 10

// [1,2,3]

function getLilSum(num) {
  let res = 0;

  for (let i = 0; i <= num; i++) {
    res += i;
  }

  return res;
}

function getBigSum(array) {
  let res = 0;

  for (let i = 0; i < array.length; i++) {
    res += getLilSum( array[i] );
  }

  return res;
}

// ----------------------------------------------------------------------------------
let test1 = [1,2,3]; //10
let test2 = [4,5,6]; //46
console.log( getBigSum(test1) );
console.log( getBigSum(test2) );
console.log( getLilSum(500) );