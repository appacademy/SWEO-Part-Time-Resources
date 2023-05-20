# PROBLEM 5 - LIST COMPREHENSION: Sort out both evens and odds...
#
# In this problem, write a function named "comprehension_sort" that accepts an
# iterable of integers as a parameter and returns a tuple of two values:
#
# the first, a list with only the odd numbers from the parameter.
# the second, a list with only the even numbers from the parameter.
#
#
# * The function MUST use LIST COMPREHENSIONS in its implementation.  Your
# * function body MUST contain ONLY ONE LINE.
#
#
# In addition to running `pytest test/test_problem_04_list_comprehension.py` you can also
# test your code manually using the sample data below.
#
#  ______________________________YOUR CODE BELOW______________________________#

# Your code here
# def comprehension_sort(lst):
#     return [num  for num in lst if num % 2 != 0], [num  for num in lst if num % 2 == 0]


#filter(function, iterable)
def comprehension_sort(lst):
    # a = filter(lambda num: num % 2 != 0, lst)
    # print(a) # returns a filter object
    return list(filter(lambda num: num % 2 != 0, lst)), list(filter(lambda num: num % 2 == 0, lst))


# def comprehension_sort(lst):
#     odd_list = [num for num in lst if num % 2 != 0]
#     even_list = [num for num in lst if num % 2 == 0]
#     return odd_list, even_list

# __________SAMPLE TEST DATA__________ #
lst1 = [1, 2, 4, 5, 7, 9]
print(comprehension_sort(lst1))    # ([1, 5, 7, 9], [2, 4])
# lst2 = [33, 2, 46, 17, 19, 53, 88]
# print(comprehension_sort(lst2))    # ([33, 17, 19, 53], [2, 46, 88])
