# def my_func(arg):
#     # Pretend this function does something
#     return arg


# def my_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         another_arg += 'something happened again'
#         return func_being_decorated(another_arg)
#     return wrapper


# my_wrapper = my_decorator('cb')


# my_func = my_decorator(my_func)

# my_func == wrapper

# print(my_func('Pretend '))

# def my_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         another_arg += 'something happened again'
#         return func_being_decorated(another_arg)
#     return wrapper


# # @give_me_crazy_stuff
# @my_decorator
# def other_func(arg):
#     return arg


# @give_me_crazy_stuff
# @my_decorator
# def my_func(arg):
#     # Pretend this function does something
#     return arg


# print(my_func('Pretend '))
# print(other_func('Can you believe '))
# print(my_func)
# print(dir(my_func))
# print(my_func.__closure__)
# print(my_func.__closure__[0])
# print(my_func.__closure__[0].cell_contents)


# def greeting_maker(hello_word):
#     def name_input(name):
#         return f'{hello_word}, {name}!'
#     return name_input


# hello_greeting = greeting_maker('hello')
# print(hello_greeting)


# print(hello_greeting.__closure__)  # notice you get back a tuple

# # the first item in the tuple, in this case the only item
# print(hello_greeting.__closure__[0])

# # the value held in the closure
# print(hello_greeting.__closure__[0].cell_contents)

#! -------------------------------------------------------------------

# def greeting_decorator(greeting_func): # greeting_func IS hello
#     # 1. decorator function intakes a function to invoke
#     # 2. wrapper function is defined
#     def greeting_wrapper(name):
#         # 3. code to run
#         # 4. decorator functions argument is invoked
#         print(f'{greeting_func()}, {name}!')
#     # 5. wrapper function is returned
#     return greeting_wrapper


# def hello():
#     return 'Hello'


# print("default func:", hello)  # <function hello at 0x7fe04abf6af0>
# print("default func is closure?:", hello.__closure__)  # None

# hello = greeting_decorator(hello)
# print("closure func:", hello)
# print(hello('Zaviar'))
# # <function greeting_decorator.<locals>.greeting_wrapper at 0x7f186b2d9c10>

# print("closure func closure:", hello.__closure__)
# # (<cell at 0x7f186b2e1fd0: function object at 0x7f186b2d9af0>,)

# print("closure func closure contents:",
#       hello.__closure__[0].cell_contents)
# # <function hello at 0x7f3125a26af0>


# syntactic sugar for howdy = greeting_decorator(howdy)
# @greeting_decorator
# def howdy():
#     return 'Howdy'


# print('howdy decorated:', howdy)

# class Dog:
#     # doesn't have to be self, but is always self by convention
#     def __init__(self):
#         self.sound = 'woof'


# # other_dog = {'sound': 'woof'}
# # print(other_dog)
# # print(other_dog['sound']) # dictionary syntax is good
# # print(other_dog.sound) # not an object!

# my_dog = Dog()
# print(my_dog)
# print(my_dog.sound)
# # print(my_dog['sound'])

# class Dog:
#     def __init__(self):
#         self.sound = 'woof'

#     def make_sound(self):
#         print(self.sound)

#     def change_sound(self, sound):
#         self.sound = sound


# my_dog = Dog()
# my_dog.make_sound()
# # notice that we aren't passing in self
# # python does this automatically
# my_dog.change_sound('bark')
# my_dog.make_sound()

# class Dog:
#     """
#     This is just a description of the class.
#     This helps other devs understand how to use your class
#     It expects to receive the positional arguments
#     (str:name, str:sound)
#     """

#     def __init__(self, name, sound):
#         self.name = name
#         self.sound = sound


# dog_1 = Dog('Callie', 'woof')
# print(dog_1.name, dog_1.sound)
# print(dog_1.__doc__)

# class Dog:
#     """
#     Use a leading underscore on instance variables
#     that shouldn't be accessed when using the class.
#     This isn't an actual python feature, its a convention.
#     All instance variables should be private,
#     except for any variables you explicitly want to be public
#     """

#     def __init__(self, name, sound):

#         self._name = name
#         self._sound = sound

#     def get_name(self):
#         return self._name

#     def get_sound(self):
#         return self._sound


# dog_1 = Dog('Callie', 'woof')
# # print(dog_1._name)
# print(dog_1.get_name(), dog_1.get_sound())
# # print(dog_1.__doc__)

# class Dog:
#     __slots__ = ['_name', '_sound']

#     def __init__(self, name, sound):
#         self._name = name
#         self._sound = sound

#     def get_name(self):
#         return self._name

#     def get_sound(self):
#         return self._sound

#     def __repr__(self):
#         # Another fancy dunder method
#         # python will use this whenever you try to print
#         # an instance of this class
#         # return f'{self._name} is a good dog and this class is a good class'
#         return f'<Dog (name: {self._name}, sound: {self._sound})>'


# dog_1 = Dog('Callie', 'woof')
# print(dog_1)

# # no decorators
# class Dog:
#     def __init__(self):
#         self._sound = 'woof'

#     def get_sound(self):
#         return self._sound

#     def change_sound(self, new_sound):
#         self._sound = new_sound

#     def del_sound(self):
#         del self._sound


# my_dog = Dog()
# print(my_dog.get_sound())

# my_dog.change_sound('bark')
# print(my_dog.get_sound())

# my_dog.del_sound()
# print(my_dog.get_sound())

# # with decorators
# class Dog:
#     def __init__(self):
#         self._sound = 'woof'

#     @property
#     def sound(self):
#         return self._sound

#     @sound.setter
#     def sound(self, new_sound):
#         self._sound = new_sound

#     @sound.deleter
#     def sound(self):
#         self._sound = ""
#         print('no more sound')

#     # @sound.deleter
#     # def sound(self):
#     #     del self._sound
#     #     print('no more sound')


# my_dog = Dog()
# print(my_dog.sound)

# my_dog.sound = 'bark'
# print(my_dog.sound)

# del my_dog.sound
# print(my_dog.sound)
