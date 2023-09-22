from flask import Blueprint, render_template, redirect
from ..cats import cats
from ..forms.cat_form import CatForm

import sqlite3
import os

DB_FILE = os.environ.get("DB_FILE")
cats_bp = Blueprint("cats", __name__)

@cats_bp.route("/")
def all_cats():
    return render_template("cats.html", cats=cats)

@cats_bp.route("/create-cat")
def new_cat_form():
    return render_template("new-cat.html")

@cats_bp.route("/create-cat-form")
def new_cat_flask_form():
    form = CatForm()
    return render_template("new-cat-form.html", form=form)

@cats_bp.route("/create-cat", methods=["POST"])
def create_cat():
    form=CatForm()
    print(form.data)
    if form.validate_on_submit():
        name = form.data['name']
        breed = form.data.get("breed")
        weight = form.data.get("weight")
        age = form.data.get("age")
        # new_cat = {"name": name, "breed": breed, "weight": weight, "age": age}
        # cats.append(new_cat)
        with sqlite3.connect(DB_FILE) as conn:
            curs = conn.cursor()

            sql = """
            INSERT INTO cats (name, breed, weight, age)
            VALUES(:name, :breed, :weight, :age);
            """

            params = {
                "name": name,
                "breed": breed,
                "weight": weight,
                "age": age
            }

            curs.execute(sql, params)

        return redirect("/cats")
    return {"errors": form.errors}, 400
