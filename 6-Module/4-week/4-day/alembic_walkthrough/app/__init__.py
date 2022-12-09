import os
from flask import Flask
from flask_migrate import Migrate
from .models import db

app = Flask(__name__)
app.config.from_mapping({
  'SQLALCHEMY_DATABASE_URI': os.environ.get('DATABASE_URL'),
  'SQLALCHEMY_TRACK_MODIFICATIONS': False,
})
db.init_app(app)
Migrate(app, db)

#  20221208_154737