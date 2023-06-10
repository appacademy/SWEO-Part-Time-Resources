"""

File is for demo purposes


"""

from flask import Blueprint, redirect, render_template
from ..forms import SimpleForm
from ..models import db, SimplePerson

bp = Blueprint("cool", __name__, url_prefix="/cool")


@bp.route("/")
def main_page():
    return render_template("main_page.html")


@bp.route("/simple-form")
def simple_form():
    form = SimpleForm()
    return render_template("simple_form.html", form=form)


@bp.route("/simple-form", methods=["POST"])
def simple_data():
    form = SimpleForm()
    if form.validate_on_submit():
        data = SimplePerson()
        form.populate_obj(data)
        db.session.add(data)
        db.session.commit()
        return redirect("/")
    print(form.errors)
    return "Bad Data"


@bp.route("/simple-form-data")
def simple_form_data():
    result = SimplePerson.query.filter(SimplePerson.name.like("M%")).all()
    return render_template("simple_form_data.html", result=result)
