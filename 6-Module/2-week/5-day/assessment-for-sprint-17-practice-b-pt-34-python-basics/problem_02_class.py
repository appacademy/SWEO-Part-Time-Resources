# PROBLEM 2 - CLASS DECLARATION: Remember the Dragons! 🐲
#
# Declare a class named "Dragon" with the following features:
#
# 1. A constructor that accepts three arguments: "name", "color" and an
#    "is_good" boolean that should default to True. Initialize these arguments
#    as protected instance attributes.
#
# 2. An instance method named "breathes_fire" that return a string with the following
#    format: "{name} breathes fire everywhere! BURN!!!".
#
# 3. An instance method named "change_nature" that changes (or toggles) the boolean value
#    of the "is_good" value to the opposite of what it was originally set to.
#    (True turns to False, False turns to True) Return the string
#
#           "{name} is a good dragon!" or "{name} is a bad dragon!"
#
#     based on the current value of "is_good".
#
# 4. An instance method named "__repr__" that returns a string with the following format(include the angle brackets):
#     "<{name} is a {color} dragon>"
#
#
# In addition to running `pytest test/test_problem_02_class.py` you can also
# test your code manually using the sample data below.
#
#______________________________YOUR CODE BELOW______________________________#

# Your code here
class Dragon(dict):
    def __init__(self, name, color, is_good=True):
        self._name = name
        self._color = color
        self._is_good = is_good

    def breathes_fire(self):
        return f"{self._name} breathes fire everywhere! BURN!!!"

    def change_nature(self):
        self._is_good = not self._is_good
        return f'{self._name} is a good dragon!' if self._is_good else f'{self._name} is a bad dragon!'

    def __repr__(self):
        return f"<{self._name} is a {self._color} dragon>"
# __________SAMPLE TEST DATA__________ #
# toothless = Dragon("Toothless", "black")
# print(toothless.breathes_fire())      # Toothless breathes fire everywhere! BURN!!!!
# print(toothless.change_nature())      # Toothless is a bad dragon!
# print(toothless)                      # <Toothless is a black dragon>
