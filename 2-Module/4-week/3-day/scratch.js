//SETS
//In CS is an abstract data type that stores unique and unordered values

//Properties of sets:

//1. A set cannot include duplicate elements
//2. The elements must be unordered
//3. Searching a set should always be constant time

//Again, sets are an abstract data type which means that they are mainly just an idea of how
//to structure data

//This means that the implementation of a set is different for each programming language

//Later we'll be using classes to implement sets like hash tables and linked lists

//Caching
//Super useful and common method of increasing the performance of code

//If we have an operation that is used frequently (especially a slow one)
//We can run it once, and then store the result so that any other time it's needed we can just look 
//up the answer and we don't have to run the operation/calculation again

//Array.length caches the length of the array, because otherwise every time we call it
//we would have to iterate through the array

//Caching Pure Functions

//What is a pure function
//A function whose output depends solely on the input and causes no side effects

//These are also known as stateless function and theyre used for their predictability

//We can easily store the outputs of a function (such as fibonacci) and use the input as the key
//Example: fib(3) 3 is the key and the result(output) is the value

//If we ever encounter an input we haven't seen before, we simply run the calculation and store it

//As always this is a tradeoff of space for better time

//Memoization
//Basically just keeps a running log, or memo, of previously calculated values
//MEMO GOES FROM TOP TO BOTTOM
//Example: Stores fib(15), fib(14), etc.

//Tabulation
//The same as memoization however it goes from bottom to top
//Example: Stores fib(1), fib(2) , etc.

//The most important thing, howver, is that you know that both are forms of dynamic programming
//that invlove caching sub problems to make future calculations faster

//Just remember that they are both forms of caching

//THINGS TO STUDY FOR ASSESSMENT
//1. Looking at code and determining time and space compexity

//2. (part of the coding portion) Translating hex and binary specifically with those javascript methods

//3. LINKED LIST CLASSES AND METHODS
