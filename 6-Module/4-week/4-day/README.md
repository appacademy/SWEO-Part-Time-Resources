# Flask Application W/ Jinja, SQLAlchemy, & Alembic Work Guide

## Flask Set Up

* Let's get started with our location to place our new Flask App to be in
1. Install Flask
```Python
pipenv install flask
```
* You will see output in your terminal stating installation in your Pipfile and can activate the virtual environment, you will see the .venv directory and Pipfile related files in your directory!
2. Create a folder for your application, for convention it will be named "app", with a ` __init__.py `file
3. Inside the `__init__.py `file, you will import Flask
```Python
from flask import Flask
```
4. Instantiate a Flask instance
```Python
app = Flask(__name__)
```
* Those curious with dunder name (it is important) dunder `__name__` will automatically pick up the file name.
* In order to start a Flask application, you need to first specify which file to use. We will often use configuration file that way you can set many other environment variables as well.
5. Add a  `.flaskenv`  file. This file sets publicly visible environment variables for your Flask app
```
FLASK_APP=app
FLASK_ENV=development
```
6.  Install python-dotenv to load environment variables into the app configuration
* This is in order for Flask to access the _.flaskenv_ file
```
pipenv install python-dotenv
```
7. Once you have the app setup, you can run your application (make sure you're on your virtual environment)
```
pipenv shell
flask run
```
* Or you can enter pipenv run flask run
* To exit the shell type `exit` inside the terminal

## Flask Configuration

* Every time you start your virtual environment you need to remember to set the `FLASK_APP` environment variable.
* In addition to the  `.flaskenv`  file which contains environment specific (not secret) information, we can use a  `.env`. There are other variables to consider such as a SECRET_KEY, DATABASE_URL, etc... This file contains environment variables we want to keep secret.
8.  In your app folder, create a file called config.py and place your config class
```Python
import os

class Config():
    SECRET_KEY = os.environ.get('SECRET_KEY')
```
9. Then incorporate these values into your application using the the `config.from_object method`.
```Python
from flask import Flask
from .config import Config
app = Flask(__name__)
app.config.from_object(Config)
```

## Jinja
* Jinja is an HTML templating language
* Flask looks for HTML templates in the `templates` folder inside the `app` package
10. Create a  `templates`  folder within your application
11. In  `templates`, create HTML files that you would like your routes to render
* So depending if you got a head start with routes or haven't yet (you can temporarily put routes in `app/__init__.py`) let's prep to render the templates
12. In your app, import  `render_template`  from  `flask`.
* `render_template`  renders an HTML page using the Jinja template engine`
```Python
from  flask  import  Flask, render_template
```
13.  We will use a route decorator and a function to render our jinja file
```Python
@app.route('/')
def index():
	return render_template('index.html')
```
14. To start working with our Jinja, inside the template directory create a html file
15. Inside the html, you will put HTML in there followed with access objects that were passed in as kwargs to `render_template` IF ANY.  Syntax is: `{{ display_item }}` (THIS IS AN EXAMPLE)
16.  Start your shell if you haven't, go ahead and test the route to see if it renders the jinja. (once tested can leave that route there or remove it)

## Routing With Flask Blueprint
* Blueprints allow us to organize our code by breaking our routes into individual components, much like Routers did for us in Express.
* We will get started on creating a Blueprint for our Flask App
17. Depending on where you wish to set up, you can integrate in the `app/__init__.py` or create a `routes` directory in the app directory and have files corresponding different routes upon a feature. Now import the Blueprint package from Flask into the file
```Python
# routes/books.py
Import the Blueprint package from Flask
```
18. Construct a Blueprint with the following arguments:
    -   A name for the Blueprint
    -   The name of the file where it is defined (use  `__name__`  to use the current file name)
    -   A  `url_prefix`, which will be prepended to all routes associated with this Blueprint (EXAMPLE BELOW)
```Python
books_router = Blueprint('books', __name__, url_prefix='/books')
```
19. Make a route with  `@blueprint_name.route`  decorator, allows us to define routes to associate with our Blueprint
* Now let us register the Flask Blueprint with the Flask application
20. In our `app/__init__.py`, to connect our Blueprint to our app, we import the module that it is defined in.
21. Invoke the app's  `register_blueprint`  method with a reference to the Blueprint instance as an argument.
```Python
app.register_blueprint(blueprint)
```

## Form Class
* You must have a SECRET_KEY in your app configuration for CSRF token validation to be successful
22. Create a forms directory and initialize it as a module with a  `__init__.py` or any file name of your choice
23. Install wtforms  and flask-wtf
```
pipenv install wtforms flask-wtf
```
24. Inside the file you're going to create Form, import FlaskForm
```
from flask_wtf import FlaskForm
```
25. Define your form classes
* Form classes will inherit from  `FlaskForm`

## Form View
26.  Add your form to a jinja of your choice, make sure you add `{{ form.csrf_token }}` in the form
27. Go to your routes that display the form, import the new form class and send it into the template as the `form` argument. (EXAMPLE BELOW)
```Python
from app.sample_form import SampleForm
```

## Handle Posts
28. Go create routes that will handle the method to post to the form class, or you can go to your route that `GET` the form page and integrate the `method` kwargs to do both `GET` & `POST` (EXAMPLE BELOW)
```Python
@app.route('/form', methods=['GET', 'POST'])
def form():
    # instantiate form
    form = SampleForm()
    # send form into Jinja template (with form=form)
    return render_template('form.html', form=form)
```

## Handling form submission
* `validate_on_submit` can be used to determine what to do.
29. When handling a post route, add `validate_on_submit` as it gathers up all the form data and processes it through the provided validators (EXAMPLE BELOW)
```Python
if form.validate_on_submit():
        return 'Submit complete'
```
* If you want a user to be redirected after submission here are the next steps
30. In your file that handles the routes that you're working on, import redirect
```
from flask import (Flask, render_template, redirect)
```
31. Implement a return redirect(path) to the route within that if statement of validate on submit (if needed)

## Set up SQLAlchemy
32. Install sqlalchemy and flask-sqlalchemy
```
pipenv install sqlalchemy flask-sqlalchemy
```
33. Create your database
```
sqlite3 dev.db
```
34. Add a DATABASE_URL to your `.env`
```
DATABASE_URL=sqlite:///dev.db
```
35. Modify your config class.
	a. Add a class variable called `SQLALCHEMY_DATABASE_URI`, and set the value to the `DATABASE_URL` from your environment
	b. Add a class variable called `SQLALCHEMY_TRACK_MODIFICATIONS` and set the value. This will turn off a Flask-SQLAlchemy feature that signals our app everytime a change is made to db objects.
```
SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
SQLALCHEMY_TRACK_MODIFICATIONS = False
```
36. Depends on how you want to go with this, Create a models folder with a **init**.py and db.py files inside it, and then in the db.py file instantiate a `SQLAlchemy` object from `flask_sqlalchemy` OR create a models.py  instantiate a `SQLAlchemy` object from `flask_sqlalchemy`
```
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
```
37. Import the  `db`  instance into the file where you are defining your app. (EXAMPLE BELOW)
```Python
from app.models import db
db.init_app(app)
```
* Now let's create our models!
38. Wherever you initialized SQLAlchemy object, create your model class which inherits from the `db.Model` class (Example)
```Python
db = SQLALchemy()
class Book(db.Model):
    __tablename__ = "books"
```
39. Add columns to your models that define the object with Column() (EXAMPLE BELOW)
```Python
class Book(db.Model):
    __tablename__ = "books"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    pages = db.Column(db.Integer, nullable=True)
```
40.  If needed added relationships between the models
41. Time to make a new row in your database, first create a new instance of one of your model classes with app.app_context():
42. After you create your instance, add it to your session and commit it to the database. (Example below)
```Python
new_book = Book(title="Alice in Wonderland")
db.session.add(new_book)
db.session.commit()
```

## Setting Up Flask-Migrate
43. install packages (`alembic` and `flask-migrate`).
```
pipenv install alembic flask-migrate
```
44. Import  `Migrate`  from  `flask_migrate`  and use it to configure your migrations (in the file where you are defining your Flask application).
```Python
# add this to the top of the file with the imports
from flask_migrate import Migrate

# this goes after your app is instantiated
Migrate(app, db)
```
45. Initialize your  local Alembic environment
```
flask db init
```
46. Set up the correct revision file name in the alembic.ini, I would try using the shortcut command in your OS to find the key `file_template` and uncomment it
```
file_template = %%(year)d%%(month).2d%%(day).2d_%%(hour).2d%%(minute).2d%%(second).2d_%%(slug)s
```
47.  Create a migration file.
```
flask db migrate -m "message"
```
* It created a file within the versions directory!
* It autogenerated the entire migration from your mapping file
* When you make changes to your models:
48.  Run migrate to get a new migration script.
```
flask db migrate
```
49.  Run upgrade to apply the changes.
```
flask db upgrade
```
* That's pretty much the workflow to start your Flask app from scratch and applying Jinja, WTForms, Blueprints, SQLAlchemy, and Alembic
