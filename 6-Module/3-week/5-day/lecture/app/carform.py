# Build a simple form to create a new car!
from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, IntegerField


class NewCarForm(FlaskForm):
    manu_year = IntegerField("Manufacture Year")
    make = StringField("Make")
    model = StringField("Model")
    owner_id = IntegerField("Owner ID")
    submit = SubmitField("ADD NEW CAR!")
