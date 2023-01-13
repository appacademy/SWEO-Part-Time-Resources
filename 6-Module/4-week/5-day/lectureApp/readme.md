# Week 36 Day 4 - Alembic and Migrations

- Dependencies to install for alembic
    - Flask-Migrate
    - alembic
- Import your SQLAlchemy db object from wherever you created it, usually in a models.py file or a file in your models folder.
- Set your DATABASE_URL env variable in your .env file (Remember to add the variable to your Configuation class file!)
- Connect the database to your Flask app in your __init__.py file
```python
db.init_app(app)
```
- Import Migrate from flask_migrate in your __init__.py
- Create a variable called migrate and initalize it somewhere after your db.init_app(app) `migrate = Migrate(app, db)`
    - This configures alembic to work with your flask app (the reason we can use commands like flask db init, migrate, upgrade, etc)
- Create a model
- Initialize the alembic file structure in your app with the following terminal command:
    - `pipenv run flask db init` (or if you are already in your shell): `flask db init`
- Now to auto-generate a migration we run:
    - `pipenv run flask db migrate -m <name-of-file>` (or if you are already in your shell): `flask db migrate -m <name-of-file>`
    - this command will create a "revision" in our migrations/versions folder
- To execute this migration and populate our database run this command:
    - `pipenv run flask db upgrade` (or if you are already in your shell) `flask db upgrade`
- You can verify if your database schema was populated by opening up your db file in sqlite3 and running `.schema <table_name>`

# Extra Tips

- Do I actually need to worry about revisions ids or keep track of which revisions have been applied?
    - No, during your time at app academy none of the projects you will work on will be complicated enough for this ruin your project if you don't.
    - 99% of the time you will be able to simply delete your migrations folder, delete your db file and remigrate and everything will be fine.
    - BUT a best practice would be to keep a HISTORY of your revisions so if for any reason you broke something and need a panic button to go back to how you previously had it, you can use the history feature of alembic to simply revert to an older revision.
- HELP! I CANT MIGRATE OR DOWNGRADE! If you have no clue why nothings working, as a last resort follow these steps
    - !!! THIS WILL DELETE ALL ALEMBIC HISTORY (REVISION HISTORY/CURRENTLY APPLIED REVISIONS AND DELETE ALL THE DATA FROM YOUR DATABASE)
    - Delete migrations folder
    - Delete database
    - `flask db init` (Recreates your migrations folder from alembic)
    - `flask db migrate -m <name_of_model>` (Generates a revision file)
    - `flask db upgrade` (Populates your database using your revision files)
    - And done!
- If you want to check which revisions are currently applied in your sqlite3 database:
    - run `sqlite3 dev.db` (make sure your terminal path matches the folder your db file is in)
    - run `SELECT * FROM alembic_version;` (this will return all revision ids that alembic thinks are currently in your database)
    - Your revision ids are located in the migrations/versions folder. (if you have converted the file name to show a date instead of the revision id you will have to open up the revision files and near the top of the file you will find the revision id)
- Use `flask db --help` to see other useful commands!
