# Practice Assessment

Since the online REPLs will only let you submit a single time, you can use this
repository to practice the prompts from the practice assessment multiple times.

In this repository, you'll have access to JS files containing the prompts from 
the practice assessment and tests to ensure they've been solved entirely. Some
of the tests have been slightly to help you identify any hardcoded solves.

## Phase 1: Cloning the project

In order to clone this project, you'll need to copy the link to the repository
from the green Code button. Once it's copied, you can navigate your terminal to
a new directory where you'd like to clone, then type 
```sh
git clone pasteYourLinkHere
```
After a brief dialogue, you'll have a new folder containing the code in this
repository.

## Phase 2: Using Node to run JavaScript files

As you work through solving these prompts, be sure to use `console.log`
statements to help you debug your code and keep track of your solve. In order
to run the files you're working with, you'll need to tell `node` to find the
file in order to look at it. If you've launched the cloned directory in
VSCode, you should see a folder called `problems` and one called `test`.
The `test` directory contains the code that will check your work, you'll want
to complete the files found in the `problems` directory. While you're welcome
to look in the `test` directory, it might not be much help.

In order to test your code as you work, you'll have node assess your file and
look for output in your terminal to see if it mathces expectations. Each prompt
has example code you can copy and paste below your function to check if it's 
working as expected. In order to run our files through node, we can 

```sh
~ 01WeekPracticeAssessment $ node problems/01-mostExpensiveGroceries.js
```

if we're in the root of our project directory, or first `cd problems` then

```sh
~ problems $ node 01-mostExpensiveGroceries.js
```

Make sure to ask an instructor if you have any issues getting this to work!

## Phase 3: Running tests using Mocha

Once you're satisfied with the solve you've written, you can test your function 
with the included test files. You'll use the node package `mocha` to test your
work but have a few options for making use of it. You'll want to make sure your
current working directory is the root -- meaning you should see both the 
`problems/` folder and the `test/` folder when you `ls`. To run all tests, 
type `mocha` into your terminal and press enter. To tell `mocha` to stop at the 
first error, run `mocha -b`. If you'd only like to run the tests for a specific
prompt, you'll type `mocha test/<name of test file>`, the test files should 
match up with the problem files.

Good luck!