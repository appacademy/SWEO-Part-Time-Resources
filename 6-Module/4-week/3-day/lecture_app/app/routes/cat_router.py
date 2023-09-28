import os

# from ..forms.cat_form import CatForm
from app.forms.cat_form import CatForm
from app.models import Cat, Owner, db
from flask import Blueprint, redirect, render_template, request

DB_FILE = os.environ.get("DB_FILE")

cats_bp = Blueprint("cats_routes", __name__, url_prefix="/cats")

@cats_bp.route("/")
def all_cats():
    cats = Cat.query.all()
    return render_template("cats.html", cats=cats)

@cats_bp.route("/new-cat")
def new_cat_form():
    form = CatForm()
    return render_template("new-cat-form.html", form=form)

@cats_bp.route("/create-cat", methods=["POST"])
def create_cat():
    form = CatForm()
    if form.validate_on_submit():
        owner_name = form.data['owner_name']
        phone_number = form.data['phone_number']
        email = form.data['email']
        cat_name = form.data['cat_name']
        cat_breed = form.data.get("cat_breed")
        cat_weight = form.data.get("cat_weight")
        cat_age = form.data.get("cat_age")

        new_owner = Owner(name=owner_name, email=email, phone_number=phone_number)
        new_cat = Cat(name=cat_name, breed=cat_breed, weight=cat_weight, age=cat_age)

        new_owner.cats.append(new_cat)

        db.session.add(new_owner)
        db.session.add(new_cat)

        db.session.commit()
        return redirect("/cats/")
    return {"errors" : form.errors}
