# `M6W2D3`

## Before we talk about decorators, let's review:

### first-class objects
Note: Functions in Python are first-class objects, meaning that they can be assigned to variables,
stored in data structures, passed as arguments to other functions, or even returned as values from other functions.

```py
def greet(name):
    return f"Alright welcome in everybody, just hit the hour, let's wait a few more moments until {name} rolls in"

def wrap_greet(func, name):
    return func(name)

print(wrap_greet(greet, "Will"))
```

## Decorating time

```py
def make_pretty(func):
    def inner():
        print("I got decorated")
        func()
    return inner

def ordinary():
    print("I am ordinary")

pretty = make_pretty(ordinary)
pretty()  # Prints: I got decorated\n I am ordinary
```

```py
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

def say_hello():
    print("Hello!")

say_hello = my_decorator(say_hello)
say_hello()
```
In the example above, say_hello is decorated by my_decorator. The function say_hello is passed to my_decorator as an argument. Inside my_decorator, a new function wrapper is defined. The wrapper function will call the original function, and add a bit of new functionality before and after calling the original function. The wrapper function is the function that is returned from the my_decorator function.

Now when we call say_hello(), it's not just the say_hello function that gets called, but the decorated version with wrapper()'s functionality.

## Using the @ symbol
### Python's Syntactic Sugar for Decorators
Python makes creating and using decorators a bit cleaner and nicer by supporting the @ symbol,
 used on top of the function that needs to be decorated.

```py
def make_pretty(func):
    def inner():
        print("I got decorated")
        func()
    return inner

@make_pretty
def ordinary():
    print("I am ordinary")
ordinary()

# pretty = make_pretty(ordinary)
# pretty()
```

```py
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")
say_hello()
"""without @:
say_hello = my_decorator(say_hello)
say_hello()
"""
```

Sometimes, you might want to pass arguments into the decorated function. We can do this by defining wrapper to accept arguments.

```py
from time import time

def timing_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time()
        result = func(*args, **kwargs)
        end_time = time()
        print(f"Function {func.__name__} took {(end_time - start_time)*1000}ms")
        return result
    return wrapper

@timing_decorator
def my_function(n):
    sum([i for i in range(n)])
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
