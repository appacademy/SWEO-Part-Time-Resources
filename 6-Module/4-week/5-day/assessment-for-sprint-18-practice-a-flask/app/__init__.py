from flask import Flask
print("in app/__init__.py START")
from flask_migrate import Migrate
from .config import Configuration
from .models import db
from .routes import simple, cool

a = 5+5
print("random math", a)

print("in app/__init__.py Middle")
app = Flask(__name__)
app.config.from_object(Configuration)
app.register_blueprint(simple.bp)
app.register_blueprint(cool.bp)
db.init_app(app)
Migrate(app, db)
print("in app/__init__.py END")
