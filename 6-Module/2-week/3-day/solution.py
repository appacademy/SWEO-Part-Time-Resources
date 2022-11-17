
#! -------------------------------------------------------------------
#! ----- Hello World Decorator ---------------------------------------
#! -------------------------------------------------------------------
def my_deco(a_func):
    def my_wraper():
        print('Hello')
        a_func()
        print('Goodnight')
    return my_wraper


@my_deco
def world():
    print("World")


# world()  # > Hello World Goodnight


#! -------------------------------------------------------------------
#! ----- Order Decorator ---------------------------------------------
#! -------------------------------------------------------------------
def my_deco(a_func):
    def my_wrapper(num):
        print(1)
        new_num = a_func(num)
        print(3)
        return new_num
    return my_wrapper


@my_deco
def middle(num):
    print(num)
    return num * num


# print(middle(2))  # > 1 2 3 4

#! -------------------------------------------------------------------
#! ----- Timer Decorator ---------------------------------------------
#! -------------------------------------------------------------------
# from datetime import datetime


def timer(a_func):
    def my_wrapper(*args, **kwargs):
        before_time = datetime.now()
        a_func(*args, **kwargs)
        after_time = datetime.now()
        return after_time - before_time
    return my_wrapper


@timer
def greet_me(name):
    return f"hello {name}"


@timer
def sum_of_two(sum1, sum2):
    return sum1 + sum2


# print(greet_me("Penelope"))  # approximately 0:00:00.000006
# print(sum_of_two(13, 7))  # approximately 0:00:00.000002

#! Just showcasing if else in a decorator
# def timer_deco(cb):
#     def wrapper(*args, **kwargs):
#         before_time = datetime.now()
#         cb(*args, **kwargs)
#         after_time = datetime.now()
#         total_time = str(after_time - before_time)

#         if (total_time == '0:00:00.000001'):
#             return "Hey that's a fast function!"
#         else:
#             return 'Slow func cringe func'
#     return wrapper

#! -------------------------------------------------------------------
#! ----- Chain Decorator ---------------------------------------------
#! -------------------------------------------------------------------
def first_decorator(cb):
    def first_wrapper(*args, **kwargs):
        val = cb(*args, **kwargs)
        return val * val
    return first_wrapper


def second_decorator(cb):
    def second_wrapper(*args, **kwargs):
        val = cb(*args, **kwargs)
        return val * 3
    return second_wrapper


@first_decorator
@second_decorator
def num(a, b):
    return a + b


# print(num(5, 2))  # > 441
# print(num(8, 2))  # > 900
# print(num(4, 9))  # > 1521

# ? Nested version - I personally don't recommend doing it like this
# def chain_decorator(callback):
#     def _inner_decorator(callback):
#         def _wrapper(*args, **kwargs):
#             cb_var = callback(*args, **kwargs)
#             return cb_var * cb_var
#         return _wrapper

#     @_inner_decorator
#     def wrapper(*args, **kwargs):
#         cb_var_two = callback(*args, **kwargs)
#         return cb_var_two * 3

#     return wrapper


# @chain_decorator
# def num(a, b):
#     return a + b


# print(num(5, 2))  # > 441
# print(num(8, 2))  # > 900
# print(num(4, 9))  # > 1521
