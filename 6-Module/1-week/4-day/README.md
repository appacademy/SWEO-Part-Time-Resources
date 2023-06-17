# M6 Wk1 D4 Intro To Python

## Functions are the fundamental building blocks of Python and mastering them is a big step on the road to Python mastery.
- Functions are now defined with the key word "def" js equivalant(function)
- The block of code that will run after our function is declared are the indented lines after the colon : symbol js equivalant({ })
```
def my_func(param1, param2):
    #anything code indented to this line will run when this function is invoked
    # the return keyword will end this code block
    return param1 + " " + param2

# note, if our function did not have a return key word, now that we have reset our indents to the baseline, the function code block has ended
print(my_func("python", "function"))

# js equivalant below
function myFunc(param1, param2) {
  return param1 + " " + param2;
};

console.log(myFunc("javascript", "function"));

```

### Common Function Errors
- In javscript we are used to a invoked function that has parameters running if no arguments were given to this invocation
- In Python we will receive an error if invoking a function that has parameters without arguments

```
# javascript example
function myFunc(param1, param2) {
    return param1 + " " + param2
}

console.log((myFunc()))


# python example
def my_func(param1, param2):
    return param1 + " " + param2

print(my_func())
```

### Adding n amount of Positional args
- In javascript we are able to use the rest operator (...) to add positional arguments to a function and store them in an array.
- We have something similar we can use is python. with the (*) operator

```
# js example
function add(a, b, ...args) {
  let total = a + b;
  console.log('extra args', args, Array.isArray(args))
  for (let n of args) {
    total += n;
  }
  return total;
}


add(2, 3, 4, 5) // returns 14

# python example
# by convention this i called args
def add(a, b, *args):
    total = a + b;
    print('extra args', args)
    for n in args:
        total += n
    return total

add(2, 3, 4, 5) # Returns 14
```

### Keyword arguments
- Unlike JavaScript, Python has the built-in ability to specify arguments by name without resorting to destructuring. You can just write the name of the parameter and an equal sign before the value you pass as a parameter. By specifying the names of the arguments, you can provide them in any order.

```
def greeting(name, saying="Hello"):
    print(saying, name)
greeting(saying = 'Documentation is life', name = "Will")
```

### Adding additional keyword arguments **kwargs
- alot like the "*" operator where we can toss in n number of arguments, we can also do this with keyword args, and instead of storing them in a tuple, it will store them in a dictionary.

```
def print_staff(greeting, **kwargs ):
    print('kwargs', kwargs, isinstance(kwargs, dict))
    for key, value in kwargs.items():
        print(greeting, key, "and I like", value)

print_staff(greeting = "Hello, my name is", Blake="video games", Andres="poker")
```

### Lambda functions
- Lambdas are the equivalant of arrow functions in js where can use one line for quick function returns

```
# js example
const nameToUpper = (name) => name.toUpperCase();

console.log(nameToUpper("Will'))

# python example
#func_name------lambda param : code to run/return
name_to_upper = lambda name: name.upper()

print(name_to_upper('Will'))
```

### List/Dict Comprehension
- List and Dictionary comprehension is a quick one line way to build new arrays or dictionaries depending on the logic you insert
- essentialy you insert your for loop inside of square brackets to build a new array pr curly to build a new dictionary.

```
names = ["Will", "Anthony", "Bob", "Larry", "Susan", "Bryan"]

names_upper = [name.upper() for name in names]

print(names_upper)

# adding an if conditional

names_start_with_b = [name for name in names if name[0] == 'B']

print(names_start_with_b)

# adding if, elif and else conditionals

# create a func where names that start with b are uppercase, names that start with a are lowercase, and all other names remain the same

# note that elif can not be used in list comprehensions so you need to do an else if

tranform_names = [name.upper() if name[0] == 'B' else name.lower() if (name[0] == 'A') else (name) for name in names]

print('here', tranform_names)

```

- side note it is not recommended to use list comprehension for something this complex.
- at the end of the day are code should be readable and maintable, which this is the exact opposite

### Dictionary comprehension

```
names = ["Blake", "Andres", "Yake", "Nick", "Susan", "Bryan"]

people_dict = {i: names[i] for i in range(len(names))}

print(people_dict)
```
