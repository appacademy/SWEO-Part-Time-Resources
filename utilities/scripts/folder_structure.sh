#!/bin/bash

# Manually update this array when new cohorts are added 
cohorts=(2021-Sept-E 2021-Sept-W 2021-Nov-E 2021-Nov-W)

while true; do

    read -p "What is your Cohort ID? `echo $'\n '`" cohortID < /dev/tty

    if [ -z "$cohortID" ]; then
        echo "Course ID cannot be blank please try again! `echo $'\n '`"
        continue
    fi
    if ! [[ ${cohorts[*]} =~ (^|[[:space:]])$cohortID($|[[:space:]]) ]]; then
        echo
        echo "Check with your cohort lead for your cohortID`echo $'\n '`"
        continue
    fi

    # ALl checks have been made, create file structure and add vars to profile file
    echo "Your cohort's branch will be downloaded now!"

    cd $HOME
    # Creates an appacademy folder if there isn't one already
    mkdir -p "appacademy-${cohortID}"
    cd "appacademy-${cohortID}"

    # Make the PT Folder Structure
    mkdir -p {1-Module,2-Module,3-Module,5-Module}/{1-week,2-week,3-week,4-week,5-week,6-week}/{1-day,2-day,3-day,4-day,5-day}/{projects,homework}
    mkdir -p {4-Module,6-Module,7-Module}/{1-week,2-week,3-week,4-week,5-week,6-week,7-week,8-week}/{1-day,2-day,3-day,4-day,5-day}/{projects,homework}

    # Create a PT Resource if it doesn't exist or pull it
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

    # Find the correct startup file
    if [ $SHELL = '/bin/bash' ]; then
        if [ -e $HOME/.bash_profile ]; then
            PROFILE_FILE='.bash_profile'
        elif [ -e $HOME/.profile ]; then
            PROFILE_FILE='.profile'
        else
            PROFILE_FILE='.bashrc'
        fi
        # Check if the .bashrc is loaded in the startup file, if so we'll use the .bashrc
        if [ $PROFILE_FILE != '.bashrc' ]; then
            BASHRC_IN_BASH_PROFILE=$(cat $HOME/$PROFILE_FILE | grep -c 'source $HOME/.bashrc')
            if [ -e $HOME/.bashrc ] && [ $BASHRC_IN_PROFILE > 0 ]; then
                PROFILE_FILE='.bashrc'
            fi
        fi
    elif [ $SHELL = '/bin/zsh' ]; then
        PROFILE_FILE='.zshrc'
    fi

   
    # Check if the update alias already exists
    UPDATE_ALIAS_IN_START=$(cat $HOME/$PROFILE_FILE| grep -c 'https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/update.sh')
    # If not append it to the profile file
    if [ $UPDATE_ALIAS_IN_START != 1 ]; then
        echo -e "\nalias aa_update='curl -s https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/update.sh | bash'" >> $HOME/$PROFILE_FILE
    fi

     # check if branch name variable already exists
    UPDATE_BRANCH_IN_START=$(cat $HOME/$PROFILE_FILE| grep -c 'AA_RESOURCES_BRANCH_NAME')
    # If not append variable to the profile file
    if [ $UPDATE_BRANCH_IN_START != 1 ]; then
        echo -e "\nAA_RESOURCES_BRANCH_NAME=$cohortID" >> $HOME/$PROFILE_FILE
    else
        grep -v "AA_RESOURCES_BRANCH_NAME" $HOME/$PROFILE_FILE > tmpfile && mv tmpfile $HOME/$PROFILE_FILE
        echo -e "\nAA_RESOURCES_BRANCH_NAME=$cohortID" >> $HOME/$PROFILE_FILE
    fi


    echo "Done."
    exit 0
    echo


done
