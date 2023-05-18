# num = 1.2
# print("INT: ", int(num))
# print("FLOAT: ", float(num))

# #LISTS
# lst = ['h', 'i']
# print("LST: ", lst)
# lst1 = list('hi')
# print("LIST1: ", lst1)

# #Dictionary
# dictionary = {"key": "value", "key2": "value2"}
# print("DICTIONARY: ", dictionary)
# dict1 = dict(key = "value")
# print("DICT1: ", dict1)




# simple error catching
# a = 321
# # print(len(a))   #throws an error
# try:
#     print(len(a))
# except:
#     print('Silently handle error here')
#     # Optionally include a correction to the issue
#     a = str(a)
#     print(len(a))

# a = '7'
# a /= 2
# print(a)

# print (2 == 2.0)    # => True
# print (2 is 2.0)

# my_var = None
# print(my_var is None)

# a = 321
# # print(len(a))
# try:
#     print(len(a))
# except:
#     print('Silently handle error here')
#     # Optionally include a correction to the issue
#     a = str(a)
#     print(len(a))

# catching named errors
# a = 100
# # b = "5"
# # b = 0
# b = 5
# try:
#     print("TEST", a / b)
# except ZeroDivisionError:
#     # print("Cannot divide by zero")
#     pass
# except (TypeError, NameError) as e:
#     print("ERROR!", e)
# finally:  #always runs
#     print("Finally...")



#while loop
# spam = 0
# while spam < 5:
#   print('Hello, world.')
#   spam = spam + 1

#break out with break
# spam = 0
# while True:
#   print('Hello, world.')
#   spam = spam + 1
#   if spam >= 3:
#     break

#For loop
# animal_list = ['cat', 'bat', 'rat', 'elephant']


# for ele in range(5):
#    print(ele)


# for animal in animalList:
#    print(animal)
#    print('priting: (' + str(apple) + ')')

# name = "Will"
# if name == 'Will':
#     # name = "bob"
#     print('Hi, Will.')
# print(name)

# if (name == 'Will'):
#     print('Hi, Will.')

# name="Anthony"
# if name == 'Will':
#     pass
#     # print('Hi, Will.')
# else:
#     print('Hello, Great TA!!!!.')

name = "Waldo"
if name == 'Kristen':
    print('Hi, Kristen.')
elif name == 'Philip':
    print('You are not Kristen.')
else:
    print('Where is Waldo?')
else:
    print('You are neither Kristen nor a little kid.')
print(name)
#Tuples are defined using parentheses () or the tuple() constructor. Here's an example:


"""
#Tuples can contain elements of different types, including numbers, strings, booleans,
and even other tuples. For example:
"""

mixed_tuple = (1, "hello", True, (2, 3))

"""
To access individual elements of a tuple, you can use indexing.
Like lists, the indexing starts at 0. For example:
"""
# print(my_tuple[0])  # Output: 1
# print(my_tuple[2])  # Output: 3
# my_tuple[0] = -1  # This will throw an error

# Tuples also support slicing, which allows you to extract a subset of elements. For example:
# print(my_tuple[1:4])  # Output: (2, 3, 4)


"""
Since tuples are immutable, you cannot modify their elements or change their size after creation.
However, you can perform operations like concatenation and repetition to create new tuples.
For example:
"""
# my_tuple = (1, 2, 3, 4, 5)


# new_tuple = my_tuple + (6, 7)  # Concatenation
# # print("NEW TUPLE", new_tuple)  # Output: (1, 2, 3, 4, 5, 6, 7)

# repeated_tuple = my_tuple * 2  # Repetition
# print("NEW", repeated_tuple)  # Output: (1, 2, 3, 4, 5, 1, 2, 3, 4, 5)

# print("MY TUPLE", my_tuple)  # Output: (1, 2, 3, 4, 5)

# def fill_tuple(tup, val, length):
#   lst = []
#   for x in tup:
#     lst.append( x +(val, ) * (length - len(x)))

#   return tuple(lst)

# orignal_tuple = ((58, 1, 5), (0, 3), (45, ), (24, 23))
# print("original tuple before func: ", orignal_tuple)
# print("tuple func: ", fill_tuple(orignal_tuple, 2, 3))    #> ((58, 1, 5), (0, 3, 2), (45, 2, 2), (24, 23, 2))
# print("original tuple after func: ", orignal_tuple)

# mixed_tuple = (1, "hello", True, (2, 3))
# print(mixed_tuple[3][1])
# hello_element = mixed_tuple[1]
# print(hello_element)
