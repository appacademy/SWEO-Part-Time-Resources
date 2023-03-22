# names = ['James', 'Seika', 'Eiki']
# pets = {
#     'James': ['Momo', "Tenten", 'Kiki'],
#     'Seika': ['Tora', 'Sonic', 'Dragon'],
#     'Eiki': ['Hime', 'Koga']
# }
# name_iter = iter(names)
# pet_iter = iter(pets)

# print(name_iter)
# print(pet_iter)

# print(next(name_iter))
# print(next(name_iter))
# print(next(name_iter))
# print(next(pet_iter))
# print(next(pet_iter))

# my_dict = {'hello': 'world'}
# print(my_dict)

# other_dict = dict(first=1, second=2, third=3) #naming with kwargs
# print(other_dict)
# hello = 'hello'
# print(my_dict[hello])
# print(my_dict.hello)

# my_dict['new_key'] = 'added new val'

# print(my_dict)

# my_dict.update({'hello00': 'planet'})
# print(my_dict)

# del my_dict['hello']
# print(my_dict)




# tuple_list = [(1, 'a'),(2, 'b'),(3, 'c')] #(key, value)
# tuple_dict = dict(tuple_list)
# print(tuple_dict)

# print(tuple_dict.keys()) # list-like
# print(tuple_dict.values()) # list-like
# print(tuple_dict.items()) # list-like

# print(list(tuple_dict.keys())) # list
# print([*tuple_dict.values()]) # list
# print({*tuple_dict.items()}) # set
# print({**tuple_dict}) # dictionary

# iterating
# for key in tuple_dict:
#   print(tuple_dict[key])

# for key in tuple_dict.keys():
#   print(key)

# for value in tuple_dict.values():
#   print(value)

# for k,v in tuple_dict.items():
#   print(k,v)


# my_set = {1,2,3}
# other_set = {3,4,5}

# union - the result of combining two sets
# print(my_set | other_set)
# print(my_set.union(other_set))
# my_list = [7,8,9,11]

# my_set.update(other_set)
# my_set.update(my_list)
# print(my_set)

# print(my_set & other_set)
# print(my_set.intersection(other_set))

# print(my_set - other_set)
# print(my_set.difference(other_set))
# print(other_set.difference(my_set))
# print(other_set - my_set)

# print(my_set ^ other_set)
# print(my_set.symmetric_difference(other_set))


# JavaScript-y way of using decorators
# Messy, hard to follow with complex functions
# def my_func(arg):
#     # Pretend this function does something
#     return arg


# def my_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         another_arg += 'something happened again'
#         return func_being_decorated(another_arg)
#     return wrapper


# my_func = my_decorator(my_func)

# print(my_func('Pretend '))


# def my_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         another_arg += 'something happened again'
#         return func_being_decorated(another_arg)
#     return wrapper


# @my_decorator
# def my_func(arg):
#     # Pretend this function does something
#     return arg


# print(my_func)
# print(dir(my_func))
# print(my_func.__closure__)
# print(my_func.__closure__[0].cell_contents)

# def greeting_maker(hello_word):
#     def name_input(name):
#         return f'{hello_word}, {name}!'
#     return name_input


# hello_greeting = greeting_maker('hello')
# print(hello_greeting.__closure__)  # notice you get back a tuple

# # the first item in the tuple, in this case the only item
# print(hello_greeting.__closure__[0])

# # # the value held in the closure
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


# def hello():
#     return 'Hello'


# print("default func:", hello)  # <function hello at 0x7fe04abf6af0>
# print("default func is closure?:", hello.__closure__)  # None
# hello = greeting_decorator(hello)
# print("closure func:", hello)
# # <function greeting_decorator.<locals>.greeting_wrapper at 0x7f186b2d9c10>
# print("closure func closure:", hello.__closure__)
# # # (<cell at 0x7f186b2e1fd0: function object at 0x7f186b2d9af0>,)
# print("closure func closure contents:",
#       hello.__closure__[0].cell_contents)
# # # <function hello at 0x7f3125a26af0>


# # # syntactic sugar for howdy = greeting_decorator(howdy)
# @greeting_decorator
# def howdy():
#     return 'Howdy'


# print('howdy decorated:', howdy)

# class Dog:
#     # doesn't have to be self, but is always self by convention
#     def __init__(self):
#         self.sound = 'woof'


# my_dog = Dog()
# print(my_dog)
# print(my_dog.sound)



# # using methods
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


# my_second_dog = Dog()
# my_second_dog.make_sound()


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

class Dog:
    __slots__ = ['_name', '_sound']

    def __init__(self, name, sound):
        self._name = name
        self._sound = sound

    def get_name(self):
        return self._name

    def get_sound(self):
        return self._sound

    def __repr__(self):
        # Another fancy dunder method
        # python will use this whenever you try to print
        # an instance of this class
        return f'<Dog (name: {self._name}, sound: {self._sound})>'


dog_1 = Dog('Callie', 'woof')
print(dog_1)