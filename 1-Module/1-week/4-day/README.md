# W1D4

## Conditionals
`Syntax`
1. Keyword `if`
2. Condition to be met, either truthy or falsy
    - If not given, JavaScript will break
3. `Code block`
    - A section of code to run if the condition is met
    - If not given, JavaScript will not know what to do
    - Different from giving an empty `{}`
4. (Optional) Keyword `else if`
    - If the previous conditions were not met, check this condition
    - If this condition is met, run following code block
        - Then any other `else if` or `else` provided after is not run
5. (Optional) Keyword `else`
    - If all previous conditions are not met, then run following code block

- Example:
    ```js
    let c = 'turtle';

    if (c === 'dog') {
        console.log("I'm a dog!");
    } else if (c === "turtle") {
        console.log("I'm a turtle!");
    } else if (c === "potato") {
        console.log("I'm a potato");
    } else {
        console.log("I don't know what I am");
    }
    ```

- `if` `if` vs. `if` `else if`

- **Important**: Close your parentheses and curly braces immediately after opening them


### Loops

`While Loop`

- Syntax
  1. An `initial expression` (like a counter)
  2. The `while` keyword
  3. Parentheses with the condition of when to run the loop
  4. Curly braces to note the code block that will run while the condition is true
  5. A step case leading to the conditional being falsy
- Example:
    ```js
    let i = 0;

    while(i < 5) {
        console.log('hello world');
        i++
    }
    ```

- Check out the `break` keyword and `do... while` statment on MDN

`For Loop`

- Syntax
  1. `for` keyword
  2. Parentheses that has each expression separated by a _semi-colon_
        1. An `initial expression` (like a counter)
        2. A conditional of when to run the loop. If truthy, the loop will run
        3. A step case leading to the conditional being falsy
  3. Curly braces to note the code block that will run while the condition is true
- Example:
    ```js
    for (let i = 0; i < 5; i++) {
        console.log('hello world');
    }
    ```

- For loop vs while loop
    - For loops are for when you know the number of iterations. While loops are for when you don't

## Array

`Info to know`

- Arrays are a data structure
- Each item in an array is called an `element`
  - Each element of an array can be a variety of data types
  - But only one type of data per spot of an array
  - Each element is separated by a _comma_
  - Duplicates are allowed in arrays
- An array holds a `ORDERED LIST` of data
  - However, an array is not guaranteed to be _in order_ unless you've sorted it
- Index starts at 0

`Syntax`

- An array is written with square brackets [] with each element separated by a comma

  ```js
  let word = "goodbye"
  let arr = [1, "hello", word, false, NaN, [1, 2, 3]]
  let arr2 = [4, 98, 1, 4, -100, 23]
  ```

`Indexing`

- Just like strings we can get a specific index with `bracket notation`

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array[1]) // "cat"
  console.log(array[array.length - 1]) // finds last element // "turtle"
  ```

- `.indexOf(element)` - finds the index of the first given element in an\
 array. If not found, returns -1.

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.indexOf("dog")) // 0
  console.log(array.indexOf("elephant")) // -1
  ```

`Properties / Methods`

- `.length` - returns the number of elements in an array

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.length) // 3
  ```

- `.concat(arr)` - allows us to join arrays together.

  ```js
  let array1 = [1, 2, 3]
  let array2 = [4, 5, 6]
  let array3 = [7]

  let array4 = array1.concat(array3)
  let array5 = array1.concat(array2, array3)
  let array6 = array3.concat(array2, array1)

  console.log(array4) // [1, 2, 3, 7]
  console.log(array5) // [1, 2, 3, 4, 5, 6, 7]
  console.log(array6) // [7, 4, 5, 6, 1, 2, 3]
  ```

`More Methods`

Other common methods you will use often: (Not needed _today_, but why not\
 take a look at them on MDN)

- Array.push
- Array.pop
- Array.shift
- Array.unshift
- Array.slice
- Array.splice
