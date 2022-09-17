# # tuple
# # creating tuples
# # collection type, can be indexed and looped over
# # immutable, should contain at least two elements kind of
# # you can create a singleton tuple by using a trailing comma , ie (1,)

# my_tup1 = tuple([44.45, 56.88])
# my_tup2 = [1,2,3]
# # print(list(my_tup1))
# # print(list(my_tup1).extend(my_tup2))
# my_tup2.extend(list(my_tup1))
# my_new_tup = tuple(my_tup2)
# print(my_new_tup)
# print(my_tup[0])

# for i in my_tup:
#     print(i)
# def tup_stuff(*args):
#     print(args)

# tup_stuff(1)

# range
# range(stop) if you pass one number, it is from 0 to that number exclusive
# default step of 1
# def range_loop(list1):
#     # most common pattern for using a range
#     # for i in range(len(list1)):
#     #     print(i, list1[i])
#     for i in range(0, len(list1), 2):
#         print(i, list1[i])
        

# range_loop(['baylen', 'hello', [123], {'location' : 'Dallas'},1,2,3,4,5,6,7,8])

# list2= ['baylen', 'hello', [123], {'location' : 'Dallas'}]


# def backward_range(list1):
#     for i in range(len(list1) -1, -1, -1):
#         print(i, list1[i])

# backward_range(list2)


my_list = list(range(1, 100, 10))
my_list2 = ['baylen', 'james', 'zaviar']
print([i.upper() for i in my_list2 if len(i) > 5])
# print(my_list)
# # [what each element should be for loop optional if statement]
# print([i for i in my_list if i > 20])
# # print([[i, j, k] for i in range(10) for j in range(10) for k in range(10) if i > 5 and j > 5 and k > 5])


keys_list = ['name', 'age', 'location']
values_list = ['baylen', 28, 'Dallas']

print({keys_list[i] : values_list[i] for i in range(len(keys_list))})