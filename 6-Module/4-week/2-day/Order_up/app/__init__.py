from flask import Flask
from .config import Configuration
from .routes import orders
from .models import db

app = Flask(__name__)
app.config.from_object(Configuration)
app.register_blueprint(orders.bp)
db.init_app(app)