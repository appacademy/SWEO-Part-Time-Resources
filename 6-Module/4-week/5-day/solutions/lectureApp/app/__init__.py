from app import dbfuncs
from flask_migrate import Migrate

from .models.db import db

try:
    cars = dbfuncs.get_all_cars()
except:
    dbfuncs.seed()

from flask import Flask

from app.routes import app_routes

from .config import Configuration

app = Flask(__name__)

app.config.from_object(Configuration)

app.register_blueprint(app_routes, url_prefix="/")

db.init_app(app)
migrate = Migrate(app, db)
