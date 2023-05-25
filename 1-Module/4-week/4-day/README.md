# M1W4D4

## Closure | MDN: [Closures]

- "A closure is the combination of a function and the lexical environment\ 
within which that function was declared."

---

`Overview`

- Can use/manipulate a Higher Order Functions' variables/parameters
- Can create multiple "instances" of a function's variables
- 

```js
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter()); // => 1
console.log(counter()); // => 2

//we cannot reach the count variable!
counter.count; // undefined
let counter2 = createCounter();
console.log(counter2()); // => 1
```

---

- Prompt

  - I want to start a new business that sells robots to people.

    - Level One
      - I need to build a factory that will produce robots to people that say, "Hello" when they run them.

    - Level Two
      - Customers would like it if they could decide what the robots said.

    - Level Three
      - Customers would like it if they robots said their names

    - Level Four
      - Customers would like it if the robots kept track of ALL the names they've spoken to.

[Closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
