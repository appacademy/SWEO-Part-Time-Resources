# create dict
# classic, slow
# new_name = {
#     'b' : 0,
#     'a' : 0,
#     'y' : 0
# }
# dict contructor
# new_name = dict(
#     b=0,
#     a=0,
#     y=0
# )
# print(new_name)
# print(list(zip(list('baylen'), [0 for i in range(100)])))
# print(list(zip('baylenhellowhatsupthisisasuperlongstring', [0 for i in range(100)])))
# new_name = dict(
#     zip('baylenhellowhatsupthisisasuperlongstring', [0 for i in range(100)])
# )
# # new_name = dict(
# #     [('b', 0),('a', 0),('y', 0)]
# # )
# print(new_name)

# comprehention
# my_name = {key : 0 for key in 'baylen'}

# # checking for key
# print(my_name)

# def key_checker(d1, search_key):
#     for key in d1:
#         if key == search_key:
#             return True
#     return False

# print(key_checker(my_name, 'bbbbb'))
# print('bbbb' in my_name)

# if  0 in my_name.values():
#     # my_name['z'] = 0
#     print('it is in the values')

# print(my_name)
# print(help(dict))
# combine dictionaries
# first_name = {key : 0 for key in 'baylen'}
# first_name['something'] = 'onetwothree'
# last_name = {key : 0 for key in 'doss'}
# last_name['something'] = 'fourfivesix'

# print(first_name, last_name)

# def combiner(d1, d2):
#     res = d1
#     for key in d2:
#         res[key] = d2[key]
#     return res

# print(combiner(first_name, last_name))
# no built in

# # spread operator 
# first_and_last  = {**first_name, **last_name}
# print(first_and_last)

# # update
# first_name.update(last_name)
# print(first_name)
# print(help(first_name.update))

# majority char


from unicodedata import name


def majority_char(string):
    res = {key : 0 for key in string}
    for char in string:
        res[char] += 1
    # max_num = max(res.values())
    # if max_num > len(string) / 2:
    #     # print(res, max_num)
    #     # print(max(res.values()))
    #     # for key in res:
    #     #     if res[key] == max_num:
    #     #         return key
    #     pass
    
    # return ''.join([key for key, value in res.items() if value == max_num])
    # if max(res.values()) > len(string) / 2:
    #     return list(res.keys())[list(res.values()).index(max(res.values()))]



# print(majority_char('bayleeeeeeeen'))
# print(type({'1', '2'}))
name_set = set('baylen')
# list_1 = [1,2 ,3, 4, 5,5,5,5, 5, 5, 2, 1, 3, 4, 5, 6,7 , 7, 4, 3, 2, 4]
# print(list(set(list_1)))
# last_name_set = set(['d', 'o', 's', 's'])
# print(name_set, last_name_set)
# create set
# {}
# contructor
# print(help(set))

# modify set
# print(name_set)
# name_set.add('b')
# name_set.add('y')
# name_set.add('a')
# name_set.add('b')
# name_set.add('hello')
# name_set.add(123)
# name_set.add('yo')

# # name_set.remove('ba')
# name_set.discard('something')
# print(name_set)

# try:
#     name_set.remove('something')
# except KeyError as e:
#     print(e, 'That key is not inside the set')
#     name_set.add('something')
# finally:
#     print('something' in name_set)

name_set = set('baylennnhhjjkk')
last_set = set('dossnnhhjjkk')

# union 
# basically concat
print(name_set, last_set)
print(name_set | last_set)
print(name_set.union(last_set))

# intersection
# only the elements that exists in the set being called on and the set or sets being passed in
print(name_set.intersection(last_set))
print(name_set & last_set) 

# difference
# only things that exist in the set being called on and not in the set or sets being pased in 
print(name_set.difference(last_set))
print(name_set - last_set)

