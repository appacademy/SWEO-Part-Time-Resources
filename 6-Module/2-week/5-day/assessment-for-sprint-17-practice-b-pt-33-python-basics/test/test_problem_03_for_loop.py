from inspect import getsourcelines


class TestForLoop:
    def test_function_returns_proper_value(self):
        from problem_03_for_loop import for_loop_evens
        test1 = for_loop_evens([1,2,3,4,5,6,7])
        result1 = [2,4,6]
        test2 = for_loop_evens([1,2,4,7,8,9,11,13])
        result2 = [2,4,8]
        assert test1 == result1
        assert test2 == result2

    def test_function_appears_to_use_a_for_loop(self):
        from problem_03_for_loop import for_loop_evens
        lines = [l for l in getsourcelines(for_loop_evens)[0] if l.strip().startswith("for")]
        assert len(lines) > 0
