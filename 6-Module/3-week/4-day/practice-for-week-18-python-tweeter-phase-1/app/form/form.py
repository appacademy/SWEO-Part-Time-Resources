from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, EqualTo

class TweetForm(FlaskForm):
    author = StringField("Author", validators=[DataRequired()])
    tweet = StringField("Tweet", validators=[DataRequired()])
    submit = SubmitField("Create Tweet")

# from flask_wtf import FlaskForm
# from wtforms import StringField, SubmitField
# from wtforms.validators import DataRequired, EqualTo

# class TweetForm(FlaskForm):
#     author = StringField("Author", validators=[DataRequired(), EqualTo('dog', message='Author and Tweet must match')])
#     tweet = StringField("Tweet", validators=[DataRequired()])
#     submit = SubmitField("Create Tweet")
