# if and elif else
# once a single if or elif is passed, the rest of the statement its skipped


def if_check(name, age=None):
    '''
    if example function
    '''
    if name == 'Baylen':
        print('You are in fact baylen')
    elif age > 1000:
        print('name arg out of range')
    elif age >= 28:
        print('you name is correct but you age isnt')
    # if False and (True and False) or True and (False and False):
    #     print('')
    else:
        print('I will only run if none of the ifs pass')
    print('more code')

# if_check('Baylenn', 10)
# list and dictionaries
# lists are arrays


def list_stuff():
    '''
puthon 
# list_stuff()
# dictionary nuance

# def dict_stuff():
#     '''
#     this is an example func
#     '''
#     my_dict = {}
#     my_dict['name'] = 'baylen'
#     if my_dict.get('something') is None:
#         print('here')
#         my_dict['something'] = 'updated'

#     print(my_dict)
# dict_stuff()



# for loop, list, dict, string
# break
# else
# only one type of for loop in python

def list_loop(my_list):
    '''
    this is a  function about looping through lists
    '''
    for anything in my_list:
        print(anything)


# list_loop(['baylen', 'james', 'zarviar', 'jake'])


# def string_loop(string):
#     '''
#     this is a function that will loop over a string, and print each letter
#     '''
#     for char in string:
#         print(char)
#         # if char == 'e':
#         #     break
#     else:
#         print('I will print if the entire loop runs, whithout being broken')



# string_loop('Baylen')


# def range_loop(my_list):
#     '''
#     this function loops over a range
#     '''
#     for i in range(0, len(my_list)):
#         print(f'the element at index {i} is {my_list[i]}')


# range_loop(['baylen', 'james', 'zarviar', 'jake'])
# # loops by key ny default, possible to get keys and values by using .items()

# def dict_loop(my_dict):
#     '''
#     this is a function that loops over dicts
#     '''
#     # for loop loops over keys be default
#     # for key in my_dict:
#     #     print('key' , key, 'value', my_dict[key])
#     # if you want to loop by key and value
#     for key, value in my_dict.items():
#         print(key, value)

# dict_loop({
#     'name' : 'Baylen',
#     'age' : 28,
#     'location' : 'Dallas'
# })

# while loop
# break
# continue

# def while_loop(num):
#     '''
#     this function has a while loop
#     '''
#     i = 0
#     while i <= num:
#         print(i)
#         if i == 5:
#             break

#         # print('5')
#         i+=1


# while_loop(40)


# try/except
# catching all exception
# catching specific exception
# else
# finally
# file = None
# try:
#     file = open('somefilee.txt')
#     print('hi')
# except FileNotFoundError as e:
#     print('The file does not exist')
# except NameError as e:
#     print('you have tried to print a variable that isnt real')
# else:
#     print(file.read())
#     file.close()
# finally:
#     print('finally will run  no matter what')
# print('more code to execute')

# print('Code executed smoothly')



# '''
# dont do a bare except, this is bad practice

# try:
#     print(hi)
# except:
#     print('something went wrong)

# at the very least except an exception and print it

# try:
#     print(hi)
# except Exception as e:
#     print(e)
# '''

# proper use of try except
# try:
#     print(hi)
# except NameError as e:
#     print('A name Error has been raised', e)
