
# Using VSCode Debugger Project

In this project, you'll:

* set up the VSCode debugger on your local machine
* learn how to use the debugger to solve problems

Click on the green button to clone the project starter.

## SOLO Phase 1: Setting up VSCode Debugger

The VSCode debugger will step through your code one line at a time, allowing you
to examine each line's execution.

![debug-local-1]

### Set Up

1. Open your `settings.json`
   * Open `settings.json` by doing `CMD + SHIFT + P` (or `CTRL + Shift + P` for
   Windows) and typing in settings. Make sure that you click on the option that
   says `Open Setting (JSON)`
   * You should see something like this:


![debug-local-2]

2. Add the following "launch" key to the settings JSON object.

```json
"launch": {
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch",
            "console": "integratedTerminal",
            "program": "${file}"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Mocha Tests",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "args": [
                "-u",
                "bdd",
                "--timeout",
                "999999",
                "--colors",
                "${workspaceFolder}/test"
            ],
            "internalConsoleOptions": "openOnSessionStart",
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
```

* This will create two configurations for launching the VSCode debugger.
  One to test individual Node.js files called "Launch", and one to test projects
  with mocha set up called "Mocha Tests"
* JSON has similar syntax of a JavaScript object but one of the main differences
  is that all the keys must be wrapped in double quotations.

3. Open the `test.js` file in this project and click the debugging tab on the
   left side navigation bar (the play button with a bug). If you don't have the
   navigation bar all the way to the left, make sure you have `View < Appearance
   < Show Activity Bar` checked.
   * Also, make sure that the dropdown option next to the green play button is
     set to `Launch`.
   * `Launch` is the name you set to the launch configuration in the
     `settings.json` file.

VSCode Debugging Tab Symbol:

![debugging-tool-symbol]

![debug-local-3]

4. Press the green play button and watch your code hit the debugger in
   `test.js`.
   * Note: If you're testing out a function make sure that you are invoking that
     function.
   * If you press the green play button and your screen looks similar to the one
     below, then you're all set! If you're having issues and you're using WSL,
     see the note below. If you're still having issues, call for some help!

![debug-local-4]

**FOR WSL USERS ONLY**: Make sure you are using a VSCode window that has
`[WSL: ...]` in the title of the window!! Otherwise VSCode debugger will not
work. To get this title, open up your Ubuntu terminal and `cd` into the project
folder. Then run `code .`. Confirm the title of the VSCode window that opens up
and try out `test.js` there. Restart VSCode and try again if this still doesn't
work.

![wsl-window-title]

Once you're done setting up VSCode debugger on your machine, let your partner
know. Once they confirm that they are also ready, you can continue on to the
next phase with them. **Please don't start Phase 2 until they are ready!**

## PAIRED Phase 2: Working with VSCode Debugger

In this phase, you'll be using the VSCode debugger to debug four problems.


Go through each file one by one to debug all the errors. There could be multiple
errors in one file, so make sure that the code behaves as you expect before
moving onto the next file.

Instead of using `console.log` to debug, make sure to use the `debugger`.

If you spot the error before using the `debugger`, make sure to validate the
solution to the error by placing an appropriate `debugger`, running it, and
explaining to your partner that whatever the `debugger` exposes supports your
solution. Do not fix the error until you do this exercise.

Start debugging!

[debug-local-1]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/javascript/nodejs/vscode-debugger/debug_local_1.png
[debug-local-2]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/javascript/nodejs/vscode-debugger/debug_local_2.png
[debugging-tool-symbol]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/javascript/nodejs/vscode-debugger/debugging-tool-symbol.png
[debug-local-3]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/javascript/nodejs/vscode-debugger/debug_local_3.png
[debug-local-4]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/javascript/nodejs/vscode-debugger/debug_local_4.png
[wsl-window-title]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/javascript/nodejs/vscode-debugger/wsl-window-title.png