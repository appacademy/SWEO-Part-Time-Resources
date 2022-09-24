# Intro to Shell Scripting

What is Shell?

A unix shell program interprets user commands, either directly inputed by the
user or read from a file.

Shell scripts are interpreted, not compiled.

There are many shells `cat /etc/shells`, we will be looking at the bash shell specifically.

To find the location of the bash executable use `which bash`

---

## Why?

The ability to run shell commands automatically and control mundane processes by
running a script is super powerful and exceptionally useful to all kinds
of developers.

Need to do a certain task on a server regularly? Make a bash script to do it
with a single command instead of having to do the entire process over and over.

Need to search for and rename certain filetypes on a regular basis? Write a bash
script to do it for you.

---

## Basic Syntax

### File Setup

Make a file `touch my_script.sh`. The `.sh` extension is not needed for the
script to function, but it is best practice to include the file extension, it
helps to identify the file both to other humans and to your text editors.

Make the file executable `chmod +x my_script.sh`. This will allow you to run the
file as a script.

Start off the file by giving the script the location of your bash executable
that you got from running `which bash`, in my case `/usr/bin/bash`

It should look like this.

```sh
#! /usr/bin/bash

echo "Hello World"
```

### Variables and Comments

`#` marks a comment

`name="William"` is a variable declaration

### If Statements

```sh
name="William"

if [[ $name = "William" ]]; then
  echo "yes"
elif [[ $name = "Anna" ]]; then
  echo "other"
else
  echo "no"
fi
```

### Loops

```sh
#While loop
i=0

while [[ i -lt 10 ]]; do
  echo $i
  ((i=i+1))
done

#loop through range
for num in {0..9}; do
  echo $num
done

#c-style for loop
for ((i = 0; i < 10; i++)); do
  echo $i
done

#loop through array
numbers=("element1" "element2" "element3")
#numbers[@] means the whole array
echo ${numbers[@]}
for i in "${numbers[@]}"
do
  echo "$i"
done

```

### User Input

```sh
# -p means prompt
# $'text' is how to interpret ascii in the bash prompt. \n cant be interpreted normally
# name is the variable to store the read value into

read -p "What is your name?"$'\n  > ' name

echo "Hello $name"
```

---

## Example: aa_update

Here is a practical example of the usefulness of bash scripting that you have
been using for almost a year!

[github scripts](https://github.com/appacademy/SWEO-Part-Time-Resources/tree/main/utilities/scripts)

---
