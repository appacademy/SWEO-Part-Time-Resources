# M6-W1-D2

Python Introduction

- Booleans
- Strings
- Numbers

## Booleans

```js
//JS
true && false
true || false
true && !false
```

```py
#Py
True and False
True or False
True and not False
```
```js
//falsy values for js
false
0
-0
0n
"",'',``
null
undefined
NaN
```

```py
#falsy values for py
None
False
0
0.0
''
[]
()
{}
set()
range(0)
```

Truthy and Falsy values (Boolean type coercion) differ in JS and Python. One common gotcha is empty
collections (reference types) are truthy in JS and falsy in Python.

## Strings

Strings are basically the same in python and JavaScript, but the methods
assosiated with strings are different.

```js
//JS
'hello'.length; //5
'hello'[4] //o
'hello'.slice(0,2) //he
'hello' + ' ' + 'world'
let word1 = 'hello';
let word2 = 'world';
let sentence = `${word1} ${word2}!`
```

```py
#Py
len('hello') #5
# negative indexing is a thing
'hello'[4] or 'hello'[-1] #o
# built in range functionality is a thing
'hello'[0:2] # he
'hello' + ' ' + 'world'
'hello ' * 3
word_1 = 'hello'
word_2 = 'world'
format_sentence = '{0} {1}!'.format(word1, word2)
fstring_sentence = f'{word1} {word2}!' #fstring, newest syntax introduced in python 3.6
questions = 20
num_correct = 10
score = f'You got {num_correct/questions:%}'
score = f'You got {num_correct/questions:.0%}'
```

[format spec](https://docs.python.org/3/library/string.html#formatspec)

## Numbers

int  -- whole numbers, both positive and negative
float -- numbers with a decimal point

integer division -- whole number division

```py
#Py
print(20 / 6) # 3.33333
print(20 // 6) # 3 integer division
```

++ and -- do not exist in python