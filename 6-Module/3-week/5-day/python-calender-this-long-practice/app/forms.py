from datetime import datetime, timedelta
from flask_wtf import FlaskForm
from wtforms.fields import (
    BooleanField, DateField, StringField, SubmitField, TextAreaField, TimeField
)
from wtforms.widgets import DateInput, TimeInput
from wtforms.validators import DataRequired, ValidationError


def next_block(delta=0):
    def time():
        now = datetime.now()
        return now - timedelta(minutes=now.minute % 15 - delta - 15,
                               seconds=now.second)
    return time


v = [DataRequired()]
di = {'default': datetime.now, 'widget': DateInput()}
sti = {'default': next_block(), 'widget': TimeInput()}
eti = {'default': next_block(60), 'widget': TimeInput()}


class AppointmentForm(FlaskForm):
    name = StringField("Name", v)
    start_date = DateField("Start date", v, **di)
    start_time = TimeField("Start time", v, **sti)
    end_date = DateField("End date", v, **di)
    end_time = TimeField("End time", v, **eti)
    description = TextAreaField("Description", v)
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
