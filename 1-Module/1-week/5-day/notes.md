# Week 1 Day 5

## Learning Objectives Quiz

- What does it mean for something to be immutable? What is an example of an immutable data type?
    <details>
    <summary>Answer</summary>
    Immutability means that something cannot be changed (but they can be reassigned). Some immutable data types are:
    <br>
    - Strings
    <br>
    - Numbers
    <br>
    - Booleans
    <br>
    </details>
- What are 2 mutable data types?
    <details>
    <summary>Answer</summary>
    Mutable data types are:
    <br>
    - Arrays
    <br>
    - Objects
    <br>
    </details>
- What does it mean that functions are first class objects?
    <details>
    <summary>Answer</summary>
    When you name a function, you are storing that function in a variable by that name. A first class object is something that can be the value of a variable, can be used as an argument and can be returned by a function call.
    </details>
- What does the array method .push do?
    <details>
    <summary>Answer</summary>
    The .push method adds an element to the end of an array, then returns the length of the array. (let length = arr.push(element);)
    </details>
- What does the array method .pop do?
    <details>
    <summary>Answer</summary>
    The .pop method removes the last element from an array, then returns that removed element. (let lastElement = arr.pop();)
    </details>
- What does the array method .unshift do?
    <details>
    <summary>Answer</summary>
    The .unshift method adds an element to the beginning of an array, then returns the new length of the array. (let length = arr.unshift(element);)
    </details>
- What does the array method .shift do?
    <details>
    <summary>Answer</summary>
    The .shift method removes the first element from an array, then returns that removed element. (let firstElement = arr.shift();)
    </details>
- What does the array method .splice do?
    <details>
    <summary>Answer</summary>
    The .splice method removes elements from an array, then returns the removed elements. If you utilize the third argument and beyond it adds those elements at the startIndex. (let removedElements = arr.splice(startIndex, deleteCount, element1, element2, ...);)
    </details>
- What are the 4 steps of Polya's Proplem Solving?
    <details>
    <summary>Answer</summary>
    1. Understand the problem
    <br>
    2. Make a plan
    <br>
    3. Implement the plan
    <br>
    4. Look back and improve (or refactor) your solution
    </details>
- What is psuedocode?
    <details>
    <summary>Answer</summary>
    Psuedocode is a way to write out a solution to a problem in a way that is easy to understand (in plain english). There is no code to write, just a description of what you want to do.
    </details>
- What are 2 ways to create a comment in JavaScript?
    <details>
    <summary>Answer</summary>
    There are 2 ways to create a comment in JavaScript.
    <br>
    1. /* comment */
    <br>
    2. // comment
    </details>

## Notes

### <span style="color:#674ea7;">Function Expression Syntax</span>

There's another way that we can write functions.

```javascript
// function declaration syntax
function helloDeclarationFunc() {
    return 'hello I am a function declaration';

}

// function expression syntax
let helloExpressionFunc = function() {
    return 'hello I am a function expression';
};

console.log(helloDeclarationFunc())
console.log(helloExpressionFunc())
// Both functions are 'being declared' and accomplish the same tasks, 
// we've just set about defining them differently

//check this out:
console.log(helloExpressionFunc)  //[Function: helloExpressionFunc]
//prints a reference to the UNINVOKED function
```

## <span style="color:#3c78d8;">Mutability</span>

- [Mutability (MDN)] is the concept of certain pieces of **data** being able to be **changed** or **updated** in **memory**.
- Mutable
  - Arrays
  - Objects
- Immutable (7 [pimitive datatypes])
  - string
  - number
  - bigint
  - boolean
  - undefined
  - symbol
  - null


### <span style="color:#674ea7;">Mutable Example</span>

```javascript
let nums = [1, 2, 3];
console.log(nums);
nums[0] = 100;
console.log(nums);
```

### <span style="color:#674ea7;">Immutable Example</span>

```javascript
let name1 = "WIZ";
console.log(name1);
name1[1] = "E"; // This will not work
name1[2] = "S"; // This will not work
console.log(name1); //still "WIZ"
//we're unable to mutate or change individual characters in our string. 

// Instead, we'll have to reassign our
// variable to a new string in order to see the change.
```

### <span style="color:#674ea7;">Re-Assignment !== MUTABILITY</span>

- **IMPORTANT**: (Assignment or Re-assignment) !== mutability
- **Re-assignment** is having the variable **REFERENCE** a **different** piece of **data**.

```javascript
let name2 = "WIZ"; 
console.log(name2); //"WIZ"
name2 = "WES" // Must reassign to change
console.log(name2); //"WES"
//IMPORTANT: Assignment !== mutability
//assignment is having the variable REFERENCE a different piece of data.
```

### <span style="color:#674ea7;">Array Methods</span>

- Arrays have built in functions ([array methods]) on them that we can access to achieve common behaviors. You're already familiar with one, Remember **.concat**?

  - `myArray.concat(array2)`
- Common Methods to cover:

  - [Push]
  - [Pop]
  - [Shift]
  - [Unshift]

```javascript
// Let's take a look at push first. Calling the .push method allows us to "push"
// new values on to the end of our array, and return the new length of the array
// Let's look at an example:
let arr = [4, 3, 2];

console.log(arr, "length:", arr.length);
let newLength = arr.push(1, 0); // Push will accept any number of arguments

console.log(arr, "length:", newLength);
// We can see that our arguments have been pushed on to our array, modifying its
// contents and length.

// We can think of pop as the opposite of push. Calling the .pop method on an
// array will remove the last element of the array and return it. 
console.log(arr);
let lastEle = arr.pop();
console.log(lastEle, arr);
// We can see our array from earlier, then we pop off and store the last element
// and finally print both the last element and the mutated array

// Much like .push, the .unshift method adds things to our array. The difference
// being that .unshift places our arguments at the beginning of the array. Like
// .push, this method returns the new length of the array

console.log("Old length: ", arr.length) // remember we popped something off

newLength = arr.unshift(0, 1);
console.log("New length: :", newLength, arr);
// We can see that our array now has a length of 6 and has our new elements in
// the beginning

// Just as .push has .pop, .unshift has .shift. This method will remove the 
// first element of the array and return it
let firstEle = arr.shift();
console.log(firstEle, arr);
```

[Mutability (MDN)]: (https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
[pimitive datatypes]: (https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
[array methods]: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
[Push ]: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
[Pop ]: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
[Shift]: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) 
[Unshift]: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
