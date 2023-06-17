# more on functions

# positional arguments
# (*)args: any extra arguments that don't have a positional parameter. Type is a Tuple. Similar to rest parameter in js
# default: keyword argument with default value
# (**)kwargs: any arguments with a key=value pairing. Type is a Dictionary.

# tuple1 = (1,2,3)
# print(tuple1)

# def some_func(num, string, name = 'Bob', age = '26', **kwargs):
#     print(num)
#     print(string)
#     print(kwargs)
#     print(name)
#     print(age)

# some_func(1, 'hello',  age = 20)



# Lambda Functions
"""
js example
const nameToUpper = (name) => name.toUpperCase();
name_to_upper = lambda name: name.upper()
console.log(nameToUpper("Will'))

"""

# def name_to_upper_regular_func(name):
#     return name.upper()

# name_to_upper_lambda = lambda name: name.upper()

# print(name_to_upper_regular_func('jesse'))
# print(name_to_upper_lambda('jesse'))

# list1 = [1,2,3,4]
# str1 = 'hello'

# print(list1)

# print(len(list1))
# print(len(str1))

# ranges, 1 to 3 parameters

# range1 = range(5)
# range2 = range(10, 20)
# range3 = range(10,20,5)

# print(range1)
# print(range2)
# print(range3)

list1 = [1,5,10]

# for i in range(len(list1)):
#     print(list1[i])


# range(start = 0, stop, step = 1)

# lists, are mutable

# print(list1)
# list1[0] = 5
# print(list1)

str1 = 'hello'

# str1[0] = 'z'

# print(str1)

# in operator

# .includes('aslf')

# print(1 in [1,2])
