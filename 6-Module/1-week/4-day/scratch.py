# def test(hobbies, occupation, first_name='Tony', last_name='Stark'):
# 	print(first_name)
# 	print(occupation)
# 	print(hobbies)

# test('Being rich', occupation='Iron Man')


# def test_args(occupation, age, *args, **kwargs):
# 	# print(occupation)
# 	# print(age)
# 	# for arg in args:
# 	# 	print(arg)
# 	# print(kwargs)
# 	for key in kwargs:
# 		print(f'{key} : {kwargs[key]}')

# test_args(1,2,3,4,5,6,7,8, "Alex", "Stanley", "Larry", "Jeremiah", **{
# 	"first_name" : "Bruce",
# 	"Last_name" : "Wayne",
# 	"Occupation" : "Batman"
# })


# def same_variable_name(first_name, /, **kwargs):
# 	print(first_name)
# 	if "first_name" in kwargs:
# 		print(kwargs['first_name'])

# same_variable_name('Alex', **{"first_name" : "Peter"})


# double = lambda num : num * 2

# print(double(5))

def key_only(x):
	return dict_[x]

dict_ = {'1': 'abc', '2' : 'def', '3' : 'z', '10' : 'ghi'}

# print(sorted(dict_, key=lambda key_: dict_[key_]))
# print(sorted(dict_, key=key_only))

x = 'abc'

# print(sorted(x, reverse=True))

# print(range(5))

# help(sorted)


def arguments(first_name, last_name, *numbers, occupation = 'super hero', **keywords):
	# print(first_name)
	# print(last_name)
	# print(occupation)
	# # print(numbers) #
	# for num in numbers:
	# 	print(num)
	# print(keywords)
	for key in keywords:
		print(keywords[key])


# arguments('Alex', 'Betita', 'software engineer', occupation='doctor',
# 		  **{'age' : '50', 'address': 'california', 'hobby': 'badminton'},
# 		  **{'favorite_tv_show' : 'stranger things'}
# 		  )


# times_number = lambda num: num * 2

# print(times_number(10))

# def look_into_second_index(el):
# 	return el[1]


# mat = [[3,2],[4,5],[7,3],[1,9]]

# print(sorted(mat, key=lambda el: el[1]))

# print(sorted(mat, key=look_into_second_index))


# help(map)


nums = [1,2,3,4,5,6,100,200,400]

print(sorted(nums, reverse=True))
