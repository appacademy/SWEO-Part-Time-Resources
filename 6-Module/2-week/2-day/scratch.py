# # Looks cleaner, you'll be seeing this a lot later
# def my_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         another_arg += 'something happened again'
#         return func_being_decorated(another_arg)
#     return wrapper


# @my_decorator
# def my_func(arg):
#     # Pretend this function does something
#     return arg


# print(my_func('Pretend '))

# simple py class
# class Dog:
#     # doesn't have to be self, but is always self by convention
#     def __init__(self):
#         self.sound = 'woof'


# my_dog = Dog()
# print(my_dog)
# print(my_dog.sound)


# using methods
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


# setting initial state
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

# print(list.__doc__)

# private variables
# class Dog:
#     def __init__(self, name, sound):
#         """
#         Use a leading underscore on instance variables
#         that shouldn't be accessed when using the class.
#         This isn't an actual python feature, its a convention.
#         All instance variables should be private,
#         except for any variables you explicitly want to be public
#         """
#         self._name = name
#         self._sound = sound

#     def get_name(self):
#         return self._name

#     def get_sound(self):
#         return self._sound


# dog_1 = Dog('Callie', 'woof')
# print(dog_1.get_name(), dog_1.get_sound())

# Pretty printing: because
# <__main__.Dog object at 0x7f36545b5fd0>
# is ugly
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
#         return f'<Dog (name: {self._name}, sound: {self._sound})>'


# dog_1 = Dog('Callie', 'woof')
# print(dog_1)


# with decorators
class Dog:
    def __init__(self):
        self._sound = 'woof'
        self._name = 'james'

    @property
    def sound(self):
        return self._sound

    @sound.setter
    def sound(self, new_sound):
        self._sound = new_sound

    @sound.deleter
    def sound(self):
        del self._sound
        print('no more sound')
        
    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        self._name = new_name

    @name.deleter
    def name(self):
        del self._name
        print('no more name')


my_dog = Dog()
print(my_dog.name)

my_dog.name = 'bark'
print(my_dog.name)

del my_dog.name
print(my_dog.name)