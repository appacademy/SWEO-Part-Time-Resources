# M2W3D4

## Memory

### Ram

- Random Access Memory

Memory generally refers to RAM. Ram is a hardware component that stores data for programs **currently in use**. It's like the short-term memory of a computer. It handles the memory for the things we're currently doing such as running our operating system.

Key differences between RAM and Drive Storage:

- Ram is much faster.
- Ram is more expensive per bit.
- Ram requires an active power source to function.

### Addresses

When thinking of memory in a computer, we can think of it as a grid of cells. Each cell is divided into chunks called `words`. Each word is **indexed by a memory address also known as a memory pointer or memory reference**.

*If you're having trouble understanding how this works after the readings, try checking out these videos. It may help, however we will not be going super in depth with this subject and I will point out that you do not need to be an expert in how memory works under the hood.*

- [Ted-Ed How Computer Memory Works](https://www.youtube.com/watch?v=p3q5zWCw8J4)
- [Memory & Storage: Crash Course CS](https://www.youtube.com/watch?v=TQCr9RV7twk)

### Speed of Memory Access

Accessing items in memory is incredibly fast because it's just a matter of moving the pointer to the correct location and reading the data. This is accomplished by a binary tree routing system. With a binary tree routing system, a 0 travels left and a 1 travels right.

<img src='https://i.ibb.co/2KVppqn/binary-Tree-Example.png' ref='binaryTree' width='400'>

So to access the number 3 in the above picture, the address would be 011 - from start go left to the 0, then right to the 1, then right again to the 1.

## Arrays

Arrays are the most fundamental of all data structures. They are the **most time and space efficient way to store data**.

- Arrays are the most space efficent way to store data because they are a **sequence of elements stored in a *contiguous block of memory***. This makes them an optimally space-efficent way to store data, because they are packed side-to-side with no wasted memory. You can also *pre-allocate memory* for an array to avoid having to resize it later (which is a Linear O(n) operation). To allocate memory for an array use the `Array constructor` and pass it the number of memory locations you want to allocate.

```js
var numObjects = 10;
var myArray = new Array(3*numObjects);
// allocates 30 spaces in memory for this new empty array that's been created.
```

- Arrays are the most time efficient way to store data because they allow us to access elements through `indexing`. If you want the element at index 5, you just have to move the pointer to the correct location and read the data. Indexing an array is a **Constant O(1) operation** because the index is the **pointer** to the address of that item in memory. Since the indices are numerical, the array must be stored in an **ordered sequence of memory addresses**.

## Stacks

A stack is an *abstract data type* (ADT) that stores a collection of data. If we remember when we learned about the Call Stack, it was *last in, first out* (**LIFO**). This means the last item added to the stack is going to be the first item removed. (like taking a book from a stack of books, the last book you put on the stack is going to be the first one you pick up.)

- When something is added to a stack, we say it was **pushed to the stack**.
- When something is removed from a stack, we say it was **popped from the stack**.

Stacks are usually implemented with an array under the hood. In fact when implementing a stack you don't even need to use the built in `Stack` class, just say `const stack = [];` and push and pop elements on that array.

Stacks are used to implement features like browser history, undo/redo, and many more.

The *time complexity* of a stack is going to be synonymous with the complexity of an array. *If memory has been allocated* for the array then adding and removing elements and also checking the size of the stack will be a **Constant O(1) operation**. If not, it could be a **Linear O(n)** operation in the worst case scenario.

The *space complexity* of a stack is **Linear O(n)**, because we need `n` array slots to store `n` variables.

### **Quick note on Recursion**

All recursive functions have a **minimum space complexity of Linear O(n)**. If space is an issue, and your input is large, it's usually better to use an iterative solution.

## Project Time

- [Binary and Hexadecimal Practice](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-9---big-o/binary-and-hexadecimal-practice)
- [Advanced Conversion Functions](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-9---big-o/advanced-conversion-functions)
- [Memory Practice Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-9---big-o/memory-practice)
- [Array Practice](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-9---big-o/array-practice)
- [Dynamic Arrays Practice](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-9---big-o/dynamic-arrays-practice)

- Once you finish the practices, **please come back here and complete the questions and answers in the folders for today**. After you've done that, review the weeks content or research things that you did not understand!
