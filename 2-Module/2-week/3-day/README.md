# M2W2D3 (Error Handling and TDD)

## Error Handling

---

### Error Handling Practices (40m)

- Error Types Quiz
- Error Handling Quiz
- Error Handling Practice

### Error Handling Discussion

- Purpose of Error Handling

```js
const add = (num1, num2) => num1 - num2;
add("banana", "orange");
```

```js
const add = (num1, num2) => {
  try {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
      return num1 - num2;
    } else {
      throw new TypeError('Type Error: Invalid Inputs')
    }
  } catch (e) {
    console.error(e.message);
  }
};
console.log(add("banana", "orange"));
```

## TDD

---

### TDD Practices (1h)

- Testing Pyramid Quiz
- TDD Quiz
- Mocha and Chai Quiz
- Unit Tests with Mocha and Chai Practice

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

## TDD Style Project (Paired)
