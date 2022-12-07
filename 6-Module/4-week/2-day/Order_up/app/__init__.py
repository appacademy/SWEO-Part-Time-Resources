from flask import Flask
from .config import Configuration
from .routes import orders
from .models import db
# from .routes.orders import bp


app = Flask(__name__)
app.config.from_object(Configuration)
app.register_blueprint(orders.bp)
db.init_app(app)