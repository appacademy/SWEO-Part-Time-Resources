# Python Classes
- Python classes are conceptually the same as how we learned them in JavaScript
- They are basically just blueprints to create our own data type
- Python does not use the word "constructors" instead python has "initalizers"
- Python uses a method called `__init__` to initialize a new class instance
- Python uses the `self` keyword to reference itself. This is equivalent to the `this` keyword in JavaScript
- Python classes have instance methods, class methods, and static methods.
- You pass in the self keyword to every instance method including the `__init__` method. To reference a methods instance variables you would first use the self keyword
```python
    class Car:
        def __init__(self):
            self.make = "Toyota"
            self.model = "Prius"
            self.year = 2020
```