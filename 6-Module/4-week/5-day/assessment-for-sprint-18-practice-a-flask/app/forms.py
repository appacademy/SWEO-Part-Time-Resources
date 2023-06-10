print("in app/forms.py")
from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired


class SimpleForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    age = IntegerField("Age")
    bio = TextAreaField("Biography")
    submit = SubmitField("Submit")
