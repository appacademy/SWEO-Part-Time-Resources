
# names = ['Zaviar', 'Seika', 'Eiki']
# pets = {
#     'Zaviar': ['Momo', "Tenten", 'Kiki'],
#     'Seika': ['Tora', 'Sonic', 'Dragon'],
#     'Eiki': ['Hime', 'Koga']
# }
# name_iter = iter(names)
# pet_iter = iter(pets)

# print(name_iter)
# print(dir(name_iter))
# print(name_iter.next)
# print(pet_iter)

# print(next(name_iter))
# print(next(name_iter))
# print(next(name_iter))
# print(next(name_iter))
# print(names[3])

# print(next(pet_iter))
# print(next(pet_iter))
# print(next(pet_iter))

# for val in pets:
#     print(val)

# print(my_dict)
# other_dict = dict(first=1, second=2, third=3) #naming with kwargs
# print(other_dict)

# tuple_list = [(1, 'a'),(2, 'b'),(3, 'c')] #(key, value)
# list_list = [[1, 'a'],[2, 'b'],[3, 'c']] #(key, value)
# tuple_dict = dict(tuple_list)
# list_dict = dict(list_list)
# print(tuple_dict)
# print(list_dict)

# my_dict['bye'] = "Heyoo"
# print(my_dict['bye'])
# print(my_dict.bye)
# print(my_dict['hello'])
# print(my_dict.hello)  # Does not work like it does in JS


# list_list = [[1, 'a'],[2, 'b'],[3, 'c']] #(key, value)
# list_dict = dict(list_list)

# print(my_dict)
# my_dict.update({'goodbye': 'planet'})
# print(my_dict)

# my_dict.update({'goodbye': 'world', 'hello': 'planet'})
# print(my_dict)

# del my_dict['hello']
# print(my_dict)

# my_dict = {'hello': 'world'}
# tuple_list = [(1, 'a'), (2, 'b'), (3, 'c')]  # (key, value)
# tuple_dict = dict(tuple_list)

# my_range = iter(range(5))
# print(next(my_range))
# print(tuple_dict.keys()) # list-like
# print(tuple_dict.values()) # list-like
# print(tuple_list)
# print(tuple_dict.items())  # list-like

# print(list(tuple_dict.keys()))  # list
# print([*tuple_dict.values()])  # list
# print({*tuple_dict.items()})  # set
# # print({**tuple_list}) # can't do this
# print({**tuple_dict})  # dictionary

# for key in tuple_dict:
#   print(key)

# for key in tuple_dict.keys():
#   print(key)

# for value in tuple_dict.values():
#   print(value)

# for k, v in tuple_dict.items():
#     print(k, v)

# for k in tuple_dict.items():
#     print(k)

# my_set = {1, 2, 3}
# other_set = {3, 4, 5}

# # union - the result of combining two sets
# print(my_set | other_set)
# print(my_set.union(other_set))
# print(my_set, other_set)

# # like dictionaries, you can update a set
# my_set.update(other_set)
# print(my_set)

# # can be passed any iterable
# my_set.update([1, 10, 4, 11, 3, 7])
# my_set.update([20.0, 20])
# print(my_set)
# set()
# str_set = {'12', '34'}
# str_set.update(['12'])
# print(str_set)

# # intersection - the result of only the non-unique items in two sets
# print(my_set & other_set)
# print(my_set.intersection(other_set))

# # difference - the result set1 after removing anything present in set2
# print(my_set - other_set)
# print(my_set.difference(other_set))
# print(other_set - my_set)

# # symmetric difference - the result of only the unique items in two sets
# print(my_set ^ other_set)
# print(my_set.symmetric_difference(other_set))

my_dict = {'name': "Zaviar", 'color': 'Green'}

