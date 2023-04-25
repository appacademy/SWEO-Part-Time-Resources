# def my_func(param):
#     pass

# def my_func(param1, param2):
#     print('hello')

# my_func()

# def my_func(param1, *args):
#     print("args", args)
#     # args[0] = "goodbye"
#     lst = list(args)
#     lst[0] = "goodybye"
#     print(lst)

# my_func('hello', "how", "are", "you")

# def my_func(name, saying):
#     print(name, saying)


# my_func(saying="goodbye", name="blake")


# def my_func(param1, **kwargs):

#     print(kwargs)


# my_func('hello', name="blake", age="27", dog="paisley")

# our_lambda = lambda param1 : param1.upper()

# print(our_lambda("blake"))

# names = ["Blake", "Andres", "Yake", "Nick", "Susan", "Bryan"]

# upper_names = [name.upper() for name in names]

# print(upper_names)

# starts_with_b = [name for name in names if name[0].lower() == 'b']

# print(starts_with_b)


# create a list where names that start with b are uppercase, names that start with a are lowercase, and all other names remain the same

# transformed_names = [ name.upper() if name[0].lower() == 'b' else name.lower() if (name[0].lower() == 'a') else (name)  for name in names]

# print(transformed_names)

# names = ["Blake", "Andres", "Yake", "Nick", "Susan", "Bryan"]

# names_to_dict = {i: names[i]  for i in range(len(names))}

# print(names_to_dict)
