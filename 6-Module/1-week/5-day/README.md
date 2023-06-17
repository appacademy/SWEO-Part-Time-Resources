# M6W1D5 Notes

# Tuples

- Tuples are very similar to lists in functionality, however the big difference is they are immutable
- Tuples may have different types of data such as strings, numbers, booleans, etc.
- A common use case for a tuple is for data that should not be changed
- We might store a tuple inside of a list for easier reading and access
- If you create a tuple with only one item inside of it you must put a comma after the data, otherwise python will not recognize your tuple correctly

# List/Dictionary Comprehension
- An easy way to create a new list/dictionary, especially when you want to apply logic to each item in a list/dict
- Very simliar to a JavaScript .map() function
- Essentialy you insert your for loop inside of square brackets to build a new array or curly brackets to build a new dictionary.

```
names = ["Jesse", "Edward", "Nick", "Terry", "Ryan", "Adam"]

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

# Dictionary comprehension

```
names = ["Jesse", "Edward", "Yake", "Nick", "Susan", "Bryan"]

people_dict = {i: names[i] for i in range(len(names))}

print(people_dict)
```
