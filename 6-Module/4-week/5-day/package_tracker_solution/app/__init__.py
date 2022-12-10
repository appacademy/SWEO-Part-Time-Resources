from flask import Flask
from .config import Configuration
from .routes import package
from flask_migrate import Migrate
from .models import db


app = Flask(__name__)
app.config.from_object(Configuration)
app.register_blueprint(package.bp)
db.init_app(app)
migrate = Migrate(app, db)


# @app.route('/')
# def index():
#     return "<h1>Package Tracker</h1>"