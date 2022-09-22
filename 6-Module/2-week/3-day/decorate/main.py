from datetime import datetime
#  # decorator function
def msg_closure(cb):
    def actuall_say_msg(num1, num2):
        cb(int(num1), int(num2))
    return actuall_say_msg



# # using the decorator syntax
# @msg_closure
def say_msg(num1, num2):
    print(num1 + num2)


# say_msg('120', '120')
msg_printer = msg_closure(say_msg)
print(msg_printer('Some message'))
# without the decorator


def timer(cb):
    def wrapper(*args):
        before_call = datetime.now()
        cb(*args)
        after_call = datetime.now()
        return after_call - before_call
    return wrapper

@timer
def long(one):
    for i in range(100000000):
        pass
    print('done', one)
@timer
def medium(one, two):
    for i in range(500000):
        pass
    print('done', one, two)
@timer
def short(one, two, three):
    for i in range(100):
        pass
    print('done', one, two, three)

print(long('arg one'))
print(medium('arg one', 'arg two'))
print(short('arg one', 'arg two', 'arg three'))