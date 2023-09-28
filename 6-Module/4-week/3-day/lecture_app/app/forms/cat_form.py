from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, SubmitField, EmailField
from wtforms.validators import DataRequired

class CatForm(FlaskForm):
    owner_name = StringField("Your Name:", validators=[DataRequired()])
    phone_number = IntegerField("Phone Number:", validators=[DataRequired()])
    email = EmailField("Email:", validators=[DataRequired()])
    cat_name = StringField("Cat's Name:", validators=[DataRequired()])
    cat_breed = StringField("Cat's Breed:", validators=[DataRequired()])
    cat_age = IntegerField("Cat's Age:", validators=[DataRequired()])
    cat_weight = FloatField("Cat's Weight:", validators=[DataRequired()])
    submit = SubmitField("Add Cat")
