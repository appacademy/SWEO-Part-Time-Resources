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

Time Complexity: `O(n^2)` \
Space Complexity: `O(1)`

- Simplest sorting algorithm
- Iterating through the array, comparing each element to the one next to it and swapping if necessary

Psuedocode:

- Iterate through the array
- If the current value is greater than its neightbor to the right, swap the values
- If you get to the end of the array and no swaps have occurred, the array is sorted
- Otherwise, repeat the process.

### `Insertion Sort`

Time Complexity: `O(n^2)` \
Space Complexity: `O(1)` `(or O(n))`

- Divide the array into sorted and unsorted
- Take elements from the unsorted and placing them in the correct place in the sorted array 
- In-place or out-of-place

Psuedocode:

- Divide the array into *sorted* and *unsorted* subarrays
- Pick and remove a value from the unsorted
- Insert it into the sorted in order
- Repeat until the array is sorted

### `Selection Sort`

Time Complexity: `O(n^2)` \
Space Complexity: `O(1) (or O(n))`

- Find the smallest element in the array and swap it with the first element 
- Find the next smallest element and swap it with the second element, and so on
- In-place or out-of-place

Psuedocode:

- Divide the array into *sorted* and *unsorted* subarrays
- Find and remove the smallest element in the unsorted array
- Insert it into the sorted array
- Repeat until the unsorted is empty and sorted is full

### `Merge Sort`

Time Complexity: `O(n log n)` \
Space Complexity: `O(n)` if recursive, `O(1)` if iterative

- Divide and conquer algorithm
- Recursively or iteratively divide the array in half
- Pass those halves to a sorting function (you will need a helper here)
- Merge the sorted subarrays back together

Psuedocode:

- Check the base case, return if length 1 or 0
- Split the array into two subarrays
- Sort each subarray
- Put the subarrays back together and return

Helper Pseudocode:

- Create an empty return array
- Point to the first value of each array
- While the input array still has values, compare the values, remove the smallest from the input array and add it to the end of the return array.
- Return the merged array.

### `Quick Sort`

Time Complexity: `O(n log n)` \
Space Complexity: `O(n)` if recursive, `O(1)` if iterative

- Divide and conquer algorithm
- Choose a 'pivot' element, if using an out-of-place solution creating a left and right array
- All elements less than the pivot are put in the left array, and all elements greater than the pivot are put in the right array
- Two arrays are merged together with the pivot in the middle
- Can be optimized using in-place solutions

Psuedocode:

- Check the base case, return if length 1 or 0
- Pick a pivot element
- Create an empty left and right array
- For each element in the input array, if the element is less than the pivot, add it to the left array. If the element is greater than the pivot, add it to the right array
- Recursively sort the left and right arrays
- Merge the left and right arrays together with the pivot in the middle

## `Project Time`
