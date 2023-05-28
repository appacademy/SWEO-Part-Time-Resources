# PROBLEM 1 - BUILT IN LIST METHODS:
#
# Write a function named "filter_small_lists" that accepts an iterable
# containing lists and returns a list of the lists that have more than two
# elements in them.
#
# * NOTE: You must use the builtin "filter" method in your function.
#
#
# In addition to running `pytest test/test_problem_01_builtin.py` you can also
# test your code manually using the sample data below.
#
#______________________________YOUR CODE BELOW______________________________#

# Your code here
def filter_small_lists(lst):
    return list(filter(lambda x: len(x) > 2, lst))

# __________SAMPLE TEST DATA__________ #
# print(filter_small_lists([[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]))     # [[1, 2, 3], [1, 2, 3, 4]]
# print(filter_small_lists([]))                                         # []
