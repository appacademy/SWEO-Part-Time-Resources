class Baylen:
    def __init__(self):
        pass


# # def check_end_z(word):
# #     return word[-1] == 'z' or word[-1]

# list_one = ['Hey', {'name' : 'Baylen'}, [1], Baylen]
# moves = ['T', 'E', 'S', 'T']
# tup_one = (123, 'bay', 'len', {}, (1.1, 2.2))
# dict_one = {
#     'id' : 1,
#     'name' : 'location',
#     '1' : 'false',
#     'is_student' : 'False'
# }

# # print(any(moves))
# if all(moves):
#     print('you win')


# # # any
# # Return True if any element of the iterable is true. If the iterable is empty, return False. Equivalent to:


# # # all
# # Return True if all elements of the iterable are true (or if the iterable is empty). Equivalent to:
# zip
# list_one = [1,2,3,4]
# list_two = ['a', 'b', 'c', 'd']
# # list_three = [123, 345, 789]
# print(list(zip(list_one, list_two, list_three)))
# users = [
#     {'id':1, 'name' : 'baylen', 'is_student' : False},
#     {'id':2, 'name' : 'james', 'is_student' : False},
#     {'id':3, 'name' : 'zaviar', 'is_student' : False},
#     {'id':4, 'name' : 'steve', 'is_student' : True},
#     {'id':5, 'name' : 'bob', 'is_student' : True},
#     {'id':6, 'name' : 'bill', 'is_student' : True},
#     {'id':7, 'name' : 'chris', 'is_student' : True},
# ]
# comments = [
#     'Nice!',
#     'Sweet!',
#     'Dope!'
# ]
# print(dict(zip(list_one, list_two)))



# map
map_list = ['baylen',
'james',
'zaviar',
'steve',]
def reverse_string(word):
    res = []
    for i in range(len(word) -1, -1, -1):
        res.append(word[i])
    return ''.join(res)
    # return 'a'

# print(map_list)
# print(list(map(lambda word : ''.join(list(reversed(word))), map_list)))


# filter
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

# print(list(filter(lambda user : user['is_student'] is True, users)))

# sorted
users = [
    {'id':1, 'name' : 'Baylen', 'is_student' : False},
    {'id':1.1, 'name' : 'baylen', 'is_student' : False},
    {'id':2.1, 'name' : 'james', 'is_student' : False},
    {'id':2, 'name' : 'James', 'is_student' : False},
    {'id':3, 'name' : 'zaviar', 'is_student' : False},
    {'id':4, 'name' : 'steve', 'is_student' : True},
    {'id':5, 'name' : 'bob', 'is_student' : True},
    {'id':6, 'name' : 'bill', 'is_student' : True},
    {'id':7, 'name' : 'chris', 'is_student' : True},
]
list_one = [100, 56, 43, 22, 10, 6, 5, 1, 100, -10]

def key_grabber(dict):
    return dict['is_student']


print(sorted(list(map( lambda user : user['name'], users)), key=lambda dict : dict['name']))
# list_one.sort()
# print(list_one)
# print(False < True)
