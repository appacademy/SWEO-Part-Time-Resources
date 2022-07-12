# W12D1 - Monday

## Assessment (1h15m)
- 1 hr 15m
  
- 4 MC; 6 Specs; 
  - Passing score: 8/10

- Remember that these are `also available resources`:
  - practice assessment
  - any code you've written on `coding problems` like `code-it-outs` that you've done.
  - Formative quizzes on AA open
  - Homework and readings on AA open
  - MDN
  - drawing or diagram tool (has to be blank no previous tabs or work)

- Don't hesitate to ask questions if something is confusing or we require clarity! We cannot help you code, but we can explain the question and point you to available resources.

### Coding Portion Advice
- **understand the problem:** 
  - by reading the code, methods, mocha output, etc. (don't stare down the prompt)
  - mocha -b is a great way to take it one problem at at time.

- **Fix the bug, or rewrite your own function, either way is fine**
  - Can be solved with either stack or queue. Remember if we're using either datastructure, use their proper methods (i.e. if we know queues follow `fifo` what methods should we use to emulate a queue?)

- **Debugging Tips to ISOLATE the BUG**
  - `mocha -b`: 
    - check error message to see what the output was vs. correct answer.
    - check test specs file for more examples
  - Understand problem: (Remember, avoid running big examples!! Start small first)
    - Run node on the SMALL example
    - draw out the SMALL tree through the example (code, diagram, paint, drawing, etc.)
  - Run Debugger: uncomment SMALL EXAMPLE for step by step analysis 
    - remember to add variables you want to watch. i.e. `currentNode`, `currentNode.left`, etc.

## Sort Coding Practices 
- `Bubble Sort`
  - bubbling the biggest numbers up by 
    - Walk through the entire array, `comparing each adjacent pair and making swap if out of order`.
    - If the current value is greater than its neighbor to the right, swap those values (bubbling biggest numbers up)
    - If you get to the end of the array and no swaps have occurred, then it has been sorted
    - Otherwise, just repeat the process again
- `Insertion Sort`
  - Divide the array into sorted and unsorted halves
  - `Go through each unsorted element (left to right)` and insert correctly to the sorted half (left)
  - think of inserting a book into the correct location in a shelf at the library
- `Selection Sort`
  - Divide the array into sorted and unsorted halves
  - then one-by-one `select the smallest value from the unsorted portion` and move it to the end of the sorted portion.
- Quick Sort
  - `Recursive divide and conquer approach` to sort values efficiently
  - `Pivot`, `left partition` (anything smaller than pivot), `right partition` (anything bigger than pivot).