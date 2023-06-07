from time import time

#first class objects
def greet(name):
    return f"Alright welcome in everybody, just hit the hour, let's wait a few more moments until {name} rolls in"

def wrap_greet(func, name):
    return func(name)

# print(wrap_greet(greet, "Will"))




# higher-order function
def make_pretty(func):
    def inner():
        print("I got decorated")
        func()
    return inner

def ordinary():
    print("I am ordinary")

pretty = make_pretty(ordinary)
# pretty()

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

def say_hello():
    print("THIS PRINTED Hello!")

say_hello = my_decorator(say_hello)
# say_hello()
#This is now a decorated say_hello function

# say_hello()




#@ Sign use

def make_pretty(func):
    def inner():
        print("I got decorated")
        func()
    return inner


# ordinary = make_pretty(ordinary)

@make_pretty
def ordinary():
    print("I am ordinary")

# ordinary()



def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

# @my_decorator
# def say_hello():
#     print("Hello!")
# say_hello()

#Example 3: Decorators with Arguments~~~~~~~~~~~~~~~~~~~~~~~~~~~

def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.")
        func(*args, **kwargs)
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def greet(name):
    print(f"Hello, {name}!")
# greet("Alice")

@my_decorator
def dif_greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

dif_greet("Bob", greeting="Good morning")