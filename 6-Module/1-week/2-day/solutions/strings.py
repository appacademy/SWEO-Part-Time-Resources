# # Hello, Eggs and Spam

# # Here is an example of using print to display message to the user:

# print('Hello, World!')

# # Display your own message using print below:

# print('Test')

# # Multiline Strings

# # Here is an example of using print to display message to the user:

# print('''In this code include "quotes"
# of any kind because they won't get confused with
# the end of the string!''')

# # Display your own message using print below:

# print('''This is a multiline
# string being printed
# to the terminal''')

# # Concatenate Names

# # Write your function, here.
# def concat_name(arg1, arg2):
# 	return arg2 +  ', ' + arg1

# print(concat_name("First", "Last"))  #> "Last, First"
# print(concat_name("John", "Doe"))    #> "Doe, John"
# print(concat_name("Mary", "Jane"))   #> "Jane, Mary"

# # Fun with Strings

# # DO NOT EDIT - Example of a multiline string
# print('''
# Here is a whole bunch of instruction that you'd better follow if you know what's good for you!

# It even includes blank lines. :)
# ''')

# # STEP 1: Write your own print statement on multiple lines
# print('''
# This is step 1
# multi-line string
# ''')

# # DO NOT EDIT
# print('***BEFORE***')

# # STEP 2: Copy the original multiline print and make it show
# # without blank lines at the beginning and the end
# print('''This is step 1
# multi-line string''')


# # DO NOT EDIT
# print('***AFTER***')
# print()

# # STEP 3: Uncomment the following print command and fix the error
# print("What's up, doc?")

# # STEP 4: Uncomment the following print command and fix the error
# print('The poet used "day" to mean "life".')

# # STEP 5: Uncomment the following print command and fix the error
# print("""The bunny said, "Let's go to the library." """)

# # DO NOT EDIT - Sample debug for an equality operataion
# num = 5
# str = "5"
# print('num {0}, str {1}, equal? {2}'.format(num, str, num==str))

# # STEP 6: Rewrite the print above in an alternate way using f' on the string
# print(f'num {num}, str {str}, equal? {num == str}')

# # Same Number of Characters?

# # Write your function, here.
# def compare(arg1, arg2):
# 	if(len(arg1) == len(arg2)):
# 		return True
# 	return False

# print(compare("AB", "CD"))              #> True
# print(compare("ABC", "DE"))             #> False
# print(compare("hello", "App Academy"))  #> False

# # Format Name

# # Write your function, here.
# def format_name(arg1, arg2):
# 	return f'Hi, my name is {arg1} {arg2}'

# print(format_name("Alex", "Ambrose"))  #> Hi, my name is Alex Ambrose
# print(format_name("Amy", "Mayer"))     #> Hi, my name is Amy Mayer
# print(format_name("Rick", "Morty"))    #> Hi, my name is Rick Morty

# # Indexing Strings

# # Write your function, here.
# def index_string(arg):
# 	return arg[3:]


# print(index_string("Alchemy"))     #> hemy
# print(index_string("Ridiculous"))  #> iculous
# print(index_string("Serendipity")) #> endipity

# # String Immutability

# # Write your function, here.
# string = 'Hello'
# string[0] = ''

# print(string)

# # Index Of

# # Write your function, here.
# def index_of(arg, character):
# 	# return arg.find(character) # returns the index of the first matching character, case-sensitive. If character is not found in the string, returns -1.
# 	return arg.lower().index(character)

# print(index_of("Arm", "a"))  #> 0
# print(index_of("Pie", "e"))  #> 2
# print(index_of("Lucid", "i"))  #> 3
# print(index_of("Obvious","u"))  #> 5

# # Is The Last Character N?

# # Write your function, here.
# def is_last_character_n(arg):
# 	return arg[-1] == 'n'

# print(is_last_character_n("Aiden"))  #> True
# print(is_last_character_n("Piet"))   #> False
# print(is_last_character_n("Bert"))   #> False
# print(is_last_character_n("Dean"))   #> True

# # Burrrrrp

# # Write your function, here.
# def long_burp(n):
#   return "Bu" + ("r" * n) + "p"


# print(long_burp(3))  #> "Burrrp"
# print(long_burp(5))  #> "Burrrrrp"
# print(long_burp(9))  #> "Burrrrrrrrrp"

# # Last Three

# # Write your function, here.
# def last_three(str, letters):
#   return str[-3:].lower() == letters.lower()

# print(last_three("Power", "wer"))  #> True
# print(last_three("Application", "App"))   #> False
# print(last_three("Raw", "raw"))   #> True
# print(last_three("Bonjour", "OUR"))   #> True

# # Is Palindrome

# # Write your function, here.
# def is_palindrome(str):
#   reverse = ''.join(reversed(str))
#   return str == reverse

# print(is_palindrome("kayak")) # True
# print(is_palindrome("app"))  # False
# print(is_palindrome("racecar")) # True
# print(is_palindrome("valid")) # False

# # Recursive String

# # Write your function, here.
# def recursive_string(str):
#   if len(string) == 0:
#     return string

#   return recursive_string(string[1:]) + string[0]

# print(recursive_string("civic")) # civic
# print(recursive_string("refer")) # refer
# print(recursive_string("string")) # gnirts
# print(recursive_string("avocado")) # odacova
# print(recursive_string("application")) # noitacilppa
