# Week 1 Day 2

**Important:** These notes should be used for studying only. **You cannot reference these during assessments**. If you get stuck **during practices** you should try the following in order:

- **Just your knowledge:** Try solving the problems first without referencing anything
- **MDN:** Then reference MDN (**5 minutes**)
- **Google:** If you can't find what you need on MDN try to google it, example search: `mdn strings` (**5 minutes**)
- **App Academy Open:** Try your App Academy Open readings (**5 minutes**)
- **Question:** If you still can't figure it out, ask a question on your questions slack channel.

Struggling a bit will help you learn!! It's always more memorable than being given the answer.

## Learning Objectives Quiz

- How do you print something to the console?
    <details>
    <summary>Answer</summary>
    console.log('hello world')
    </details>
- What is a string? What is the syntax for a string?
    <details>
    <summary>Answer</summary>
    A string is a collection of characters that is surrounded by quotes. Can be single or double quotes.
    </details>
- What does modulo return?
    <details>
    <summary>Answer</summary>
    The modulo operator returns the remainder of a division. For example, 5 % 2 = 1.
    </details>
- What is NaN?
    <details>
    <summary>Answer</summary>
    NaN is a special value that means not a number. Usually returned from an invalid mathematical operation.
    </details>
- What are the 2 values a boolean expression will return?
    <details>
    <summary>Answer</summary>
    True and False.
    </details>
- What will (false && true) evaluate to?
    <details>
    <summary>Answer</summary>
    false - the only time an 'and' statement will result to true is when both sides are true.
    </details>
- What will (false || true) evaluate to?
    <details>
    <summary>Answer</summary>
    true - the only time an 'or' statement will result to false is when both sides are false.
    </details>
- What will (!true) evaluate to?
    <details>
    <summary>Answer</summary>
    false - The 'not' operator, also known as a 'bang' coerces a boolean value to be it's opposite.
    </details>
- What will an expression using a comparison operator return?
    <details>
    <summary>Answer</summary>
    A boolean value. (true or false)
    </details>
- What is the difference between == and ===?
    <details>
    <summary>Answer</summary>
    == is a loose equality comparison. It compares values but not types. <br>
    === is a strict equality comparison, both values and types must be the same.
    </details>
- What is a variable? What is the syntax for a variable?
    <details>
    <summary>Answer</summary>
    A variable is a container for a value. It is declared with the let keyword followed by the variable name, followed by an equals sign (assignment operator), then followed by the value. <br>
    let variable = value;
    </details>

```javascript
let x = 1;
x++;
console.log(x);
x += 1;
console.log(x);
```

- What are the values of the console.logs?
    <details>
    <summary>Answer</summary>
    The first will be 2. x++ increments the value by 1. <br>
    The second will be 3. x += 1 also increments the value by 1.
    </details>
- What is the default value of an unassigned variable?
    <details>
    <summary>Answer</summary>
    undefined.
    </details>
- Using DeMorgans Law, what is the equivalent value of !(A || B)?
    <details>
    <summary>Answer</summary>
    !A && !B. Not (A or B) is equivalent to not A and not B.
    </details>

## Notes

If you need help with markdown syntax, please refer to the following link: (hold ctrl + click the link to open it **in edit view**.)
[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

## <span style="color:#3c78d8;">console.log(...) </span>

This is a way to output the expression inside the parentheses of the console.log into the terminal.

<span style="color:#cd1d1d;">**NOTE**: </span> In **real world** applications, **console.log** should be used for **debugging purposes only**. Debugging means to locate and solve errors in your code. **console.log** is **mostly used** as a way to **locate the error(s)** in your code.

```javascript
console.log("Hello world");
console.log("Hello world", "Hi aliens"); //Hello world Hi aliens
console.log("one plus one is:", 1+1) //one plus one is: 2
```

## <span style="color:#3c78d8;">Comments: </span>

Occasionally we'll want to leave comments or notes in our code. Commented lines will be ignored by our computer.

### <span style="color:#674ea7;">Single-Line Comments </span>

```javascript
//this is a comment. javascript will ignore me )':
console.log("This is not a comment"); //this is a comment though...
```


### <span style="color:#674ea7;">Multi-Line Comments </span>

/*and ending the comment with an asterisk and a forward slash,*/.

 ```javascript
/*
multi-line comments:
comment 1
comment 2
*/
console.log('end!')
```

## <span style="color:#3c78d8;">Variables </span>

- Variables are used to store information
- to be referenced and manipulated in a computer program.
- containers that point to data

### <span style="color:#674ea7;">Initializing Variable(declaration + assignment)</span>

- `let` name_of_variable `=` data
- `let` --> declaration
- `=` --> assignment
- name_of_variable cannot begin with a number.

```javascript
let bootcamp = "App Academy";
console.log(bootcamp); // 'App Academy'

let birthYear = 2012;
console.log(birthYear); // 2012

// let 12num = 12; //<-- invalid, cannot start with 12 for var name.
```

### <span style="color:#674ea7;">Declaring a Variable (not assigning)</span>

- In JavaScript, in order to use a variable, we must declare it.
- To declare a variable, use the let keyword, then name of variable
- `let` declarations will initially be `undefined`

```javascript
let bootcamp; //we declared but NOT ASSIGNED `=` to any value
console.log(bootcamp); // undefined
```

### <span style="color:#674ea7;">Assigning a Variable (=)</span>

- after declared, variable can be assigned

```javascript
let bootcamp;
console.log(bootcamp); // undefined
bootcamp = "App Academy";
console.log(bootcamp); // 'App Academy'
```

### <span style="color:#674ea7;">Manipulating a Variable (reassign =)</span>

- To change the value of a variable, we need to reassign it to a new value with =

```javascript
let num = 42;
console.log(num + 8); // => 50
console.log(num); // => 42

num = num + 10;
console.log(num); // => 52
```

### <span style="color:#674ea7;">Assigmment Shorthand</span>

common examples:

```javascript
let number = 0;
number += 10; // equivalent to number = number + 10
number -= 2; // equivalent to number = number - 2
number /= 4; // equivalent to number = number / 4
number *= 7; // equivalent to number = number * 7
console.log(number); // 14
```

`++` and `--`:

```javascript
let year = 3004;
year++;
console.log(year); // 3005
year--;
console.log(year); // 3004
```

## <span style="color:#3c78d8;">Working w/ Numbers </span>

Numbers are pretty cool!

### <span style="color:#674ea7;">Number Datatype </span>

Examples of numbers below:

```javascript
let integer = 50
let negative = -50
let decimal = 3.14159;
```

### <span style="color:#674ea7;">Arithmetic Operators </span>

![Arithmetic Operators](https://i.imgur.com/oYebL9Z.png)

Order of Operations: **P.E.M.D.A.S. [() ,*/%, + -]**

Examples:

```javascript
console.log(2 + 3); // => 5
console.log(42 - 42); // => 0
console.log(-4 * 1.5); // => -6
console.log(25 / 8); // => 3.125
console.log((2 + 3) * 5); // => 25

let add_my_num = 10 + 5 * 2;
console.log(add_my_num); //20
```

### <span style="color:#674ea7;">Modulo </span>

- Modulo gives us the **remainder** that **results from** a **division**.
- For example: **10 % 3 is 1** because when we divide **10 by 3**, we are **left with a remainder of 1**.

```javascript
console.log(10 % 3); // => 1
console.log(14 % 5); // => 4
console.log(20 % 17); // => 3
console.log(18 % 6); // => 0
console.log(7 % 9); // => 7

// modulo has precedence over addition
console.log(4 + 12 % 5); // => 6
console.log((4 + 12) % 5); // => 16 % 5 => 1 (5 goes into 16 3 times w/ remainder of 1)
```

### <span style="color:#674ea7;">NaN (Not a Number) </span>

In general, any nonsensical **arithmetic with** `undefined` will **result in NaN**

```javascript
let num; //num = undefined
console.log(num + 3); // undefined + 3 --> NaN
```

## <span style="color:#3c78d8;">Working w/ Boolean </span>

### <span style="color:#674ea7;">Boolean Datatype </span>

The Boolean data type is perhaps the simplest type since there are only two possible values, **`true`** and **`false`**.

### <span style="color:#674ea7;">Logical Operators </span>

Also known as boolean operators
<br>
![Logical Operators](https://i.imgur.com/rWYQc8R.png)

- **!(not)**
  - reverses boolean value
  - `!` is a `unary operator` (applied to only single value, `binary operators` are like `%` that accepts two values)

    ```javascript
    console.log(!true); // => false
    console.log(!false); // => true
    console.log(!!false); // => false
    ```

- **&&(and)**
  - will only evaluate to `true` when both input values are `true`
  - `&&` is a `binary operator`

    ```javascript
    console.log(false && false); // => false
    console.log(false && true); // => false
    console.log(true && false); // => false
    console.log(true && true); // => true
    ```

- **||(or)**
  - will only evaluate to `false` when both input values are `false`
  - `||` is a `binary operator`

    ```javascript
    console.log(false || false); // => false
    console.log(false || true); // => true
    console.log(true || false); // => true
    console.log(true || true); // => true
    ```

### <span style="color:#674ea7;">Logical Order of Operation </span>

JavaScript will evaluate `!` then `&&` then `||`.

```javascript
console.log(true || true && false);    // => true
console.log(false && !(false || true)); // => false
```

### <span style="color:#674ea7;">De Morgan's Law </span>

**distribute !** across parentheses, we must also **flip** the operation **inside parentheses**

- `!(A || B)` is equivalent to `!A && !B`
- `!(A && B)` is equivalent to `!A || !B`

## <span style="color:#3c78d8;">Comparison Operators </span>

**all comparisons** will **result** in a `boolean`, **true** or **false**

### <span style="color:#674ea7;">The relative comparators </span>

![The relative comparators](https://i.imgur.com/c33GLm6.png)

relative comparators examples:

```javascript
console.log(10 > 5); // => true
console.log(10 < 5); // => false
console.log(1 < 7); // => true
console.log(7 <= 7); // => true
console.log(5 === 6); // => false
console.log(5 !== 6); // => true
console.log("a" !== "A"); // => true
console.log(false === false); // => true
```

lexigraphical string comparison:

```javascript
console.log("a" < "b"); // => true
console.log("apple" < "abacus"); // => false
console.log("app" < "apple"); // => true
console.log("zoo" > "mississippi"); // => true
```

### <span style="color:#674ea7;">=== vs == </span>

- **strict equality** --> `===`
  - **only** return **true** if the **types** are the **same**
- **loose equality** --> `==`
  - **can** return **true** even if the values are of **different types**

```javascript
console.log(5 === "5"); // false
console.log(5 == "5"); // true
console.log(0 === false); // false
console.log(0 == false); //true
```
