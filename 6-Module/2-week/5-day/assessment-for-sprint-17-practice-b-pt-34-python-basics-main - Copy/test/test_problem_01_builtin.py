from inspect import getsourcelines
import random


class TestBuiltins:
    def test_works_on_empty_list(self):
        from problem_01_builtin import filter_small_lists
        sample = []
        assert filter_small_lists(sample) == []


    def test_function_returns_correct_output(self):
        from problem_01_builtin import filter_small_lists
        sample = [random.sample(range(1, 30), random.randint(1, 5)) for _ in range(0, 10)]
        test = filter_small_lists(sample)
        assert test == [_ for _ in test if len(_) > 2]


    def test_function_calls_filter_built_in(self):
        from problem_01_builtin import filter_small_lists
        lines = getsourcelines(filter_small_lists)[0]
        test_filter = ['filter(' in s for s in lines]
        assert any(test_filter)
