def my_decorator(my_func):
    def my_wrapper(**kwargs, *args):
        result = my_func(args)
        name = kwargs['name']
        return f'Hello {name}, your result is {result}!'
    return my_wrapper

@my_decorator
def calculator(scores):
    return sum(scores)

print(calculator([5, 5, 7, 9], name='Wesley'))
