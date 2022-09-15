#!/bin/bash

# ---------------------------------------------------------------
# ------------------- VARIABLE DECLARATION ----------------------
# ---------------------------------------------------------------

RED="\033[0;31m"
GREEN="\033[0;32m"
NO_COLOR="\033[0m"

# ---------------------------------------------------------------
# ------------------ DETERMINE CONFIG FILE ----------------------
# ---------------------------------------------------------------

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
        BASHRC_IN_BASH_PROFILE=$(cat $HOME/$PROFILE_FILE | grep '$HOME/.bashrc')

        if [[ -e $HOME/.bashrc  && ! -z $BASHRC_IN_BASH_PROFILE ]]; then
            PROFILE_FILE='.bashrc'
        fi
    fi

# If the shell is zsh
elif [ $SHELL = '/bin/zsh' ]; then
    PROFILE_FILE='.zshrc'
elif [ $SHELL = '/usr/bin/zsh' ]; then
    PROFILE_FILE='.zshrc'
# Unsupported SHELL or other error catching
else
    echo -e "${RED}Unable to determine shell profile file, reach out to your cohort lead for debugging!${NO_COLOR}"
    exit 1
fi

echo -e "  ...${GREEN}Done [$PROFILE_FILE]${NO_COLOR}"
echo

# Reassign the variable set in config file so it is available in the script
AA_RESOURCES_BRANCH_NAME=$(grep "AA_RESOURCES_BRANCH_NAME" $HOME/$PROFILE_FILE | cut -d'=' -f 2)

# ---------------------------------------------------------------
# ------------------ CHECK MOD/WEEK/DAY -------------------------
# ---------------------------------------------------------------

while true; do
    echo "What is the current MODULE? (1 - 7)"
    read -p "`echo $''`> " mod < /dev/tty
    echo

    if [ -z "$mod" ]; then
        echo -e "${RED}Module cannot be blank please try again!${NO_COLOR}"
        echo
        continue
    fi

    if ! [[ "$mod" =~ ^\s*[1-7]{1}\s*$ ]]; then
        echo -e "${RED}Module must be a number between 1 and 7!${NO_COLOR}"
        echo
        continue
    else
        break
    fi
done

while true; do
    echo "What is the current WEEK? (1 - 8)"
    read -p "`echo $''`> " week < /dev/tty
    echo

    if [ -z "$week" ]; then
        echo -e "${RED}Week cannot be blank please try again!${NO_COLOR}"
        echo
        continue
    fi

    if ! [[ "$week" =~ ^\s*[1-8]{1}\s*$ ]]; then
        echo -e "${RED}Week must be number between 1 and 8!${NO_COLOR}"
        echo
        continue
    else
        break
    fi
done

while true; do
    echo "What is the current DAY? (1 - 5)"
    read -p "`echo $''`> " day < /dev/tty
    echo

    if [ -z "$day" ]; then
        echo -e "${RED}Day cannot be blank please try again!${NO_COLOR}"
        echo
        continue
    fi

    if ! [[ "$day" =~ ^\s*[1-5]{1}\s*$ ]]; then
        echo -e "${RED}Day must be a number between 1 and 5!${NO_COLOR}"
        echo
        continue
    else
        break
    fi
done

# ---------------------------------------------------------------
# ------------------ PULL AND COPY DATA -------------------------
# ---------------------------------------------------------------

cd ~/appacademy-$AA_RESOURCES_BRANCH_NAME/SWEO-Part-Time-Resources

git reset --hard -q
git pull --quiet
cd ~
if [ -d "./appacademy-${AA_RESOURCES_BRANCH_NAME}/${mod}-Module/${week}-week/${day}-day/lecture" ]; then
    echo 'Lecture folder already exists...'
    while true; do
        read -p "Are you only wanting the lecturer's live lecture file? y/n `echo $'\n> '`" yn1 < /dev/tty
        if [[ "$yn1" =~ ^([yY][eE][sS]|[yY])$ ]]; then
            echo "Copying to live-lecture.js..."
            cp -r ~/appacademy-${AA_RESOURCES_BRANCH_NAME}/SWEO-Part-Time-Resources/${mod}-Module/${week}-week/${day}-day/scratch.js ~/appacademy-${AA_RESOURCES_BRANCH_NAME}/${mod}-Module/${week}-week/${day}-day/lecture/live-scratch.js
            echo "Done."
            exit 0
        elif [[ "$yn1" =~ ^([nN][oO]|[nN])$ ]]; then
            while true; do
                read -p "Would you like to overwrite what is currently there? y/n `echo $'\n> '`" yn2 < /dev/tty
                if [[ "$yn2" =~ ^([yY][eE][sS]|[yY])$ ]]; then
                    echo "Overwriting..."
                    rm -rf ~/appacademy-${AA_RESOURCES_BRANCH_NAME}/${mod}-Module/${week}-week/${day}-day/lecture
                    break
                elif [[ "$yn2" =~ ^([nN][oO]|[nN])$ ]]; then
                    echo "If you're having issues contact your Module Instructor."
                    echo "Exiting..."
                    echo "Done"
                    exit 0
                else
                    echo "You should answer with a yes/Yes/y or no/No/n"
                    continue
                fi
            done
        else
            echo "You should answer with a yes/Yes/y or no/No/n"
            continue
        fi
        break
    done
fi
echo -e "${GREEN}Copying Files for mod: ${mod}, week: ${week}, day: ${day}...${NO_COLOR}"
cp -rp ~/appacademy-${AA_RESOURCES_BRANCH_NAME}/SWEO-Part-Time-Resources/${mod}-Module/${week}-week/${day}-day ~/appacademy-${AA_RESOURCES_BRANCH_NAME}/${mod}-Module/${week}-week/${day}-day/lecture
echo "Done."
exit 0
