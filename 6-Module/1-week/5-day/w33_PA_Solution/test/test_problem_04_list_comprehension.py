from problem_04_list_comprehension import comprehension_sort
from inspect import getsourcelines
import random
import pytest


@pytest.fixture(scope="module")
def control():
    lines = getsourcelines(comprehension_sort)[0]
    expected_even, expected_odd = [], []
    input = random.sample(range(1,100), 20)
    for i in input:
        if ((i//2) * 2) == i:
            expected_even.append(i)
        else:
            expected_odd.append(i)
    return { "even": expected_even, "odd": expected_odd, "lines": lines, "input": input }


def test_function_returns_proper_value(control):
    result = comprehension_sort(control["input"])
    assert isinstance(result, tuple)
    assert control["odd"] == result[0]
    assert control["even"] == result[1]


def test_function_appears_to_have_one_line_with_a_list_comprehension(control):
    assert len(control["lines"]) == 2, "comprehension_sort has more than one body line"


def test_function_contains_a_comprehension(control):
    line = control["lines"][1]
    has_braces = line.find("[") > -1 and line.find("]") > -1
    has_for = line.find("for") > -1
    has_in = line.find("in") > -1
    has_if = line.find("if") > -1
    assert (has_braces and has_for and has_in and has_if), "comprehension_sort does not appear to contain a comprehension"
