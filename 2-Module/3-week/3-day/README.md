# Big O

## Space complexity

- Space complexity is used as an analysis to see how much memory you are using relative to the size of the input
- Just like time complexity, but measuring memory usage rather than operation count/time taken

## Once again the 3 types we are covering(most common)

### O(1)
    - Constant space
    - Memory/space used does not increase relative to the input size
    - addNums() function from yesterday is an example of using constant space
        - We used a sum/total variable to keep track of the sum of all numbers from 1-n
        - Integers take up constant space, and since we were reassigning the same variable to the updated sum the space does not increase with the size of the input

### O(n)
    - Linear space
    - Memory/space used increases linearly relative to the input size
    - Using the Array map() instance method uses linear space since it returns a copy of the array

### O(n^2)
    - Quadratic/exponential space
    - Memory/space used increases by the square of the input size
    - Using a double nested for loop like the nestedComparision() method from yesterday and modifying it to push [i,j] into an array is an example of quadratic space complexity
        - Since we are pushing n^2 elements into an array PER input element of an array this makes the space complexity: O(n^2)
 