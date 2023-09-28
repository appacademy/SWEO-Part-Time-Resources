from app.config import Config
from flask import Flask, render_template, redirect
# from .cats import cats
from app.cats import cats
from .routes.cat_router import cats_bp
from .models import db

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
# print("__name__ :", __name__)

app.register_blueprint(cats_bp)

# print("list of cats", cats)

# print("__name__ result:", __name__)

@app.route("/")
def index():
    return render_template("base.html")

@app.route("/redirect")
def redirecter():
    return redirect("/cats/")
