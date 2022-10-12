from re import X
from turtle import st


def test():
	pass

def is_it_true_or_false(arg1, arg2):
	x = (not arg1 or not arg2) and (arg1 or not arg2)
	if x:
		print('This value is true')
	else:
		print('This value is false')

# print(is_it_true_or_false(False, False))

str_ = 'I love python'
first_name = 'bruce'

string_format = 'My name is %s' % first_name
string_format2 = 'My name is {}'.format(first_name)

string_format3 = 'My name is {} {}, I love {}'.format(first_name, 'wayne', 'fighting crime') # automatic indexing
string_format4 = 'My name is {0} {0}, I love {0}'.format(first_name, 'wayne', 'fighting crime')
string_format4 = 'My name is {0[first_name]} {0[last_name]}'.format(
	{
		"first_name" : 'tony',
		"last_name" : 'stark'
	}
)

string_f = f'Hi my name is {first_name}'

# print(len(str_))
# print(str_[-1])
# print(str_[2:6])

def is_palindrome(arg1):
	return arg1 == arg1[::-1]

# print(str_[::-1])
# print(string_format4)

questions = 20
num_correct = 10

score = f'You got {num_correct/questions:%}'
score = f'You got {num_correct/questions:.0%}'
score = f'You got {num_correct/questions:.2%}'
# 50.00%

# sentence = input('What is your name?\n')
str_split = '    '.join(str_.split())
# str.split().join() javascript
# print(str_split)


x = 100
y = 200.00

# print(x , y)

#typecast

# number = input('What is your number?\n')
# print(number + str(2000))
i = 'hello'


def rec():
	#base step
	#rec step
	#recursion
	rec()
