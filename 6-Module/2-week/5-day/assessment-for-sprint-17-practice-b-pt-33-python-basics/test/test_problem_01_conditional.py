from inspect import getsource
from random import randint


class TestIfStatement:
    def test_function_returns_proper_value(self):
        from problem_01_conditional import enough_donuts
        input1 = randint(0, 1)
        assert enough_donuts(input1) == "Not enough donuts"
        input2 = randint(2, 4)
        assert enough_donuts(input2) == "That's enough donuts"
        input3 = randint(5, 12)
        assert enough_donuts(input3) == "That's a lot of donuts"
        input4 = randint(13, 1000)
        assert enough_donuts(input4) == "I hope you are sharing"


    def test_function_appears_to_use_if_elif_else(self):
        from problem_01_conditional import enough_donuts
        source = getsource(enough_donuts)
        has_if = source.find("if") > -1
        has_elif = source.find("elif") > -1
        has_else = source.find("else") > -1

        assert (has_if and has_elif and has_else) and "Missing if, elif, and/or else."
