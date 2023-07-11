from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired


class LoginForm(FlaskForm):
    employee_number = StringField("Employee number", validators=[DataRequired()])
    password = PasswordField("Passoword", validators=[DataRequired()])
    submit = SubmitField("Login")

