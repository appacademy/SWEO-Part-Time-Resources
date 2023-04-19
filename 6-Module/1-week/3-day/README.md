# M6 Wk1 D3 Intro To Python

# [Python Docs](https://docs.python.org/3/)

# Python Arithmetic Operators
- "+" Addition print( 1 + 2 )
- "-" Subtraction print( 2 - 1 )
- "*" Multiplication print( 2 * 2 )
- "/" Division print( 4 / 2 )
- "%" Modulus print ( 26 % 5)
- "\*\*" Exponentiation print( 2 \** 2)
- "//" Floor Division print( 12 // 5 ) - js equivelant (Math.floor( 12 / 5 ))



## Python Datatypes
 - Integer numeric datatype without decimals
    - num = 1, num = int(1), isinstance(<variable_your_checking>, str)
 - Float numeric datatype with decimals
    - num = 1.2, num = float(1.2), isinstance(<variable_your_checking>, float)
 - String is a collection of alphabetic letters, words or other characters.
     - string = "string", string = 'string', isinstance(<variable_your_checking>, str) -- immutable
 - List (JS equivelant Array) is an ordered and changeable collection of data objects
    - lst = ['h', 'i'], lst = list('hi'), isinstance(<variable_your_checking>, list) -- mutable
 - Dictionary (Js equivelant Object) is a list of comma-separated key-value pairs wrapped around curly braces ({}).
    - dictionary = {},  dict(key = "value"), isinstance(<variable_your_checking>, dict) -- mutable
 - Tuple is an ordered and changeable collection of data objects
    - tup = ('h', 'i'), tup = tuple('hi), isinstance(<variable_your_checking>, tuple) -- immutable
 - Set (Js equivelant Set) an unordered and changeable collection of unique data objects
    - my_set = set('hi'), my_set.add('bye), my_set.discard('bye'), isinstance(<variable_your_checking>, set) -- mutable

## Comparison Operators
  - Equality
    - \> (greater than)
    - < (less than)
    - \>= (greater than or equal to)
    - <= (less than or equal to)
    - == (value is equal to, but does not share the same spot in memory)
    - != (value is not equal to)
  - Logical
    - not
    - and
    - or
  - Special Operators
    - ( is ) True if the operands are identical (refer to the same object) js equivelant (===)
    - ( is not )True if the operands are not identical (do not refer to the same object) js equivelant (!==)

## If Statements
 ```
    if <insert boolean logic or evaluations>:
        # run this code
        pass
    elif <insert boolean logic or evaluation>:
        # run this code
        pass
    else:
        # run this code
        pass
```

## While Statements
```
lst = ["hey", "how", "are", "you", "?"]
# define your variable for tracking in your while statement
i = 0
while i < len(lst):
    #run this code
    print(i, lst[i])
    i +=1
# js equivelant below
let arr = ["hey", "how", "are", "you", "?"]
let i = 0
while (i < arr.length) {
    console.log(i, arr[i])
    i+=1
}
```

## Python Range Function
 - The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.
```
our_range = range(7)
print(our_range)
our_second_range = range (0, 7)
print(our_second_range)
```

## For statements in python
```
lst = ["hey", "how", "are", "you", "?"]

# looping with range
for i in range(0, 2):
    # do the thing
    print(i, lst[i])

# looping with range function with len function
for i in range(0, len(lst)):
    # do the thing
    print(i, lst[i])

# looping through items in list example
for item in lst:
    # do the thing
    print(item)

# js loop equivelant
let arr = ["hey", "how", "are", "you", "?"]
for (let i == 0; i < arr.length; i++) {
    # do the thing
    console.log(i, arr[i])
}
```
