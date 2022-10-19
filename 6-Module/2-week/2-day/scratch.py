my_dict = {'hello': 'world'}
# print(my_dict)


# other_dict = dict(first=1, second=2, third=3) #naming with kwargs
# print(other_dict)



# print(tuple_dict)

#bracket notation
print(my_dict['hello'])


#adding
my_dict['new_key'] = 'new_value'
print(my_dict)


del my_dict['hello']
print(my_dict)


# iterating
tuple_list = [(1, 'a'),(2, 'b'),(3, 'c')] #(key, value)
tuple_dict = dict(tuple_list)

# print(tuple_dict.items())

# for key in tuple_dict:
# 	print(key)

# for key in tuple_dict.keys():
#   print(key)

# print()

# for value in tuple_dict.values():
#   print(value)

# print()

# for k,v in tuple_dict.items():
#   print(k, ':',v)


set_a = {5, 'javascript', (1,2,4), 9}
set_b = {1, 'javascript', (3,4,7), 9}


# print(set_a.intersection(set_b)) # {9, 'javascript'} |
# print(set_a.union(set_b)) # {1, 5, 'javascript', 9, (1, 2, 4), (3, 4, 7)} &
# print(set_a.difference(set_b)) # 5, (1,2,4) -
print(set_a.symmetric_difference(set_b)) # 1 5 (124)(347) ^



def test(x: int)->int:
	return f'test x {x}'

# def test(y: str)->str:
# 	return f'test y {y}'

# print(test('helo'))
# print(test(1))
# print(ord('a') - 97)




# x = {1}
# y = {2}

# print(x - y)
