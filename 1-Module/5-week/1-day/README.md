# M1-W5-D1

---

## Assessment (1h35m)

---

## String Interpolation Lecture

```js
const firstName = 'William';
const lastName = 'Vincent';

const fullName = `${firstName} ${lastName}`
```

---

## String Interpolation Practice (Solo, 15m)

- Interpolation in JavaScript
- Interpolating Strings Code Demo
- Interpolation Lecture Material
- addLib Problem

---

## Debugger Setup

- Open your `settings.json`
- Add the following into that file

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

---

## Debugger Practice (Paired)

---
