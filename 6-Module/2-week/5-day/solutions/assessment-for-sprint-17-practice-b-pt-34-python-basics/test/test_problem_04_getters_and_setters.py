from problem_04_getters_and_setters import Wizard
from random import randint



def test_contains_correct_protected_attributes():
    test_wizard = Wizard("Merlin")
    assert '_name' in dir(test_wizard)
    assert '_magic' in dir(test_wizard)
    assert '_level' in dir(test_wizard)
    assert 'level' in dir(test_wizard)


def test_has_default_values():
    test_wizard = Wizard("Merlin")
    assert test_wizard.level == 0
    assert test_wizard._magic == "Light"


def test_can_set_and_get_level_between_zero_and_one_hundred():
    test_wizard = Wizard("Merlin")
    value = randint(0, 100)
    test_wizard.level = value
    assert test_wizard.level == value


def test_cannot_set_value_outside_zero_and_one_hundred():
    test_wizard = Wizard("Merlin")
    try:
        value1 = randint(-1000, -1)
        test_wizard.level = value1
    except ValueError as err:
        assert err.__str__() == "Level outside of range 0-100."
    try:
        value2 = randint(101, 1000)
        test_wizard.level = value2
    except ValueError as err:
        assert err.__str__() == "Level outside of range 0-100."


def test_repr_returns_proper_string_representation():
    test_wizard = Wizard(name="Merlin", magic="Dark", level=13)
    assert f"{test_wizard}" == "<Merlin is a level 13 Dark Wizard>"
