# Alembic

## Sqlite3 DB URL

```zsh
export DATABASE_URL=sqlite:///db_name.db
```

## Using migrations...revisions

Not migrations, but revisions!

Make a revision

```zsh
pipenv run alembic revision -m "the message about the revision"
```

`op` = alembic

`sa` = SQLAlchemy

Run this to apply revisions to your db

```zsh
pipenv run alembic upgrade head
```

Run this to see the history of revisions

```zsh
pipenv run alembic history
```

---

## Flask-Migrate

Starting with `app/__init__.py` looking like this

```py
from app.models import db
from flask import Flask
from flask_migrate import Migrate
import os

app = Flask(__name__)
app.config.from_mapping({
  'SQLALCHEMY_DATABASE_URI': os.environ.get('DATABASE_URL'),
  'SQLALCHEMY_TRACK_MODIFICATIONS': False,
})
db.init_app(app)
Migrate(app, db)
```

The recipe is simple:

## Initialize Alembic

```zsh
pipenv run flask db init
```

## Add a model

This is just normal model creating syntax

```py
# app/models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Owner(db.Model):
    __tablename__ = "owners"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(255), nullable=False)
```

## Run `pipenv run flask db migrate` to autogenerate a migration

```zsh
pipenv run flask db migrate -m "create owners table"
```

## Run `pipenv run flask db upgrade` to apply it to the database

```zsh
pipenv run flask db upgrade
```
