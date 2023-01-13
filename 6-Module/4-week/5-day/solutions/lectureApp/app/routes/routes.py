from flask import Blueprint, redirect, render_template, session

# don't forget to import your new form once its created!
from app import dbfuncs
# import session!
from app.forms import ChangeOwner, NewCarForm, NewOwnerForm

from app.models.db import Owner, Car, db

app_routes = Blueprint("app", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@app_routes.route('/')
def home():
    # add session info to track the number of visits to the homepage!
    info = {
        "title": "CARS CARS CARS",
        "header": "THIS IS THE CARS HOME PAGE!"
    }
    if "home_views" in session:
        session["home_views"] = session["home_views"] + 1
    else:
        session["home_views"] = 1
    cars = dbfuncs.get_cars_with_owners()
    owners = dbfuncs.get_all_owners()
    return render_template("page.html", cars=cars, info=info, owners=owners)


@app_routes.route('/test')
def test():
    info = {
        "title": "Test page",
        "header": "This is the test page"
    }
    return render_template('page.html', info=info)


@app_routes.route('/form', methods=('GET', 'POST'))
def form():
    # Add session info to keep track of how many cars get added!
    form = NewCarForm()
    errors = []
    if form.validate_on_submit():
        if "new_cars" in session:
            session["new_cars"] = session["new_cars"] + 1
        else:
            session["new_cars"] = 1
        dbfuncs.add_new_car(form.manu_year.data, form.make.data,
                            form.model.data, form.owner_id.data)
        return redirect("/")
    elif len(form.errors) > 0:
        errors = validation_errors_to_error_messages(form.errors)
    info = {
        "title": "NEW CAR FORM!",
        "header": "ADD A NEW CAR 😎"
    }
    cars = dbfuncs.get_cars_with_owners()
    owners = dbfuncs.get_all_owners()
    return render_template("page.html", info=info, cars=cars, owners=owners, form=form, errors=errors)


@app_routes.route("/change-owners", methods=('GET', 'POST'))
def change():
    # add session info to see how many times cars change owners!
    form = ChangeOwner()
    if form.validate_on_submit():
        if "cars_swapped" in session:
            session["cars_swapped"] = session["cars_swapped"] + 1
        else:
            session["cars_swapped"] = 1
        dbfuncs.change_car_owner(
            car_id=form.car_id.data, new_owner_id=form.owner_id.data)
        return redirect("/")
    cars = dbfuncs.get_cars_with_owners()
    owners = dbfuncs.get_all_owners()
    info = {
        "title": "CHANGE OWNER FORM!",
        "header": "CHANGE A CAR'S OWNER 😎"
    }
    return render_template("page.html", cars=cars, owners=owners, info=info, owner_form=form)


@app_routes.route("/add-owner", methods=('GET', 'POST'))
def new_owner():
    # Build the new owner route!
    form = NewOwnerForm()
    errors = []
    print(session.get("owners_added"), " owners have been added so far!")
    if form.validate_on_submit():
        if "owners_added" in session:
            session["owners_added"] = session["owners_added"] + 1
        else:
            session["owners_added"] = 1
        data = {
                k:v for k, v in form.data.items()
                if k != "submit" and k !=  "csrf_token"
                }
        dbfuncs.add_new_owner(**data)
        return redirect("/")
    elif len(form.errors) > 0:
        errors = validation_errors_to_error_messages(form.errors)
    info = {
        "title": "NEW OWNER FORM!",
        "header": "ADD A NEW OWNER 😎"
    }
    return render_template('page.html', info=info, errors=errors, new_owner_form=form)
    pass

# SQLALchemy demo routes

@app_routes.route('/owners', methods=['GET'])
def get_owners():
    owners = Owner.query.order_by(Owner.first_name.desc()).all()
    print(owners)
    return render_template('owners.html', owners=owners)

@app_routes.route('/cars', methods=['GET'])
def get_cars():
    cars = Car.query.all()
    print(cars)
    return render_template('cars.html', cars=cars)

@app_routes.route('/cars/<int:id>')
def get_single_car(id):
    car = Car.query.get(id)
    print(car)
    return render_template('car-details.html', car=car)

@app_routes.route('/owners/<int:id>')
def get_single_owner(id):
    owner = Owner.query.get(id)
    print(owner)
    return render_template('owner-details.html', owner=owner)

@app_routes.route('/search/<first_name>')
def get_owner_by_first_name(first_name):
    owner = Owner.query.filter(Owner.first_name == first_name).first()
    print(owner)
    return render_template('owner-details.html', owner=owner)

@app_routes.route('/owners/add', methods=['GET', 'POST'])
def add_owner():
    form = NewOwnerForm()
    if form.validate_on_submit():
        first_name = form.first_name.data
        last_name = form.last_name.data
        email = form.email.data
        owner = Owner(first_name=first_name, last_name=last_name, email=email)
        db.session.add(owner)
        db.session.commit()
        return redirect('/owners')
    return render_template('newowner.html', new_owner_form=form)
