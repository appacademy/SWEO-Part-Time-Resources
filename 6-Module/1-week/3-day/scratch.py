# if and elif else
# once a single if or elif is passed, the rest of the statement its skipped

from site import setcopyright


def testing_if(name, age):
    if name == 'Baylen':
        print('hey Baylen')
    # short circuit
    elif name != 'Baylen':
        print('you\'re not baylen and you\'re a kid')
    elif age < 28:
        print('thats not baylens age')
    else:
        print('no statements passed')
    print('code done executing')


# testing_if('Baylenn', 22)

# list and dictionaries
# lists are arrays
def list_stuff(param1, param2):
    my_list = []
    my_list.append(param1)
    my_list.append(param2)
    print(my_list)


# list_stuff('one', 'two')
# dictionary nuance


# def dict_stuff():
#     my_dict = {'key': 'value'}
#     # cant use dot notation top grab keys
#     # must use bracket notation
#     print(my_dict['key'])
#     # print(help(dict))


# dict_stuff()
# duck typing

# for loop, list, dict, string
# break
# else
# only one type of for loop in python

def list_loop_stuff(my_list):
    for anything in my_list:
        if anything == 'james':
            # break
            ''
        print(anything)
    else:
        print('I will print if the loop completes and nothing stops it from completing')


# list_loop_stuff(['baylen', 'james', 'zareviar', 'jake'])


def string_loop_stuff(string):
    for letter in string:
        print(letter)


# string_loop_stuff('Baylen Doss hello')

# loops by key ny default, possible to get keys and values by using .items()
def dict_loop_stuff(diction):
    # for getting keys and values
    # for key, value in diction.items():
    #     print(key, value)
    # loop by key only
    for key in diction:
        print(diction[key])


# dict_loop_stuff({
#     'name': 'baylen',
#     'age': 28,
#     'location': 'dallas'
# })
# while loop
# break
# continue

def while_loop_stuff(bool):
    i = 0
    while i < 100 and (True or False):
        if i > 40:
            # will break out of the loop
            break
        print(i)
        if i > 100:
            # will start the loop over from the start
            continue
        i += 1


# while_loop_stuff(True)


# try/except
# catching all exception
# catching specific exception
# else
# finally

'''
dont do a bare except, this is bad practice

try:
    print(hi)
except:
    print('something went wrong)

at the very least except an exception and print it

try:
    print(hi)
except Exception as e:
    print(e)
'''

# proper use of try except
# try:
#     print(hi)
# except NameError as e:
#     print('A name Error has been raised', e)

# One way of handling multiple errors
# try:
#     file = open('somefilew.txt')
#     print(hi)
# except (FileNotFoundError, NameError) as e:
#     # print('The file you are tying to open does not exist')
#     print(e)
# else:
#     print(file.read())

# second way of handling errors
# try:
#     file = open('somefilee.txt')
#     # print(hi)
# except FileNotFoundError as e:
#     print('The file you are tying to open does not exist')
# except NameError:
#     print('you are trying to read a variable that does not exist')
# else:
#     print(file.read())
# finally:
#     print('I will run no matter what, but only after the try and else or some except block')

# # print(hi)
# print('I will run')


def scope_func():
    # print(b)
    a = 'something'
    if True:
        b = 'something else'
        print(a)
        if True:
            print(b)
            c = 'something further'
    print(b)
    print(c)


scope_func()
