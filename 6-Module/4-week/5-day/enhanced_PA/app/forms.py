from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired


class SimpleForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    age = IntegerField("Age")
    bio = TextAreaField("Biography")
    birth_day = DateField("Birthday")
    fav_language = SelectField("Favorite language", choices=["JavaScript", "Python", "HTML", "CSS"])
    submit = SubmitField("Submit")
