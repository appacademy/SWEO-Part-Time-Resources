class Alex:
    def __init__(self):
        pass

def check_end_z(word):
    return word[-1] == 'z' or word[-1]

list_one = ['Hey', {'name' : 'Alex'}, [1], Alex]
tup_one = (123, 'al', 'lex', {}, (1.1, 2.2))
dict_one = {
    'id' : 1,
    'name' : 'location',
    '1' : 'false',
    'is_student' : 'False'
}

example_1 = [{},[],'',0,0.0,'''''']
# example_2 = []

# print(dir(list_one))

# any
# Return True if any element of the iterable is true. If the iterable is empty, return False. Equivalent to:
# print(all(example_1))

# # all
# Return True if all elements of the iterable are true (or if the iterable is empty). Equivalent to:


# zip, always return tuples
list_one = [1,2,3,4]
list_two = ['a', 'b', 'c']
list_three = [123, 345, 789]
# users = [
#     {('test', 'a'):1, 'name' : 'alex', 'is_student' : False},
#     {'id':2, 'name' : 'micheal', 'is_student' : True},
#     {'id':3, 'name' : 'stanley', 'is_student' : True},
#     {'id':4, 'name' : 'jeremiah', 'is_student' : True},
#     {'id':5, 'name' : 'reyhaneh', 'is_student' : True},
#     {'id':6, 'name' : 'daniel', 'is_student' : True},
#     {'id':7, 'name' : 'larry', 'is_student' : True},
# ]
comments = [
    'Nice!',
    'Sweet!',
    'Dope!',
	  'Chill',
    'Awesome'
]

# print(list(zip(users, comments))[0][0][('test','a')])
# list_one.extend(list_two)
# print(list_one)



# # map
map_list = ['alex',
'daniel',
'stanley',
'reyhaneh',
'jeremiah',
'micheal',
'larry']

def reverse_string(word):
    res = []
    for i in range(len(word) -1, -1, -1): # start, stop, step
        res.append(word[i])
    return ''.join(res)

# print(list(map(lambda x: ''.join(list(reversed(list(x)))), map_list))) #
# js --> array.map(cb) returns a new array
# python --> map(function, _iterable) returns a new map object which can be converted into a list or tuple

# print(list(map(reverse_string, map_list)))

# # filter
def user_filter(user):
    return user['is_student'] is True


# users = [
#     {('test', 'a'):1, 'name' : 'alex', 'is_student' : False},
#     {'id':2, 'name' : 'micheal', 'is_student' : True},
#     {'id':3, 'name' : 'stanley', 'is_student' : True},
#     {'id':4, 'name' : 'jeremiah', 'is_student' : True},
#     {'id':5, 'name' : 'reyhaneh', 'is_student' : True},
#     {'id':6, 'name' : 'daniel', 'is_student' : True},
#     {'id':7, 'name' : 'larry', 'is_student' : True},
# ]

# print(list(filter(user_filter, users))) #
# print(list(filter(lambda user : user['is_student'] is True, users)))

# sorted
users = [
    {'id':1, 'name' : 'alex', 'is_student' : False},
    {'id':2, 'name' : 'micheal', 'is_student' : True},
    {'id':3, 'name' : 'stanley', 'is_student' : True},
    {'id':4, 'name' : 'jeremiah', 'is_student' : True},
    {'id':5, 'name' : 'reyhaneh', 'is_student' : True},
    {'id':6, 'name' : 'daniel', 'is_student' : True},
    {'id':7, 'name' : 'larry', 'is_student' : True},
]
list_one = [100, 56, 43, 22, 10, 6, 5, 1, 100, -10]

# print(sorted(list_one, reverse=True))
# print(sorted(users, key=lambda user : user['name'], reverse=True))
# print(list_one.sort()) # None, .sort() mutates the orignal list
# print(list_one)
# print(False < True)

# help(sorted)

#enumerate

# print(next(enumerate(list_one, 20)))



# test = [1,2,3,4]

# x = iter(test)

# print(next(x)) # 1
# print(next(x)) # 2
# print(next(x)) # 3
# print(next(x)) # 4
# print(next(x)) #


# print(dir(x))

class Our_own_iterable:
	def __init__(self):
		self.count = 0

	def __iter__(self):
		return self.count

	def __next__(self):
		self.count += 1
		if self.count == 10:
			raise StopIteration
		return self.count



iter_ = Our_own_iterable()

# print(dir(iter_))

# print(next(iter_))
# print(next(iter_))
# print(next(iter_))
# print(next(iter_))
# print(next(iter_))
# print(next(iter_))
# print(next(iter_))
# print(next(iter_))

# def generator_creator():
# 	for i in range(100000000): # [0 ---- 1000000000]
# 		yield i
# 	return

# x = generator_creator()

# print(x)

# print(dir(x))

# print(next(x))
# print(next(x))
# print(next(x))
# print(next(x))
# print(next(x))
