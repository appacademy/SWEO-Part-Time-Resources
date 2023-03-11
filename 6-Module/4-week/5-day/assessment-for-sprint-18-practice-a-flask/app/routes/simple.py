# from flask import Blueprint, render_template, redirect, request

# from ..forms import SimpleForm
# from ..models import db, SimplePerson

# bp = Blueprint("simple_person", __name__)

# @bp.route("/")
# def main():
#     return render_template("main_page.html")

# @bp.route("/simple-form", methods=["GET", "POST"])
# def simple_form():
#     form = SimpleForm()

#     if request.method == "POST":
#         if form.validate_on_submit():
#             person = SimplePerson()
#             form.populate_obj(person)
#             db.session.add(person)
#             db.session.commit()
#             return redirect("/")
#         else:
#             return "Bad Data"

#     return render_template("simple_form.html", form=form)

# @bp.route("/simple-form", methods=["POST"])
# def simple_form_data():
#     form = SimpleForm()

#     if form.validate_on_submit():
#         person = SimplePerson()
#         form.populate_obj(person)
#         db.session.add(person)
#         db.session.commit()
#         return redirect("/")
    
#     return "Bad Data"

# @bp.route("/simple-form-data")
# def simple_data():
#     # people = SimplePerson.query.filter(SimplePerson.name.like("M%")).all()
#     people = db.session.execute(db.select(SimplePerson).filter(~SimplePerson.name.like("M%"))).scalars()

#     return render_template("simple_form_data.html", people=people)