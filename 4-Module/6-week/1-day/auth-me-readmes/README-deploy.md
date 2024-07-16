# Authenticate Me - Deploying your Express Project to Render

Render is a web application for deploying fullstack applications. The free tier allows you to create a database instance to store
database schemas and tables for multiple applications, as well as host web
services (such as APIs) and static sites.

Before you begin deploying, **make sure to remove any `console.log`s or
`debugger`s in any production code**. You can search your entire project folder
to see if you are using them anywhere by clicking on the magnifying glass icon
on the top left sidebar of VSCode.

In the following phases, you will configure the Postgres database for production
and configure scripts for building and starting the Express production server.

## Best Deployment Practices

For this project, you can set Render to auto-deploy your backend every time you
complete a feature! Essentially, anytime you merge a feature branch into the
development branch.

To do this, merge the `dev` branch into the `main` branch.

First, checkout the `main` branch:

```bash
git checkout main
```

Then, make sure you have the latest changes in the `main` branch (production
branch) from your remote repository in your local repository (this is useful
when collaborating with other developers):

```bash
git pull origin main
```

Then, merge the `dev` branch into the `main` branch:

```bash
git merge dev
```

Finally, push the `main` branch to the remote repository:

```bash
git push origin main
```

Then follow the deployment instructions below.

## Phase 1: Set up a __package.json__ at the project root

Initialize a `package.json` file at the very root of your project directory
(outside of both the `backend` and `frontend` folders) with `npm init -y`.
The scripts defined in this `package.json` file will be run by Render, not
the scripts defined in the `backend/package.json`.

When Render runs `npm install`, it should install packages for the `backend`.
Overwrite the `install` script in the root `package.json` with:

```bash
npm --prefix backend install backend
```

This will run `npm install` in the `backend` folder.

Define a `sequelize` script that will run `npm run sequelize` in the `backend`
folder.

Define a `build` script that will run `npm run build` in the `backend`
folder.

Finally, define a `start` that will run `npm start` in the `backend folder.

The root `package.json`'s scripts should look like this:

```json
// ...
  "scripts": {
    "install": "npm --prefix backend install backend",
    "dev:backend": "npm install --prefix backend start",
    "sequelize": "npm run --prefix backend sequelize",
    "sequelize-cli": "npm run --prefix backend sequelize-cli",
    "start": "npm start --prefix backend",
    "build": "npm run --prefix backend build"
  },
// ...
```

The `dev:backend` script is optional and will not be used for Render.

Finally, commit your changes. Merge your `dev` branch into `main` for deployment.

## Phase 2: Set up Render.com account

_Skip this step if you already have a Render.com account connected to your
GitHub account._

Navigate to the [Render homepage] and click on "Get Started". On the Sign Up
page, click on the GitHub button. This will allow you to sign in to Render
through your GitHub account, and easily connect your repositories to Render for
deployment. Follow the instructions to complete your registration and verify
your account information.

## Phase 3: Create a Postgres Database Instance

_Skip this step if you have already created your Render Postgres database
instance for another application._

Sign in to Render using your GitHub credentials, and navigate to your
[Dashboard].

Click on the "New +" button in the navigation bar, and click on "PostgreSQL" to
create your Postgres database instance.

In the name field, give your database a descriptive name. Note that all of your
applications will share this database instance, so make it general (for example,
you might name it "App-Academy-Projects"). For the region field, choose the
location nearest to you. The rest of the fields in this section can be left
blank.

Click the "Create Database" button to create the new Postgres database instance.
Within a few minutes, your new database will be ready to use. Scroll down on
the page to see all of the information about your database, including the
hostname, user name and password, and URLs to connect to the database.

You can access this information anytime by going back to your [Dashboard], and
clicking on the database instance.

## Phase 4: Create a New Web Service

From the [Dashboard], click on the "New +" button in the navigation bar, and
click on "Web Service" to create the application that will be deployed.

> _Note: If you set up your Render.com account using your GitHub credentials,
> you should see a list of applications to choose from. If you do not, click on
> "Configure Account" for GitHub in the right sidebar to make the connection
> between your Render and GitHub accounts, then continue. If you run into issues
> with the GitHub connection, use this article to [reset your GitHub
> connection]._

Look for the name of the application you want to deploy, and click the "Connect"
button to the right of the name.

Now, fill out the form to configure the build and start commands, as well as add
the environment variables to properly deploy the application.

### Part A: Configure the Start and Build Commands

Start by giving your application a name. This is the name that will be included
the URL of the deployed site, so make sure it is clear and simple. The name
should be entered in kebab-case.

Leave the root directory field blank. By default, Render will run commands from
the root directory.

Make sure the Environment field is set set to "Node", the Region is set to the
same location as your database, and the Branch is set to "main".

Next, add your Build command. This is a script that should include everything
that needs to happen _before_ starting the server.

For this project, enter the following script into the Build field, all in one
line:

```shell
# build command - enter all in one line

npm install &&
npm run build &&
npm run sequelize --prefix backend db:migrate &&
npm run sequelize --prefix backend db:seed:all
```

This script will install dependencies, run the build command in the
__package.json__ file, and run the migrations and seed files. All of these
commands will be run from the backend directory.

> Note: Due to limitations of Render.com's free tier, you will be including the
> seed command within the build. **This should only be done for demo
> applications, not production applications.** Including the seed command in the
> build will allow you to more easily replace your free database after it
> expires every 90 days, and will also help keep your application in a pristine
> state with clean seed data.

Now, add your start command in the Start field:

```shell
npm start
```

### Part B: Add the Environment Variables

Click on the "Advanced" button at the bottom of the form to configure the
environment variables your application needs to access to run properly. In the
development environment, you have been securing these variables in the __.env__
file, which has been removed from source control. In this step, you will need to
input the keys and values for the environment variables you need for production
into the Render GUI.

Click on "Add Environment Variable" to start adding as many variables as you
need. You will not need to add the `PORT` or `DB_FILE` variables, since those
are only used in the development environment, not production.

Add the following keys and values in the Render GUI form:

- JWT_SECRET (click "Generate" to generate a secure secret for production)
- JWT_EXPIRES_IN (copy value from local __.env file__)
- NODE_ENV production
- SCHEMA (custom name, in snake_case)

In a new tab, navigate to your dashboard and click on your Postgres database
instance.

Add the following keys and values:

- DATABASE_URL (copy value from Internal Database URL field)

_Note: As you work to further develop your project, you may need to add more
environment variables to your local __.env__ file. Make sure you add these
environment variables to the Render GUI as well for the next deployment._

Next, choose "Yes" for the Auto-Deploy field. This will re-deploy your
application every time you push to main.

Now, you are finally ready to deploy! Click "Create Web Service" to deploy your
project. The deployment process will likely take about 10-15 minutes if
everything works as expected. You can monitor the logs to see your build and start commands being executed, and see any errors in the build process.

When deployment is complete, open your deployed site and check to see if you successfully deployed your Express application to Render! You can find the URL for your site just below the name of the Web Service at the top of the page.

## Phase 5: Ongoing Maintenance

The main limitation of the free Render Postgres database instance is that it
will be deleted after 90 days. In order to keep your application up and running,
you MUST create a new database instance before the 90 day period ends.

__Set up calendar reminders for yourself to reset your Render Postgres database
instance every 85 days so your application(s) will not experience any
downtime.__

Each time you get your calendar reminder, follow the steps below.

1. Navigate to your Render [Dashboard], click on your database instance, and
   click on either the "Delete Database" or "Suspend Database" button.

2. Next, follow the instructions in Phase #3 above to create a new database
   instance.

3. Finally, you will need to update the environment variables for EVERY
   application that was connected to the original database with the new database
   information. For each application:

  - Click on the application name from your [Dashboard]
  - Click on "Environment" in the left sidebar
  - Replace the value for `DATABASE_URL` with the new value from your new database
    instance, and then click "Save Changes"
  - At the top of the page, click "Manual Deploy", and choose "Clear build cache
    & deploy".

4. After each application is updated with the new database instance and
   re-deployed, manually test each application to make sure everything still
   works and is appropriately seeded.

## Troubleshooting Tips and Tools

Render offers a straightforward deployment process, but you may run into
difficulties. Use the tips and tools below to troubleshoot your deployment.

### Database Issues

Since creating a database is a simple process with the Render GUI, most issues
related to the database are not caused by the database creation phase. Instead,
they may be caused by errors in configuring your application to run in the
production environment (errors in the project repo), or errors in connecting
your application to the Render Postgres database instance (errors setting up the
Web Service in the Render GUI).

__Troubleshooting Project Configuration__

Check the following to make sure your project is properly set up to run sqlite
in development, and Postgres in production.

- Does your configuration file include a `production` key including the database
  url for Postgres?

```js
// ...
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    // ...
  }
  // ...
```

- Did you properly set up your project to create a schema within the production
  database, through the __psql-setup-script.js__ file and `build` command in the
  __backend/package.json__ file?

- Did you properly define that schema in ALL of the migration and seeder files?

- Did you include the correct scripts in the __backend/package.json__ and root __package.json__ files?

__Web Service Setup Issues__

Check the following fields to make sure your database connection is set up
properly:

- Environment variables: Did you include the `NODE_ENV` variable set to
  "production" and the `DATABASE_URL` key set to the "Internal Database URL"
  value from your Render Postgres database instance?

- Deployment logs: Did each command in your build script and start script run as
  expected?

- Deployment Logs: Did the migration files and seeder files run as expected?

### Checking the Postgres Database (Advanced Troubleshooting)

If you've checked all of the issues described above, you can further
troubleshoot your deployment by examining the contents of your Postgres
database. In order to do this, you must have [PostgreSQL] installed locally on
your computer.

To access your Render Postgres database, copy the PSQL Command value from the
information page of your database. The value should start with "PGPASSWORD=",
and should include information about your database.

Paste this value into your terminal. This will open up Postgres with a
connection to your remote database. At this point, you can use Postgres commands
locally to examine the contents of your database. Try the following:

- `\dn` - lists all of the schemas in the database
  - Does your database show the correct schema for your project?

- `\dt <SchemaName>.*` - lists all tables within `<SchemaName>` schema
  - Do you see all of your tables within the schema? You should see the `Users` table, as well as the `SequelizeMeta` and `SequelizeData` tables at this point.

- `SELECT * FROM "<SchemaName>"."Users";` - lists all entries in the `Users` table
  within `SchemaName` schema
 - Does the `Users` table show the appropriate seed data?

If there are any problems with the way the database or schema is set up, you can drop the schema for your application and all tables within it, using the following command:

```sql
DROP SCHEMA <SchemaName> CASCADE
```


## Re-deployment

There are two ways to re-deploy your `main` branch changes:

1. If you set up your application for Auto-deployment, it should automatically re-deploy after every push to main.

2. You can manually trigger a re-deployment at any time. Click on the blue "Manual Deploy" button, and choose "Clear Build Cache & Deploy". You will be able to see the logs and confirm that your re-deployment is successful.


[Render homepage]: https://render.com/
[Dashboard]: https://dashboard.render.com/
[PostgreSQL]: https://www.postgresql.org/
[reset your GitHub connection]: https://community.render.com/t/github-id-belongs-to-an-existing-render-user/2411/1
