# Alembic with Flask

## Commands

#### Install alembic
```
pipenv install alembic Flask-Migrate
```

#### Initializing alembic
```
pipenv run flask db init
```

#### Generating migrations
Note: It is reccomended to create the model in SQLAlchemy first
so that when you run the migration generation it can autogenerate 
the migration code for you.
```
pipenv run flask db migrate -m 'create <name> table'
```

#### Apply migrations to database
```
pipenv run flask db upgrade
```

#### Remove migrations from database
```
pipenv run flask db downgrade
```

#### Rollback the last migration
```
flask db downgrade base
```

#### View all migration versions
```
pipenv run flask db history
```

#### Use a specific migration version
```
flask db stamp version
```

#### Run a custom SQL script
```
flask db sql "your SQL script"
```