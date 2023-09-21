from flask import Flask, render_template, redirect

from .cats import cats
from .routes.cat_routes import cats_bp
# from app.config import Config
from .config import Config

# print("__name__ result:", __name__)
app = Flask(__name__)

app.config.from_object(Config)
app.register_blueprint(cats_bp, url_prefix='/cats')

@app.route("/")
def index():
    return render_template("base.html")

@app.route("/redirect")
def redirecter():
    return redirect("/cats")
