# names = ["James", "Seika", "Eiki"]
# pets = {
#     "James": ["Momo", "Tenten", "Kiki"],
#     "Seika": ["Tora", "Sonic", "Dragon"],
#     "Eiki": ["Hime", "Koga"],
# }
# name_iter = iter(names)
# pet_iter = iter(pets)

# print(name_iter)
# # print(pet_iter)

# print(next(name_iter))
# print(next(pet_iter))
# print(pets[next(pet_iter)])


# creating
# print(my_dict)

# other_dict = dict(first=1, second=2, third=3) #naming with kwargs
# print(other_dict)

tuple_list = [('a', 1),(2, 'b'),(3, 'c')] #(key, value)
tuple_dict = dict(tuple_list)
# print(tuple_dict)

# # accessing
# print(my_dict['hello'])
# print(my_dict.hello) # Does not work like it does in JS

# # adding
# my_dict['new_key'] = 'new_value'
# # print(my_dict)

# # # # updating
# my_dict.update(goodbye = 'brodrick')
# print(my_dict)

# # my_dict.update({'goodbye': 'Brodrick', 'hello': 'planet'})
# my_dict['goodbye'] = 'brodricks answer'
# print(my_dict)

# my_dict = {'hello': 'world'}
# # deleting
# # del my_dict['hello']
# # print(my_dict)

# # # copying, lists & list-likes
# list_like = tuple_dict.keys() # list-like
# print(tuple_dict.values()) # list-like
# print(tuple_dict.items()) # list-like




# print(list(tuple_dict.keys())) # list
# print([*tuple_dict.values()]) # list
# print({*tuple_dict.items()}) # set
# print({**tuple_dict}) # dictionary


# iterating
# for key in tuple_dict:
#   print(key)

# for key in tuple_dict.keys():
#   print(key)

# for value in tuple_dict.values():
#   print(value)

# for k,v in tuple_dict.items():
#   print(k,v)






# names = ['James', 'Seika', 'Eiki']
# pets = {
#     'James': ['Momo', "Tenten", 'Kiki'],
#     'Seika': ['Tora', 'Sonic', 'Dragon'],
#     'Eiki': ['Hime', 'Koga']
# }
# name_iter = iter(names)
# pet_iter = iter(pets)

# print(name_iter)
# # print(pet_iter)

# idx0 = next(name_iter)
# print(next(name_iter))
# print(next(name_iter))
# # print(next(pet_iter))

# print(idx0)

# creating
my_dict = {'hello': 'world'}
# print(my_dict)

# other_dict = dict(first=1, second=2, third=3) #naming with kwargs
# print(other_dict)

tuple_list = [(1, 'a'),(2, 'b'),(3, 'c')] #(key, value)
tuple_dict = dict(tuple_list)
# print(tuple_dict)

# # accessing
# print(my_dict['hello'])
# print(my_dict.hello) # Does not work like it does in JS

# # adding
my_dict['new_key'] = 'new_value'
# print(my_dict)

# # updating
# my_dict.update({'goodbye': 'planet'})
# print(my_dict)

# my_dict.update({'goodbye': 'world', 'hello': 'planet'})
# print(my_dict)

# my_dict['hello'] = 'Ethan'
# print(my_dict)

# # # deleting
# del my_dict['hello']
# print(my_dict)

# copying, lists & list-likes
# print(tuple_dict.keys()) # list-like
# print(tuple_dict.values()) # list-like
# print(tuple_dict.items()) # list-like

# print(list(tuple_dict.keys())) # list
# print([*tuple_dict.values()]) # list
# print({*tuple_dict.items()}) # set
# print({**tuple_dict}) # dictionary


# # iterating
# for key in tuple_dict:
#   print(key)
#   print(tuple_dict[key])

# for key in tuple_dict.keys():
#   print(key)

# for value in tuple_dict.values():
#   print(value)

# for k,v in tuple_dict.items():
#   print(k,v)