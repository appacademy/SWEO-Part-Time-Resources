# PROBLEM 3 - FOR LOOP: Sort out the even numbers...
#
# In this problem, write a function named "for_loop_evens" that accepts an
# iterable of integers as a parameter and returns a new list with only the even
# numbers from the original list.
#
# *The function MUST use a FOR LOOP in its implementation.
#
#
# In addition to running `pytest test/test_problem_03_for_loop.py` you can also
# test your code manually using the sample data below.
#
#  ______________________________YOUR CODE BELOW______________________________#

# Your code here
def for_loop_evens(lst):
    evens_list = []
    for num in lst:
        if num % 2 == 0:
            evens_list.append(num)
    return evens_list

# def for_loop_evens(lst):
#     evens_list = []
#     for i in range(len(lst)):
#         if lst[i] % 2 == 0:
#             evens_list.append(lst[i])
#     return evens_list

# def for_loop_evens(lst):
#     evens_list = [num for num in lst if num % 2 == 0]
#     return evens_list


# __________SAMPLE TEST DATA__________ #
# lst1 = [1,2,4,5,7,9]
# print(for_loop_evens(lst1))       # [2, 4]
# lst2 = [2, 3, 4, 5, 6, 7]
# print(for_loop_evens(lst2))       # [2, 4, 6]
