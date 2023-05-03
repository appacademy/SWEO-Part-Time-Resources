from flask_wtf import FlaskForm
from wtforms import (
    BooleanField, DateField, StringField, SubmitField, TextAreaField, TimeField
)
from wtforms.validators import DataRequired, ValidationError
from datetime import datetime, timedelta 

# used for setting intial values on form
from wtforms.widgets import DateInput, TimeInput

validators = [DataRequired()]

# function that finds the next available appointment block in 15 min increment
def next_block(delta=0):
    def time():
        now = datetime.now()
        return now - timedelta(minutes=now.minute % 15 - delta - 15,
                               seconds=now.second)
    return time
# config dicts for initial values inputs for date and time, sent as **kwargs
## default date to today
initial_date = {'default': datetime.now, 'widget': DateInput()}
## default start time to next 15m timeblock
initial_start_time = {'default': next_block(), 'widget': TimeInput()}
## default end to 60m after start
initial_end_time = {'default': next_block(60), 'widget': TimeInput()}

class AppointmentForm(FlaskForm):
    name = StringField("Name", validators)
    start_date = DateField("Start date", validators, **initial_date)
    start_time = TimeField("Start time", validators, **initial_start_time)
    end_date = DateField("End date", validators, **initial_date)
    end_time = TimeField("End time", validators, **initial_end_time)
    description = TextAreaField("Description", validators)
    private = BooleanField("Private?")
    submit = SubmitField("Create an appointment")

    def validate_end_date(form, field):
        start = datetime.combine(form.start_date.data, form.start_time.data)
        end = datetime.combine(field.data, form.end_time.data)
        if start >= end:
            msg = "End date/time must come after start date/time"
            raise ValidationError(msg)
        if form.start_date.data != form.end_date.data:
            msg = "End date must be the same as start date"
            raise ValidationError(msg)
