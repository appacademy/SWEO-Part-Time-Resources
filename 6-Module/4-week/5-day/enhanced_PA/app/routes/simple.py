from flask import Blueprint, render_template, redirect
from ..forms import SimpleForm
from ..models import db, SimplePerson


bp = Blueprint("simple", __name__, "")


@bp.route('/')
def home_page():
    return render_template("main_page.html")


@bp.route('/simple-form')
def simple_form():
    form = SimpleForm()
    
    return render_template("simple_form.html", form=form)


# new_person = SimplePerson(
#                         name=form.data['name'], 
#                         age=form.data['age'], 
#                         bio=form.data['bio']
#                     )

@bp.route('/simple-form', methods=["POST"])
def simple_form_post():
    form = SimpleForm()
    
    if form.validate_on_submit():
        new_person = SimplePerson()
        
        form.populate_obj(new_person)
        
        db.session.add(new_person)
        db.session.commit()
        
        return redirect('/')
    
    return "Bad Data"


@bp.route('/simple-form-data')
def simple_form_data():
    people = SimplePerson.query.filter(SimplePerson.name.ilike("M%")).all()
    return render_template("simple_form_data.html", people=people)