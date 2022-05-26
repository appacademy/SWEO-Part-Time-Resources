// Write a function choosePrimes(nums) that takes in an array of numbers 
// as args. The function should return a new array containing the primes 
// from the original array. A prime number is a number that is only divisible 
// by 1 and itself. Hint: consider creating a helper function to check if a number is prime!


let isPrime = function(num){
  if (num <= 2) return true;

  for (let i = 2; i < num; i++){
    if (num % i === 0) return false;
  }
  return true;
}

let choosePrimes = function(nums){
  // iterate through our nums
  // check if a num is prime
  // if it is we want to push it to a new array
  // return the array of primes.
  let primes = [];

  for (let i = 0; i < nums.length; i++){
    let num = nums[i];
    if (isPrime(num)) primes.push(num);
  };
  return primes;
}




console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]