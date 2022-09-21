# create dict
# classic, slow
# new_dict = {
#     'b' : 0,
#     'a' : 0,
#     'y' : 0
# }



# new_dict = dict(zip(list('baylen'), [0 for i in range(1000)]))
# print(new_dict)
# # new_dict['n'] = 100
# # print(new_dict)
# # new_dict2 = {
# #     'a' : 1,
# #     'a' : 2
# # }
# # print(new_dict2)

# new_dict = dict(b=0, a=0,y=0)

# print(new_dict)
# del new_dict['a']
# print(new_dict)
# dict contructor

# checking for key
def check_for_key(search_key, dict):
    for key in dict:
        if key == search_key:
            return True
    return False

# print(check_for_key('b', new_dict))
# del new_dict['b']
# print(check_for_key('b', new_dict))

# print('b' in new_dict)
# if 0 in new_dict.values():
#     print('some logic')
# else :
#     print('doesnt exist')

# combine dictionaries
# first_name = {i:0 for i in list('baylen')}
# last_name = {i:0 for i in 'doss'}
# print(first_name, last_name)
# no built in
def dict_combine(d1, d2):
    new_dict = d1
    for key in d2:
        new_dict[key] = d2[key]
    return new_dict

# print(dict_combine(first_name, last_name))
# # spread operator 
# print({**first_name, **last_name})
# # update
# # print(help(dict))
# first_name.update(last_name)
# print(first_name)

# print(filter(lambda x : x > 2, [1,2,3,4]))
# majority char

def majority_char(string):
    res = {i:0 for i in string}
    for char in string:
        res[char] += 1
    max_val = max(res.values())
    # if max_val > len(string) / 2:
    #     # var = [key for key in res if res[key] == max_val]
    #     # return var[0
    #     # new_dict = dict(zip(res.values(), res.keys()))
    #     # print(new_dict)
    #     # return new_dict[max_val]
    # for k, v in res.items():
    #     if v > len(string) / 2:
    #         return k
    #     # print()
    # # return maj
    if max_val >= len(string) / 2:
        return list(res.keys())[list(res.values()).index(max_val)]

# print(majority_char('baylennnnnnnn'))




# create set
# print(first_name_set)
# print(help(set))
# new_set = {1, 2, 3, 4}
# {}
# contructor


# modify set
first_name_set = set(list('baylen'))
# # print(first_name_set)
# first_name_set.add('z')
# first_name_set.add(1)
# first_name_set.add(1234)
# first_name_set.add('b')
# first_name_set.add('b')
# first_name_set.add('b')
# # print(set([*first_name_set, 'hello']))

# # print(first_name_set)
# # first_name_set.discard('baylen')
# print(first_name_set)

# try:
#     first_name_set.remove('baylen')
# except KeyError as e:
#     first_name_set.add('baylen')
# finally:
#     print('baylen was added?', 'baylen' in first_name_set)    
#     print(first_name_set)
# union 
first_name_set = set([1,2,3,4,5,6])
second_set = set([5,6,7,8,9])
# print(first_name_set.union(second_set))
# print(first_name_set | second_set)
# intersection
# print(first_name_set.intersection(second_set))
# print(first_name_set & second_set)
# difference
print(first_name_set.difference(second_set))
print(first_name_set - second_set)

    
