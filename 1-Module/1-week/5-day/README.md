# W1D4

## Pseudocode
- Pseudocode is the process of writing comments in your code
- The comments should be in simple English
    - Pseudocode can use coding terminology, but it should **NOT** be code itself
    - Describe problems or solutions you are thinking about
- Pseudocode is also helpful in a team based setting
    - Instead of making your teammates read your code to understand what it's doing, you can write a description
- Pseudocode is commonly associated with Polya's guide to solving problems


## Polya's
### 1. Understand the Question
- Sometimes easy, sometimes much harder
- Try rephrasing the question to simple words and not using coding terms
- Take into consideration any constraints/edge cases
- Ask questions to clarify the question

### 2. Make a Plan
- Break down the question
- Solve a simpler version of the problem
- Look for patterns
- Work backwords

Computer science is still a science. Apply the scientific method.
Create a hypothesis and test it out.

### 3. Execute the Plan
- Easiest part of Polya's, but can also be hardest
- Takes the understanding of the question and the plan from simple English to code
    - This requires a basis of coding knowledge
- Pseudocode is very beneficial
    - Pseudocode is technically beneficial in all stages of Polya's, but here especially

### 4. Revise the Solution
- Refactoring is a big part of code
- Can you improve the solution?
    - Can you make it more efficient?
    - Can you make it easier to read?
    - Check if there could be any situation where it breaks your solution

## Function Expression Declaration
is a way of defining a function in JavaScript by assigning it to a variable. In a function expression, the function itself becomes a value that can be assigned to a variable.







let greet = function (name) {
  console.log("Hello, " + name);
};


## Mutability

Mutable types:
Arrays
Objects (we will learn these later)

Immutable Types
Numbers
Strings
NaN
undefined
null

In JavaScript, mutability refers to the property of certain data types that allows their values to be changed after they are created.



let arr = [1, 2, 3];
arr[1] = 7;
console.log(arr); //[1,7,3]

let str = "abc";
str[1] = "x";
console.log(str); // 'abc';

//reassigning !== mutable
let str = "abc";
str += "d"; // str = str + 'd';
console.log(str); // 'abcd'



## Nested loops

Nested loops refer to the situation where you have one loop (inner loop) inside another loop (outer loop).

Pairs in loops
Unique Pairs
multidimensional array
is an array that contains other arrays as its elements.

2D array
is an array where each element in the outer array is itself an array, forming a grid-like structure with rows and columns. It's called "2D" because it has two dimensions: rows and columns.
