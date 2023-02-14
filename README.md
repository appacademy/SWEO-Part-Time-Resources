# SWEO-Part-Time-Resources

To setup your initial file structure run the below command. You will need your
*cohortID* which is supplied by your cohort lead.

File Structure Setup Command:

```bash
curl -s https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/main/utilities/scripts/folder_structure.sh | bash
```

Once you have run the above command you should have a folder at the root
of your filesystem named *app-academy-{cohortID}* with folders inside it
generated for each module, week, and day of your time at App Academy.

The top level folder structure should look like this(the `{}` are situational
file names):

Make sure you read the output of the curl command and follow the given instructions!

```bash
appacademy-{cohortID}
├── 1-Module
├── 2-Module
├── 3-Module
├── 4-Module
├── 5-Module
├── 6-Module
├── 7-Module
└── SWEO-Part-Time-Resources
```

Each Module should look something like this:

```bash
{module number}-module
├── {week number}-week
│   ├── {day number}-day
│   │   ├── homework
│   │   └── projects

```

Each day you can use the command `aa_update` in your terminal to load in updated
lecture notes for your cohort. (If you are running the `aa_update` command for
the first time and it is not working try quitting your terminal app and opening
it again)

If you ever change cohorts, contact your cohort lead for a new *cohortID* and
run the file structure setup command again with your new ID. You will not lose
any of your previous work. A new *appacademy-{cohortID}* folder will be created
for your new cohort.