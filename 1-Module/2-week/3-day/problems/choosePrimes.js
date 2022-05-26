// Write a function choosePrimes(nums) that takes in an array of 
// numbers as args. The function should return a new array containing 
// the primes from the original array. A prime number is a number that 
// is only divisible by 1 and itself. Hint: consider creating a helper 
// function to check if a number is prime!

let isPrime = function(num){
  // we know that 1 and 2 are prime, so we can just do this quick check to get those 
  // out of the way.
  if (num <= 2) return true;

  // we start i at 2 because if we start at 1 it's definitely going to go evenly into the number
  // and everything would return false at that point. Since we added the check above to already
  // return true if the number is 2, then we don't have to worry about 2 % 2 === 0, and we can
  // start our i at 2 to weed out the even numbers!
  for (let i = 2; i < num; i++){
    // if it does go into the number evenly with no remainder, it's not prime.
    if (num % i === 0) return false;
  }
  // if the conditional inside the loop is never met, the loop will terminate and it will read
  // the next line of code beneath it. Since it ever returned false, it must be prime.
  return true;
}

let choosePrimes = function(nums){
  // create an array to hold our primes
  let res = [];

  // iterate through our nums
  for (let i = 0; i < nums.length; i++){
    // check each number to see if it's prime. If the return value of isPrime(nums[i])
    // is true then the conditional will be met and the number will be pushed.
    if (isPrime(nums[i])) res.push(nums[i])
  }
  // return the array!
  return res;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]