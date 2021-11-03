while true; do

    read -p "What is your Cohort ID?" cohortID < /dev/tty

    if [ -z "$cohortID" ]; then 
        echo "Course ID cannot be blank please try again! `echo $'\n '`"
        continue
    fi 
    DATE_REGEX="^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-[we]$"
    if ! [[ $cohortID =~ $DATE_REGEX ]]; then
        echo
        echo "Course ID must be formated properly, please try again!`echo $'\n '`" 
        continue
    fi

    inGithub=$(for branch in `git branch -r | grep -v HEAD`;
        do echo -e `git show --format="%ci %cr" $branch | head -n 1` \\t$branch;
        done | grep -c $cohortID);

    if [ $inGithub == 0 ]; then 
        echo
        echo "Check with your cohort lead form the for your cohortID`echo $'\n '`"
        continue
    fi
    # check if branch name variable already exists
    UPDATE_BRANCH_IN_START=$(cat $HOME/$PROFILE_FILE| grep -c 'AA_RESOURCES_BRANCH_NAME')
    # If not append variable to the startup file
    if [ $UPDATE_BRANCH_IN_START != 1 ]; then
        echo -e "\nAA_RESOURCES_BRANCH_NAME=$cohortID" >> $HOME/$PROFILE_FILE
    fi
    
    echo "Your cohort's repo will be downloaded now!"
    break
    echo "Done."
    exit 0
    echo


done



