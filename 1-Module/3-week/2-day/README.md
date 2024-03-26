# M1-W3-D2

- Pair Programming
- Objects Intro

## Pair Programming Workflow

- Driver/Navigator
- Time based switching

## Discussion

- FAQ
  - What if my pair is struggling with the material?
    - Pay it forward! Try to explain concepts they struggle with.
    - Play it like you're the Senior Dev and you're helping a Junior Dev
      understand a new concept. It'll be slow, but you can flex those 'explaining muscles'.
  - What if I'M struggling with the material?
    - Be honest. Let your pair know that you're unsure of the material.
    - Be okay with trying things and being wrong.
    - Don't be embarrassed, it's normal.
  - What if BOTH of us are struggling with the material?!? - This WILL happen, and that's fine! The point of projects are to
    actively LEARN, not to already know. Code until you're stuck for > 10 mins, then call a TA in for help.
- Some important notes
  - Set up your switching system and STICK TO IT. Set alarms so you're
    always switching between driver and navigator. Even when a TA comes in
    makes sure you're sticking to the system.
  - If you're more experienced, don't leave your partner in the dust.
    When you go into a job interview, you're going to be asked to explain code,
    so get your practice in now! If you can't say, out-loud, and explain a
    concept to your pair, maybe you don't know it as deeply as you think.
  - If you run into any issues while pairing please let me know. We want to make
    sure everyone feels safe, supported, and productive during pairing sessions.

## Arrow Functions

An arrow function expression is a compact alternative to a traditional function expression

- Implicitly return, you do not need to use the return keyword
- Common use cases:
    - One liners (solving a coding problem in one line, instead of using multiple)
    - "Advanced" for loop array methods such as map, filter, forEach
    - Callback functions (covering this next week, basically just passing in a function to another function argument)

## Objects 

An object is an unordered reference data type that is at the core of JavaScript
functionality. Objects store `values` at specific reference points called `keys`

Generally objects are used to store related data, for example, a dog, or a person

```js
let dog = {
  name: "Cali",
  age: 5,
  breed: "mixed",
  size: {
    heightInFt: 3,
    weightInLbs: 45,
  },
};

//how would I print the first name?

//how would I add a location key with the value of 'TN'?

//how would I change her age to 1001?

//how would I print her weight?
```

### Dot Notation

Keys are generally strings and so rather than always needing to key into an
object using bracket notation `object[key]` you can use dot notation
`object.key`.

```js
let obj = {
  first: "a",
  second: "b",
  third: "c",
};

console.log(obj.first, obj["first"]);
```

### Using Variables as Keys

Often when programming the goal is to write functions and processess that can be
generalized, one way to accomplish this goal is to use variables. This is a
common pattern when working with objects.

When using variables as keys you cannot use dot notation and must use bracket
notation.

```js
let someVariable = "firstName";
let some = "second";
let variable = "Name";
let time = "FrEQUENcY";

let obj = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
};

console.log(obj[someVariable]);
console.log(obj[some + variable]);
console.log(obj[time.toLowerCase()]);
```