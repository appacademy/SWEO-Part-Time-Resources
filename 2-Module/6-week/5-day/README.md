# M3W6D5

## Built in Sort

- Array.sort() will default to alphabetical order by converting all elements to strings in UTF-16 order
- You can pass the function that will cause the sort to behave differently based on the return value:

| compareFunction(a, b) return value | sort order                     |
| ---------------------------------- | ------------------------------ |
| > 0                                | sort b before a                |
| < 0                                | sort a before b                |
| === 0                              | keep original order of a and b |
