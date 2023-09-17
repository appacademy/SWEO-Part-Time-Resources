from inspect import getsourcelines


class TestWhileLoop:
    def test_function_returns_proper_value(self):
        from problem_02_while_loop import while_loop_odds
        test1 = while_loop_odds([1,2,3,4,5,6,7])
        result1 = [1,3,5,7]
        test2 = while_loop_odds([1,2,4,7,8,9,11,13])
        result2 = [1,7,9,11,13]
        assert test1 == result1
        assert test2 == result2


    def test_function_appears_to_use_a_while_loop(self):
        from problem_02_while_loop import while_loop_odds
        lines = [line
                 for line in getsourcelines(while_loop_odds)[0]
                 if line.strip().startswith("while")]
        assert len(lines) > 0
