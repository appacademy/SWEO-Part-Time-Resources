
// lalligat sum ->
// the sum of all primes up to or including our target

// Polya's 
// Understand the problem -- What is prime?
// -- Prime numbers are any number that is only divisible by the number 1 and
//    itself.
// -- How can I store this collection of primes? Add primes to an array
// -- Also write a sumArray function
// -- First step -- build is prime function
//    -- how do I know (in code) whether or not a number is prime?
//    -- from 2, count up to num that checks to see if num % loopcounter is 0. 
//       if it is, I know I do not have a prime. If I make it to the end of the
//       loop, I have found a prime number. 
// -- Second step -- build skeleton for laligat sum function to construct array
//    of primes
//    -- iterate from our laligat argument, back to 1 to find out which numbers
//       are prime
//    -- while iterating, we will use the isPrime function to make the 
//       determination of whether or not our current number is prime. 
//    -- when we have a prime number, include it in the array of primes
// -- Third step -- build sumArray function to find sum of that array, and use 
//    it to calculate the return for our loligat sum function
//    -- once we have array of primes, write a function that will accept an 
//       array of numbers and add them all up.



// console.log(isPrime(11)) // tested and valid!
function isPrime(num) {
    for (let currNum = 2; currNum < num; currNum++) {
        if (num % currNum === 0) {
            return false;
        }
    }
    return true;
}

function sumArray(nums) {
    let sum = 0;
    // for(let num of nums){
    //     sum += num;
    // }
    for (let banana = 0; banana < nums.length; banana++) {
        let num = nums[banana];
        sum += num;
    }
    return sum;
}

function laligatSum(num) {
    let primes = [];
    for (let i = 1; i <= num; i++) {
        console.log(i)
        console.log("is prime?", isPrime(i))
        if (isPrime(i)) primes.push(i)
    }
    return sumArray(primes)
}
//             [1,2,3,5,7]


console.log(laligatSum(7)) // testing, working so far!
