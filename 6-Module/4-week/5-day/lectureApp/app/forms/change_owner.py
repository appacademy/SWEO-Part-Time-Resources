from flask_wtf import FlaskForm
from wtforms import SubmitField, SelectField
from wtforms.validators import DataRequired
from app import dbfuncs

class ChangeOwner(FlaskForm):
    owners = dbfuncs.get_all_owners()
    owner_ids = [id for id, name, last, em in owners]
    cars = dbfuncs.get_all_cars()
    car_ids = [id for id, man, yr, mod, make in cars]
    car_id=SelectField("Car ID", [DataRequired()], choices=car_ids, default="Please select" )
    owner_id = SelectField("Owner ID",[DataRequired()], choices=owner_ids, default="Please select")
    submit = SubmitField("CHANGE OWNER!")
