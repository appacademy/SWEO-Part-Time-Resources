#!/bin/bash
cd $HOME
# Creates an appacademy folder if there isn't one already
mkdir -p appacademy
cd appacademy
# Create a PT Resource if it doesn't exist or pull it
if [ ! -d SWEO-Part-Time-Resources ]; then
  git clone -q https://github.com/appacademy/SWEO-Part-Time-Resources.git
else
  cd SWEO-Part-Time-Resources
  git pull -q
  cd ../
fi
# Make the PT Folder Structure
mkdir -p {1-Module,2-Module,3-Module,5-Module}/{1-week,2-week,3-week,4-week,5-week,6-week}/{d1,d2,d3,d4,d5}/{projects,homework}
mkdir -p {4-Module,6-Module,7-Module}/{1-week,2-week,3-week,4-week,5-week,6-week,7-week,8-week}/{d1,d2,d3,d4,d5}/{projects,homework}
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
# Check if the alias already exists
ALIAS_IN_START=$(cat $HOME/$PROFILE_FILE| grep -c 'https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/update.sh')
# If not append it to the file
if [ $ALIAS_IN_START != 1 ]; then
    echo -e "\nalias aa_update='curl -s https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/update.sh | bash'" >> $HOME/$PROFILE_FILE
fi