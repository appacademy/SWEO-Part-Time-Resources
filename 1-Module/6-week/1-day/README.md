# W6D1

Welcome back everyone!

## Assessment (1h35m)

---

## Readings (25m)

---

## Node Runtime Environment

- Node is a runtime for JavaScript that runs on servers/computers with full user-level system access.

- This is in contrast to javascript in the browser which is sandboxed for security reasons(so webpages cannot do anything malicious on your system).

- This allows us to write software that runs natively on your computer such as a desktop app or server for a web app. Utilities such as readline which interact with the file system can only be utilized in node, not the browser.

---

## Callbacks and the Event Loop

- Callbacks allow us to write asynchronous code freeing up the main threads call stack to perform other tasks as we are waiting for some sort of input.

- In our below code we are using callbacks to pass a function to another
  function to be executed once we have user input. While we are waiting for the
  user input, the main thread of execution is freed up to perform other tasks.

---
