# a = '321'
# # print(len(a))

# if hasattr(a, '__len__'):
#     print(len(a))


# person = {'first_name': 'Ash', 'last_name': 'Ketchum'}
# person = {'first_name': 'Ash'}
# # # LBYL
# # if 'first_name' in person and 'last_name' in person:
# #   print(f'Hello, {person["first_name"]} {person["last_name"]}!')
# # else:
# #   print('Missing keys')

# try:
#    print(f'Hello, {person["first_name"]} {person["last_name"]}!')
# except:
#   print('Missing keys')

# some_var = 'some variable'

# print(some_var)

# some_var = 'some other var'

# print(some_var)

# count = added = something_else = 1000

# added = 2000

# count = added = something_else = 1000

# added = ['2000']

# print(count, added, something_else)

# def my_func(str):
#     return str

# broken_var = '1000'

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


# if_var = 'Jha'

# if len(if_var) > 5:
#     print(if_var + 'longest')
# elif len(if_var) > 2:
#     print(if_var + 'kinda Long')
# else:
#     print('word is too short')

# def my_func(str):
#     count = 0
#     while count < len(str):
#         print(str[count])
#         count += 1

# my_func('james')

# def my_for_loop(str):
#     for letter in str:
#         print(letter)

# my_for_loop('james')

# def my_indexed_for(str):
#     for i in range(len(str)):
#         print(str[i])

# my_indexed_for('james')

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
a = 300
# b = "5"
b = 0
# b = 5
try:
    print(a / b)
except ZeroDivisionError:
    # print('zero')
    if a < 200:
        print('do some logic here')
        pass
    print('number too small doesnt matter')
except (TypeError, NameError, ZeroDivisionError) as e:
    print("ERROR!", e)
finally:
    print("Finally...")