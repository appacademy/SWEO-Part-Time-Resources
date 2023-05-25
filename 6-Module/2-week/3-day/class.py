# # """
# # // simple js class

# # class Dog {
# #   constructor() {
# #     this.sound = 'woof'
# #   }
# # }

# # const myDog = new Dog();
# # console.log(myDog)
# # """


# # # simple py class

# # class Dog: # Class names should be Pascal Case (upper camel case) i.e MyClassName
# #   def __init__(self, name): # doesn't have to be self, but is always self by convention
# #     self.sound = 'woof'
# #     self.name = name

# # my_dog = Dog("Will")
# # # print(my_dog.name) # prints: <__main__.Dog object at 0x7f8f1c1b6a90>

# # # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# # class Person:
# #     # Initializer / Instance Attributes
# #     def __init__(self, name):
# #         self.name = name  # 'self' refers to the instance of the class (in JS, 'this')

# #     # Instance method
# #     def greet(self):
# #         return f"Hello, my name is {self.name}."

# #     # Static method
# #     def my_static_method():
# #         print("This is a static method.")

# # # Instantiate the class
# # # p1 = Person("Will")
# # # Person.my_static_method() # Prints: This is a static method.
# # # # Call the method
# # # print(p1.greet())  # Prints: Hello, my name is Will.
# # # print(p1.name)  # Prints: Will

# # # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# # ## Special methods in a class:
# # """
# # Special methods are predefined methods in Python that you can override in your class.
# # They're also called dunder methods because they start and end with double underscores (e.g., __init__, __str__).
# # The __str__ method returns a string representation of the object. Python calls this method when we use the print() function or str() on the object.
# # """

# # APPLE_PIE = "don;t!"

# # class Person:
# #     def __init__(self, name):
# #         self._name = name

# #     def greet(self):
# #         return f"Hello, my name is {self.name}."

# #     def __str__(self):
# #         return f"This is an instance of a person.  here is the name: {self.name}"

# # p2 = Person("WILL")

# # # print(p2)  # Prints: I can customize my print!  Isn't that cool, WILL


# # # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# # class Animal:
# #     def eat(self):
# #         print("The animal is eating")

# #     def sleep(self):
# #         print("The animal is sleeping")

# # class Dog(Animal):
# #     def bark(self):
# #         print("The dog is barking")
# #     def eat(self):  # override the parent method
# #         print("The dog is eating")

# # my_dog = Dog()
# # my_dog.eat()
# # my_dog.sleep()
# # my_dog.bark()
# # print("ENDDDDDDDDDDDDDDD")

# # # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# # #Super() method
# class Animal:
#     def greet(self):
#         print("Hello, I'm an animal")

# class Dog(Animal):
#     def greet(self):
#         super().greet()  # Call greet method from parent class
#         print("Woof Woof")  # Additional functionality


# my_dog = Dog()
# print("LOOOK HERE")
# my_dog.greet()  # Prints: Hello, I'm an animal Woof Woof
# print("LOOOK HERE")
# # # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



# # # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# # # The @property decorator turns a method
# # # into a "getter" for a property of the same name, so you can access
# # # it like object.property instead of object.property().

# # class Person:
# #     def __init__(self):
# #         self._age = 0

# #     @property
# #     def age(self):
# #         return self._age

# #     @age.setter
# #     def age(self, value):
# #         if value < 0:
# #             raise ValueError("Age cannot be negative!")
# #         self._age = value

# # p = Person()
# # p.age = -100  # calls the setter
# # print(p.age)  # calls the getter
# # # p.age = -1  # Raises ValueError: Age cannot be negative!


# # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


# class Circle:
#     def __init__(self, radius=1):
#         self._radius = radius

#     @property
#     def radius(self):
#         return self._radius

#     @radius.setter
#     def radius(self, value):
#         if value < 0:
#             raise ValueError("Radius cannot be negative!")
#         self._radius = value

#     @property
#     def diameter(self):
#         return self._radius * 2

#     def __test__(self):
#         print("test")

# c = Circle(5)
# print(c.__test__())
# # print(c.radius)  # 5
# # print(c.diameter)  # 10
# # # c.radius = -1   # ValueError: Radius cannot be negative!
# # c.radius = 7
# # print(c.diameter)  # 14
# # c.diameter = 20  # AttributeError: can't set attribute





# # builtin class decorators
# # @property getter, setter, deleter
# # no decorators
# # class Dog:
# #   def __init__(self):
# #     self._sound = 'woof'

# #   def get_sound(self):
# #     return self._sound

# #   def change_sound(self, new_sound):
# #     self._sound = new_sound

# #   def del_sound(self):
# #     del self._sound

# # my_dog = Dog()

# # print("1", my_dog.get_sound())
# # print("2", my_dog.change_sound('bark'))
# # print(my_dog.get_sound())
# # print("3", my_dog.del_sound())
# # print(my_dog.get_sound())

# # with decorators
# class Dog:
#   def __init__(self):
#     self._sound = 'woof'

#   @property
#   def sound(self):
#     return self._sound

#   @sound.setter
#   def sound(self, new_sound):
#     self._sound = new_sound

#   @sound.deleter
#   def sound(self):
#     del self._sound
#     print('no more sound')

# my_dog = Dog()

# print("TEST", my_dog.sound)
# my_dog.sound = 'bark'
# print(my_dog.sound)
# del my_dog.sound
# # print(my_dog.sound)

class Person:
    def init(self):
        self._age = 0

    @property
    def age(self):
        return self._age

p = Person()

p.age = -100 # direct modification, no control
print(p.age) # direct access


# class MyClass:
#     def __init__(self):
#         self._internal_variable = 42

#     def public_method(self):
#         print("This is a public method.")

#     def _internal_method(self):
#         print("This is an internal method.")

# my_object = MyClass()
# print(my_object._internal_variable)  # Accessing the internal variable directly (not recommended)
# my_object._internal_method()  # Calling the internal method directly (not recommended)
# my_object.public_method()  # Calling the public method
