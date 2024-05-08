# Big O Notation

## What is Big O?

- Analyzes the runtime of a program(algorithm) as the input size grows
    - This helps you understand how efficient your algorithm/code is
- We consider how the amount of operations that must be performed increase relative to the input, instead of using precise timings (such as using milliseconds)
    - This allows you to ignore physical hardware differences such as faster/slow cpus,gpus,memory, etc.
- The lower the operations per input, the better
- When we talk about input size think about an array with 3 elements, and then an array with 100,000 elements.
- Big O doesn't really describe optimizing code at a micro level, it's only concerned about the larger picture, SPECIFICALLY describing how operation count scales with input size (a higher operation count results in more time taken for the algorithm to complete which is why we label Big O graphs with time x input)
    - If a user clicks a button and it takes 2 seconds to get visual feedback of the click, you might want to optimize this. This doesn't necessarily mean the code has an inefficient Big(o) time complexity though

## The 3 "Big O's" we will learn about (the most common)
- We don't usually say "Algorithm x has a Big O of n time complexity"
- We would say "Algorithm x has O of n time complexity
- O(1)
    - Constant time
    - Operations count is the same regardless of how large the input is
    - Indexing into an array or keying into an object is an example of a constant time operation. No iteration happens when you do this no matter how large the array/object are
- O(n)
    - Linear time
    - Operations increase linearly with increased input size
    - Iterating through an array happens in linear time
- O(n^2)
    - Quadratic time
    - Operations increase as a result of the input squared (squaring something in math means raising it to the power of 2, or multiplying base number times base number)
    - A nested loop that compares every element to every other element in an array is an example of O(n^2) (quadratic time)

https://www.desmos.com/calculator/uts3ugzzym

- As you go through the practices remember if your program appears stuck (input is too large) press `control + c` in your terminal to terminate the program
