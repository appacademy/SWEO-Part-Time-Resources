// In your terminal, CD into the folder where you want to save your project.
// cd appacademy-2022-Sep-EW/1-Module/3-week/5-day/projects

// Click the download project button in appacademy Open for the project you want to work on.  This will open a new tab with the appacademy github repo

// Click the green code button and copy the repo link from github.

// Go back to your terminal and ensure you're in the folder you want to clone the project into.

// run: git clone yourProjectLinkThatYouCopied

// now run ls and you should see a folder with the project.

// cd into this project folder that you just cloned.

// When inside of the cloned folder, run ls -a and you should see a .git file that is linking the repo to the appacademy repo.  We need to remove this .git file!

// To remove the current .git file run: rm -rf .git

// Now go to github and create your own repository (make it private), and follow the quick setup guide.  Run the quick setup commands inside of the project folder you just removed the .git from
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/YourUsername/GITHUBURL
// git push -u origin main

// Now click 'code' on github, and you should see all of the folders/files in your own github repository.

// Add your pair as a collaborator in the settings tab under collaborator on github.

// Your pair will receive and email and now be able to clone your repository and you can begin working.

// After someone has written code and you're ready to switch pairs run the following commands:
// git add .
// git commit -m "(YOUR MESSAGE)Finished problem 1"
// git push

// Then your pair will run git pull and start working where you left off
