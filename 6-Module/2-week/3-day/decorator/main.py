from datetime import datetime

# def msg_closure(cb):
#     print('someething to de before I print the message')
#     def inner(num1, num2):
#         cb(int(num1), int(num2))
#     return inner


# @msg_closure
# def print_msg(num1, num2):
#     print(num1 + num2)

# # print_msg('sanity?')

# # without decoration
# # # closed_print_msg = msg_closure(print_msg)

# # # closed_print_msg('sanity?')

# print_msg('120', '120')


def timer(cb):
    def wrapper(*args, **kwargs):
        before_time = datetime.now()
        cb(*args, **kwargs)
        after_time = datetime.now()
        return after_time - before_time
    return wrapper

@timer
def long(one):
    for i in range(100000000):
        pass
    print(one)


@timer
def medium(one, two):
    for i in range(500000):
        pass
    print(one, two)


@timer
def short(one, two,  three):
    for i in range(100):
        pass
    print(one, two, three)


print(long('one'))
print(medium('one', 'two'))
print(short('one', 'two', 'three'))