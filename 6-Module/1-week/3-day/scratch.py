# # Assigning Variables

# count = max = min = 1
# print(count)
# print(max)
# print(min)

#######################################

# # Change value/type of variable

# a = 17
# print(a)         # => 17
# a = 'seventeen'
# print(a)         # => seventeen

#######################################

# number = 10
# number /= 10
# print(number)

# number = float('nan')
# print(number)

# a = '7'
# a /= 2
# print(a)
# print('hello')

# # TypeError performing a math operation between a string and a numberic type

# a = '7'
# a /= 2
# print(a)

#######################################

# # None Type

# my_var = None
# print(my_var is None)
# print(my_var)

#######################################

# # Duck Typing example

# string = 'hello'
# number = 1
# print(number.index(1)) # This code will throw a AttributeError, because an int does not have a index() method defined in it.
# print(string.index('e')) # A string DOES have a index() method defined, so this code will work.

#######################################

# try/except blocks

# No try/except

# a = 321
# print(len(a))

# try:
#     a = 321
#     print(len(a))
# except TypeError:
#     a = str(321)
#     print(len(a))

# Does not catch the TypeError because I specified I only wanted it to catch a AttributeError

# try:
#     a = 321
#     print(len(a))
# except AttributeError:
#     a = str(321)
#     print(len(a))

# Naming errors and printing them

# try:
#     a = 321
#     print(len(a))
# except TypeError as error:
#     print(f'ERROR! {error}')


# else

# def divide(x, y):
#     try:
#         result = x / y
#     except ZeroDivisionError:
#         print("Cannot divide by zero")
#     else:
#         print("Result is", result)

# divide(5, 5)
# divide(5, 0)


# finally

# def divide(x, y):
#     try:
#         result = x / y
#     except ZeroDivisionError as error:
#         print("Cannot divide by zero")
#         print(f'Error type: {error}')
#     else:
#         print("Result is", result)
#     finally:
#         print("Finally...")

# divide(5, 5)
# divide(5, 0)


# returning in try or finally, which one returns?

# def greeting():
#     try:
#         return "Hey, friend."
#     finally:
#         return "Fun times!"

# print(greeting())



# Another way? Duck typing

# # Try a number - nothing will print out
# a = 321
# if hasattr(a, '__len__'):
#     print(len(a))

# # Try a string - the length will print out (4 in this case)
# b = "5555"
# if hasattr(b, '__len__'):
#     print(len(b))

# raise errors

# raise TypeError # no message
# raise TypeError('Wrong type!') # with message

# for loops

# range(stop) # start value defaults to 0 if you only provide one argument, range creates a sequence from 0 to stop
# range(start, stop, step)
# help(range)

# print('My name is')
# for i in range(5):
#    print('Jesse Brooks (' + str(i) + ')')

# range with start, stop
# print('My name is')
# for i in range(0, 5):
#    print('Jesse Brooks (' + str(i) + ')')

# range with start, stop, step
# print('My name is')
# for i in range(0, 5, 5):
#    print('Jesse Brooks (' + str(i) + ')')
