// Helper functions!
// laligat? sum?? --> adding up primes? but what is prime??

// Prompt: find the laligat sum of a given number.
// Step One -- Determine prime numbers
//  -- Write function called isPrime, that accepts a number, and returns true
//     if that number is prime, false otherwise.
//  -- Write a loop inside of that function, that starts from 2 and checks to
//     see any number from 2 up to our given number will yield a remainder of
//     0 when we divide
// Step Two -- If a number is prime, collect it somewhere to add up later
//  -- We have the function! We can determine if a number is prime -- that
//     function will return true if that number is prime and false if it
//     is not
//  -- so, using that function -- can have another loop that will start at 2
//     and count up to and including our argument (num)
//  -- if any of those numbers, passed into our isPrime function return true,
//     we should collect them into a primes array
// Step Three -- Add all of those prime numbers toget to find our laligat sum
//  -- Now that we have those numbers, we should find a way to sum them up!
//  -- So, in a sumArray function, we can write a loop that will look at every
//     number and add all of those numbers together in order to find our total

function isPrime(num){
    if (num < 2) return "BAD INPUT"
    for (let i = 2; i < num; i = i +1){
        if (num % i === 0) return false;
    }
    return true
}
// console.log(isPrime(-10000))

function sumArray(nums){
    // let sum = nums.pop();
    // while (nums.length){
    //     sum = sum + nums.pop();
    // }
    // let sum = nums[0];
    // for (let i = 1; i < nums.length; i+=1){
    //     let num = nums[i];
    //     sum += num;
    // }
    let sum = 0;
    for (let num of nums) sum += num;
    return sum;
}

function laligat(num){
    let primes = [];
    for (let i = 2; i <= num; i++){
        if (isPrime(i)) primes.push(i);
    }
    return sumArray(primes);
}

console.log(laligat(110983342))
