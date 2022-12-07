# M2W2D3 (Error Handling and TDD)

## Error Handling

---

### Error Handling Discussion

- Purpose of Error Handling

```js
//Doesn't throw an error, but probably should
const add = (num1, num2) => num1 - num2;
console.log(add("banana", "orange"));
```

```js

try {
  //code to attempt to run
} catch(errorObj) {
  //code to execute if the try block fails
}

const add = (num1, num2) => {
  try {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
      return num1 + num2;
    } else {
      throw new TypeError('Type Error: Invalid Inputs')
    }
  } catch (e) {
    console.error(e.message);
  }
};
add("banana", "orange");
console.log(add(1,4))
```

---

### Error Handling Practices (Solo, 40m)

- Error Types Quiz
- Error Handling Quiz
- Error Handling Practice

---

### Error Handling Practice Walkthrough

---

## TDD

---

### TDD Discussion

Testing Pyramid

![testing_pyramid](./testing_pyramid.png)

- Unit Tests: Smallest unit of testing. Focuses on individual functions or tasks
  individually.
- Integration Tests: Testing how separate pieces of code work with one another.
- End-to-End Tests: Tests the whole application, high level functionality, close
  to the user experience.

TDD Process

![tdd](./tdd.png)

- Red: Write tests, watch them fail
- Green: Write code, just enough to pass the previously written tests.
- Refactor: Write more tests, watch them fail, pass the tests. The loop of
  easily maintainable, fully tested, clean code.

---

### TDD Practices (Paired, 45m)

- Testing Pyramid Quiz
- TDD Quiz
- Mocha and Chai Quiz
- Unit Tests with Mocha and Chai Practice

---

### Unit Tests with Mocha and Chai Practice Walkthrough

---

### TDD Style Project (Paired)

---
