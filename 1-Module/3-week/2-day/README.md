# M1-W3-D2

- Basic Terminal Commands
- Node
- Mocha
- Pair Programming Git Workflow
- Local JS Project

---

## Basic Terminal Commands

- `ls`
  - See all files and directories (folders) in the current directory
- `cd <folder_name>`
  - Navigate to a directory
  - When called with no arguments navigates to your home directory
  - `cd ../` go back a directory
- `pwd`
  - Print working directory
- `touch <file_name>`
  - Create a file in whatever directory you are currently in.
  - It's actually updating the last-accessed value of a file, if the file
    doesn't exist it makes a new file.
- `mkdir <dir_name>`
  - Create a new directory in whatever directory you are currently in

---

## Node

JavaScript used to be only usable in a browser based environment. Node allows us
to write native applications, servers, and CLI's.

Node is a JavaScript runtime environment. It is the program that allows your
computer to interpret JavaScript code.

### NVM - Node Version Manager

A tool to easily switch between node versions

- `nvm install <version>`
- `nvm use <version>`

### NPM - Node Package Manager

A tool to install JS packages

- `npm install <package_name>`
- `npm install`
  - install all packages listed in a package.json file.

### Using Node

- Open a node REPL
  - exit with [ctrl+c, ctrl+d, .exit]
- Use `node <file_name>` to run a file using node

---

## Mocha

Mocha is a testing suite we'll use to test our code

- Using Mocha
- Make sure you're in the folder that contains the 'test' file
- Run `mocha` to run all test files
- Run `mocha -b` to run the test until one fails
- Run `mocha <testFilePath>` to run a single test
- Run `mocha -g <functionName>` to run all test about a single function

---

## Pair Programming Git Workflow Demo

---

## Local JS Project

---
