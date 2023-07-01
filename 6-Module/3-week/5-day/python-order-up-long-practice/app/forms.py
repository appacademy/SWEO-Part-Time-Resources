from flask_wtf import FlaskForm
from wtforms.fields import (
    PasswordField, SelectField, SelectMultipleField, StringField, SubmitField
)
from wtforms.validators import DataRequired


class LoginForm(FlaskForm):
    employee_number = StringField("Employee number", [DataRequired()])
    password = PasswordField("Password", [DataRequired()])
    submit = SubmitField("Login")


class MenuItemAssignmentForm(FlaskForm):
    menu_item_ids = SelectMultipleField("Menu items", coerce=int)


class TableAssignmentForm(FlaskForm):
    assign = SubmitField("Assign")
    employees = SelectField("Servers", [DataRequired()], coerce=int)
    tables = SelectField("Tables", [DataRequired()], coerce=int)
