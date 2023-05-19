"""
Naming conventions

variable = 33


my_variable = 42

def my_function():
    pass
    return

class MyClass:
    pass

#f you see a variable in all caps, you should treat it as a constant, even though
#the Python language won't actually prevent you from changing it
MY_CONSTANT = 42

"""



# (*)args: any extra arguments that don't have a positional parameter. Type is a Tuple. Similar to rest parameter in js
# default: keyword argument with default value
# (**)kwargs: any arguments with a key=value pairing. Type is a Dictionary.

# def my_func(positional, **kwargs):
#   print(positional, kwargs)
# my_func('hello', test='test', world='earth')

# def parameters(positional, position2, *args, **kwargs):
#   print(positional, position2, args, kwargs)
# parameters('hello', "Will", 1,2,3,4, test='test', world='earth')




### Keyword arguments
def greeting(name, saying="Hello"):
    # print(saying, name)
    print(name, saying)

# greeting(name = "Will")
# greeting(saying = 'Documentation is life', name = "Will")


# Lambda Functions
"""
js example
const nameToUpper = (name) => name.toUpperCase();
console.log(nameToUpper("Will'))

"""
#func_name------lambda param : code to run/return
# name_to_upper = lambda name: name.upper()

# print(name_to_upper('Will'))


# List Comprehension
names = ["Will", "Anthony", "Bob", "Larry", "Susan", "Bryan"]

# List Comprehension
# names_upper = [ele.upper() for ele in names]
# print(names_upper)
# print(names)

# # adding an if conditional

# names_start_with_b = [ele for ele in names if ele[0] == 'B']
# print(names_start_with_b)
# print(names)



"""
- side note it is not recommended to use list comprehension
for something as complex as the below.
- at the end of the day are code should be readable
and maintable, which this is the exact opposite

"""

# transform_names = [name.upper() if name[0] == 'B' else name.lower() if (name[0] == 'A') else (name) for name in names]

# print(transform_names)








#Dictionary Comprehension
# names = ["Blake", "Andres", "Yake", "Nick", "Susan", "Bryan"]

# people_dict = {i: names[i] for i in range(len(names))}

# print(people_dict)
