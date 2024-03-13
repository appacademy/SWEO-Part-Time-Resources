# W1D4

## Splice
Splice is a built-in method that can be called on arrays.

*NOTE*: unlike other built-in methods like "slice()" or "indexOf()", "splice()" can only be used on arrays.
- Why do you think this might be the case?
- Hint: remember the mutability of arrays vs strings

`Syntax`
1. Keyword `splice`
2. The starting index
3. (Optional) The delete count
    - This is the amount of items you want to delete starting at the "starting index"
4. (Optional) Items to add
    - You can pass in as many items you want to insert at the "starting index"
    - Each item you want to add in would be separated by a comma


Example syntax:
```js
array.splice(startIndex, deleteCount, item1, item2, item3, ...)
```

Example:
```js
let myArray = ["Hello", "my", "name", "cat's", "is", "Garfield."]

myArray.splice(3, 1) // We have deleted 1 item starting at index 3 of the 'myArray'
console.log(myArray) // Print: ["Hello", "my", "name", "is", "Garfield."]


myArray.splice(2, 0, "cat's") // We delete 0 items starting at index 2, and we add in "cat's" at index 2
console.log(myArray) // Print: ["Hello", "my", "cats's", "name", "is", "Garfield."]
```


The "splice" method also has a return value. Whenever you call it, it will return the section of the array that you cut out of it

Example:
```js
let myArray = ['apple', 'orange', 'watermelon', 'grape', 'banana']

let cutFruits = myArray.splice(1, 3) // this will delete 3 items, starting at index 1. It will then store the deleted items into the "cutFruits" variable as an array


console.log(myArray) // Prints: ['apple', 'banana']
console.log(cutFruits) // Prints: ['orange', 'watermelon', 'grape']
```

The function of saving what you delete with the splice method can be very important.\
If you did not save the deleted items in an variable, then you would have no way of accessing those elements after splicing. Remember, "splice" *mutates* the original array.


## Split and Join

You can convert strings into arrays and vice versa with the "split" and "join" methods.
- To turn a string into an array, use "split"
- To turn an array into a string, use "join"

### Split
- Take a string and split it at the passed in argument
- Split does not mutate the original string. Even it wanted to, it couldn't. Strings are immutable
- Example 1:
    ```js
    let string = "hello_world_it's_good_to_see_you_"
    let splitArray = string.split("_") // this will split the string using the "_" as the splitter

    console.log(splitArray) // Prints: ['hello', 'world', "it's", 'good', 'to', 'see', 'you', '']
    ```

- Example 2:
    ```js
    let string = "I dream of electric sheep"
    let splitArray = string.split("") // this will split the string using ""

    console.log(splitArray) // Prints: ???
    ```


### Join
- Take an array and join it. Each element will be joined by the passed in argument
- Join does not mutate the original array
- Example 1:
    ```js
    let array = ["hello", "world", "it's", "good", "to", "see", "you"]
    let joinedString = array.join(" ") // this will join the array using " "

    console.log(joinedString) // Prints: "hello world it's good to see you"
    ```

- Example 2:
    ```js
    let array = ["hello", "world", "it's", "good", "to", "see", "you"]
    let joinedString = array.join(",") // this will join the array using ","

    console.log(joinedString) // Prints: "hello,world,it's,good,to,see,you"
    ```

- Example 3:
    ```js
    let array = ["hello", "world", "it's", "good", "to", "see", "you"]

    let joinedString = array.join(" ") // this will join the array using ","

    let splitAgain = joinedString.split(" ") // this will split the joinedArray for each " "

    console.log(splitAgain) // Prints: ???
    ```


What could be some use cases for the "split" and "join" methods?
- What if you wanted to change a letter within a string of a word?
