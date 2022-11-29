from flask import Flask
from .routes import blue  # These are doing the same thing
# from app.routes import blue # These are doing the same thing
import os


app = Flask(__name__)
app.config.update({"SECRET_KEY": os.environ.get('SECRET_KEY')})
app.register_blueprint(blue)