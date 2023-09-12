# built in functions
# map

numbers = [0,1,2,3,4,5,6]

def call_back_is_even_or_odd(num):
	if num % 2 == 0:
		return "Even"
	return "Odd"

new_list = list(map(call_back_is_even_or_odd, numbers))

# print(new_list)

# def call_back_is_even(num):
# 	if num % 2 == 0:
# 		return True
# 	return False

# new_filtered_list = list(filter(call_back_is_even, numbers))

new_filtered_list = list(filter(lambda num: num % 2 == 0, numbers))

# print(new_filtered_list)

# reversed_list = sorted(numbers, key=lambda x: x *2, reverse=True)

# print(reversed_list)

# numbers_2 = [120,231,92,811,2931]

# enumerated_list = tuple(enumerate(numbers_2))


# for _,v in enumerated_list:
#     print(v, ' value')

data_1 = ['Alex', 'Betita']
data_2 = ['first_name', 'last_name']

new_dictionary = dict(zip(data_2, data_1))

# print(new_dictionary)


# len
# returns the length of an iterable

# max
# returns the maximum element from the iterable

# min
# returns the minimum elemnt from the iterable

# sum
# print(sum(numbers))

# list_1 = ['1', {}, [], 2,3]
# list_2 = [False, False, 0]

# print(all(list_1))

# print(dir(dict))


# set
# set()

x = {0,1,2,2,0,1}
y = {3,5,6,4,8,1,2}

# union
# |
print(x|y)

# intersection
# &
print(x & y)

# differences
# -
print(x - y)

# symmetric difference
# ^
print(x ^ y)
