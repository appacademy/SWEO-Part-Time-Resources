# M3W6D5

## Built in Sort

- Array.sort() will default to alphabetical order by converting all elements to strings in UTF-16 order
- You can pass the function that will cause the sort to behave differently based on the return value:

| compareFunction(a, b) return value | sort order                     |
| ---------------------------------- | ------------------------------ |
| > 0                                | sort b before a                |
| < 0                                | sort a before b                |
| === 0                              | keep original order of a and b |


# Sorting Descriptions

## Bubble Sort - Swapping adjacent pairs until array is sorted

- Can be thought of as bringing (bubbling) the largest value to the end of the array

---

## Selection Sort - Selecting the smallest value and sorting it until array is sorted

- Selection === Smallest First

---

## Insertion Sort - Values chosen randomly to be placed in the correct spot in a sorted array

- No matter what value I receive, I'll insert it in the right spot

---

## Merge Sort - Divides an array in half, sorts each half, then recombines the halves together in order

- We merge together our sorted arrays

---

## Quick Sort - Divides an array around a pivot then sort the left and right sides

- We don't have time to merge, we got