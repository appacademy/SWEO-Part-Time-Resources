# PROBLEM 3 - INHERITANCE: Good, Bad and Flying Dragons! 🐲
#
# Import the Dragon class you created in Problem #2.
#
# Define a class "FlyingDragon" that inherits from the "Dragon" class of Problem #2. This class contains the following:
#
# A constructor that takes in all arguments required for the parent constructor,
# then invokes the parent constructor with those arguments.
#
# An additional constructor parameter "wings" with a default value of "massive".
#
# A single protected instance attribute "wings" initialized to the value of its corresponding parameter.
#
# An instance method "encounter" that takes no arguments and,
# depending on whether inherited attribute "_is_good" is true or not, will return a string of either:
#
#       good: "While traveling you suddenly meet a flying dragon named {name}! It lets you take a selfie and admire its {color} scales."
#
#       evil: "While traveling you suddenly meet a flying dragon named {name}! {name} breathes fire everywhere! BURN!!!"
#
# *NOTE: one of the two returns above requires the use of a method that exists on the parent Dragon class.
# *The test will check if this method was called. If it wasn't, you'll get a failure as
# *AssertionError: Expected 'mock' to have been called.
#
# An instance method "fly" that takes no arguments and returns a string of the following format:
#
#     "{name}'s {wings} wings launch it into the air, creating a powerful blast of wind that knocks you over."
#
#
# In addition to running `pytest test/test_problem_03_inheritance.py` you can also
# test your code manually using the sample data below.
#
#______________________________YOUR CODE BELOW______________________________#


# Your code here
from problem_02_class import Dragon


class FlyingDragon(Dragon):
    def __init__(self, name, color, is_good=True, wings="massive"):
        super().__init__(name, color, is_good)
        self._wings = wings

    def encounter(self):
        base_str = f"While traveling you suddenly meet a flying dragon named {self._name}! "
        if self._is_good:
            base_str += f"It lets you take a selfie and admire its {self._color} scales."
        else:
            base_str += f"{self.breathes_fire()}"
        return base_str

    def fly(self):
        return f"{self._name}'s {self._wings} wings launch it into the air, creating a powerful blast of wind that knocks you over."
#!!END

# __________SAMPLE TEST DATA__________ #
# test_dragon = FlyingDragon("Smaug","black", is_good=False, wings="towering")

# print(isinstance(test_dragon, Dragon))        # True
# print(test_dragon.encounter())                # While traveling you suddenly meet a flying dragon named Smaug! Smaug breathes fire everywhere! BURN!!!
# print(test_dragon.fly())                      # Smaug's towering wings launch it into the air, creating a powerful blast of wind that knocks you over.
