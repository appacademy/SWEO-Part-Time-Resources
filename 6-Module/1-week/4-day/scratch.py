# '''
#   stuff
# '''
# # print(len(123))

# # # Short circuit
# # def true_or(boolean):
# #     '''
# #     stuff
# #     '''
# #     my_list = [1,2,3]

# #     if boolean or len(my_list > 1):
# #         print('I want to see this message')


# # true_or(False)

# #args

# def arg_func( one, two, *args, arg_1=None, **kwargs):
#     '''
#     this is a function that adds two number together
#     '''
#     print(arg_1, kwargs)
#     if len(args) > 0:
#         print(f'this function only adds two number together you prvided {2 + len(args)}')
#     return one + two

# print(arg_func(1,2,3,4, arg_1=False, arg_2='baylen', arg_3 = True))

# lambda
# can take as many args as you want
# but can only perform on operation
# can only be on one line

# my_func = lambda x, y: x + y and print(x, y)

# my_func(2, 2)


# def my_filter(list1):
#     '''
#     this function returns the passed in list with the values greater than 3 filtered out
#     '''
#     filter_obj = filter(lambda x: x < 3, list1)
#     print(list(filter_obj))

# my_filter([-2,-4,-5,1,1,4,5,6,7,8,3,3,3,4])

# min
# def min_func(list1):
#     # current_min = float('inf')
#     # for i in list1:
#     #     if i < current_min:
#     #         current_min = i
#     # return current_min
#     return min(list1)
# print(min_func([100,199,200,4,4,4,90]))

# max
# def max_func(list1):
#     # current_max = -float('inf')
#     # for i in list1:
#     #     if i > current_max:
#     #         current_max = i
#     # return current_max
#     return max(list1)
# print(max_func([100,199,200,4,4,4,90]))
# sum
# print(sum([1,2,3,45,34,2323,2323]))
# average
# print(sum([1,2,3,45,34,2323,2323]) / len([1,2,3,45,34,2323,2323]))

my_list = [{'name' : 'Baylen'}, [1,2,3], {1,2}]

# list builtin
# append
#  Append object to the end of the list.
print('origonal list', my_list)
# my_list.append(['name1', 'name2'])
# print(my_list)
# print(help(list))
# extend
# Append items from iterable to the end of the array
# my_list.extend(('name1', 'name2'))
# print(my_list)
# index
# Return the smallest i such that i is the index of the first occurrence of x in the array. 
# The optional arguments start and stop can be specified to search for x within a subsection of the array
# print(my_list.index({'name' : 'Baylen'}))
# insert
# my_list.insert(1, {'location' : 'dallas'})
# print(my_list)
# array.insert(i, x)
# Insert a new item with value x in the array before position i. 
# Negative values are treated as being relative to the end of the array.
# pop
# array.pop([i])
# Removes the item with the index i from the array and returns it.
#  The optional argument defaults to -1, so that by default the last item is removed and returned.
popped_val = my_list.pop(1)
print('popped val', popped_val)
print('after pop', my_list)
# remove
# array.remove(x)
# Remove the first occurrence of x from the array.
print('return value of remove', my_list.remove({'name' : 'Baylen'}))
print('after removal', my_list)
