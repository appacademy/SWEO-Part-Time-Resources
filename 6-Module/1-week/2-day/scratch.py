# Printing Stuff
# console.log('blah')
print('blah')

# Spacing and a lack of semi-colons
if True:
  print('true')
# Comments
"""
  asdfasdfasdfasdfasdfasdfasdf
  asdfasdfasdfasdf
  asdfasdfasdf
  asdfasdfasdf
"""
# Defining Functions
# Built in Documentation
def print_name():
  """
  This function will print a specific name.
  """
  print('Tristan')

# help(print_name) # Q will close the documentation prompt.
print_name()

# Boolean and Boolean Logic
# true, false => True, False
print(True and not False)
# and => &&
# or  => ||
# not => !

# THESE ARE ALL FALSEY
None # null and/or undefined
False
0
0.0
''
[] #list
() #tuple
{} #dictionary
set()
range(0)

# Strings
str = "This is a string"
str = 'This is a string\'s end'
str = '''This
is
a
multi
line
string
'''
# str = """This
# is
# a
# ...
# """
print(str)

str = 'Spaghetti'
print(str[8]) #forward index
print(str[-4])#backwards index
print(str[5:])#range of indexes
# [start:end], [start:], [:end]
# print(str[20])
print(str[15:20])

print('Greg ' + 'Isales')
print('Greg Isales! '*5)
print('His name is {0} {1}'.format('Greg', 'Isales'))
first_name = 'Greg'
last_name = 'Isales'
print(f'His name is {first_name} {last_name}')
#.upper(), .lower(), .islower(), isupper(), .startswith('C'), .endswith('g'), .split(), .split('-'), ','.join(list)
# Numbers
whole = 46
whole = int(46)
decimal = 72.25
decimal = float(72.25)
float_of_int = float(whole)
int_of_float = int(decimal)
print(float_of_int, int_of_float)

print(1+2)
print(3-1)
whole += 1
whole -= 1
whole %= 3
print(whole)