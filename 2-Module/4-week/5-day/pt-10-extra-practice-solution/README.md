# Week 5 Practice Problems

## Usage

1. Clone the skeleton.
2. Rename the folder to `firstname-lastname-week-5-practice-problems`. For
   example, if your name is "Jane Doe", then name your folder
   `jane-doe-week-5-practice-problems`
3. `cd` into the folder and `npm install` to install dependencies
4. `mocha` to run all specs
5. Your objective is to implement the functions in `/problems` to pass all specs

## Letter Processing Problem

You will be filling out the code in three different classes to implement a
letter processor.

- `LetterBin` - `./problems/02-letter-bin.js`
- `LetterRoom` - `./problems/03-letter-room.js`
- `LetterProcessor` - `./problems/04-letter-processor.js`

One class, `Letter` in `./problems/letter.js`, is already implemented for you
and is there for you to use in the `LetterBin` class.

A `LetterProcessor` has a `LetterRoom` that holds a queue of `LetterBin`s. Each
`LetterBin` has a stack of `Letter`s.

The `LetterBin` should be able to add a `Letter` to the top of its stack and
remove a `Letter` from the top of its stack.

The `LetterRoom` should be able to add a `LetterBin` to the end of its queue and
remove a `LetterBin` from the beginning of its queue.

The `LetterProcessor` can add a `Letter` to the last `LetterBin` added to the
`LetterRoom`'s queue. It can also remove a `Letter` from the first `LetterBin`
added to the `LetterRoom`'s queue.

The catch is that there is an arbitrary maximum amount of `Letter`s that a
`LetterBin` can hold, `maxLettersPerBin`. When a `LetterBin` gets full, another
`LetterBin` should be added to the `LetterRoom`'s queue. The next `Letter` added
should be added to the new `LetterBin` at the end of the queue.

### `LetterBin`

The first class is called `LetterBin`. `LetterBin` should hold a stack of
letters. Each letter should be an instance of the `Letter` class from the
`./problems/letter.js` file. There are methods on the `LetterBin` class to add
and remove `Letter`'s and to get the total number of letters in the stack.

Methods to implement on the `LetterBin` class:

- `constructor()` - initializes the stack
- `numLetters()` - returns the total number of `Letter`s in the stack
- `addLetter(message)` - creates a new `Letter` and adds it to the top of the
  stack and returns it
- `removeLetter()` - removes the `Letter` at the top of the stack and returns it

Fill out the methods of the `LetterBin` class in the
`./problems/02-letter-bin.js` file and test them with the following command:

```bash
npm test test/02-letter-bin-spec.js
```

### `LetterRoom`

The second class is called `LetterRoom`. `LetterRoom` should hold a queue of
`LetterBin`'s. There are methods on the class to add and remove a bin from the
queue. There are also methods to get the first and last bin in the queue without
removing them. Finally, there's a method to get the total number of bins in the
queue.

Hint: You may want to create a separate helper `Class` that will help you
implement a queue data structure.

Methods to implement on the `LetterRoom` class:

- `constructor()` - initializes the queue
- `getLastBin()` - finds and returns last `LetterBin` added to the queue
- `getFirstBin()` - finds and returns first `LetterBin` added to the queue
- `numBins()` - returns the total number of `LetterBin`s in the queue
- `addBin()` - creates a new `LetterBin` and adds it to the end of the queue and
  returns it
- `removeLetter()` - removes the `LetterBin` at beginning of the queue and
  returns it

Fill out the methods of the `LetterRoom` class in the
`./problems/03-letter-room.js` file and test them with the following command:

```bash
npm test test/03-letter-room-spec.js
```

### `LetterProcessor`

The final class is called `LetterProcessor`. `LetterProcessor` should be
initialized with a maximum amount of letters in can add in a bin,
`maxLettersPerBin`. Each instance should have its own `LetterRoom`. Implement
the method to add a letter to last `LetterBin` added to its `LetterRoom`. The
letter should be added to the top of that `LetterBin`'s stack.
Implement the method to remove a letter from the first `LetterBin` added to
`LetterProcessor`'s `LetterRoom`. The letter should be removed from the top of
that `LetterBin`'s stack.

Methods to implement on the `LetterProcessor` class:

- `addLetter(message)` - adds a `Letter` to the last `LetterBin` added to the
  `LetterRoom` (if that `LetterBin` is full, adds a new `LetterBin` to the
  `LetterRoom` with the new `Letter` in it instead)
- `removeLetter()` - removes a `Letter` from the first `LetterBin` added to the
  `LetterRoom` and if that `LetterBin` is empty after removing the `Letter`,
  remove that `LetterBin` from the `LetterRoom`. If there are no more `Letter`s,
  then `console.log` `'No more letters to process!'`.

Fill out the methods of the `LetterProcessor` class in the
`./problems/04-letter-processor.js` file and test them with the following
command:

```bash
npm test test/04-letter-processor-spec.js
```


[week-5-extra-practice-problems]: https://github.com/appacademy/assessment-for-week-05-v2-practice-a-extra-practice-problems