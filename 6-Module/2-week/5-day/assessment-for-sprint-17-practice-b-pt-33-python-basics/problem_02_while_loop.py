# PROBLEM 2 - WHILE LOOP: Sort out the odd numbers...
#
# In this problem, write a function named "while_loop_odds" that accepts an
# iterable of integers as a parameter and returns a new list with only the odd
# numbers from the original list.
#
# *The function MUST use a WHILE LOOP in its implementation.
#
#
# In addition to running `pytest test/test_problem_02_while_loop.py` you can also
# test your code manually using the sample data below.
#
#  ______________________________YOUR CODE BELOW______________________________#

# Your code here
def while_loop_odds(nums):
    index = 0
    results = []
    while index < len(nums):
        if nums[index] % 2 == 1:
            results.append(nums[index])
        index += 1
    return results


# __________SAMPLE TEST DATA__________ #
lst1 = [1,2,4,5,7,9]
print(while_loop_odds(lst1))      # [1, 5, 7, 9]
lst2 = [2, 3, 4, 5, 6, 7]
print(while_loop_odds(lst2))      # [3, 5, 7]
