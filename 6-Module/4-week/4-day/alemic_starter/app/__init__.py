from flask import Flask
from flask_migrate import Migrate  # new import

from .config import Configuration
from .models import db

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)

migrate = Migrate(app, db) # add flask_migrate commands to our flask app
