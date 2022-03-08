# M3-W4-D2

## Lecture: Asynchronous Code, challenges and solutions

### Why Async needs a different solution than Sync

```js
const first = () => {
  setTimeout(() => {
    console.log('first')
  }, 1000)
}

const second = () => {
  setTimeout(() => {
    console.log('second')
  }, 500)
}

const third = () => {
  setTimeout(() => {
    console.log('third')
  }, 250)
}

first();
second();
third();

//third, second, first
//not correct order due to how the event loop works
```

---

### Callback Hell, it works but its terrible

```js
const third = () => {
  setTimeout(() => {
    console.log('third')
  }, 250)
}

const second = () => {
  setTimeout(() => {
    console.log('second')
    third();
  }, 500)
}

const first = () => {
  setTimeout(() => {
    console.log('first')
    second()
  }, 1000)
}

first();
//first second third
//difficult to mentally follow and debug as complexity grows
```

---

### Promises, Managing async in a synchronous looking way, with "." chaining

```js
const third = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('third')
      res()
    }, 250)
  })
}

const second = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('second')
      res()
    }, 500)
  })
}

const first = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('first')
      res()
    }, 1000)
  })
}



first()
  .then(second)
  .then(third)
  .catch(err => console.log(err));
```

---

### Async/Await, no more "." chaining 👍

```js
const third = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('third')
      res()
    }, 250)
  })
}

const second = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('second')
      res()
    }, 500)
  })
}

const first = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('first')
      res()
    }, 1000)
  })
}

const wrapper = async () => {
  //JavaScript is a single threaded, non-blocking, language.
  //async/await allows it to behave in a blocking manner
  await first();
  await second();
  await third();
}

wrapper();
```

---

## Practice: async/await (20m)

---

## Walkthrough: async/await

---

## Practice: fetch (20m)

---

## Walkthrough: fetch

---

## Long Practice: Exploring Promises

---
