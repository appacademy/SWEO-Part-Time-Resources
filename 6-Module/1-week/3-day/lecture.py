# primitive types
# int / Number
# float / Number
# bool / Boolean
# str / String / immutable data types

x = 1
y = 1.0
z = True
a = "hello"
# a = 'hello'
# a = """
# hello
# """

str_ = ''

# print(a[0]) # h
# print(a[1:4]) # ell
# print(a[::-1])

# snake_case
# is_token = token

# camelCase
# const isToken = token

# reference types
# dictionary
l = {"key": "value"}
l["key"] # how to key in a value

# list
# mutable
# takes in any data type
o = [1,2,3,4,5]
o[0] # 1
o[-1] # 5
# ranges
# [inclusive:exclusive]
# [from:to]
# print(o[1:4]) # [2,3,4]
# # sequences
# print(o[::-1])

# tuple
# immutable
q = (1,2,3,4,5)
q[0]
q[-1]
q[1:4]
q[::-1]

# operators
# + = addition
# - = substract
# * = mulitply
# / = divide
# ** = power
# % = modulo

# assigment operator
# =

# comparsion operator
# ==

# bitwise operators
# <<
# >>
# ~
# ^
# !

# boolean operators
# not = !
# or = ||
# and = &&


# print(len('hello world'))
# print(len([1,1,1,1,1,1,1]))


x = False
y = True

# ((x and y) and y) and ((x or y) and y and x or y) and not x or not y and x and not y

# def test():
#     return 1

# print(test())


# positional arguments, default arguments, *args arguments, **keyword arguments

def test(x, y, name = "Alex", *args, **kwargs):
	print(x)
	print(y)
	print(name)
	# print(args)
	for i in args:
		print(i)

	print(kwargs)


# def profile(full_name='', first_name='', last_name='', username='', phone_number='', address='', email='', profile_image='', home_number='', work_number=''):
#     print(full_name)
#     print(username)
#     print(last_name)
#     print(first_name)

test(2,1,"Nathan", [], {}, 'any', 1.0, 23241, username='alexbetita',  first_name='alex', last_name='betita', full_name='alex betita')


# profile(username='alexbetita',  first_name='alex', last_name='betita', full_name='alex betita')
