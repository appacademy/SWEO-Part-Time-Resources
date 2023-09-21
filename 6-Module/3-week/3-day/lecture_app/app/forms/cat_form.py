from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class CatForm(FlaskForm):
    name = StringField('Name:', validators=[DataRequired()])
    breed = StringField('Breed:', validators=[DataRequired()])
    weight = FloatField('Weight:', validators=[DataRequired()])
    age = IntegerField('Age:', validators=[DataRequired()])
    submit = SubmitField("Add Cat")