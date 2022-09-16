# # args and kwargs

# def my_func(num1, num2, *args):
#     '''
#     this function adds two numbers together
#     '''
#     if len(args) > 0:
#         print('this function only takes two numbers to be added together')
#     print(num1 + num2)

# # *args captures all positional args passed into the function
# #  **kwargs will capture all key work args passed into the function
# # key word args must be passed in after positional
# def my_func_2(*args,**kwargs):
#     print(args, kwargs)


# # my_func_2(1,2,3,4, one=[1,2,3,4], two='baylen')
# # my_func(1,2)


# # lambda functions
# # can any take any number of args, but can only contain one expression

# def i_take_a_lambda(func, num):
#     print(func, num)
#     print(func(num))

# # i_take_a_lambda(lambda x: x*2, 2)


# def filter_list(list1, callback):
#     new_list = filter(callback, list1)
#     # print(help(list))
#     print(list(new_list))

# filter_list([1,2,3,4,5,6,7,8], lambda x: x> 3)

# nums = [1,6,4.3,7,-8,9,2]
# print(sorted(nums))

# min
# The min() function returns the smallest item in 
# an iterable. It can also be used 
# to find the smallest item between two or more parameters.\


def find_min(list_1):
    # curr_min = float('inf')
    # for i in list_1:
    #     if i < curr_min:
    #         curr_min = i
    # return curr_min
    return min(list_1)

# print(find_min([100,9832983,2,2,-1,3838,-1111]))

# max
# The max() function returns the largest item in an iterable.
#  It can also be used to find the largest item between two or 
#  more parameters.

# def find_max(list):
#     return max(list)

# print(find_max([10000,1212,1212,2323,34,21312312321])) 

# sum 
# def find_sum(list):
#     return sum(list)
                
# print(find_sum([10000,1212,1212,2323,34,21312312321])) 
# average
# def find_avg(list):
#     return sum(list) / len(list)
                
# print(find_avg([10000,1212,1212,2323,34,21312312321])) 

# list built in

# print(help(list))

my_list = ['baylen123', 123, {'name' : 'app academy'}, [1,2,3], 'baylen']

# append
print(my_list)
# my_list.append({
#     'id' : 1,
#     'review' : 'Python docs need some work, no?'
# })
# print(my_list)
# extend
# my_list.extend([1,2,3,4])
# print(my_list)
# index
# print(my_list.index(1000))
# if my_list.count('Scotty Dubya')  > 0:
#     print('this index exists')
# else:
#     print('this index does not exist')
# insert
# my_list.insert(2, {'name' : 'person'})
# print(my_list)
# pop
# my_var = my_list.pop(0)
# print(my_var)
# print(my_list)
# remove
my_var = my_list.remove(my_list[0])
print(my_var)
print(my_list)