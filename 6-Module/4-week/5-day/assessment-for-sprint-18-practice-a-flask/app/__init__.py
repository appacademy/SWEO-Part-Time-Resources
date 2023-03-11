from flask import Flask, render_template, redirect
from flask_migrate import Migrate

from .forms import SimpleForm
from .config import Configuration
from .models import db, SimplePerson
from .routes import simple

# Initialize app
app = Flask(__name__)

# Configure app with env variables
app.config.from_object(Configuration)

# Connect blueprints if defined
app.register_blueprint(simple.bp)

# Connect SQLAlchemy to app
db.init_app(app)

# Connect flask-migrate to app
Migrate(app, db)

# Routes can be defined in routes folder as Blueprints
@app.route("/")
def main():
    return render_template("main_page.html")

@app.route("/simple-form")
def simple_form():
    form = SimpleForm()

    return render_template("simple_form.html", form=form)

@app.route("/simple-form", methods=["POST"])
def simple_form_data():
    form = SimpleForm()

    if form.validate_on_submit():
        person = SimplePerson()
        form.populate_obj(person)
        db.session.add(person)
        db.session.commit()
        return redirect("/")
    
    return "Bad Data"

@app.route("/simple-form-data")
def simple_data():
    # people = SimplePerson.query.filter(SimplePerson.name.like("M%")).all()                             # legacy syntax
    people = db.session.execute(db.select(SimplePerson).filter(~SimplePerson.name.like("M%"))).scalars() # newer syntax

    return render_template("simple_form_data.html", people=people)
