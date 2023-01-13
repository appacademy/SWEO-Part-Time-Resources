from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, EmailField
from wtforms.validators import ValidationError, DataRequired, Email

def validate_length(form, field):
    # build a custom validator to make sure length is between 1 and 50!
    if len(field.data) < 1 or len(field.data) > 50:
        raise ValidationError("Names must be between 1 and 50 characters")
    pass

# build a new owner form!

class NewOwnerForm(FlaskForm):
    first_name = StringField("First Name", [validate_length])
    last_name = StringField("Last Name", [validate_length])
    email = EmailField("Email", [DataRequired(), Email()])
    submit = SubmitField("ADD NEW OWNER!")
