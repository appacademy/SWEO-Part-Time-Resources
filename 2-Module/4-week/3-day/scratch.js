//Sets
//In computer science, a set is an abstract data type that stores unordered, unique values

//Properties of a set

//1. The set contains no duplicate elements

//2. The elements are unordered

//3. You can search a set in constant (O(1)) time

//Again, since it's an abstract data type it's really just an idea of how we should structure our data
//This means the implementation of a set is going to be different for each programming language

//Caching
//Super common and incredibly useful method of increasing code performance (makes code faster)

//If we have a frequently used operation or calculation (especially slow ones)
//we can run it once and then store the result
//instead of running the calculation again, we can just grab it from the cache

//array.length is caching its value under the hood
// so on initialization it runs the loop once to total the length
//it caches the result (and if we push it just updates it)
//but this allows us to access the length in constant time

//Caching Pure Functions

//Pure function - A function whose output depends only on the input
//These are also known as stateless functions & they're used for their predictability

//When we are caching the outputs:
//The outputs can easily be stored with the input as the key

//If we ever encounter an input we haven't yet seen, we simply run the calculation again
//and store the output 

//Memoization
//Is when we keep a running log (a memo) of all the previously calculated values
//Memo goes from TOP to BOTTOM

//Tabulation
//Same as memo, however, it goes BOTTOM to TOP


//They are both forms of dynamic programming that involve caching sub problems results
//to speed up the calculations of future problems

//Just remember that both are forms of caching (dynamically)

//WHAT TO STUDY FOR THE ASSESSMENT

//1. Time and Space Complexity - (Just looking at them)

//2. Translating Hexadecimals

//3. Linked List Classes

//4. Optimization?