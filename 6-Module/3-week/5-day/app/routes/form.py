from flask import Blueprint, render_template, redirect, session
# Let's get session here too!
from app import dbfuncs
# Make sure to import your form!
from app import carform


bp = Blueprint("form", __name__, url_prefix="/form")


@bp.route('/', methods=('GET', 'POST'))
def form():
   # Instantiate your form! Then DO STUFF!
    form = carform.NewCarForm()
    print(form.data)
    if form.validate_on_submit():
        print("+++++++MADE IT TO FORM!!!+++++++++")
        if 'new_cars' in session:
            session['new_cars'] = session['new_cars'] + 1
        else:
            session['new_cars'] = 1
        dbfuncs.add_new_car(form.manu_year.data, form.make.data,
                            form.model.data, form.owner_id.data)
        return redirect("/")
   # If form validates, add a new car to the session!
   # If form validates, add a new car to the DB! (check dbfuncs 👀)
    info = {
        "title": "NEW CAR FORM!",
        "header": "ADD A NEW CAR 😎"
    }
    cars = dbfuncs.get_all_cars()  # RENDER CARS ON FORM!
    owners = dbfuncs.get_all_owners()  # RENDER OWNERS SO THEY KNOW WHO CAN OWN A CAR
    return render_template("page.html", info=info, form=form, cars=cars, owners=owners)
