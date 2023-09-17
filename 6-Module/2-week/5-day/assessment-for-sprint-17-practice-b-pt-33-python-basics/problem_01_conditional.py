# PROBLEM 1 - IF STATEMENTS: Too many donuts... 🍩 🍩 🍩
#
# In this problem, write a function named "enough_donuts" that takes an integer
# parameter and returns the corresponding string value found in this table
#
#  -------------------------------------------------------------------------
# | Input                                        | Output                   |
# |----------------------------------------------|--------------------------|
# | Less than or equal to 1                      | "Not enough donuts"      |
# | Greater than 1 and less than or equal to 4   | "That's enough donuts"   |
# | Greater than 4 and less than or equal to 12  | "That's a lot of donuts" |
# | Greater than 12                              | "I hope you are sharing" |
#  -------------------------------------------------------------------------
#
# Your code MUST include at least one of each of the following keywords:
#
# * if
# * elif
# * else
#
# All inputs are guaranteed to be greater than 0.
#
#
# In addition to running `pytest test/test_problem_01_conditional.py` you can also
# test your code manually using the sample data below.
#
#  ______________________________YOUR CODE BELOW______________________________#

# Your code here
def enough_donuts(num):
    if num <= 1:
        return "Not enough donuts"
    elif num > 1 and num <= 4:
        return "That's enough donuts"
    elif num > 4 and num <= 12:
        return "That's a lot of donuts"
    else:
        return "I hope you are sharing"

# __________SAMPLE TEST DATA__________ #
print(enough_donuts(1))       # Not enough donuts
print(enough_donuts(4))       # That's enough donuts
print(enough_donuts(14))      # I hope you are sharing
