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
mkdir -p {w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w35,w36,w37,w38,w39,w40,w41,w42,w43,w44,w45,w46,w47,w48}/{d1,d2,d3,d4,d5}/{projects,homework}
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

#curl -s https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/folder_structure.sh | bash