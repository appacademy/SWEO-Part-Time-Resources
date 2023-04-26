# M6 Wk2 D3 Intro To Python

## Python Classes
- Classes are a way of combining information and behavior. They are a blueprint created by you from which you can make objects. This defines a set of attributes that will characterize any object that is instantiated from this class.

## Constructor using Dunder \__init__()
- Function names that start and end with two underscores are special built-in functions that Python uses in certain ways. The \__init__() method is one of these special functions. It is called automatically when you create an object from your class.
- The \__init__() method lets you make sure that all relevant attributes are set to their proper values when an object is created from the class, before the object is used.

## Self, This
- The self keyword often takes people a little while to understand. The word "self" refers to the current object that you are working with. When you are writing a class, it lets you refer to certain attributes from any other part of the class. Basically, all methods in a class need the self object as their first argument, so they can access any attribute that is part of the class.

## \__repr__()
- If you create an instance of the a class and print it, you get some Python-runtime information about it.
```
print(<instanceOfClass>)
# example
#> <instance.ClassName object at 0x10a323e90>
```
- Python does give you a way to override that behavior, if you would like, using the instance "dunder method" \__repr__().

## Instance Methods
- A method is just a function that is part of a class. Since it is just a function, you can do anything with a method that you learned about with functions. You can accept positional arguments, keyword arguments, an arbitrary list of argument values, an arbitrary dictionary of arguments, or any combination of these. Your arguments can return a value or a set of values if you want, or they can just do some work without returning any values.

## Dot Notation (FINALLY)
- In Python, you can access an instance attribute using the dot notation (e.g. instance.attribute) but not with square brackets and quotes (instance['attribute']).

- The reason for this is that the dot notation is used to access attributes of an object, whereas square brackets and quotes are used to access items of a sequence, such as a list or a dictionary. When you use the dot notation, you are accessing a specific attribute of the object, which is a property of the object and can be directly accessed using the . operator.

## Private Variables _variable
- Python does not have private variables for its classes. That means any instance variable that you declare can be read and set from outside the class. To discourage programmers from doing that, PEP 8 suggests the following naming convention.

- Use one leading underscore only for non-public methods and instance variables.


## Python Imports
### Terms To Know
- A module is simply Python code in a separate file.
- A package is the path to a directory that contains modules, which is also a special type of module.
- \__init__.py is the default file for a package.
- A submodule is another file in a module's folder.
- A function is (obviously!) a function in a module.

### Import Statements
- import <module\> - most basic
- import <package\>.<subpackage\>.<module\> - dot syntax
- from <package\> import <module\> - one module in a package
- from <package\> import <module\>, <module\> - multiple modules or submodules in a package
- from . import <submodule\>- special case for module's __init__.py to get submodules in the same folder
- from <module\> import <function\>, <function\>  down to the function level
- from <package\> import <module\> as <altName\> - renaming to avoid confusion or conflict

## Decorators
- With decorators, you can wrap functions to dynamically modify their behavior in a similar way that you have done with renaming outer functions that form a closure. Decoration happens when you pass a function into a wrapper and assign the wrapper's name to be the same as the function.
