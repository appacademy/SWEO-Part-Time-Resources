# React Practice Assessment

Welcome to the React practice assessment!

In this assessment, you will use React to construct a frontend for a Fruits App
that displays information about fruits.

You will write your code in various files inside the __src__ directory. Your
objective is to complete the project so that all specs pass. Each specs has an
assigned point value. Further instructions and explanation of scoring appear
below.

* __Total Number of Specs:__ 38 specs
* __Total Possible Points:__ 59 points

You will have **2 hours** to complete the assessment.

## Resources

For this assessment, you are allowed to use the following resources:

* [a/A curriculum on Canvas][canvas]
* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation
* Node
* Postman (when useful)
* Official documentation, including:
  * [React documentation]
  * [React Router documentation]
* Previously written code you wrote yourself
  * Except for code from previous assessment submissions
* Comments within code
  * If there are comments in your code about your specific code and about what
    your code is doing, that is appropriate. If your comments are about concepts
    and based on the readings, then that counts as notes. Those would not be
    appropriate.

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., StackOverflow), communication apps (e.g.,
Slack, Discord), search engines, notes, or code from previous assessment
submissions.

[canvas]: https://appacademy.instructure.com/
[MDN]: https://developer.mozilla.org/en-US/
[React documentation]: https://react.dev/
[React Router documentation]: https://reactrouter.com/en/main

## Setup

1. Clone this starter repo and open it in VS Code.
2. Run `npm install` in the root directory.
3. Run `npm test` to see all the specs you need to pass.
4. Finish reading this __README__.
5. Read __FruitsApp.md__ to get started!

Make sure you are using Node version 18! Run `nvm install 18` to install the
latest Node version 18. Then run `nvm alias default 18` to set it as your
default Node version. Finally, run `nvm use 18` to use Node version 18.

## Scoring

Each step below has a varied number of tests. The tests for each step have point
values assigned to them, which means you can get partial credit for partially
finishing a step and getting _some_ of the tests to pass.

If you have errors or warnings in your console (other than those beyond your
control such as cross-origin cookie errors) or erroneously / badly formatted
code, **up to five points may be deducted from your score.**

You can see your score (without the checks for errors or warnings in your
console and without the checks for badly formatted code) at any time by running
`npm run test-with-points`.

> **Note:** Some tests are worth more than one point. When you run `npm run
> test-with-points`, you will see something like this **(the specific numbers
> may be different for you)**:

  ```json
  {
    "testsPassed": 36,
    "testsTotal": 38,
    "pointsEarned": 52,
    "pointsPossible": 59
  }
  ```

> * The **"pointsPossible"** key is the total number of points achievable.
> * The **"pointsEarned"** key is how many points you have currently earned.

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `npm test` in the root directory to re-run all of the tests.
  
2. Fix any syntax errors that cause the tests to crash. **If a test crashes or
   the tests fail to complete their run, you will receive a 0 for the coding
   portion of this assessment.** You can fail specs, but all the tests have to
   be able to finish running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your program to crash.

3. Add, commit, and push your changed files:

   ```sh
   git add .
   git commit -m "Finish the assessment (or some such descriptive message)"
   git push
   ```

   **Note:** The first time you run `git push`, git will tell you to run a more
   complete version of the command:

   ```sh
   git push --set-upstream origin <your branch>
   ```

You can run tests, `add` files, and `commit` files as often as you wish, but
only your first **two pushes** will be graded. (If for some reason you need more
than two pushes, you must plead your case to an Instructor.)
