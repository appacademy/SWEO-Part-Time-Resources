# M6-W2-D2

## Iterables

-   Data **_category_** for loopables
-   Can be passed to `iter()`
    -   Use `next()` to iterate

```py
names = ['James', 'Seika', 'Eiki']
pets = {
    'James': ['Momo', "Tenten", 'Kiki'],
    'Seika': ['Tora', 'Sonic', 'Dragon'],
    'Eiki': ['Hime', 'Koga']
}
name_iter = iter(names)
pet_iter = iter(pets)

print(name_iter)
print(pet_iter)

print(next(name_iter))
print(next(pet_iter))
```

## Dictionaries

-   Collection of comma separated key:value pairs
-   Insertion ordered since python 3.7
    -   Prior to that, were unordered
-   Mutable
-   Dictionaries can't use dot notation like JS Objects

```py
# creating
my_dict = {'hello': 'world'}
print(my_dict)

other_dict = dict(first=1, second=2, third=3) #naming with kwargs
print(other_dict)

tuple_list = [(1, 'a'),(2, 'b'),(3, 'c')] #(key, value)
tuple_dict = dict(tuple_list)
print(tuple_dict)

# accessing
print(my_dict['hello'])
print(my_dict.hello) # Does not work like it does in JS

# adding
my_dict['new_key'] = 'new_value'
print(my_dict)

# updating
my_dict.update({'goodbye': 'planet'})
print(my_dict)

my_dict.update({'goodbye': 'world', 'hello': 'planet'})
print(my_dict)

# deleting
del my_dict['hello']
print(my_dict)

# copying, lists & list-likes
print(tuple_dict.keys()) # list-like
print(tuple_dict.values()) # list-like
print(tuple_dict.items()) # list-like

print(list(tuple_dict.keys())) # list
print([*tuple_dict.values()]) # list
print({*tuple_dict.items()}) # set
print({**tuple_dict}) # dictionary


# iterating
for key in tuple_dict:
  print(key)

for key in tuple_dict.keys():
  print(key)

for value in tuple_dict.values():
  print(value)

for k,v in tuple_dict.items():
  print(k,v)
```

## Sets

-   A collection of unique hashable (immutable/primitive) elements
-   Mutable
-   Unordered

```py
my_set = {1,2,3}
other_set = {3,4,5}

# union - the result of combining two sets
print(my_set | other_set)
print(my_set.union(other_set))

# like dictionaries, you can update a set
my_set.update(other_set)
print(my_set)

# can be passed any iterable
my_set.update([1, 10, 4, 11, 3, 7])
print(my_set)

# intersection - the result of only the non-unique items in two sets
print(my_set & other_set)
print(my_set.intersection(other_set))

# difference - the result set1 after removing anything present in set2
print(my_set - other_set)
print(my_set.difference(other_set))
print(other_set - my_set)

# symmetric difference - the result of only the unique items in two sets
print(my_set ^ other_set)
print(my_set.symmetric_difference(other_set))
```

---

## Decorators

A function that returns another function

Main purpose is to modify the behavior of a callback

We've been capable of doing this in JS, but haven't had much incentive to structure our code this way

```js
const js_decorator = (func_being_decorated) => {
    return (another_arg) => {
        another_arg += 'something happened';
        return func_being_decorated(another_arg);
    };
};

let my_func = (arg) => {
    // Pretend this function does something
    return arg;
};

my_func = js_decorator(my_func);

console.log(my_func('Pretend '));
```

Python's version would look like this

```py
# JavaScript-y way of using decorators
# Messy, hard to follow with complex functions
def my_func(arg):
    # Pretend this function does something
    return arg


def my_decorator(func_being_decorated):
    def wrapper(another_arg):
        another_arg += 'something happened again'
        return func_being_decorated(another_arg)
    return wrapper


my_func = my_decorator(my_func)

print(my_func('Pretend '))
```

This is used far more in Python than JS, so we have some nicer syntax to work with

`@decorator` is just syntactic sugar, but improves readability

```py
# Looks cleaner, you'll be seeing this a lot later
def my_decorator(func_being_decorated):
    def wrapper(another_arg):
        another_arg += 'something happened again'
        return func_being_decorated(another_arg)
    return wrapper


@my_decorator
def my_func(arg):
    # Pretend this function does something
    return arg


print(my_func('Pretend '))
```

One more breakdown to hopefully make it more clear

```py
@my_decorator
def my_func(arg):
    return arg

# is the same as saying

my_func = my_decorator(my_func)

# which is technically

my_func = wrapper_with_my_func_inside
```

When you invoke `my_func`, you're running `wrapper` from the decorator.

`wrapper` has `my_func` inside of it, so it runs `my_func`

## Introspection

The ability to look into a function's inner workings

Makes complex/nested functions easier to understand and work with

```py
@my_decorator
def my_func(arg):
    return arg

print(my_func)
print(dir(my_func))
print(my_func.__closure__)
print(my_func.__closure__[0].cell_contents)
```

### Viewing Closures

```py
def greeting_maker(hello_word):
    def name_input(name):
        return f'{hello_word}, {name}!'
    return name_input


hello_greeting = greeting_maker('hello')
print(hello_greeting.__closure__)  # notice you get back a tuple

# the first item in the tuple, in this case the only item
print(hello_greeting.__closure__[0])

# the value held in the closure
print(hello_greeting.__closure__[0].cell_contents)
```

### Viewing Decorators

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


print("default func:", hello)  # <function hello at 0x7fe04abf6af0>
print("default func is closure?:", hello.__closure__)  # None
hello = greeting_decorator(hello)
print("closure func:", hello)
# <function greeting_decorator.<locals>.greeting_wrapper at 0x7f186b2d9c10>
print("closure func closure:", hello.__closure__)
# (<cell at 0x7f186b2e1fd0: function object at 0x7f186b2d9af0>,)
print("closure func closure contents:",
      hello.__closure__[0].cell_contents)
# <function hello at 0x7f3125a26af0>


# syntactic sugar for howdy = greeting_decorator(howdy)
@greeting_decorator
def howdy():
    return 'Howdy'


print('howdy decorated:', howdy)

```


---

## Classes

Classes are a combination of information and behavior. A blueprint that allows
you to make objects with predefined attributes.

```js
// simple js class
class Dog {
    constructor() {
        this.sound = 'woof';
    }
}

const myDog = new Dog();
console.log(myDog);
```

```py
# simple py class
class Dog:
    # doesn't have to be self, but is always self by convention
    def __init__(self):
        self.sound = 'woof'


my_dog = Dog()
print(my_dog)
print(my_dog.sound)
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
# notice that we aren't passing in self
# python does this automatically
my_dog.change_sound('bark')
my_dog.make_sound()
```

### Dunder methods

Dunder methods (double underscore methods) like `__init__` and `__doc__`are special methods in
python, usually dealing with built in behaviors or properties.

```py
# setting initial state
class Dog:
    """
    This is just a description of the class.
    This helps other devs understand how to use your class
    It expects to receive the positional arguments
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
        """
        Use a leading underscore on instance variables
        that shouldn't be accessed when using the class.
        This isn't an actual python feature, its a convention.
        All instance variables should be private,
        except for any variables you explicitly want to be public
        """
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
    # Not required, just a memory optimization
    # Python devs will often build a class, then fill in slots last
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
# Pretty printing: because
# <__main__.Dog object at 0x7f36545b5fd0>
# is ugly
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
```

## Builtin Class Decorators

These decorators allow us to convert class methods into properties

Makes code easier to use and more uniform

Without decorators, we must invoke each method

```py
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

my_dog.change_sound('bark')
print(my_dog.get_sound())

my_dog.del_sound()
print(my_dog.get_sound())
```

## `@property.method`

With decorators, we use each method as if it were a property

-   Makes our class feel like a "normal" object

To do this, decorate your `getter` with `@property`

Then decorate your `setter` & `deleter`

-   `@prop_name.setter`
-   `@prop_name.deleter`

```py
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

## Importing

Terms

1. A **module** is simply Python code in a separate file.
2. A **package** is the path to a directory that contains modules, which is also a special type of module.
3. **init**.py is the default file for a package.
4. A **submodule** is another file in a module's folder.
5. A **function** is (obviously!) a function in a module.

More Simply

1. File == Module
2. Folder == Package
3. Folder with files in it == Module & Package
4. `__init__.py` == Main file in a folder (package)
5. `otherFiles.py` == Submodules

A single file is a module because a single file can contain everything we need a module to do.

It's often nice to organize large files into multiple smaller files

If you want all those files to act as a single module, put them in a folder with a `__init__.py`

-   This is similar to how some of you managed components in React, or your store in Redux

    -   Your store was made up of multiple smaller files, then an `index.js` collected those smaller file's functions
    -   We only have to import the folder's name and the `index.js` gets imported

```js
// src/store/index.js
import sessionReducer from './session.js'; // These are submodules
import spotsReducer from './spots.js'; // These are submodules
import reviewsReducer from './reviews.js'; // These are submodules
import bookingsReducer from './bookings.js'; // These are submodules

const rootReducer = combineReducers(...)
const configureStore = () => ...

export default configureStore;
```

Here our `src/store/index.js` is acting as our `__init__.py`

Then inside your app's index.js

```js
// src/index.js
import configureStore from './store'; // This is a package & module

const store = configureStore();
```

Examples

1. `import <module>` - most basic
2. `import <package>.<subpackage>.<module>` - dot syntax
3. `from <package> import <module>` - one module in a package
4. `from <package> import <module>, <module>` - multiple modules or submodules in a package
5. `from . import <submodule>` - special case for module's **init**.py to get submodules in the same folder
6. `from <module> import <function>, <function>` - down to the function level
7. `from <package> import <module> as <altName>` - renaming to avoid confusion or conflict