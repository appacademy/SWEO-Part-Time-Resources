#!/bin/bash
while true; do
    read -p "What is the current MODULE? (1 - 7): `echo $'\n> '`" mod < /dev/tty
    if [ -z "$mod" ]; then 
        echo "Module cannot be blank please try again! `echo $'\n '`"
        continue
    fi 
    if ! [[ "$mod" =~ ^\s*[1-7]{1}\s*$ ]]; then 
        echo
        echo "Module must be number between 1 and 7 `echo $'\n '`"
        continue
    else 
        break
    fi
done
while true; do
    read -p "What is the current WEEK? (1 - 8): `echo $'\n> '`" week < /dev/tty
    if [ -z "$week" ]; then 
        echo "Week cannot be blank please try again! `echo $'\n '`"
        continue
    fi 
    if ! [[ "$week" =~ ^\s*[1-8]{1}\s*$ ]]; then 
        echo
        echo "Week must be number between 1 and 8 `echo $'\n '`"
        continue
    else 
        break
    fi
done
echo 
while true; do
    read -p "What is the current DAY? (1 - 5): `echo $'\n> '`" day < /dev/tty

    if [ -z "$day" ]; then 
        echo "Day cannot be blank please try again! `echo $'\n '`" 
        continue
    fi 
    if ! [[ "$day" =~ ^\s*[1-5]{1}\s*$ ]]; then
        echo
        echo "Day must be a number between 1 and 5 `echo $'\n '`"
        continue
    else
        break
    fi
done
echo
cd ~/appacademy/SWEO-Part-Time-Resources
git reset --hard -q
git pull --quiet
cd ~
if [ -d "./appacademy/${mod}-Module/${week}-week/${day}-day/lecture" ]; then
    echo 'Lecture folder already exists...'
    while true; do
        read -p "Are you only wanting the lecturer's live lecture file? y/n `echo $'\n> '`" yn1 < /dev/tty
        if [[ "$yn1" =~ ^([yY][eE][sS]|[yY])$ ]]; then
            echo "Copying to live-lecture.js..."
            cp -r ~/appacademy/SWEO-Part-Time-Resources/${mod}-Module/${week}-week/${day}-day/scratch.js ~/appacademy/${mod}-Module/${week}-week/${day}-day/lecture/live-scratch.js
            echo "Done."
            exit 0
        elif [[ "$yn1" =~ ^([nN][oO]|[nN])$ ]]; then
            while true; do
                read -p "Would you like to overwrite what is currently there? y/n `echo $'\n> '`" yn2 < /dev/tty
                if [[ "$yn2" =~ ^([yY][eE][sS]|[yY])$ ]]; then
                    echo "Overwriting..."
                    rm -rf ~/appacademy/${mod}-Module/${week}-week/${day}-day/lecture
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
echo "Copying Files..."
cp -rp ~/appacademy/SWEO-Part-Time-Resources/${mod}-Module/${week}-week/${day}-day ~/appacademy/${mod}-Module/${week}-week/${day}-day/lecture
echo "Done."
exit 0