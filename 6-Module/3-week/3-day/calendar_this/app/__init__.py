from flask import Flask
# from app import routes ## Later say routes.blue
# from app.routes import blue
from .routes import blue
import os

app = Flask(__name__)
app.config.update({"SECRET_KEY": os.environ.get("SECRET_KEY")})
app.register_blueprint(blue)
