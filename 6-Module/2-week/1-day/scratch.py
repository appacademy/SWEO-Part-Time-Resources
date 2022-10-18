from audioop import reverse


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
example_2 = []

# print(dir(list_one))

# any
# Return True if any element of the iterable is true. If the iterable is empty, return False. Equivalent to:
# print(all(tup_one))

# # all
# Return True if all elements of the iterable are true (or if the iterable is empty). Equivalent to:


# zip, always return tuples in a iterator object
# zip(iterable, iterable) and combines them
# iterable objects can be converted into sequences(list, tuples)
list_one = [1,2,3,4]
list_two = ['a', 'b', 'c']
list_three = [123, 345, 789]
users = [
    {'id':1, 'name' : 'alex', 'is_student' : False},
    {'id':2, 'name' : 'kelly', 'is_student' : True},
    {'id':3, 'name' : 'alonso', 'is_student' : True},
    {'id':4, 'name' : 'george', 'is_student' : True},
    {'id':5, 'name' : 'karen', 'is_student' : True},
]
comments = [
    'Nice!',
    'Sweet!',
    'Dope!'
]

# print(dict(zip(list_one, comments)))

# for i in zip(users, comments):
# 	print(i)
# list_one.extend(list_two)
# print(list_one)



# map
map_list = ['alex',
'kelly',
'alonso',
'george',
'karen']

def reverse_string(word):
    res = []
    for i in range(len(word) -1, -1, -1): # start, stop, step
        res.append(word[i])
    return ''.join(res)

# print(list(map(lambda x: ''.join(list(reversed(list(x)))), map_list))) #
# js --> array.map(cb) returns a new array
# python --> map(function, _iterable) returns a new map object which can be converted into a list or tuple

# print(list(map(reverse_string, map_list))) #

# print(["".join(list(reversed(word))) for word in map_list])

# map(function, iterable) python
# javascript array.map(function)

# # filter

# filter(function, iterable)
# js array.filter(function)

def user_filter(user):
    return user['is_student'] is True

users = [
    {'id':1, 'name' : 'alex', 'is_student' : False},
    {'id':2, 'name' : 'kelly', 'is_student' : True},
    {'id':3, 'name' : 'alonso', 'is_student' : True},
    {'id':4, 'name' : 'george', 'is_student' : True},
    {'id':5, 'name' : 'karen', 'is_student' : True},
]

# print(list(filter(user_filter, users))) #
# print(list(filter(lambda user : user['is_student'] is True, users)))

# test = lambda x,y,z: x + y + z;

# print(test(1,2,3))

# sorted
list_one = [100, 56, 43, 22, 10, 6, 5, 1, 100, -10]

complicated_object = [
	{
		'first_name' : 'Alex',
		'class': {
			'PST': {
				'students' : 4
			},
			'EST' : {
				'students' : 6
			}
		}
	},
	{
		'first_name' : 'William',
		'class': {
			'PST': {
				'students' : 4
			},
			'EST' : {
				'students' : 1
			}
		}
	},
	{
		'first_name' : 'James',
		'class': {
			'PST': {
				'students' : 7
			},
			'EST' : {
				'students' : 8
			}
		}
	},
	{
		'first_name' : 'Zavier',
		'class': {
			'PST': {
				'students' : 7
			},
			'EST' : {
				'students' : 0
			}
		}
	}
]

# def sort_est(user):
# 	return user['class']['EST']['students']

# print(sorted(complicated_object, key=lambda user: user['class']['EST']['students'], reverse=True))
# print(sorted(complicated_object, key=sort_est, reverse=True))
# print(sorted(list_one))

# print(sorted(list_one, reverse=True))
# print(sorted(users, key=lambda user : user['name'], reverse=True))
# print(list_one.sort()) # None, .sort() mutates the orignal list
# print(list_one)
# print(False < True)

# help(sorted)

#enumerate

# print(list(enumerate(list_one, 100)))

# for x, y in enumerate(list_one):
# 	print(x, y)

# for i in range(len(list_one)):
# 	print(i, ' element: ', list_one[i])

# for i in list_one:
# 	print(i)



# test = [1,2,3,4]

# x = iter(test)

# y = iter(list(range(100000)))

# print(next(x)) # 1
# print(next(x)) # 2
# print(next(x)) # 3
# print(next(x)) # 4
# print(next(x)) #

# map, zip, enumerate, filter --> returns an iterable object

# print(dir(x))
# print(x)
# print(y)

# print(next(y)) #0
# print(next(y))
# print(next(y))
# print(next(y))
# print(next(y))

# for i in y:
# 	print(i)

# dunder method = __init__, __setattr__

# class My_Own_Iterable:
# 	def __init__(self): # constructor, self --> this
# 		self.count = 100

# 	def __iter__(self):
# 		yield self.count

# 	def __next__(self):
# 		self.count += 2
# 		if self.count == 200:
# 			raise StopIteration
# 		return self.count

# my_owen_iter = My_Own_Iterable()

# print(dir(my_owen_iter))

# for i in my_owen_iter:
# 	print(i)

# print(next(my_owen_iter))
# print(next(my_owen_iter))
# print(next(my_owen_iter))
# print(next(my_owen_iter))
# print(next(my_owen_iter))
# print(next(my_owen_iter))
# print(next(my_owen_iter))
# print(next(my_owen_iter))
# print(next(my_owen_iter))
# print(next(my_owen_iter))


set_a = {1, 'hello', 3, (1,2)}
set_b = {2, 'hello', 3, (3,4)}

# &, |, -, ^

# print(set_a & set_b) # {3, 'hello'}
# print(set_a | set_b) # {1, 2, 3, (1, 2), (3, 4), 'hello'}
# print(set_a - set_b) # {1, (1, 2)}
# print(set_b - set_a) # {2, (3, 4)}

print(set_a ^ set_b) # {1, (1, 2), 2, (3, 4)}
