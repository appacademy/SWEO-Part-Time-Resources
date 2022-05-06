## Basic Terminal Commands

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
- explorer.exe .
  - Open windows file explorer for the current folder
- unzip 
  - `unzip skeleton.zip`
- zip 
  - `zip name-this.zip item-to-zip`

## Download Project using Curl Command
Note: Can be done for mac or windows. If you use Windows you might find it easier to use curl to download the zip file into your WSL. Here's how to do that:

- right click on the link to the zip file and copy the link to your clipboard
- In the Ubuntu Terminal type the following: `curl -o skeleton.zip paste-link-here` and then paste in the link you copied and press Enter. This will download the zip file into your current directory. 
- It should look something like this: `curl -o skeleton.zip https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/js-local/skeleton.zip`
- Use unzip to unzip the file like this: `unzip skeleton.zip`
  - if terminals prompts to install, then run the command provided to install unzip feature.
- to `zip` something up:
  - `zip name-this.zip item-to-zip`

## Node.js

- Node.js (Node) is a JavaScript runtime environment
- Open a node REPL with `node`
  - exit with ctrl+c (twice)
- Use `node <file_name>` to run a file with node

## Git Flow - Uploading Project to Github
- [Git Flow](https://github.com/appacademy/Module-1-Resources/blob/main/additional_resources/week2/gitflow/README.md#basic-setup-for-pairing)

## Mocha
Mocha is a testing suite we'll use to test our code
  
- Make sure you're in the folder that contains the 'test' file
- Run `mocha` to run all test files
- Run `mocha -b` to run the test until one fails
- Run `mocha <testFileLocation>` to run a single test
- Run `mocha -g <functionName>` to run all test about a single function




