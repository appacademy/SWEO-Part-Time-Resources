from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField
from wtforms.validators import DataRequired

from map.map import map

# Note the comma to make it a tuple
cities = [(city, city) for city in map.keys()]


class ShippingForm(FlaskForm):
    sender_name = StringField('Sender', validators=[DataRequired()])
    recipient_name = StringField('Recipient', validators=[DataRequired()])
    origin = SelectField('Origin',
                         choices=cities,
                         validators=[DataRequired()])
    destination = SelectField('Destination',
                              choices=cities,
                              validators=[DataRequired()])

    submit = SubmitField("Ship It!")
