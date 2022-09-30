from flask_wtf import FlaskForm
from wtforms.fields import (
    StringField,
    DateField,
    TimeField, 
    TextAreaField,
    BooleanField,
    SubmitField
)
from wtforms.validators import DataRequired, ValidationError
from datetime import datetime

class AppointmentForm(FlaskForm):

    def validate_end_date(form, field):
        start = datetime.combine(form.start_date.data, form.start_time.data)
        end = datetime.combine(field.data, form.end_time.data)
        if start >= end:
            msg = "End date/time must come after start date/time"
            raise ValidationError(msg)


    name = StringField('name', validators=[DataRequired(message="a name is required")])
    start_date = DateField('Start Date', validators=[DataRequired()])
    start_time = TimeField('Start Date', validators=[DataRequired()])
    end_date = DateField('End Date', validators=[DataRequired()])
    end_time = TimeField('End Date', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    private = BooleanField('Priavte?')
    submit = SubmitField('Submit')