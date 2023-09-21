from app.config import Config
from flask import Flask, render_template, redirect
# from .cats import cats
from app.cats import cats
from .routes.cat_router import cats_bp

app = Flask(__name__)
# print("__name__ :", __name__)

app.register_blueprint(cats_bp)

# print("list of cats", cats)

app.config.from_object(Config)
# print("__name__ result:", __name__)

@app.route("/")
def index():
    return render_template("base.html")

@app.route("/redirect")
def redirecter():
    return redirect("/cats/")
