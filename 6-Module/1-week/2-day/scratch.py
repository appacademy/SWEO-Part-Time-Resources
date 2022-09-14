# comment in python

'''
    Multi Line comment in Python

'''

# linter

# variables in python
# no const let or var

from re import M


variable = 'something'

# snake case rather than camel

some_name = 'snake variable'

# functions in python -- high level


def my_func(param1, param2):

    # if True:
    # print('do some stuff')

    return ''


# print('not inside the function block')


# boolean
# True and False
true_var = True

# logical operators -- truthy/true vs True

# high level is vs ==
# print(0 == False)  # True
# print(0 is False)  # False

# print(dir(''))

# falsey vs False


# string: ''
# list: []
# tuple: ()
# dictionary: {}
# set()
# range(0)

# comparison
# == is equality
# 'is' leyword is identity
'''
< - less than
> - greater than
<=
>=

'''
some_var = True

# print(True and True)  # True
# print(True or False)  # True
# print(not True or not False)

# if some_var is True and ((1 + 1) == 2):
# print('this is true')

# if 1 is 1:
#     # print('')


def number_less_than_ten(num):
    '''
    this function will return True is the given argument is less than ten
    otherwise it will return False
    '''
    return num < 10


# print(help(number_less_than_ten))


# strings and string index
'''
tripple quote is multi line string
'''
'this is a string'
'This is a string\'s too'

my_string = 'baylen'
# start : end for a range
# index range
# print(my_string[0:-1])
# out of range
# print(my_string[10])  # this will break becuase index is out of range

# len() get the length of something
# print(len(my_string))

# index function, get the index of the sub string
# print(my_string.index('a'))
# count, count the number of times a string appears
# print(my_string.count('b'))

# # formatted string and concat
# print("gold" + "fish")    # => goldfish

first_name = 'Byalen'
location = 'Dallas'


# print('my name is {0} and im from {1}'.format(first_name, location))

# print(f'my name is {first_name}  and im from {location}')

# int is a number with no decimal
# float is a number with a  decimal


'''
+ (addition)
- (subtraction)
* (multiplication)
/ (division)
% (modulo)
'''

'''
** (exponent)
// (integer division)
'''

# print(2**0)

# print(f'{100} divided by {93} is {100 // 93} with a remainder of {100 % 93}')

# list(filter(list(str(input())), lambda x: x - 1))

num1 = str(int() + 3) + 'baylen'
num2 = int('11111') + 1
num3 = list(str(num2))
list_of_nums = [int(i) for i in num3]
print(list_of_nums)

# NoneType


def return_none():
    if True:
        print('hello')

    return None


print(return_none() is not None)
