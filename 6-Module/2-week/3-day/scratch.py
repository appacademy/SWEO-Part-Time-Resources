# def my_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         another_arg += 'something happened again'
#         return func_being_decorated(another_arg)
#     return wrapper


# def my_func(arg):
#     # Pretend this function does something
#     return arg


# my_func = my_decorator(my_func)

# print(my_func('Pretend '))

#! From this point down it's the same but better

def my_decorator(func_being_decorated):
    def wrapper(another_arg):
        another_arg += 'something happened again'
        return func_being_decorated(another_arg)
    return wrapper


# def my_second_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         if another_arg == 'Pretend something happened again':
#             another_arg += ' Blue'
#             return func_being_decorated(another_arg)
#         else:
#             return func_being_decorated(
#                 "Can't believe nothing happend")
#     return wrapper


# @my_decorator
# @my_second_decorator
# def my_func(arg):
#     # Pretend this function does something
#     return arg


# @my_decorator
# def my_other_more_different_func(other_arg):
#     return other_arg


# print(my_func('Pretend '))
# print(my_func('Facts '))
# print(my_other_more_different_func('Can you believe that '))
# print(my_func('Pretend '))
# print(my_func("Pretend something happened again"))


# def my_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         another_arg += 'something happened again'
#         return func_being_decorated(another_arg)
#     return wrapper


# # my_func = my_decorator(my_func)
# @my_decorator
# def my_func(arg):
#     # Pretend this function does something
#     return arg


# print(my_func)
# # print(dir(my_func))
# # print(my_func.__closure__)
# # print(my_func.__closure__[0])
# print(my_func.__closure__[0].cell_contents)

# print("----------------------------------------------")
# print("----------------------------------------------")
# print("----------------------------------------------")


# def greeting_maker(hello_word):
#     def name_input(name):
#         return f'{hello_word}, {name}!'
#     return name_input


# # print(greeting_maker)

# hello_greeting = greeting_maker('hello')
# print(hello_greeting("Zaviar"))
# print(hello_greeting.__closure__)  # notice you get back a tuple

# # the first item in the tuple, in this case the only item
# print(hello_greeting.__closure__[0])

# # the value held in the closure
# print(hello_greeting.__closure__[0].cell_contents)

# def greeting_decorator(greeting_func):
#     # 1. decorator function intakes a function to invoke
#     # 2. wrapper function is defined
#     def greeting_wrapper(name):
#         # 3. code to run
#         # 4. decorator functions argument is invoked
#         print(f'{greeting_func()}, {name}!')
#     # 5. wrapper function is returned
#     return greeting_wrapper


# # @greeting_decorator
# def hello():
#     return 'Hello'


# # print("default func:", hello)  # <function hello at 0x7fe04abf6af0>
# # print("default func is closure?:", hello.__closure__)  # None
# hello = greeting_decorator(hello)
# print("closure func:", hello)
# # # <function greeting_decorator.<locals>.greeting_wrapper at 0x7f186b2d9c10>
# # print("closure func closure:", hello.__closure__)
# # # (<cell at 0x7f186b2e1fd0: function object at 0x7f186b2d9af0>,)
# # print("closure func closure contents:",
# #       hello.__closure__[0].cell_contents)
# # # # <function hello at 0x7f3125a26af0>


# # syntactic sugar for howdy = greeting_decorator(howdy)
# @greeting_decorator
# def howdy():
#     return 'Howdy'


# print('howdy decorated:', howdy)
