# # Assigning Variables

# count = max = min = 0
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

# Duck Typing example

string = 'hello'
number = 1
# print(number.index(1)) # This code will throw a AttributeError, because an int does not have a index() method defined in it.
print(string.index('e')) # A string DOES have a index() method defined, so this code will work.

#######################################
