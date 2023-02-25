# Python Practice Assessment

Congratulations on learning the basics of Python! Now, here's a practice
assessment for you to help you study for next week's assessment.

In this assessment, you will write Python code to make a series of unit tests
pass. We will be using a popular TDD framework called
[Pytest](https://docs.pytest.org/en/6.2.x/index.html#) for this practice.

Caution: Some of the problems will require string formatting. We will use `{ }` to
indicate a variable's position. Do not include these braces in the final string.

## Getting started

1. Make sure you are running a version of Python 3.9.
2. If you don't have Pytest installed already, run `pip install pytest`.
3. Change directory into the practice assessment repository. You should see a folder
   called "test". Pytest will use this folder.
4. Run `pytest` to start the test.

## Usage

1. **Manually test by running `python problem_01_builtin.py`**. Before you
   run all the unit tests, use manual testing to compare your result with the
   expected result from the problem description. You may need to uncomment the
   manual test cases. The file name may be changed to the file that you would
   like to test.
2. **Run the tests by running `pytest`**. This will run all unit
   tests. If you would only like to run tests for a specific file, you may also
   provide a path to the test file, such as
   `pytest test/test_problem_01_builtin.py`. If you want more information
   from each test, include the -v flag in your command. If you want the test to
   stop after the first failure, use the -x flag. More information about how to
   use pytest can be found here [https://docs.pytest.org/en/6.2.x/usage.html](https://docs.pytest.org/en/6.2.x/usage.html).
3. Your objective is to implement the code in each of the Python modules so that
   when you run `pytest`, all tests pass.