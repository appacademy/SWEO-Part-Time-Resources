# positional: a positional argument, works the same way as JS
# (*)args: any extra arguments that don't have a positional parameter. Type is a Tuple. Similar to rest parameter in js
# default: keyword argument with default value
# (**)kwargs: any arguments with a key=value pairing. Type is a Dictionary.
# def parameters(positional,  banana, *args, **kwargs):
#   print(positional, args, banana, kwargs)
  
# parameters('hello',"banana", 1,2,3,4, )
# It is considered best practice to use positional arguments for parameters without default values and keyword arguments for parameters with default values
# def default_value(a, b='b'):
#   print(a, b)
  
# default_value('a')
# default_value('a', 'c')
# default_value('a', b='d')

# yell = lambda input: input.upper()
# print(yell('hello'))

# my_list = [1,2,3,4,5,6, 'james']
# my_range = range(len(my_list))

# for i in my_range:
#     # print('idx', i)
#     # print(my_list[i])
#     print({i: my_list[i]})

# my_tup = (1,2,3,4,5)

# my_range = range(len(my_tup))

# for i in my_range:
#     my_tup[i] = 'james'

# james = 'james'

# my_dict = {'james': 'thompson'}

# print(my_dict)

# my_set = set({1,2,3,4,4})

# print(my_set)