# pylint: disable=invalid-name
# comment in python


'''
    Multi Line comment in Python

'''


# linter

# variables in python
# there is no variable keyword in python ie let, const , var
# no const let or var
# snake case rather than camel

i_create_a_variable = 'string'


# functions in python -- high level


# def my_func(params):
#     '''
#     test
#     '''
#     print('I am in the function')

#     if params:
#         print('inside the if statement')
#     print('inside the function here')


# print('I am not in the function')


# boolean
# True and False
true_var = True
false_var = False


# logical operators -- truthy/true vs True

# print(True and False)
# print(True or False)
# print(not True or not False)

# no tripple equals only ==
# high level is vs ==

# print('1' == 1)

# my_bool = 'if this is a string then I want to do some logic'

# print(1 > 0 is True)

# print(1 == True)
# print(1 is True)


# if my_bool is True:


# if 'myString':
#     print()


# print(dir(''))

# # falsey vs False

# 0
# string: ''
# list: []
# tuple: ()
# dictionary: {}
# set()
# range(0)

# # comparison
# # == is equality
# # 'is' leyword is identity
# '''
# < - less than
# > - greater than
# <=
# >=

# '''


# def number_less_than_ten(num):
#     '''
#     this function will return True is the given argument is less than ten
#     otherwise it will return False
#     '''
#     return num < 10


# print(help(number_less_than_ten))


# strings and string index
'''
tripple quote is multi line string
'''

# "this is a string"
# 'This is a string\'s too'
# # len() get the length of something
my_string = 'baylen'
my_list = [1, 2, 3, 4, 5]
# print(len(my_string), len(my_list))
# # start : end for a range not inclusive

# print(my_string[-1])

# print(my_string[0:3])

# print(my_string[4:])

# print(my_string[10:])
# # index function, get the index of the sub string

# print(my_string.index('a'))
# # # count, count the number of times a string appears
# print(my_string.count('a'))

# formatted string and concat

first_name = 'Byalen'
location = 'Dallas'

# print('My name is ' + first_name + ' and im from ' + location)

# print('hey my name is {0} and im from {1}'.format(first_name, location))

# print(f'My name is {first_name} and im from {location}')

# my_list = ['bay', 'len', 'something', 'this']

# print('----'.join(my_list[0:2]))

# int is a number with no decimal
# float is a number with a  decimal


# '''
#     + (addition)
#     - (subtraction)
#     * (multiplication)
#     / (division)
#     % (modulo)
# '''

# '''
# ** (exponent)
# // (integer division)
# '''

# print(2**100000.0)

# print(100 // 93)

# print(100 % 93)

# print(f'100 divised by 93 is {100 // 93} with a remainder of {100 % 93}')

# list(filter(list(input()), lambda x: x != 'q'))

# mystr = 'baylen'
# mylist = list(mystr)
# numstr = '12345'
# print(mylist)
# print(str(int(numstr) + 1) + 'hello')

# # NoneType


# def return_none():
#     if True:
#         print('hello')

#     return None


# print(return_none() is not None)
