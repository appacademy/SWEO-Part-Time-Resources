## Reminder
- remember to do your reports!

- Don't ever feel bad or sorry about asking questions
  - Sometimes we might not know all the answers right away but we always have someone that we can find that will know it.
  
- Not asking a question can have a snowball effect!


#### Assessment Breakdown
13 total points (passing score is 10)
- 2 coding problems (5 points total)
	- make sure to use polya
	- your resources like practice assessment, project/code you worked, any code you've written
	- break big problems down into smaller sub problems
- 1 REPL (1 point)
- 7 multiple choice (1 point each)

#### This Week Objectives
- Understand how to debug problems
  - Utilize the debugger
- Be able to solve problems with recursion
  - Understand terminologies like:
    -  base case, recursive case, recursive step
    -  Using recursion to help solve the original problem by...
       -  solving many smaller sub-problems first.
- Know how Immediately Invoked Function Expression works (IIFEs)
- Leverage string interpolation to inject javascript 
- Work with big problems and know how to break them down to smaller ones to tackle

## Debugger

### How to Leverage Debugger
- First track anything we want to watch (put code in variable for easiest time to debug)

- take input / example to run

- at each step:
	- what is the expected behavior of that line(s) of code (depending on the input)? 
	- What is it actually doing instead?

- run the debugger until output

## Project Time

### Recursion Quick Notes
- What is a recursive function?
  1. A function that calls itself, until it doesn't
  2. Goal is to solve smaller problems (the sub problems) and then use that result in order to solve the original bigger problem
     1. The original problem doesn't do all the work, but the smaller ones will do the heavy lifting.
  3. Night at the Theatre: Finding What Row We Are In Analogy
     1. Brandon ?? - 3
        1. David ?? - 2
           1. Nicholas ?? - 1
              1. Christopher row last row - 0



- What are the 'parts' of a recursive function?
  1. Base Case (When should we stop)
  2. Recursive Case (When should we recurse)
  3. Recursive Step (How do I move toward the BC or move out of the RC)

- Also check out the visualizer files and walk through them to see more how it's working under the hood.
