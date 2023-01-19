# W2D3 - Helper Functions / Node

## Helper Functions

- In class lecture on Helper Functions

## Running Code

`Basic Commands`

- ls
  - See all files and folders in the directory(folder) you're currently in
- cd `<folder>`
  - Navigate to a directory(folder)
- mkdir `<folder_name>`
  - Make a directory(folder) in whatever directory(folder) you're in
- touch `<file_name>`
  - Create a file in whatever directory(folder) you're currently in
- pwd
  - Shows you path to the current directory(folder) you're in
- cd ../
  - Travel upwards
- cd ./
  - Don't travel

`Using Node`

- Open a node REPL with `node`
  - exit with ctrl+c (twice)
- Use `node <filename>` to run a file with node

`Using Mocha`

- Make sure you're in the folder that contains the 'test' file
- Run `mocha` to run all test files
- Run `mocha -b` to run the test until one fails
- Run `mocha <testFileLocation>` to run a single test
- Run `mocha -g <functionName>` to run all test about a single function
