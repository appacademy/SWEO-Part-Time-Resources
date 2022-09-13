#!/bin/bash

RED="\033[0;31m"
GREEN="\033[0;32m"
NO_COLOR="\033[0m"

# Start script loop
while true; do

    # ask a question, store the answer into cohortID variable
    echo "What is your Cohort ID?"
    read -p "> " cohortID
    echo

    # check if length of string is zero (-z)
    if [ -z "$cohortID" ]; then
        echo -e "${RED} -> Course ID cannot be blank please try again!${NO_COLOR}"
        echo
        continue
    fi

    # check if cohortID is a full match that begins and ends a line
    # this prevents "Jan" from creating a false positive due to matching
    # multiple lines but not being an actual match.
    if [ -z $(grep "^$cohortID$" ./cohorts.txt) ]; then
        echo -e "${RED} -> Incorrect Cohort ID, check again with your cohort lead!${NO_COLOR}"
        echo
        continue
    fi

    # ALl checks have been made, create file structure and add vars to profile file
    echo -e "Your cohort's branch ${GREEN}[${cohortID}]${NO_COLOR} will be downloaded now!"

    cd $HOME

    echo

    # Creates an appacademy folder if there isn't one already
    echo "Making Primary Folder..."

    mkdir -p "appacademy-${cohortID}"
    cd "appacademy-${cohortID}"
    echo

    # Make the PT Folder Structure
    echo "Making SubFolders..."

    mkdir -p {1-Module,2-Module,3-Module,5-Module}/{1-week,2-week,3-week,4-week,5-week,6-week}/{1-day,2-day,3-day,4-day,5-day}/{projects,homework}
    mkdir -p {4-Module,6-Module,7-Module}/{1-week,2-week,3-week,4-week,5-week,6-week,7-week,8-week}/{1-day,2-day,3-day,4-day,5-day}/{projects,homework}
    echo

    # Create a PT Resource repo if it doesn't exist or pull it
    echo "Cloning Repo..."

    if [ ! -d SWEO-Part-Time-Resources ]; then
      git clone -q https://github.com/appacademy/SWEO-Part-Time-Resources.git
      cd SWEO-Part-Time-Resources
    else
      cd SWEO-Part-Time-Resources
      git pull -q
    fi

    # Switch to and download remote branch
    git checkout --track -q origin/$cohortID &> /dev/null

    # Delete main branch
    git branch -D -q main &> /dev/null

    echo

    # Find the correct startup file
    echo "Checking Startup File..."

    # if the shell is bash
    if [ $SHELL = '/bin/bash' ]; then
      # if there is a .bash_profile
      if [ -e $HOME/.bash_profile ]; then
          PROFILE_FILE='.bash_profile'
      elif [ -e $HOME/.profile ]; then
          PROFILE_FILE='.profile'
      else
          PROFILE_FILE='.bashrc'
      fi

      # Check if the .bashrc is loaded in the startup file, if so we'll use the .bashrc
      if [ $PROFILE_FILE != '.bashrc' ]; then
          BASHRC_IN_BASH_PROFILE=$(cat $HOME/$PROFILE_FILE | grep -c '$HOME/.bashrc')

          if [ -e $HOME/.bashrc ] && [ $BASHRC_IN_BASH_PROFILE > 0 ]; then
              PROFILE_FILE='.bashrc'
          fi
      fi

    # If the shell is zsh
    elif [ $SHELL = '/bin/zsh' ]; then
      PROFILE_FILE='.zshrc'

    # Unsupported SHELL or other error catching
    else
      echo -e "${RED}Unable to determine shell profile file, reach out to your cohort lead for debugging!${NO_COLOR}"
      exit 1
    fi

    echo

    # aa_update alias setup
    echo "Configuring aa_update command..."

    UPDATE_ALIAS_IN_START=$(cat $HOME/$PROFILE_FILE| grep -c 'https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/update.sh')
    # If not append it to the profile file
    if [ $UPDATE_ALIAS_IN_START != 1 ]; then
        echo -e "\nalias aa_update='curl -s https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/update.sh | bash'" >> $HOME/$PROFILE_FILE
    fi
    echo

    # check if branch name variable already exists
    UPDATE_BRANCH_IN_START=$(cat $HOME/$PROFILE_FILE| grep -c 'AA_RESOURCES_BRANCH_NAME')
    # If not append variable to the profile file
    if [ $UPDATE_BRANCH_IN_START != 1 ]; then
        echo -e "\nAA_RESOURCES_BRANCH_NAME=$cohortID" >> $HOME/$PROFILE_FILE
    else
        grep -v "AA_RESOURCES_BRANCH_NAME" $HOME/$PROFILE_FILE > tmpfile && mv tmpfile $HOME/$PROFILE_FILE
        echo -e "\nAA_RESOURCES_BRANCH_NAME=$cohortID" >> $HOME/$PROFILE_FILE
    fi
    echo -e "${GREEN}All finished! Happy programming :)${NO_COLOR}"
    echo
    exit 0

done
