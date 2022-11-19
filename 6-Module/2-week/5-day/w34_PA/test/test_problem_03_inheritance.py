from problem_02_class import Dragon
from problem_03_inheritance import FlyingDragon
from unittest.mock import MagicMock
from inspect import getsourcelines
import pytest


@pytest.fixture(scope="module")
def setup():
    good_dragon = FlyingDragon("Mew", "gold")
    evil_dragon = FlyingDragon("Zurden", "black", is_good=False, wings="towering")
    return { "good": good_dragon, "evil": evil_dragon }


def test_inheritance_flyingdragon_is_instance_of_parent(setup):
    assert all([isinstance(d, Dragon) for d in [setup["good"], setup["evil"]]])


def test_inheritance_flyingdragon_has_correct_properties(setup):
    assert all([(_ in dir(setup["evil"])) for _ in ["_name", "_color", "_is_good", "_wings"]])


def test_inheritance_encounter_returns_correct_string(setup):
    string = "Zurden breathes fire everywhere! BURN!!!"
    Dragon.breathes_fire = MagicMock(return_value=string)
    test_call = Dragon.breathes_fire
    sample = setup["evil"].encounter()
    test_call.assert_called()
    test_sample = "While traveling you suddenly meet a flying dragon named Zurden! Zurden breathes fire everywhere! BURN!!!"
    assert sample == test_sample
    test_sample = "While traveling you suddenly meet a flying dragon named Mew! It lets you take a selfie and admire its gold scales."
    sample = setup["good"].encounter()
    assert sample == test_sample


def test_inheritance_fly_returns_correct_string(setup):
    fly_lines_good = getsourcelines(setup["good"].fly)[0]
    assert all([True for _ in fly_lines_good if _.count("self._") == 2])
    test_fly = "Mew's massive wings launch it into the air, creating a powerful blast of wind that knocks you over."
    assert setup["good"].fly() == test_fly
    test_fly = "Zurden's towering wings launch it into the air, creating a powerful blast of wind that knocks you over."
    assert setup["evil"].fly() == test_fly
