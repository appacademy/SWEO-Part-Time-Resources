from flask import Flask
from flask_wtf import FlaskForm
from wtforms.fields import StringField, DateField, TimeField, TextAreaField, BooleanField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from datetime import datetime
class AppointmentForm(FlaskForm):

    def validate_end_date(form, field):
        start =  datetime.combine(form.start_date.data, form.start_time.data),
        end =  datetime.combine(field.data, form.end_time.data),
        if start >= end:
            raise ValidationError('the start date must come before or on the end date')


    name = StringField('name', validators=[DataRequired()])
    start_date = DateField('Start Date', validators=[DataRequired()])
    start_time = TimeField('start time', validators=[DataRequired()])
    end_date = DateField('End Date', validators=[DataRequired()])
    end_time = TimeField('End time', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    private = BooleanField('private')
    submit = SubmitField('Submit')