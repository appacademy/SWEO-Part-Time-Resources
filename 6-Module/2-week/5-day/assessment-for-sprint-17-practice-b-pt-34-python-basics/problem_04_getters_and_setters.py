# PROBLEM 4 - GETTERS AND SETTERS: Let's make a Wizard! 🧙🏻‍♂️
#
# Declare a class named "Wizard" with the following features:
#
# A constructor that takes three arguments and initializes:
#
#    - a protected instance attribute "name", a string.
#    - a protected instance attribute "magic", a string that defaults to "Light".
#    - a protected instance property "level", an integer that defaults to 0.
#
#    In your constructor insert conditional logic that will set the value of "magic" to
#    the argument only if the argument is a value of "Light" or "Dark".
#
# A getter named "level" that returns the value of the Wizard's level.
#
# A setter for "level" that will will set the value of the Wizard's level
#    only if the provided value is between 0 and 100 inclusive.
#
#    If someone tries to pass in an invalid value, your setter must throw a ValueError with custom message of:
#
#       "Level outside of range 0-100."
#
# An instance method named "__repr__" that returns a string with the following format:
#
#       "<{name} is a level {level} {magic} Wizard>"
#
# *NOTE: Include the angle brackets in the above format.
#
# In addition to running `pytest test/test_problem_04_getters_and_setters.py` you can also
# test your code manually using the sample data below.
#
#______________________________YOUR CODE BELOW______________________________#


# Your code here
class Wizard:
    # A constructor that takes three arguments and initializes:
#
#    - a protected instance attribute "name", a string.
#    - a protected instance attribute "magic", a string that defaults to "Light".
#    - a protected instance property "level", an integer that defaults to 0.
#
#    In your constructor insert conditional logic that will set the value of "magic" to
#    the argument only if the argument is a value of "Light" or "Dark".
    def __init__(self, name, magic="Light", level=0):
        self._name = name
        self._level = level

        if magic == "Light" or magic == "Dark":
            self._magic = magic
        else:
            self._magic = "Light"
        #     return
        # self._magic = magic

    # A getter named "level" that returns the value of the Wizard's level.
    @property
    def level(self):
        return self._level
#
# A setter for "level" that will will set the value of the Wizard's level
#    only if the provided value is between 0 and 100 inclusive.
#
#    If someone tries to pass in an invalid value, your setter must throw a ValueError with custom message of:
#
#       "Level outside of range 0-100."
    @level.setter
    def level(self, level):
        if level >= 0 and level <= 100:
            self._level = level
        else:
            raise ValueError("Level outside of range 0-100.")

    # An instance method named "__repr__" that returns a string with the following format:
#
#       "<{name} is a level {level} {magic} Wizard>"
#
# *NOTE: Include the angle brackets in the above format.
    def __repr__(self):
        return f"<{self._name} is a level {self.level} {self._magic} Wizard>"


# __________SAMPLE TEST DATA__________ #
gandalf = Wizard("Gandalf", level=10, magic="Dark")

print(gandalf.level)      # 10
gandalf.level = 15
# gandalf.level = 123
print(gandalf.level)      # 15
print(gandalf)            # <Gandalf is a level 15 Dark Wizard>
