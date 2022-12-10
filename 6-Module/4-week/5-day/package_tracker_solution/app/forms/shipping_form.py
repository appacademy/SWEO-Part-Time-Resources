from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, BooleanField, SubmitField
from wtforms.validators import DataRequired
from ..map.map import map # from app.map import map

# cities  = list(map.keys())
# cities = [city_name for city_name in map.keys()]
cities = [(city_name, city_name) for city_name in map.keys()]


class ShippingForm(FlaskForm):
    sender_name = StringField("Name of sender" ,validators=[DataRequired()])
    recipient_name = StringField("Name of recipient" ,validators=[DataRequired()])
    origin = SelectField("Origin", choices=cities ,validators=[DataRequired()])
    destination = SelectField("Destination", choices=cities ,validators=[DataRequired()])
    express = BooleanField("Make this an express package")
    submit = SubmitField("Send my package!")
    cancel = SubmitField("Cancel")