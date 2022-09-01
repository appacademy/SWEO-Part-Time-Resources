# `M3W3D4`

> **Remember we are out for Labor day weekend this weekend, so there will not be class on Saturday Sept. 3rd or Monday Sept. 5th. The Practice Assessment will be released at the end of class today and a walkthrough video will be released soon after.**

> ## `Helpful Links`
> [MDN String Escape Sequences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)<br>
> [JSON Linter (to test if JSON is valid or not)](https://jsonlint.com/)

## `JSON`

`JSON` stands for `JavaScript Object Notation`.

`JSON` is just a way to format text. It's basically just a stringified version of `JavaScript`.

<jsliteralvsjson>

You may write a `string` in `JS` like this:

```js
'How now "brown" cow'
```

When it gets converted to `JSON` it would be:

```js
"How now \"brown\" cow"
```

- `JSON` **ALWAYS** uses *`double quotes`*
- the `\` is the `escape character`, if you've forgotten
- can only have `strings` on one line
- have to make a note of new lines with `\n`
- Check out the `string escapes` in the helpful links for more info.

```js
// multiline string in javascript
`"For behold! The storm comes, 
and now all friends should gather together
lest each singly be destroyed" -Gandalf`
```

```JSON
// same string in JSON
"\"For behold! The storm comes,\n and now all friends should gather together \n lest each singly be destroyed\" -Gandalf"
```

- Same goes for including `arrays` in your `JSON`.

```js
// JS
[1, 2 ,3]
```

```JSON
// JSON
"[1, 2 ,3]"
```

- And the same goes for objects
- The difference is that the keys need to be wrapped in double quotes as well, if the value of the key is a string, that should again be wrapped in double quotes.

```js
// JS
{ type: 'cat', name: 'mittens', age: 1, alive: true }
```

```JSON
// JSON
"{\"type\":\"cat\",\"name\":\"mittens\",\"age\":1,\"alive\":true}"
```

- Changing our `data` to a `string` is known as **`serialization`**
- Changing a `string` into `data` is known as **`deserialization`**

---

## `Converting JS to JSON and Back`

- **`JSON.stringify(value)` turns the value into a `JSON` `string`.**
- **`JSON.parse(str)` turns the `JSON` `string` into a `JS Object`.**

```js
const arr = ['one', 2, 3.1, {four: 4, five: 5}];
let json = JSON.stringify(arr);
console.log(json);
// ["one",2,3.1,{"four":4,"five":5}]

let js = JSON.parse(json);
console.log(js)
// [ 'one', 2, 3.1, { four: 4, five: 5 } ]
```

- **You will almost NEVER write raw JSON, but you need to be able to read it and understand how it works.**

## `Projects`

> Today will be all project time. There will be a walkthrough 30m before the end of class for HTTP Basics.

[HTML Templating](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-15---http--rest--and-servers/practice--html-templating)

[HTTP Basics in JSON](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-15---http--rest--and-servers/http-basics-in-json)

[Adventure Game Navigation](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-15---http--rest--and-servers/adventure-game-navigation-long-practice)
