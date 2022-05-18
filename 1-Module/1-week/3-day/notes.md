# Week 1 Day 3

## Learning Objectives Quiz

```javascript
let string = 'Beautiful';
console.log(string.length);
```

- What will the console.log evaluate to?
    <details>
    <summary>Answer</summary>
    Beautiful has 9 characters so the answer will be 9.
    </details>

```javascript
let string = 'Beautiful';
console.log(string[0]);
```

- What will the console.log evaluate to?
    <details>
    <summary>Answer</summary>
    When looking at the index of a string, the first character will always be index 0, so the answer will be 'B'. Remember the off by one error.
    </details>
- How do you concatenate 2 strings together?
    <details>
    <summary>Answer</summary>
    You can use the + operator. for example: 'Hello' + 'World' will return 'HelloWorld'. If you want a space between them, you must include that in your strings or add a string (quotes) with a space to the equation. For example: 'Hello' + ' ' + 'World' will return 'Hello World'.
- What method could we use to find the index of a specific character in a string?
    <details>
    <summary>Answer</summary>
    You can use the indexOf() method. For example: 'Hello'.indexOf('e') will return 1.
    </details>
- What is a function and what is the keyword you use to declare a function?
    <details>
    <summary>Answer</summary>
    A function is a set of code that will run when called (invoked). The keyword is <b>function</b>.
    </details>
- What is the difference between a parameter and an argument?
    <details>
    <summary>Answer</summary>
    A parameter is a <b>variable</b> that is used as a placeholder for an argument when writing a function. An argument is the <b>actual value</b> that is passed to the function when the function is called.
    </details>
- What does the keyword <b>return</b> do?
    <details>
    <summary>Answer</summary>
    The keyword <b>return</b> will return a value from a function. If there is no return, the function will return <b>undefined</b>.
    </details>

```javascript
1. function sayHello(name) {
    return 'Hello ' + name;
  }
2. sayHello('Rick Grimes');
```

- In number 1, is `name` an argument or parameter?
    <details>
    <summary>Answer</summary>
    name is a parameter. (a variable that stands for the argument you pass the function when it is invoked(called).)
    </details>
- In number 2, is the string 'Rick Grimes' an argument or parameter?
    <details>
    <summary>Answer</summary>
    `Rick Grimes` is an argument. (the actual value that is passed to the function when it is invoked.)
    </details>

## <span style="color:#3c78d8;"> Advice </span>

- Continue Syntax Drilling!! Don't copy paste! Do, Delete, Repeat.  https://www.reddit.com/r/learnjavascript/comments/c3hvb2/just_ran_into_a_very_wise_noob_thought_id_share/

## Notes

## <span style="color:#3c78d8;">String Datatype </span>

**Strings** are useful for **holding data** that can be represented in **text form**. Here's the [MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) documentation. Inside the doc, take a look on the **left**, there are a bunch of **string methods** for us to explore and use!

### <span style="color:#674ea7;">Valid vs. Invalid Strings</span>

Strings are always wrapped by a pair of single quotation marks (`'`) or by a pair of double quotation marks (`"`).

Valid String

```javascript
// valid strings
'Shakespeare wrote, "To be or not to be"';
"That's a great string
'That\'s an amazing escape!' //using '\' as an escape sequence
```

- More on the [escape sequence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences) here in the docs

Invalid String

```javascript
// invalid string
'That's a bad string'
```

### <span style="color:#674ea7;">Calculating Length</span>

count the number of characters in a string using .length

```javascript=
console.log("ramen".length); // => 5
console.log("go home!".length); // => 8
console.log("".length); // => 0
```

### <span style="color:#674ea7;">Indexing a String</span>

Two ways: `string.charAt(index)` or `string[index]`. `string[index]` is the more commonly used one. Read more about [character accessing on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#character_access).

```javascript=
console.log('fat'.charAt(1)) // prints "a"
console.log('cat'[1]) // prints "a"
```

In short: index a string using the expression `string[i]`, we get back the single character at position `i`

```javascript
console.log("bootcamp"[0]); // => 'b'
console.log("bootcamp"[1]); // => 'o'
console.log("bootcamp"[2]); // => 'o'
console.log("bootcamp"[3]); // => 't'
console.log("bootcamp"[7]); // => 'p'
console.log("bootcamp"[10]); // => undefined, a char at index 10 was never defined
console.log("bootcamp"[-3]); // => undefined, a char at index -3 was never defined
```

### <span style="color:#674ea7;">"Off by one" error</span>

Bear in mind that **indices** **begin** at **0** and **not 1**

```javascript
console.log("cat".length); // => has 3 letter = 3
console.log("cat"[3]); // => undefined, b/c => 0:c, 1:a, 2:t, 3:never-defined 
console.log("cat"[2]); // => 't'
```

### <span style="color:#674ea7;">String.indexof(characters)</span>

So now given `character(s)` instead of an index, **find** the **first index**. If `character(s)` **does not exist**, then `indexOf` will **return -1** (instead of undefined). This is because an index cannot be less than 0.

**Provided 1 character:**

```javascript
console.log("bagel".indexOf("b")); // => 0
console.log("bagel".indexOf("a")); // => 1
console.log("bagel".indexOf("l")); // => 4
console.log("bagel".indexOf("z")); // => -1 //'z' not present in 'bagel'
```

**Provided a substring of characters:**
return the index where the substring begins in the main string

```javascript
console.log("door hinge".indexOf("oor")); // => 1
console.log("door hinge".indexOf("hi")); // => 5
console.log("door hinge".indexOf("hin")); // => 5 //still 5
console.log("door hinge".indexOf("hint")); // => -1 //'hint' does not exist in str
```

### <span style="color:#674ea7;">String Concatenation</span>

Joining two or more strings together. To **concatenate strings**, we use the `+` **operator**:

```javascript=
console.log("hello" + "world"); // => 'helloworld'
console.log("goodbye" + " " + "moon"); // => 'goodbye moon'
```

## <span style="color:#3c78d8;">Functions </span>

A function ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)) is a procedure of code(s) that will run when called (invoked / executed).

### <span style="color:#674ea7;">Function Declaration | Definiton 🟦</span>

- known as **writing** a **function defintion**.
- **Think** of this as the **blueprint 🟦**
- blue prints / function declarations are **re-usable**
- **code inside** function **declaration** is **not executed**

```javascript
// Function declaration / definition
function house_blue_print(name_parameter) {
  return name_parameter + '\'s' + ' house';
}
```

### <span style="color:#674ea7;">Function Invocation 🏚</span>

- known as **calling** or **executing** a **function declaration**
- **Think** of this as the **house 🏚** built from the blueprint
- We can **build many 🏚 🏚 🏚 🏚** from **1 🟦 blue print**.
- **invoke** by calling the **function name** with **()** and **passing arguments** if needed.

```javascript
// Function invocation, re-using the function declaration 3x

//john's house; 'john' is the argument being passed inside (), when invoked
let johns_house = house_blue_print('john')
console.log(johns_house) // => john's house

//wes's house
let wess_house = house_blue_print('wes')
console.log(wess_house) // => wes's house

//johnny's house
let johnnys_house = house_blue_print('johnny')
console.log(johnnys_house) //=> johnny's house
```

### <span style="color:#674ea7;">Function's Return Statement</span>

A [function returns undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined#description) if a **value** was **not returned**

- **every function** has a **return statement**, and **if a return is not explicitly provided**, the function invoked will **default**  to **returning undefined**

![code example](https://i.imgur.com/HBBeRTI.png)

### <span style="color:#674ea7;">Extra Function Breakdown</span>

Function **Declaration Syntax** Breakdown:
![code example](https://i.imgur.com/joYXAsw.png)

Function **Invocation syntax** Breakdown:
![code example](https://i.imgur.com/j7mCnPM.png)

### <span style="color:#674ea7;">Parameters vs. Arguments</span>

- **Parameters** are comma separated **variables** specified as part of a **function's declaration**.
- **Arguments** are **values passed** to the **function** when it is **invoked**.

```javascript
//parameters are variables passed to a function declaration
function add(firstParameter, secondParameter) {
  //similar to below:
  //let firstParameter; let secondParameter;
  return firstParameter + secondParameter;
}

// 1 and 2 passed to add when invoked are arguments.
console.log(add(1, 2)); //=> 3
```

### <span style="color:#674ea7;">Extra Arguments</span>

**Extra arguments**, if **not used**, will **not matter** and just not be used. Similar to variables that are initialized but never used.

```javascript
function add(firstParameter, secondParameter) {
  return (firstParameter + secondParameter);
}

// this will ignore the 17 & 14
// the first two arguments passed in will be assigned to the first two parameters
console.log(add(1, 2, 17, 14)); //=> 1 + 2 => 3
```


### <span style="color:#674ea7;">Not Enough Arguments</span>

**Not enough arguments** passed to **invoked function** will **result** in a **shortage**, and the **lonely parameters** that do not have an argument passed to it will **yield** `undefined

```javascript
function add(firstParameter, secondParameter) {
  return (firstParameter + secondParameter);
}

//secondParameter is lonely and is not given an argumentso it results in undefined ):
console.log(add(1)); //=> 1 + undefined => NaN
```
