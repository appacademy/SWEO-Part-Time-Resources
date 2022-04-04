/*
A logarithm (or log for short) is the inverse of an exponent.
 The logarithm base-n of a number is how many times it must 
 be divided by n to reach 1. For example, to find the log base-2 of 32 (log2(32) = ?), 
 you divide by the base until you hit 1: 
 once (16), twice (8), three times (4), four times (2), and five (1), so log2(32) = 5.
*/

// Examples of base 2 logs, 
Math.log2(1);    // 0
Math.log2(2);    // 1
Math.log2(4);    // 2
Math.log2(8);    // 3
Math.log2(16);   // 4
Math.log2(32);   // 5
Math.log2(64);   // 6
Math.log2(128);  // 7
Math.log2(256);  // 8
Math.log2(512);  // 9
Math.log2(1024); // 10


2 ** 0   // 1
2 ** 1   // 2
2 ** 2   // 4
2 ** 3   // 8
2 ** 4   // 16
2 ** 5   // 32
2 ** 6   // 64
2 ** 7   // 128
2 ** 8   // 256
2 ** 9   // 512
2 ** 10  // 1024


/*
In order to perform a binary search in logarithmic time, your data must satisfy two conditions.

Data must be sorted
Data can be accessed by index in constant time

Properties of a Binary Search Tree:

The tree starts at the root
nodes whose values are less than the current node go to the left
nodes whose values are more than the current node go to the right
Each node has three properties: value, left and right

*/

let example = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]

// iterative 
    // Set integers pointing to the high and low range of possible indices

    // While high and low indices do not overlap...

        // Find the midpoint between high and low indices

        // Compare the target value to the midpoint value

        // If the target equals the midpoint...
        // Return the midpoint index

        // If the target is higher than the midpoint...
        // Move the low pointer to midpoint + 1

        // If the target is less than the midpoint...
        // Move the high pointer to midpoint - 1

    // Return -1 if the loop exits with overlapping pointers
//recursive
    // base case?

    // grab your midpoint

    // check to see if your midpoint is the target.. if so return what you would like, true, or index, or whatever 

    // if the target value is less than the value at the midpoint

    // recurse passing in the left half of the arr

    // if the target is greater then the midpoint 
    
    // recurse passing in the right side of the array