## Warmups (10m)
- `code-it-out` folder do: `get-average-param.js`
  
## Project Time (1hr)
- Continue where you left on callbacks project with your pair

## Scope Homework Review (30m)

## Study Time (1hr) 
Note: Must be sharing screen and cameras on.

Things to study:
- Review objects (understand how to work with array of objects)
- Review and play around with Scope
- Ask questions about previous assessment
- Start on homework early
---

### `Scope Homework Review`
- What is scope?

  - Scope determines what variables are available for use within any given line
    of a JavaScript program.

- Advantages of Using Scope Correctly

  - `Security` - Restricting variables to only predefined sections of a program.
  - `Avoiding Namespace Collisions` - Allows you to reuse variables
    names in different scopes without causing errors.

- Three types of scope & what they "see" / "Access to"

  - `Global` - Can see variables defined in the global scope.
    - Everything in js is an object. When running js in the browser the global
      scope represents the window when running js locally (Node) it represents the
      global object.
  - `Local or Function` - Can see Global, Parameters, Variables in the function
    - When we enter a function, we enter a new scope
  - `Block`- Can see Global, Local, Variables in the block

---

```js

let globalScope = 'I am globally scoped'

let myFunction = function(functionScope){
  let alsoFunctionScope = "I am also function scoped"

  if(true){
    let blockScope = 'I am block scoped'
  };
};

myFunction("I am function scoped");

```

---

```js
let car = "vroom";
function makeSounds(dogSound) {
  let cow = "moo";

  if (true) {
    let turkey = "gobble";

    for (let i = 0; i < 2; i++) {
      console.log(car, dogSound, cow, turkey, i);
    }
  }
}
makeSounds("woof");
```

---

- Scope Chaining

  - JS will search through scopes, working upwards until it finds a match.
    - Inner scopes have access to outer scopes but outer scopes don't have
      access to inner scopes

```js
let hungry = false;

function sayHungry() {
  let hungry = true;
  if (hungry) { //hungry is being called, but where is hungry defined?
    console.log("I'm hungry!");
  } else {
    console.log("I'm coding");
  }
}

sayHungry();
```

- Hoisting
  - "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope (figuratively not physically) before code execution."
  - In reality - JavaScript engine is not physically moving your code, your code stays where you typed it.
  - During compile phase, just microseconds before your code is executed, it is scanned for function and variable declarations. All these functions and variable declarations are added to the memory inside a JavaScript data structure called Lexical Environment.
    - The variables and function declarations will be hoisted to the top of their particular scope.
    - `const` and `let` are **block-scoped** while `var` is **function-scoped**.

### `Let, Const, and Var`

- `Let` is block scoped (belongs to that block only) and CAN be reassigned.
- `Const` is also block scoped (belongs to that block only), but CANNOT be reassigned.
- reassign !== mutable
- `Var` is function scoped (belongs to the function even if in block), and CAN be reassigned. (don't use, legacy, can cause unintended behaviors)


|       | declaration | assignment  |  initialization  |  scope   |        hoisting        |
| :---: | :---------: | :---------: | :--------------: | :------: | :--------------------: |
|  var  |   var x;    | x = 'Toby'; |  var x = 'Tom';  | function | declared; not assigned |
|  let  |   let x;    | x = 'Toby'; |  let x = 'Tom';  |  block   |   Temporal Dead Zone   |
| const |             |             | const x = 'Tom'; |  block   |   Temporal Dead Zone   |
- `Temporal Dead Zone` The state where variables are un-reachable. They are in scope, but they aren't declared.
---

```js
let helloWorld = function(){
    if(true){
        console.log("inside block scope:", blockStr);
        let blockStr = "apple";
        // var blockStr = "not apple";
        
    }
    // console.log("inside function scope:", blockStr);
}

helloWorld();
```

### `Key Takeaways`

**Ways to Declare Variables**
- `Let` is block scoped (belongs to that block only) and CAN be reassigned.
- `Const` is also block scoped (belongs to that block only), but CANNOT be reassigned.
- reassign !== mutable
- `Var` is function scoped (belongs to the function even if in block), and CAN be reassigned. (don't use, legacy, can cause unintended behaviors)
---
**What is scope?**
- Scope determines what variables are available for use within any given line of a JavaScript program.
---
**What are the type of scopes?**
- Three types of scope & what they "see" / "Access to"
  - `Global` - See variables defined in the global scope.
    - Everything in js is an object. When running js in the browser the global
      scope represents the window when running js locally (Node) it represents the
      global object.
    - If you initialize a variable without a declaration it defaults to the
      global scope.
  - `Local or Function` - See Global, Parameters, Variables in the function
    - When we enter a function, we enter a new scope
  - `Block`- See Global, Local, Variables in the block

---
**What is Scope Chaining?**
- Scope Chaining: JS will search through scopes, working upwards until it finds a match.
  - Inner scopes have access to outer scopes but outer scopes don't have
    access to inner scopes
---

**What is hoisting**
- Before execution of code, Javascript takes note of the variables & functions and hoist (take note of) these guys to their respective scopes.
  - For example: the variable `let str` will get hoisted to the its block scope (this block scope can `see` the `let str`)