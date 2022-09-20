# # class Baylen:
# #     def __init__(self):
# #         pass

# # def check_end_z(word):
# #     return word[-1] == 'z' or word[-1]

# # list_one = ['Hey', {'name' : 'Baylen'}, [1], Baylen]
# # tup_one = (123, 'bay', 'len', {}, (1.1, 2.2))
# # dict_one = {
# #     'id' : 1,
# #     'name' : 'location',
# #     '1' : 'false',
# #     'is_student' : 'False'
# # }

# # # any
# # Return True if any element of the iterable is true. If the iterable is empty, return False. Equivalent to:
# # print(all(dict_one.values()))

# # # all
# # Return True if all elements of the iterable are true (or if the iterable is empty). Equivalent to:
# # zip
# # list_one = [,2,3,4]
# # # list_two = ['a', 'b', 'c']
# # # list_three = [123, 345, 789]
# # users = [
# #     {'id':1, 'name' : 'baylen', 'is_student' : False},
# #     {'id':2, 'name' : 'james', 'is_student' : False},
# #     {'id':3, 'name' : 'zaviar', 'is_student' : False},
# #     {'id':4, 'name' : 'steve', 'is_student' : True},
# #     {'id':5, 'name' : 'bob', 'is_student' : True},
# #     {'id':6, 'name' : 'bill', 'is_student' : True},
# #     {'id':7, 'name' : 'chris', 'is_student' : True},
# # ]
# # comments = [
# #     'Nice!',
# #     'Sweet!',
# #     'Dope!'
# # ]
# # print(list(zip(users, comments)))
# # list_one.extend(list_two)
# # print(list_one)



# # map
# map_list = ['baylen',
# 'james',
# 'zaviar',
# 'steve',]
# def reverse_string(word):
#     res = []
#     for i in range(len(word) -1, -1, -1):
#         res.append(word[i])
#     return ''.join(res)

# # print(list(map(lambda x: ''.join(list(reversed(list(x)))), map_list)))
# # print(list(map(reverse_string, map_list)))

# # filter
# def user_filter(user):
#     return user['is_student'] is True

# users = [
#     {'id':1, 'name' : 'baylen', 'is_student' : False},
#     {'id':2, 'name' : 'james', 'is_student' : False},
#     {'id':3, 'name' : 'zaviar', 'is_student' : False},
#     {'id':4, 'name' : 'steve', 'is_student' : True},
#     {'id':5, 'name' : 'bob', 'is_student' : True},
#     {'id':6, 'name' : 'bill', 'is_student' : True},
#     {'id':7, 'name' : 'chris', 'is_student' : True},
# ]

# print(list(filter(user_filter, users)))
# print(list(filter(lambda user : user['is_student'] is True, users)))

# sorted
users = [
    {'id':1, 'name' : 'baylen', 'is_student' : False},
    {'id':2, 'name' : 'james', 'is_student' : False},
    {'id':3, 'name' : 'zaviar', 'is_student' : False},
    {'id':4, 'name' : 'steve', 'is_student' : True},
    {'id':5, 'name' : 'bob', 'is_student' : True},
    {'id':6, 'name' : 'bill', 'is_student' : True},
    {'id':7, 'name' : 'chris', 'is_student' : True},
]
list_one = [100, 56, 43, 22, 10, 6, 5, 1, 100, -10]

# print(sorted(list_one, reverse=True))
# print(sorted(users, key=lambda user : user['name'], reverse=True))
print(list_one.sort())
print(list_one)
# print(False < True)
