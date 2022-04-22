## <span style="color:#3c78d8;">Conditional Statements (control flow) :)</span>
- **control flow** is the **order** in which **instructions** are **executed** within a program.
- **conditional statements** perform **different actions** based on **different conditions**
    - `if`, `else` `if`, `if...else`
    - only **one** `if` and **one** `else` statement, but **0** or **many** `else if`
    - **conditional statements** can be **nested**

### <span style="color:#674ea7;">`if` statement</span>
`if` statement has two parts:
- **test expression**: the **expression inside** the **()** after then if.
- **then expression**: only **run** when the `if` **test expression** results in a **[TRUTHY (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)** value 
    - note, **not** `true` but **TRUTHY**.
    - **truthy values** will get **coerced** to `true`.

```javascript=

if (300 === 300) { //<-- this is the TEST expression
    // this is the THEN expression
    // this code will run if the above test expression evaluates to a TRUTHY value.
    // since (300===300) yields --> true; true is a TRUTHY value.

    console.log("THIS IS 300!!");
}
```

**Won't Run `then expression` Example**: common and tricky false test expression (below):
```javascript=

if (300 === true) { //<-- test expression WON'T run
    //(300 === true) will evaluate to --> false
    //false is NOT a TRUTHY value.
    console.log("300!!!!!");
}
```

try running and seeing if these examples will run (below):
```javascript=
if ('') { 
    console.log("empty string works!!");
}
```
```javascript=
if (false === false) { 
    console.log("IS THIS TRULY FALSE?");
}
```
```javascript=
if (0) { 
    console.log("first index is always 0");
}
```
```javascript=
if (0 === 0) { 
    console.log("0___0");
}
```
```javascript=
if (null === null) { 
    console.log("I want null-body null-body but you");
}
```
```javascript=
if (true) { 
    if (true === 'true'){
        console.log("trueception");
    }
}
```

### <span style="color:#674ea7;">`else if`</span>
- Chain **test expression**, when first `if` doesn't result in truthy, try next `else if`.
```javascript=
let number = 5;

if (number > 5) { // check to see if our number is greater than 5
  console.log("The num is greater than 5");
} else if (number < 5) { // check to see if our number is less than 5
  console.log("The num is less than 5");
} else if (number === 5){ //check to see if number is equal to 5.
  console.log("It's 5");
}
```
### <span style="color:#674ea7;">`else`</span>
- `else` statement will be **hit** if **all** the above **test expressions** given result in **falsey**

```javascript=
let pet = 'LION'

if (pet === 'dog'){
    console.log("This pet is a dog!")
} else if (pet === 'cat') {
    console.log("This pet is a cat!")
} else {
    console.log("All I know for sure is that it's neither a dog nor a cat")
}
```

## <span style="color:#3c78d8;">Loops</span>
- **Loops** are another form of **control flow**.
- Allows **repetition** of code **until a condition** is **met**.
- **Loops** consist of **3 main components**:
    1. **Initial** Expression
    2. **Condition** for which we keep looping
    3. **Step** towards completing the loop

### <span style="color:#674ea7;">while loops</span>
- While loops will **execute while** their **condition** is **truthy**.
- Have expression that **steps** your loop **towards** **completion** within the **body** of your loop.
- use cases: 
    - **repeat** block of **code** an **unknown # of times**, until a **condition** is **met**
    - Use a **while loop** when asking **for user input**. 
        - Like your computer / app is running until the condition where you turn it off.

```javascript=
let i = 1; // Initial expression, starting value

while (i <= 5) { // Condition, ending value
  console.log(i);
  i = i + 1; // step towards completing the loop
}
```
```javascript=
let isOn = true; // Initial expression, starting value
let start = 0;
let end = 10
while (isOn) { // Condition, ending value
  console.log(start);
  start +=1; // step towards completing the loop
  if (start === end) { //Condition switch
      isOn = false;
  }
}
```


### <span style="color:#674ea7;">for loops</span>
- For loops **execute** the **body** of the loop for the **duration** of the **condition**
- For loops give us compact syntax to define **initial** expression, loop **condition** and **step** towards completion in a **single line**.
- use cases:
    - Use a for loop when you know the **loop** should **execute n times**.
    - Incrementally **loop** through a **range of numbers** that **represents indices** of a **data structure**.
```javascript=
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

```javascript=
// A frequent usecase applied to for loops is using them to iterate through a
// data structure and taking a look at each individual element. 
let words = "code everyday!";

// Let's set up a loop to look at each character of our string"
for (let index = 0; index < words.length; index++) { // define loop
  let char = words[index]; // store current character in variable
  console.log(char); // log character to our console
}
```

## <span style="color:#3c78d8;">Arrays</span>
- Arrays are **ordered collections** of **data**. 
- Similar to strings we learned, but very different since **arrays** can **hold any datatype** like strings, numbers, and even other arrays.
- arrays have **indices** attached to **each position** within the array. Index **begins at 0**.
- **access the value** stored at **each index** by **keying** into it with the index **using [] notation**.  
- More array content, methods, and usages here on [arrays MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#create_an_array)

```javascript=
let arr2 = [
  "zero",
  false,
  "Let's go Nets",
  undefined,
  [1,2,3]
];

console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[4][0]);

console.log(arr2.length);
console.log(arr2.indexOf(false));
console.log(arr2.indexOf("dogs"));
```

### <span style="color:#674ea7;">Concat Arrays</span>


**INCORRECT way w/ `+`** of combining arrays:
```javascript=
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];


let badCombine = array1 + array2 + array3 //can't do this, won't give what you expect

//combines elements in our array into strings --> cast our arrays into strings
console.log(badCombine) // --> '1,2,34,5,67,8,9'

```

**PROPER way w/ `.concat` method** to combine arrays:
```javascript=
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];


let goodCombine = array1.concat(array2, array3)
console.log(goodCombine)

// VERY IMPORTANT: the original array has not been modified: 
console.log(array1)

//This is because the .concat method doesn't MUTATE the original array. 
//We will learn more about MUTABILITY tomorrow.

```

### <span style="color:#674ea7;">`typeof` operator</span>
- typeof is a **special operator** in Javascript that will **examine** the **expression** that follows and **report** on its **data type**. 

```javascript=
console.log(typeof 12); //number

// before we run this one, note that we might not get what we expect
console.log(typeof [1,2,3]); //object ... shouldn't it be array?

// Javascript will report that typeof array is object. 
// We will touch on objects next week, 
//continue on to the next section for determine if data is an array
```

### <span style="color:#674ea7;">Array.isArray</span>
- we saw that `typeof` on `arrays` will not yield us what we want. 
- use **Array.isArray(chosen_array)** to determine **if it is an array**.
- **return value** of `Array.isArray` is a `boolean` (**true or false**)
```javascript=
console.log(Array.isArray([1,2,3])); //true
// When when we provide an array as an argument to that expression, we'll get
// a return value of true, otherwise we'll get false:
console.log(Array.isArray("yes")) //false
console.log(Array.isArray(12)) //false
```