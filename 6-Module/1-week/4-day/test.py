# (*)args: any extra arguments that don't have a positional parameter. Type is a Tuple. Similar to rest parameter in js
# default: keyword argument with default value
# (**)kwargs: any arguments with a key=value pairing. Type is a Dictionary.
def parameters(positional, position2, *args,  **kwargs):
  print(positional, position2, args, kwargs)
parameters('hello', "Will", 1,2,3,4, test='test', world='earth')



### Keyword arguments


def greeting(name, saying="Hello"):
    print(saying, name)
greeting(saying = 'Documentation is life', name = "Will")


# Lambda Functions
"""
js example
const nameToUpper = (name) => name.toUpperCase();
console.log(nameToUpper("Will'))

"""
#func_name------lambda param : code to run/return
name_to_upper = lambda name: name.upper()

print(name_to_upper('Will'))


# List Comprehension
# names = ["Will", "Anthony", "Bob", "Larry", "Susan", "Bryan"]

# names_upper = [name.upper() for name in names]

# print(names_upper)

# # adding an if conditional

# names_start_with_b = [name for name in names if name[0] == 'B']



"""
- side note it is not recommended to use list comprehension
for something as complex as the below.
- at the end of the day are code should be readable
and maintable, which this is the exact opposite

"""

# transform_names = [name.upper() if name[0] == 'B' else
#                     name.lower() if (name[0] == 'A') else (name) for name in names]

# print('here', transform_names)




#Dictionary Comprehension
# names = ["Blake", "Andres", "Yake", "Nick", "Susan", "Bryan"]

# people_dict = {i: names[i] for i in range(len(names))}

# print(people_dict)
