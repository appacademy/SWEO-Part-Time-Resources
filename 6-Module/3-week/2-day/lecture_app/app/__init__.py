from app.config import Config
from flask import Flask, render_template
# from .cats import cats
from app.cats import cats

app = Flask(__name__)

print("list of cats", cats)

app.config.from_object(Config)
# print("__name__ result:", __name__)

@app.route("/")
def index():
    return render_template("base.html")

@app.route("/cats")
def all_cats():
    return render_template("cats.html", cats=cats)

@app.route("/new-cat")
def new_cat():
    return render_template("new-cat.html")

@app.route("/create-cat", methods=["POST"])
def create_cat():
    return "<h1> Successfully Created </h1>"
