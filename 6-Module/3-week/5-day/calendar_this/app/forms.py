from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    DateField,
    TimeField,
    TextAreaField,
    BooleanField,
    SubmitField)
from wtforms.validators import DataRequired, ValidationError
from datetime import datetime


class AppointmentForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    start_date = DateField("Start Date", validators=[DataRequired()])
    start_time = TimeField("Start Time", validators=[DataRequired()])
    end_date = DateField("End Date", validators=[DataRequired()])
    end_time = TimeField("End Time", validators=[DataRequired()])
    description = TextAreaField(
        "Description", validators=[
            DataRequired()])
    private = BooleanField('Private?')
    submit = SubmitField("Create an appointment")

    def validate_end_date(form, field):
        start = datetime.combine(
            form.start_date.data,
            form.start_time.data)
        end = datetime.combine(
            # form.end_date.data,
            field.data,
            form.end_time.data)

        if start >= end:
            raise ValidationError(
                "End date/time must come after start date/time")

        if form.start_date.data != form.end_date.data:
            raise ValidationError(
                "The end date must be the same as the start date")
