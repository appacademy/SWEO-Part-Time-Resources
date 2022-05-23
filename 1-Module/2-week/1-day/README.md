# W2D1

- Quick note: I have fixed the links here in the READMEs and they will now be working when I post the problems in slack as well. 🙂 Also, starting today you will start receiving strikes. Things to remember to avoid a strike:
  - do your evening report
  - be here on time with camera on

0. Assessment! (1hr)

    1. <span style="color:#cd1d1d;">First step when you are stuck:</span>
        1. <span style="color:#cd1d1 d;">**examine inputs and outputs** </span> in the examples.
            1. what data is going in to the function(arguments),  
            2. what data are they expecting to get back from the function (is it to return a number?, boolean?, an array?)
            3. Read the question again
    2. <span style="color:#cd1d1d;">**Console.log Before Return**</span>:
          1. Put your return values in variables, then console.log before returning to make sure you're getting what you expect.
1. Study Workshop
2. Study Review Day
   1. Nested Loops 
      1. **VERY IMPORTANT** to learn as it's a building block for assessment 2.
   2. **HOMEWORK** (Reverse Classroom)
      1. Watch videos, do the reading, this is how we are introduced to the new content
      2. Applying what we learn from homework to code / solve problems during class.

---

## Assessment - 1hr

Must have your cameras on and screen is sharing.

You have access to:

- aA open
  - including homework
  - problems you did
  - REPL (to run code)
- MDN
- any code you have written outside of code from previous assessments.
- US! (but to elaborate and explain question)
- VSCode

You are not permitted to use:

- Google
- Notes
- lecture notes
- PREVIOUS ASSESSMENTS ARE NOT ALLOWED
- anything not in the listed resources

During this time we will only answer questions about technical issues and
questions about clarifying what is expected of you.

---

## How to Study Workshop

Go through and follow the [workshop on AAOpen](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-2---intermediate-functions/how-to-study-workshop).

---

## Solo Study Day: Nested Loops + Early Start on Homework

`Nested Loops`

- Watch [Nested Loop Homework Video Review](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/nested-loops)

```js
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```

`Pairs In Arrays`

- Watch [Pairs In Arrays Homework Video Review](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/pairs-in-array)

```javascript
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = 0; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

![Pairs In Arrays]

`Unique Pairs In Arrays`

- Watch [UNIQUE Pairs in Arrays Homework Video Review](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/unique-pairs-in-array)

```js
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

![Unique Pairs In Arrays]

---

### Array Review

- [Min Value](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/min-value----)
- [Add To Array](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/add-to-array---research)
- [Remove from Array](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/remove-from-array---research)

### Nested Loops Recommend Problems

- [Pairs Maker](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/pairs-maker)
- [Two Sum](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-1---intro-to-javascript/two-sum)

---

[unique pairs in arrays]: ./images/unique_pairs_in_arrays.png
[pairs in arrays]: ./images/pairs_in_arrays.png
