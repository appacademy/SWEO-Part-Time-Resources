# SQLAlchemy

## Setup

### Config / Environment
Your `.env` file will need a url to your database / database file:
```
DATABASE_URL=sqlite:///dev.db
```

Then you'll need to setup a `SQLALCHEMY_DATABASE_URI` variable in your config along with `SQLALCHEMY_TRACK_MODIFICATIONS:
```
import os

class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY')
```

In your `__init__.py` file configure the application with SQLAlchemy:
```
from flask import Flask
from .config import Configuration
from .routes import orders

app = Flask(__name__)
app.config.from_object(Configuration)
app.register_blueprint(orders.bp)
db.init_app(app)  # Configure the application with SQLAlchemy
```