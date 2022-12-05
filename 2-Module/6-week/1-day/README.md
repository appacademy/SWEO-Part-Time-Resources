## `Sorting`

There are a large number of sorting algorithms to choose from, each with it's own strengths and weaknesses. We are going to focus on the following sorting algorithms:

- `Bubble Sort`
- `Selection Sort`
- `Insertion Sort`
- `Merge Sort`
- `Quick Sort`

While we do have access to the `.sort` method, learning how to manipulate the array is a good way to understand how the sorting algorithms work, and it may come up in a tech interview!

Learning our sorts will teach us techniques like in-place array swaps, sliding windows, divide and conquer and more.

### `Bubble Sort`

- Time Complexity: `O(n^2)`
- Space Complexity: `O(1)`

**Bubble Sort** is the simplest sorting algorithm. It works by iterating through the array, comparing each element to the one next to it and swapping if necessary.

Psuedocode:

- Iterate through the array
- If the current value is greater than its neightbor to the right, swap the values.
- if you get to the end of the array and no swaps have occurred, the array is sorted.
- otherwise, repeat the process.

### `Insertion Sort`

- Time Complexity: `O(n^2)`
- Space Complexity: `O(1)` `(or O(n))`

**Insertion Sort** works by dividing your array into sorted and unsorted, then taking elements from the unsorted and placing them in the correct place in the sorted array. You can do this in-place or out-of-place, which will affect the space complexity.

Psuedocode:

- Divide the array into *sorted* and *unsorted* subarrays.
- Pick and remove a value from the unsorted
- Insert it into the sorted in order
- Repeat until the array is sorted.

### `Selection Sort`

- Time Complexity: `O(n^2)`
- Space Complexity: `O(1) (or O(n))`

**Selection Sort** works by finding the smallest element in the array and swapping it with the first element. Then find the next smallest element and swap it with the second element, and so on. Again this can be done in-place or out-of-place which will affect the space complexity.

Psuedocode:

- Divide the array into *sorted* and *unsorted* subarrays.
- Find and remove the smallest element in the unsorted array.
- Insert it into the sorted array.
- Repeat until the unsorted is empty and sorted is full.

### `Merge Sort`

- Time Complexity: `O(n log n)`
- Space Complexity: `O(n)` if recursive, `O(1)` if iterative

**Merge Sort** is a divide and conquer algorithm. It works by recursively or iteratively dividing the array in half. Then you pass those halves to a sorting function (you will need a helper here!) Then it merges the sorted subarrays back together.

Psuedocode:

- Check the base case, return if length 1 or 0.
- Split the array into two subarrays.
- Sort each subarray.
- put the subarrays back together and return.

Helper Pseudocode:

- Create an empty return array
- point to the first value of each array
- while the input array still has values, compare the values, remove the smallest from the input array and add it to the end of the return array.
- return the merged array.

### `Quick Sort`

- Time Complexity: average `O(n log n)` worst case `O(n^2)`
- Space Complexity: `O(n log n)` if recursive, `O(1)` if done in-place iteratively.

**Quick Sort** is a divide and conquer algorithm. It works by choosing a 'pivot' element and if using an out-of-place solution creating a left and right array. All elements less than the pivot are put in the left array, and all elements greater than the pivot are put in the right array. Then the two arrays are merged together with the pivot in the middle. Can be optimized using in-place solutions.

Psuedocode:

- Check the base case, return if length 1 or 0.
- Pick a pivot element.
- Create an empty left and right array.
- For each element in the input array, if the element is less than the pivot, add it to the left array. If the element is greater than the pivot, add it to the right array.
- Recursively sort the left and right arrays.
- Merge the left and right arrays together with the pivot in the middle.
