# M1-W1-D2

- Tech setups

## If your aa_update command didn't work

Please open your terminal and in your root directory type the following command:

```
ls -a
```

This will show all of the available directories in your root directory **including** the hidden directories. Here we want to find either a .zshrc or .bashrc file. If you have either of these files type the following command:

```
code .zshrc
or 
code .bashrc
```

This command will open that file in vscode for you. At this point we just want to add a couple of lines to that file, save and exit. Please copy and paste the following lines into your file.

```
alias aa_update='curl -s https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/update.sh | bash'

```

copy and paste the above from alias - bash' (including the single quote!) then copy and paste only the line that applies to you below.

```
for east coast
AA_RESOURCES_BRANCH_NAME=2023-Jan-E 

for west coast
AA_RESOURCES_BRANCH_NAME=2023-Jan-W 
```

Make sure the file is saved (either ctrl + s on windows or command + s for mac if you don't have autosave enabled) then close the file and restart your terminal. Now test your aa_update command!

## Plan for today

Today will be focused on tech setups and making sure your computer is up to date with all of the tools we need. 

## Tech Setups (2h, solo)

Carefully follow the instructions in aaopen to complete your tech setups. Please post any questions in the live questions channel for assistance. In the last 30m of class I will pop into your rooms to check that everything is complete. If you finish early feel free to get a head start on your homework in AAOpen.

---