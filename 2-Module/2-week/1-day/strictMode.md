# Strict Mode Basics

Basically strict mode prevents you from unnecessarily poluting the global object and makes some things that js will not error out for, error out. It's a nice way to code responsibly. You don't have to use it, but it is helpful.

```js
'use strict'

let something = 'something'

sumthing = 'sumthing';
// if you try to reassign a variable and make a typo outside of strict mode, js will just create a new global variable and keep going. If you use strict mode you wont be able to do this, it will give you an error and allow you to fix your mistake and not use the incorrect variable in code below. (new variables can only be created using var/let/const)
```

There are many more things that strict mode checks for, if you have some spare time, check out [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode). It's got some pretty nice functionality! It's your choice whether or not to use it.
