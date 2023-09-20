from flask import Flask, render_template

from .cats import cats
# from app.config import Config
from .config import Config

# print("__name__ result:", __name__)
app = Flask(__name__)

app.config.from_object(Config)

@app.route("/")
def index():
    return render_template("base.html")

@app.route("/cats")
def all_cats():
    return render_template("cats.html", cats=cats)

@app.route("/create-cat")
def new_cat_form():
    return render_template("new-cat.html")

@app.route("/create-cat", methods=["POST"])
def create_cat():
    return "<h1> Created Successfully </h1>"
