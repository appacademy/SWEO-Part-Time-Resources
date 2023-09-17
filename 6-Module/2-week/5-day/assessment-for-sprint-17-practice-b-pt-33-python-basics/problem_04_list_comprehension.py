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
def comprehension_sort(nums):
    return ([num for num in nums if num % 2 == 1], [num for num in nums if num % 2 == 0])

# [return element for element in iterable if condition]

# __________SAMPLE TEST DATA__________ #
lst1 = [1, 2, 4, 5, 7, 9]
print(comprehension_sort(lst1))    # ([1, 5, 7, 9], [2, 4])
lst2 = [33, 2, 46, 17, 19, 53, 88]
print(comprehension_sort(lst2))    # ([33, 17, 19, 53], [2, 46, 88])
