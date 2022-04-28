/*
https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-2---intermediate-functions/choose-primes

Write a function choosePrimes(nums) that takes in an array of numbers as args. The function should return a new array containing the primes from the original array. A prime number is a number that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!
*/


//1. Define helper isPrime function
function isPrime(num){
    //2. handle edge case: anything less than 2 is not prime
    
    //3. iterate from 2 to the number
        //4. check if number is divisible by i (%), if it is, then return false because it's not prime.
    //5. default: we haven't found any evidence that it's  not prime, so return true.
}

console.log(isPrime(17)) //true
console.log(isPrime(9)) //false
console.log(isPrime(7)) //true
console.log(isPrime(50)) //false

//1. Define a choosePrimes function
function choosePrimes(array){
    //2. create new array isPrimeArr to push any prime numbers to
    //3. iterate through array 
        //4. define a variable (num) to access array at i.
        //5. if num is prime
            //6. push num to isPrimeArr

    //7. return the isPrimeArr result at the end.
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]