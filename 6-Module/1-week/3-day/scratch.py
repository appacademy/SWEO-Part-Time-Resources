# some_var = 'string'

# print(len(some_var))

# a = 321
# a = '321'
# # print(len(a))

# if hasattr(a, '__len__'):
#     print(len(a))

# person = {'first_name': 'Ash', 'last_name': 'Ketchum'}
# person = {'first_name': 'Ash'}
# # LBYL
# # if 'first_name' in person and 'last_name' in person:
# #   print(f'Hello, {person["first_name"]} {person["last_name"]}!')
# # else:
# #   print('Missing keys')

# # EAFP
# try:
#     print(f'Hello, {person["first_name"]} {person["last_name"]}!')
# except:
#   print('Missing keys')

# some_var = 'whatever'

# some_var = 'somethingElse'

# some_var = some_other_var = something = 'something'

# something = 'something Else'

# print(some_var, some_other_var, something)
# def my_func(string):
#     newString = string + '!!!!!'
#     print(newString)
#     return newString

# a = 123
# b = ['123']

# print(a ** b)

# print(None)


# print (2 == '2')    # => False
# print (2 is '2')    # => False
# print ("2" == '2')    # => True
# print ("2" is '2')    # => True
# print (2 == 2.0)    # => True
# print (2 is 2.0)    # => False
# obj1 = {'hello': 'world'}
# obj2 = {'hello': 'world'}
# print(obj1 == obj2) # => True
# print(obj1 is obj2) # => False

# a = 'a string akldjfklasjdf  kj falskjdf kljsd f'
# b = 'b string is longer than a string           '

# if len(a) < len(b):
#     print(b + ' is longest of all')
# elif len(a) > len(b):
#     print(a + ' is longer than b')
# else:
#     print(f'{a} and {b} are the same length')

# def while_loop(string):
#     i = 0
#     while i < len(string):
#         print(string[i])
#         i += 1


# while_loop('jamees')

# def for_no_index(string):
#     for letter in string:
#         print(letter)

# for_no_index('crystal')

# def for_with_index(string):
#     count = 0
#     for i in range(10):
#         count += 1
#         print(count)

# for_with_index('west is the best')

# simple error catching
# a = 321

# try:
#     print(len(a))
# except:
#     print('Silently handle error here')
#     # Optionally include a correction to the issue
#     a = str(a)
#     print(len(a))
#catching named errors
# a = 100
# b = "5"
# b = 0
# b = 5
# try:
#     print(a / b)
# except ZeroDivisionError:
#     pass
# except (TypeError, NameError) as e:
#     print("ERROR!", e)
# finally:
#     print("Finally...")