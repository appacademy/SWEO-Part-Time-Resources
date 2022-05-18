## Debugger Setup - CMD/CTRL + Shift + P

#### Step 1:
- `CMD/CTRL + Shift + P`
- search `settings(json)`
- select `preferences open settings(json)`
  - note: **NOT** `default settings`
- ![](https://i.imgur.com/A6ALsUE.png)


#### Step 2:
- Copy this launch key into the settings object (reference image below) as the first key / value pair.
  
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
},
```
- ![](https://i.imgur.com/KqjGyNm.png)


## Bracket Pair Colorizer
```json
"editor.bracketPairColorization.enabled": true,
"editor.guides.bracketPairs":"active"
```

### How to Leverage Debugger
- First track anything we want to watch (put code in variable for easiest time to debug)

- take input / example to run

- at each step:
	- what is the expected behavior of that line(s) of code (depending on the input)? 
	- What is it actually doing instead?

- run the debugger until output
