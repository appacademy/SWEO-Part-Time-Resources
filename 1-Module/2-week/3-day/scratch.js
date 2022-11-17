// Write a function that gets the sum of of each element plus each number before it
// example: [1, 2, 3] => [1, 3, 6] => 10

function getLilSum(number) {
  let res = 0;

  for (let j = 0; j <= number; j++) {
    res += j;
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
let test1 = [1, 2, 3]; //10
let test2 = [4, 5, 6]; //46
console.log(getBigSum(test1));
console.log(getBigSum(test2));

// -----------------------------------------------------------------------------------

// Write a function choosePrimes(nums) that takes in an array of numbers as args.
// The function should return a new array containing the primes from the original array.
// A prime number is a number that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!

function isPrime(number) {
  if (number < 2) {
    return true;
  } else {
    for (let i = number - 1; i >= 2; i--) {
      if (number % i === 0) return false;
    }
    return true;
  }
}

function choosePrimes(nums) {
  let primes = [];

  for (let i = 0; i < nums.length; i++) {
    if ( isPrime( nums[i] ) ) {
      primes.push( nums[i] );
    }
  }

  return primes;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]