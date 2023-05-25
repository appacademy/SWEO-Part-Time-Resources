class Animal:
  def __init__(self, name, sound):
    self.name = name
    self.sound = sound

  def speak(self):
    return f'{self.name} says {self.sound}'

class Dog(Animal):
  def __init__(self, name):
    super().__init__(name, 'woof')

my_dog = Dog('callie')
print(my_dog.speak())


# ~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Parent:
  class_variable = "I am a class variable"

  def test(self):
    print('I am a parent class')

class Child(Parent):
  def test(self):
    print('I am a child class')
    super().test()
    print(super().class_variable)

child = Child()
child.test()

#Created on the class and accessed through self.variable_name or Class.variable_name
class Example:
    a_class_variable = "Hello there!"

    def __init__(self, name):
        self.name = name

    def test_method(self):
        print(self.a_class_variable)


my_instance = Example("Will")

my_instance.test_method() # Hello there!
print(Example.a_class_variable) # Hello there!


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#Modifying a class variable on the class will update it for all instances
class Example:
    a_class_variable = "Hello there!"

    def __init__(self, name):
        self.name = name

    def test_method(self):
        print(self.a_class_variable)


my_instance = Example("Will")
my_instance.test_method()  # Hello there!

Example.a_class_variable = "Goodbye now!"

print(Example.a_class_variable)  # Goodbye now!
my_instance.test_method()  # Goodbye now!

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Example:
    a_class_variable = "Hello there!"

    def __init__(self, name):
        self.name = name

    def test_method(self):
        print(self.a_class_variable)


my_instance = Example("Will")
other_instance = Example("Anthony")

other_instance.a_class_variable = "Goodbye now!"


other_instance.test_method()  # Goodbye now!
print(Example.a_class_variable)  # Hello there!
my_instance.test_method()  # Hello there!
