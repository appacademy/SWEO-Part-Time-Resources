# def my_func(a, b, *args, e='Goodbye', f='See ya', **kwargs):
#     return [a, b, args, e, f, kwargs]


# print(my_func('red', 'green', 'blue'))
# print(my_func('red', 'green', 'blue', 'white'))
# print(my_func('red', 'green', 'blue', 'white', 'black', 'purple'))
# print(
#     my_func(
#         'red',
#         'green',
#         'blue',
#         'white',
#         e='black',
#         f='purple',
#         name='Zaviar',
#         eldenGod=True))

# num = lambda number, a, b, c: print(f'{number}' * 3)

# num(10)

# def namer(name): print(f'{name}')


# def greeting_creator(greet):
#     # return namer
#     return lambda name: print(f'{greet}, {name}')


# heyo = greeting_creator('Heyooo')

# heyo("z")
# heyo("a")

# nums = list([1, 2, 3, 4])

# # print(nums)


# for i in range(len(nums) + 1):
#     print(i)

# print(range(5))
# print(list(range( 49)))

# my_dict = {
#     "name": "Zav",
#     "otherName": "And"
# }

# my_set = {1, 2, 3}

l = []

for i in range(11):
    l.append(i)
    if not i % 2:
        l.append(i + 3)

print(l)


# new_list = l.copy()
print("-----Change Has Occurred-----")
l.reverse()
print(l)

# l.remove(13)
# l[0].remove(6)
# l.insert(100, 31)
# l.insert(99, 30)
# l.extend(new_list)
# new_list.clear()
# new_list = []
# print(new_list)
