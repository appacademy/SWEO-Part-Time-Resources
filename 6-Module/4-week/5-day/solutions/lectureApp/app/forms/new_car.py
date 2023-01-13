from app import dbfuncs
from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, IntegerField, SelectField
from wtforms.validators import ValidationError, DataRequired

import datetime

def validate_year(form, field):
   # add custom validator that makes sure year is between 1910 and 2024
   year = datetime.date.today().year + 1
   if field.data > year or field.data < 1910:
      raise ValidationError(f"Please choose a year between 1910 and {year}")

class NewCarForm(FlaskForm):
    # add validators!
   owners = dbfuncs.get_all_owners()
   owner_ids = [id for id, name, last, em in owners]
   manu_year = IntegerField("Manufacture Year", [DataRequired(), validate_year])
   make = StringField("Make", [DataRequired()])
   model = StringField("Model", [DataRequired()] )
   owner_id = SelectField("Owner ID", [DataRequired()], choices=owner_ids)
   submit = SubmitField("ADD NEW CAR!")
