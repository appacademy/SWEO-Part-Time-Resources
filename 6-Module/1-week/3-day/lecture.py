x = 1

# PRIMITVE TYPES
# integer / 1,2,3,4,-1,-2,-3
# floats / 0.1,0.23,1.01
# strings / 'hello', "hi"
# boolean / False/True

# snake case
is_true = True
is_false = False

# REFERENCE TYPES
# dictionaries
# mutable
y = {}

# list
# mutable
# 8 bytes
z = []

# tuple
# immutable
# 4 byes
a = ()

# operators
# plus +
# minus -
# divide /
# multiply *
# modulo %
# power **

# comparison operators
# not x, not y : !
# y or x : ||
# y and x : &
# x == y
# x != y

# def test():
#     # print(x)
#     # print(y)
#     # print(is_true)
#     # print(args)
#     # print(kwargs)
#     test()

# test()
# function test(x,y, args = []){

# }

# javascript
# === stricly equals
# == loosely equals
# = operator

# print(test())

list_ = [1,2,3,4,5]

# print(len(list_))

# print("""
#       Hello World
# 	  Python is pretty cool!
#       """)

# print("Hello World\n"
#       "Python is pretty cool!\n"
#       "Python is a better programming language\n")

string_= 'Hello'
# print(string_[0])
# print(string_[-1])
# print(string_[0:5])

def recursive_string(string):
	if len(string) <= 1:
		return string
	return string[-1] + recursive_string(string[:-1])
