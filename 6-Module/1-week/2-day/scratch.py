# Printing Stuff
print('Tristan Huckabee')

# Spacing and a lack of semi-colons
if True:
  print('Hello')
# Comments
# This is a comment
'''
This
is
a
multi-line comment
'''

# Defining Functions
# Built in Documentation
def function_name(name):
  '''
  A function that takes in a name, string, and print Hello, + name.
  '''
  print('Hello, ' + name)
function_name('Tristan')
# help(function_name)
# Boolean and Boolean Logic
print(True)
print(False)
# && => and
# || => or
# !  => not
print(True or False)
print(True and False)
print(not True and not False)

# FALSEY VALUES
'''
False
0
0.0
''
[] => list
() => tuple
{} => dictionary
set()
range(0)
None => null and/or undefined
'''
# Strings
str = 'Hello, my name\'s Tristan'
str = "Hello"
str = '''
This is
a 'multiline'
string
'''
str = """
This is
a "multiline"
string
"""

str = 'Spaghetti'
print(str[4]) #starting at front
print(str[-4]) #starting at end
print(str[2:-4]) # [start:end(excluded)]
print(str[:6]) # [start-of-string:end(excluded)]
print(str[1:]) # [start:end-of-string]
# print(str[15]) # IndexError
print(str[:15]) #> 'Spaghetti'
print(str[15:]) #> ' '

print(str.index('h'))
# print(str.index('z'))
print(str.count('pag'))
# .upper(), .lower(), .islower(), .isupper(), .startwith('sub'), .endswith('sub'), .split(), .split('-'), ','.join(shopping_list)

print('Greg' + 'Isales')
print('Greg Isales! '*5)

first_name = 'Tristan'
last_name = 'Huckabee'
print('My name is {0} {1}.'.format(first_name, last_name))
print(f'My name is {first_name} {last_name}, via fString.')
# Numbers
whole = 42
whole = int(42)
print(whole)
decimal = 70.18
decimal = float(70.56)
print(decimal)
int_to_dec = float(whole)
dec_to_int = int(decimal)
print(int_to_dec, dec_to_int)

# +-*/%
power = 5**2
int_div = 5//2
print(power, int_div)
# variable++
whole %= 2
