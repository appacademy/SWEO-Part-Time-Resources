# list
x = [0,1,'python','element', {}, []]
y = [[],[],[]]
z = ['element', 'element', 'element']

# tuple
x_tuple = (0,1,'python','element', {}, [])

list1 = [1,2,3]
list2 = [4,5,6]
list3 = [1,2,3]

tuple1 = (1,2,3)
tuple2 = (4,5,6)
tuple3 = (1,2,3)

# index
x[0]
x_tuple[0]

# iterate through an iterable
# for i in x:
#     print(i)

# membership
0 in x # bool
"element" in x # bool
10 not in x # bool
'python' in x_tuple # bool

# concatenation
# print(list1 + list2)
# print(list1 + list3)

# repetition
# print(list1 * 3)
multiplied_list = list1 * 3
# print(multiplied_list)

# len
# print(len(multiplied_list))

# min, max
# print(min(list2))
# print(max(list2))
# print(max(x))

# count
# print(multiplied_list.count(1))
# print(z.count('element'))

profile = ['alex', 'betita', 'giotto']
profile_tuple = ('kate', 'cizewski')

# unpacking
first_name, last_name, address = profile
tuple_first_name, tuple_last_name = profile_tuple
# print(first_name)


# methods that mutate

# append
list1.append(100)
list1.append(2)

# print(list1)

# remove
list1.remove(2)
# print(list1)

# pop
last_popped_element = list1.pop()
# print(last_popped_element)
# print(list1)
first_popped_element = list1.pop(0)
# print(first_popped_element)
# print(list1)

# sort
multiplied_list.sort(reverse=True)
# print(multiplied_list)

# reverse

multiplied_list.reverse()
# print(multiplied_list)

# insert
list1.insert(2, 300)
# print(list1)

# extends
list1.extend(list2)
list1.extend('python')
# print(list1)

# non mutated list sort
# sorted
# print(sorted(multiplied_list, reverse=True))

# print('hello'.count('l'))

# copy
list1.copy() # shallow copy of the list and returns new shallow copy

# clear
list1.clear() # removes every element in the list


# list comprehension
# syntax
# []
# breakdown logic
# [expression for item in iterable if condition]
# [expression for item in iterable]

# expression = the new element for each element in the list
# item = place holder for pointing to the element in the iterable
# iterable = string, list, tuple
# condition = expression will be added if condition is true

players = 10

scores = [0 for x in range(players)]

list_booleans = [True, False, True, False, True, False, False]

new_list_booleans = [x for x in list_booleans if x == False]

food = ['pizza', 'ice cream', 'spaghetti', 'cookies']

# favorite_food = "I like " + "".join([x for x in food if x == 'pizza'])
# print(favorite_food)

numbers = [1,2,4,10,200,23,38,98,67,4]

ods_evens = ["Even" if x % 2 == 0 else "Odd" for x in numbers]
# print(ods_evens)

matrix = [[x*y for x in range(4)] for y in range(4)]

# print(matrix)



letters = ['a','a','b', 'c', 'c', 'c']

indexes = [x for x in range(len(letters)) if letters[x] == 'c']

print(indexes)
