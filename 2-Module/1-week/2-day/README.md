# W7D2 - Tuesday

## Lecture (30m)

### DRY

- DRY is a principle of software development that says: `"Don't repeat yourself. Don't write the same code twice."`
- It's important for your code to be **clear, concise, and efficient**.
- Check your code for *patterns* that come up at least twice. If you find them, you can refactor your code by possibly adding that code to it's own function or storing a set of code to a variable to be reused later.
- Writing dry code is a matter of using **your own judgement**, so the more you practice the better your code will be.
- Just because one solution has fewer lines, does not mean it is better. If you have refactored to store repeated code in a function and you need to make a change to that code, you'll only have to change it once and not on every line that it was used. Your longer, dryer code just saved you time and a headache!

---

### Single Responsibility Principle

- Every module, class, or function in a computer program should have responsibility over a **SINGLE** part of that programs functionality.
- Basically this means your functions should *do one thing and do it well*, if they are doing too many things you should refactor and break that function up into helper functions.
- Following this principle makes your code more readable and easier to maintain in the long run.
- The `Single Responsibility Principle` is all about limiting the impact of changing your code.

Consider the following example taken from yesterday's homework.

```js
const VOWELS = 'aeiou';

const abbreviateWords = function(sentence) {
  // make an array of words
  const words = sentence.split(' '); 

  // loop through and check if the length of each word is greater than 3, 
  // if so, loop through the characters and add non-vowels to a newString until it has a length of 3.
  //  then replace the word in the array with the updated newWord.
  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    const word = words[wordIdx];
    if (word.length > 3) {
      let newWord = "";
      let charIdx = 0;

      while (charIdx < word.length && newWord.length < 3) {
        let char = word[charIdx];
        if (!VOWELS.includes(char)) {
          newWord += char;
        }
        charIdx++;
      }

      words[wordIdx] = newWord;
    }
  }

  // join the words back together and return.
  return words.join(' ');
};

console.log(abbreviateWords("Hello World!")); // Hll Wrl
```

This function is lengthy and hard to read because it is trying to do too many things. The problem can be broken down into the following steps to correct that.

Lets break that function down into smaller helper functions.

```js
const VOWELS = 'aeiou';

const changeWord = function(word) {
  let newWord = "";
  let charIdx = 0;

  while (charIdx < word.length && newWord.length < 3) {
    let char = word[charIdx];
    if (!VOWELS.includes(char)) {
      newWord += char;
    }
    charIdx++;
  }
  return newWord;
}

const abbreviateWord = function(word) {
  if (word.length > 3) {
    return changeWord(word);
  }
  return word;
}

const abbreviateWords = function(sentence) {
  const words = sentence.split(' ');

  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    const word = words[wordIdx];
    words.splice(wordIdx, 1, abbreviateWord(word));
  }

  return words.join(' ');
};

console.log(abbreviateWords("Hello World!")); // Hll Wrl
```

As you can see each of these functions has a singular purpose and is not overly complicated. If changes are needing to be made, we can easily update that function and if we used that helper in any other function to keep our code dry, we wont have to do anything further!

---

### CommonJS Modules

- CommonJS is a popular modularization pattern that's used in Node.js
- In Node.js each JS file defines a module.
- Up until now we've been writing all of our code in a single file, however once you start writing more complicated code, it becomes more difficult to manage.
- Organizing your code into multiple files makes it easier to manage.
- Modules defined within your project are known as local modules.
- We apply our `Single Responsibility Principle` to local modules, in that each local module has a single purpose and the related code is focused on implemeting a single bit of functionality.

#### CommonJS Imports and Exports

`Exports`

- Exports are always defined at the very bottom of your file.
- In order to make variables and functions defined in a module accessible to other modules you need to export them by adding them to the `module.exports` object. There are 3 options to export:

  - **Option A:** Assign a new object to the `module.exports` object.  
  - **Option B:** Assign new properties to the existing `module.exports` object.
  - **Option C:** Use the exports shortcut to assign new properties to the existing `module.exports` object.

    ```js
    // calculator.js

    const operations = ['+', '-', '*'];

    function add(num1, num2) {
      // ...
    }

    function subtract(num1, num2) {
      // ...
    }

    function multiply(num1, num2) {
      // ...
    }

    // Remember, if you are using an existing variable as a key in an object, you can just use the variable name as the key and it will automatically set its value to be that of the variable.

    // export mutliple items
    // only add, subtract, and operations gets exported from this file. (multiply will not be available anywhere else)

    <!-- Option A --> // most common
    module.exports = { 
      add,
      subtract,
      operations
    };
    
    <!-- Option B -->
    module.exports.add = add;
    module.exports.subtract = subtract;
    module.exports.operations = operations;

    <!-- Option C -->
    exports.add = add;
    exports.subtract = subtract;
    exports.operations = operations;

    <!-- Exporting a single item -->
    module.exports = operations;
    // This is the only option to export a single item.
    ```

---

`Imports`

- Imports MUST go at the very top of your file.
- When a module needs something from another module, it is said to be *dependent* on that module.
- A modules dependencies are the other modules that are required for it to run properly.
- **dependency** === **requirement**
- In order to import something, we use the `require` function. It takes in a string that is the path to the module we want to import.

Consider this example from last nights homework.

```js
./school
├── courses
|   ├── physics.js
|   └── music.js
└── people
    ├── students.js
    └── teachers.js
```

Using this file structure, if we wanted to import the students.js module into the physics.js module, we would add the following to the top of the physics.js file:

```js
const students = require('../people/students');
```

- We can use the relative path to our file, based on our current location by using the `../` or `./` shorthand, just like when we navigate in our command line. Since physics.js is in the courses directory, we use the `../` shorthand to go from courses to school, then we travel into the people directory and then we specify which file in that directory we want access to. It is okay to leave the `.js` out when writing your imports.

In the above example the variable `students` is assigned to the `module.exports` object of the students.js file. So, it will be holding the keys that you included in that object when you wrote the exports for that file.

- To gain access to multiple exported items in your import, you can use the following syntax:

  ```js
  <!-- Option A -->
  // create variables for each of the exported items
  const calculator = require('./calculator');
  const add = calculator.add;
  const subtract = calculator.subtract;
  const operations = calculator.operations;

  <!-- Option B -->
  // destructure each item from the module.exports object (this is my preferred option)
  const { add, subtract, operations } = require('./calculator'); // most common

  // This isn't used as much, but you can also just key into the calculator object directly in your code as needed like this:
  const sum = calculator.add(1, 2);
  ```

If only one item was exported and only one thing is being imported, you can use the following syntax.

`export`

```js
// calculator.js
// ...
module.exports = operations;
```

`import`

```js
// module that is importing
const operations = require('./calculator');
```

As you can see, you're setting module.exports to be operations, not an object containing operations, so you'll be importing that single item and won't need to key into it or destructure it to use it.

---

## Project Time

### Single Responsibility Principle Project (30m)

- [Single Responsibility Principle Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/practice--single-responsibility-principle)

### SRP Discussion (10m)

---

### DRY Practice (40m)

- [DRY Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/dry-quiz)
- [DRY Practice](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/practice--dry)

### DRY Discussion (10m)

---

### Rock Paper Scissors Project (until the end of the day)

- [Rock Paper Scissors Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/rock-paper-scissors-project-phase-4-6)

There will be no EOD today, so make sure to ask questions if you have them during this project!
