# Week 35 Study Guide

## Flask App Setup For Project
1. Install flask
``
pipenv install flask
``
2. Create a folder for app with `__init__.py`
3. Import Flask into the file you created in the folder
``
from flask import Flask
``
4. Add `.flaskenv` which sets up publicly visible env variables for our app
``
FLASK_APP=app
FLASK_ENV=development
``
5. Install python-dotenv to load environment variables into the app configuration
``
pipenv install python-dotenv
``
6. Run app!
``
pipenv run flask run
``

### Add Routes
* We use the `@route` decorator to turn a function into a route that exists on our application.
``
@app.route("/")
def index():
    return "Welcome to our app"
``

### Adding a secret key
* Use .env for secretive variables
``
SECRET_KEY
``

### Making a Config class
* Get the secret values from your `.env` and define a `Config` class which has all of the values you want to incorporate into your app.
``
import os
class Config():
    SECRET_KEY = os.environ.get('SECRET_KEY')
``
* Then incorporate these values into your application using the the `config.from_object method`.

## SQLite3
* Python has a built in module named `sqlite3` which allows us to connect directly to a SQLite3 database file from Python.
* We will use the  `with`  keyword to manage our database connections with  `sqlite3`.
* Sqlite3 and Python do not have a one-to-one correspondence of all data types
### Set up SQLite3
1.  Import the  `sqlite3`  package at the top of your file.
``
import sqlite3
``
2.  Create a new database to connect to in the terminal.
``
sqlite3 dev.db
``
3.  Set up your connection parameters (file name for the SQLite3 database).
``
DB_FILE = "dev.db"
``
4.  Open a connection to the database. Use the  `with`  keyword, and the  `connect`  method on  `sqlite3`:
``
with sqlite3.connect(DB_FILE) as conn:
``
5.  Open a "cursor" to perform data operations.
``
with sqlite3.connect(DB_FILE) as conn:
    curs = conn.cursor()
``
6.  With our cursor, we can use the  `execute`  method to run a SQL command:
``
with sqlite3.connect(DB_FILE) as conn:
    curs = conn.cursor()
    curs.execute(
            """
            CREATE TABLE jokes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            joke_body VARCHAR(250),
            punchline VARCHAR(250),
            rating VARCHAR(15)
            );
            """
    )
``

### Executing SQL with  `sqlite3`
* After executing a command, we can fetch the results using the  `fetchone`  or  `fetchall`  methods on the cursor.
	*   `fetchone()`  will return a tuple of the first matched record
	*   `fetchall()`  will return a list of tuples of all matching records

## Template Jinja
* Jinja is an HTML templating language
* Add the Jinja package to your application (Optional, flask comes with Jinja as a dependency)
       ``pipenv install Jinja2``
*   Flask looks for HTML templates in the  `templates`  folder inside the  `app`  package
    -   Create a  `templates`  folder within your application
    -   In  `templates`, create HTML files that you would like your routes to render

### Rendering Templates
*   In your app, import  `render_template`  from  `flask`.
    *   `render_template`  renders an HTML page using the Jinja template engine
*   Instead of returning HTML strings directly, call  `render_template`, passing the name of the HTML file you would like to render
```
@app.route('/')
def index():
	return render_template('index.html')
```
* Objects are passed as kwargs, where the key is the name of the item referenced in the HTML file, and the value is the object itself from the route.
```
@app.route('/')
def index():
    return render_template('index.html', display_item=value)
```

### Accessing Objects and Evaluating Code
*   In our HTML files, we use  `{{ display_item }}`  to access objects that were passed in as kwargs to  `render_template`
*   We use the  `{% %}`  syntax to evaluate code within an HTML file
```
{% for x in items %}
{% endfor %}
```

### Extending and Including Content
* We can use  `extends`  to reuse a base template in other HTML files:
```
{% extends "base.html" %}
```
* The base template can include a placeholder for content from other HTML files:
```
{% block content %} {% endblock %}

```
* Our other HTML files use the same tags to fill in that content.
* We can reuse small templates with  `include`:
```
{% include "other_template.html" %}
```

## Routing with Flask Blueprints
* Blueprints allow us to organize our code by breaking our routes into individual components, much like Routers did for us in Express.

### Creating a Blueprint
*   Import the Blueprint package from Flask:  `from flask import Blueprint`
*   Construct a Blueprint with the following arguments:
    *   A name for the Blueprint
    *   The name of the file where it is defined (use  `__name__`  to use the current file name)
    *   A  `url_prefix`, which will be prepended to all routes associated with this Blueprint
```
from flask import Blueprint
books_router = Blueprint('books', __name__, url_prefix='/books')
```

### Use the Flask Blueprint to make routes

*   The  `@blueprint_name.route`  decorator allows us to define routes to associate with our Blueprint
    *   Exactly like we would use it for the base  `app`  routes in our main file
```
from flask import Blueprint
books_router = Blueprint('books', __name__, url_prefix='/books')
@books_router.route('/')
def book_index():
    # Show all the books
```
* Register a blueprint on an application at a URL prefix and/or subdomain. Parameters in the URL prefix/subdomain become common view arguments (with defaults) across all view functions in the blueprint.
### Register the Flask Blueprint with the Flask application
*   To connect our Blueprint to our app, we import the module that it is defined in.
*   Invoke the app's  `register_blueprint`  method with a reference to the Blueprint instance as an argument.
```
from flask import Flask
from book_app.routes import books_router # assuming we have a __init__.py in routes

app = Flask(__name__)
app.register_blueprint(books_router)
```

### Flask Route Params
* Parameters can be used when creating routes. A parameter can be a string (text) like this: `/product/cookie`
* When defining our route, values within carrot brackets `<>` indicate a variable; this enables routes to be dynamically generated. Variables can be type-checked by adding a colon, followed by the data type constraint.
```python
@app.route('/<int:year>/<int:month>/<title>')
```

## Flask Decorators
* https://flask.palletsprojects.com/en/1.1.x/api/
* Use the link above to search for decorators as there are a lot to cover and is better to use the search integrated into it

# Flask Sessions
* Allows us to save data across sessions
	*    Similar to local & session storage in the browser
* To get a value, use  `session.get('key_name')`
	*  You can also simply key in like you would a dictionary
	*  `session['key_name']`
* To set a value, simply use a key/value pair assignment like you would a dictionary
* To remove a value, use  `session.pop('key_name', default_value)`

## WTForms
### Creating Forms with WTForms
* You must have a SECRET_KEY in your app configuration for CSRF token validation to be successful
1. First create a directory for forms with a `__init__.py`
2. Install wtfforms and flask-wtf
`pipenv install wtforms flask-wtf`
3. Import at the top of file
`from flask_wtf import FlaskForm`
4. Define form classes in the forms module, it inherits from  `FlaskForm`
```
class NewBookForm(FlaskForm):
	code
```

### Handling Get and Post Routes
* In our app, we can handle:
	*   `GET`  request for the form
	*   `POST`  request with valid data
	*   `POST`  request with invalid data
	*
### GET Route (Example)
```
@books_router.route('/new_book', methods=["GET"])
def add_book():
    form = NewBookForm()

    return render_template("new_book.html", form=form)
```

### Form Error handling
* Invoking `validate_on_submit` on our form instance will return `True` if the `POST` had no validation error.
	*  Once validated we can use  `form.data`  to access the data dictionary
*   If the form was  `POST`ed with errors,  `validate_on_submit`  will return  `False`
    *   If not validated we can key into  `form.errors`  to access the errors dictionary
