# `M6W2D3`

## Decorators

A function returning another function, usually applied as a function
transformation using the @wrapper syntax.

The decorator syntax is merely syntactic sugar, the following two function
definitions are semantically equivalent

```py
def staticmethod(f):
    def inner():
        print(f())
    return inner

def f():
    pass

staticmethod(f)()

#-------------------

@staticmethod
def f():
    pass

f()
```

```py
# basic decorators

def greeting_decorator(greeting_func):
  # 1. decorator function intakes a function to invoke
  # 2. wrapper function is defined
  def greeting_wrapper(name):
    # 3. code to run
    # 4. decorator functions argument is invoked
    print(f'{greeting_func()}, {name}!')
  # 5. wrapper function is returned
  return greeting_wrapper

def hello():
  return 'Hello'

print("default func:", hello) # <function hello at 0x7fe04abf6af0>
print("default func is closure?:", hello.__closure__) # None

hello = greeting_decorator(hello)
print("closure func:", hello)
# <function greeting_decorator.<locals>.greeting_wrapper at 0x7f186b2d9c10>
print("closure func closure:", hello.__closure__)
# (<cell at 0x7f186b2e1fd0: function object at 0x7f186b2d9af0>,)
print("closure func closure contents:", hello.__closure__[0].cell_contents)
# <function hello at 0x7f3125a26af0>

# syntactic sugar for howdy = greeting_decorator(howdy)
@greeting_decorator
def howdy():
  return 'Howdy'

print('howdy decorated:', howdy)
```

```py
# builtin class decorators
# @property getter, setter, deleter

# no decorators
class Dog:
  def __init__(self):
    self._sound = 'woof'

  def get_sound(self):
    return self._sound

  def change_sound(self, new_sound):
    self._sound = new_sound

  def del_sound(self):
    del self._sound

my_dog = Dog()

print(my_dog.get_sound())
print(my_dog.change_sound('bark'))
print(my_dog.get_sound())
print(my_dog.del_sound())
print(my_dog.get_sound())

# with decorators
class Dog:
  def __init__(self):
    self._sound = 'woof'

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

my_dog = Dog()

print(my_dog.sound)
my_dog.sound = 'bark'
print(my_dog.sound)
del my_dog.sound
print(my_dog.sound)

```

## Decorator Problems (30m)

## Classes

Classes are a combination of information and behavior. A blueprint that allows
you to make objects with predefined attributes.

```js
// simple js class

class Dog {
  constructor() {
    this.sound = 'woof'
  }
}

const myDog = new Dog();
console.log(myDog)
```

```py
# simple py class

class Dog: # Class names should be Pascal Case (upper camel case) i.e MyClassName
  def __init__(self): # doesn't have to be self, but is always self by convention
    self.sound = 'woof'

my_dog = Dog()
print(my_dog)
```

```py
# using methods

class Dog:
  def __init__(self):
    self.sound = 'woof'

  def make_sound(self):
    print(self.sound)

  def change_sound(self, sound):
    self.sound = sound

my_dog = Dog()
my_dog.make_sound()
my_dog.change_sound('bark') # notice that we aren't passing in self, python does this automatically
my_dog.make_sound()
```

### Dunder methods

dunder methods (double underscore methods) like `__init__` and `__doc__`are special methods in
python, usually dealing with built in behaviors or properties.

```py
# setting initial state

class Dog:
  """
  This is a helpful description of a Dog class.
  It expects to recieve the positional arguments
    (str:name, str:sound)
  """
  def __init__(self, name, sound):
    self.name = name
    self.sound = sound

dog_1 = Dog('Callie', 'woof')
print(dog_1.name, dog_1.sound)
print(dog_1.__doc__)

```

```py
# private variables

class Dog:
  def __init__(self, name, sound):
    # use an underscore when you dont want people to directly access instance variables
    # this isn't an actual python feature, its a convention
    # all instance variables should be by default labeled as private
    self._name = name
    self._sound = sound

  def get_name(self):
    return self._name

  def get_sound(self):
    return self._sound

dog_1 = Dog('Callie', 'woof')
print(dog_1.get_name(), dog_1.get_sound())
```

```py
# reserving memory

class Dog:
  # not required
  # helps python to make the class instance faster
  # python uses a dictionary under the hood to store instance variables
  # telling it how to reserve memory helps to increase its efficiency
  __slots__ = ['_name', '_sound']

  def __init__(self, name, sound):
    self._name = name
    self._sound = sound

  def get_name(self):
    return self._name

  def get_sound(self):
    return self._sound

dog_1 = Dog('Callie', 'woof')
print(dog_1.get_name(), dog_1.get_sound())
```

```py
# pretty printing: because <__main__.Dog object at 0x7f36545b5fd0> isnt great

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
    # another fancy dunder method
    # python will use this whenever you try to print an instance of this class
    return f'<Dog (name: {self._name}, sound: {self._sound})>'

dog_1 = Dog('Callie', 'woof')
print(dog_1)
```

## Classes Problems (30m)

## Importing

Terms

1. A __module__ is simply Python code in a separate file.
2. A __package__ is the path to a directory that contains modules, which is also a special type of module.
3. \__init__.py is the default file for a package.
4. A __submodule__ is another file in a module's folder.
5. A __function__ is (obviously!) a function in a module.

Examples

1. `import <module>` - most basic
2. `import <package>.<subpackage>.<module>` - dot syntax
3. `from <package> import <module>` - one module in a package
4. `from <package> import <module>, <module>` - multiple modules or submodules in a package
5. `from . import <submodule>` - special case for module's __init__.py to get submodules in the same folder
6. `from <module> import <function>, <function>` - down to the function level
7. `from <package> import <module> as <altName>` - renaming to avoid confusion or conflict
