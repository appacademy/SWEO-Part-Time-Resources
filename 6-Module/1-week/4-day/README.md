# `M6W1D4`

## Functions

-   Naming convention is snake_case
-   `function` replaced by `def` and `{}` replaced by `:` and an indented block

```py
def i_am_a_function():
  print('fun fun function')
i_am_a_function()
```

---

### Function Parameters and Arguments

JS has exclusively positional arguments. 
Python has positional arguments and keyword arguments.

You should order parameters and arguments in this order.

1. positional arguments
2. \*args
3. keyword arguments with default values
4. \*\*kwargs

```py
# positional: a positional argument, works the same way as JS
# (*)args: any extra arguments that don't have a positional parameter. Type is a Tuple. Similar to rest parameter in js
# default: keyword argument with default value
# (**)kwargs: any arguments with a key=value pairing. Type is a Dictionary.
def parameters(positional, *args, default='default', **kwargs):
  print(positional, args, default, kwargs)
parameters('hello', 1,2,3,4, test='test', world='earth')
# It is considered best practice to use positional arguments for parameters without default values and keyword arguments for parameters with default values
def default_value(a, b='b'):
  print(a, b)
default_value('a')
default_value('a', 'c')
default_value('a', b='d')
```

---

### Anonymous Function

Lambda functions are not as flexible as arrow functions in JS. While arrow
functions can be treated mostly like a normal function, a lambda function is
intended to be a simple one liner. It is meant to do a single task. Great where
it is able to used, but not a replacement for normal functions.

```js
const yell = (input) => input.toUpperCase();
console.log(yell('hello'));
```

```py
yell = lambda input: input.upper()
print(yell('hello'))
```

---

## Structured Data

---

### Sequences

Each item in a sequence is assigned an index which determines the order of the
sequence. Zero indexed.

-   strings
-   lists
-   tuples
-   ranges

---

### Collections

Unordered data structures. Instead of indexes, collections use hashable values.
A hashable value is something which never changes during its lifetime. All
immutable data types are hashable no mutable data types are hashable.

-   dictionaries
-   sets

---

### Iterables

They are your collections and sequences

---

## Data Types

---

### List

Very similar to JS arrays, lists are used to store a sequence of item. Typically
lists are homogeneous (of one type) by convention, but the data types itself
does not require that.

Lists are mutable.

Lists are instantiated using `[]`

---

### Range

Ranges are an immutable list of numbers.

Ranges are declared using one to three parameters

-   start: (optional -- default value = 0) first number in the sequence
-   stop: (required) -- next number past the last number in the sequence
-   step (optional -- default value = 1) - the difference between each number in
    the sequence.

---

### Tuple

Very similar to Lists, the biggest difference is that tuples are immutable.

Tuples are instantiated using `()`

---

### Dictionary

A mappable collection where a hashable value is used as a key to reference a
value. Very similar to JS objects.

Dictionaries are instantiated using `{key:value}`

---

### Set

A set is an unordered collection of unique hashable values.

Sets are instantiated using set(), `{value, value}`

---

## Lists

```py
my_empty_list = []
print(my_empty_list) #> []
nums = [1,2,3,4]
print(nums)        #> [1,2,3,4]
print(nums[0])     #> 1
print(nums[3])     #> 4
print(nums[-1])    #> 4
print(nums[1:2])   #> [2]
print(nums[::2])   #> [1, 3]
print(nums[20])    #> IndexError: list index out of range
print(len(nums))   #> 4
print('total', sum(nums))   #> 10
print('max', max(nums))     #> 4
print('min', min(nums))     #> 1
print('avg', sum(nums) / len(nums)) #> 2.5
print('reverse', sorted(nums, reverse=True)) #> [4,3,2,1]
nums.append(5)
print(nums) #> [1,2,3,4,5]
nums.remove(4)
print(nums) #> [1,2,3,5]
del nums[0]
print(nums) #> [2,3,5]
del nums[:]
print(nums) #> []
other_nums = [5,6,7,8]
# *: splat operator, unpacks data from the collection, similar to spread operator
print([*nums, *other_nums]) #> [1,2,3,4,5,6,7,8]
```

Common list methods:

-   append: adds an element to the end of the lists
-   remove: remove the first ited with the specified value
-   copy: returns a copy of the list
-   insert: adds an element at the specified position
-   pop: removed an element at the specified position
-   sort: sorts the list

Useful list methods:

-   count: return the number of times x appears in the list
-   reverse: reverse the elements of the list in place
-   extend: extend the list by appending all the items from the iterable
-   clear: remove all items from the list
