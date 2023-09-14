def wrapper_func(func):
    def inner_func():
        print('Hello')
        func()
    return inner_func

# def world_func():
#     print('World')


# world_func()

# wrapper = wrapper_func(world_func)

# wrapper()

# @wrapper_func
# def world_func():
#     print('World')

# world_func()


def wrapper_func():
	return "Hello"

def world_func():
	return "World"

print(wrapper_func())
print(world_func())
