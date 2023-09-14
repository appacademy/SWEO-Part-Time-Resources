def wrapper_func(func):
    def inner_func():
        print('Hello')
        func()
    return inner_func

# def world_func():
#     print('World')

# hello_func = wrapper_func(world_func)
# hello_func()

@wrapper_func
def world_func():
    print('World')

world_func()
