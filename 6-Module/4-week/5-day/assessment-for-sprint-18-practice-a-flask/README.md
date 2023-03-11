# Python Web Practice Assessment

In this assessment, you will create a simple, data-driven Web application using
Python. The tests are provided for you in this project; however, there is no
Pipfile because part of this assessment is for you to initialize and use your
own virtual environment using Pipenv.

During this assessment, you can access the following resources:

* [The Alembic documentation][alembic-docs]
* [The Flask-Migrate documentation][flask-migrate-docs]
* [The Flask-SQLAlchemy documentation][flask-sqlalchemy-docs]
* [The Flask-WTF documentation][flask-wtf-docs]
* [The SQLAlchemy documentation][sqlalchemy-docs]
* [The WTForms documentation][wtforms-docs]
* [The Python documentation][python-docs]

## Getting started

Your application should use a SQLite3 database.

Use Pipenv to install the following dependencies.

* pytest
* pycodestyle
* pylint
* rope
* flask
* flask-sqlalchemy
* alembic
* flask-migrate
* python-dotenv
* sqlalchemy
* wtforms
* flask-wtf

Once you have those installed, activate your virtual environment.

The tests will expect you to store your application's code in an `app/`
directory. Inside the `app/` directory, you will need to

* Create a `__init__.py` file which will contain your Flask app declaration
* Create a `forms.py` file which will contain your form classes
* Create a `models.py` file which will contain your Flask-SQLAlchemy model
  classes.
* Create a `config.py` file which will contain your configuration object

**NOTE:** If you are going to view this application in the browser while you
develop it, you will need to set a `SECRET_KEY` in your configuration. The unit
tests do not require it to be set. There is a reminder, later, to add it when
you'll need it.

## The requirements

For each of the following routes, you need to implement the requirements. These
requirements are what the tests test.

### App location

In the `app/__init__.py` file, create your Flask application. You must name the
variable that holds the Flask application `app`.

You can define the routes wherever you'd like: in their own Blueprints or in the
`app/__init__.py` file. Think of what file you need to import the `app` from the
`app` directory.

### GET "/"

The response from this HTTP request must be of type "text/html" (Flask sets this
for you when you render a template) and contain the following HTML:

```html
<h1>Practice Assessment</h1>
```

### GET "/simple-form"

You must create a form class using Flask-WTF and WTForms. You must define this
in the `app.forms` module. The form class must be named `SimpleForm`. It must
define a form with the following specifications.

| Field name | Label       | Data type to collect   | Validators    |
| ---------- | ----------- | ---------------------- | ------------- |
| name       | "Name"      | string                 | data required |
| age        | "Age"       | integer                |               |
| bio        | "Biography" | multiline, long string |               |
| submit     | "Submit"    | n/a                    |               |

**NOTE:** The bio field is a TEXTAREA!!!

Create a route to handle `GET /simple-form`. In it use the form class you just
defined and render a template containing the form HTML.

The response from this HTTP request must be of type "text/html" (Flask sets this
for you when you render a template) and contain the form fields described above.
The method of the form should be "post" and "/simple-form". It should look
exactly like this.

```html
<form method="post" action="/simple-form">
```

**NOTE:** If you are going to view this in the browser, then you need to do things:

* Don't forget to put the `{{ form.csrf_token }}` value in your form. (The
  `form` variable, there, is whatever you name the form parameter for the
  template.)
* Go ahead and create a class named `Configuration` in `app.config`. Add a
  `SECRET_KEY` value to it. Get that configuration into your application by
  following the instructions in the next section.

### POST "/simple-form"

In the `app.config` module, create a class named `Configuration`. In there,
create an attribute named `SQLALCHEMY_DATABASE_URI` and set it to the value of
`'sqlite:///dev.db'`.

Import your environment variables into app.config.py (We trust that you know how
to use `os.environ.get`)

Notes:
 - If you are going to view this in the browser, add a `SECRET_KEY` attribute to
   the `Configuration` object, as well, and set it to anything.
 - SQLAlchemy will issue a warnings about `SQLALCHEMY_TRACK_MODIFICATIONS`.
   These will not effect your tests passing, and can be ignored.  Alternatively
   you may set it's value to False in your configuration object to address the
   warnings.

Import the `Configuration` class into the `app/__init__.py` file and use it to
configure your Flask application.

Create a mapping class (model) in the `app.models` module named `SimplePerson`.
It must use the table name "simple_people". It must have the following mappings
on it.

 Remember that you will need to construct a `db` object by calling the
 `SQLAlchemy` constructor.  In order to avoid circular dependencies (caused by
 importing from `app`) import `db` into your `app/__init__.py` and call
 `init_app` on it.

| Column name | Data type     | Constraints |
| ----------- | ------------- | ----------- |
| id          | INTEGER       | Primary key |
| name        | VARCHAR(50)   | not null    |
| age         | INTEGER       |             |
| bio         | VARCHAR(2000) |             |

**Note:** The assessment can cover INTEGER, VARCHAR, BOOLEAN, and TEXT types.

Create a migration for this and upgrade your database.

* Create a *separate* route to handle `POST /simple-form`.
* It should take the data from the posted form page (name, age, bio) and use the
  `SimpleForm` validate it
* If the form validates, it should
  * use the `SimplePerson` to insert it into the database using the
  `SimplePerson`
  * redirect to "/".
* If the form does not validate, it should show a message that reads "Bad Data"
  (the content type can be anything, including plain text).

### GET "/simple-form-data"

Create a route to handle `GET /simple-form-data`. In that route, have it query
all of the records from using the `SimplePerson` for where the name begins with
"M". Loop over those records in your view and render them using the following
template.

```html
<-- Your for loop, here -->
<div>{{ person.name }}</div>
<div>{{ person.age }}</div>
<div>{{ person.bio }}</div>
{% endfor %}
```

## The tests

The tests are grouped into two categories: simple and data-driven. The "simple"
tests do not require a database. The "data-driven" tests require you to store
data in a database by creating proper models. The model classes will be
inspected.

### The "simple" tests

These tests will check that the responses have values in the HTML and in your
`SimpleForm` class.

### The "database" tests

These tests will check your `Configuration` class, that those values are put
into your Flask application's `config` object, the model exist in your
`app.models` module, and that your routes handle and show data created in your
application.


[alembic-docs]: https://alembic.sqlalchemy.org/en/latest/
[flask-migrate-docs]: https://flask-migrate.readthedocs.io/en/latest/
[flask-sqlalchemy-docs]: https://flask-sqlalchemy.palletsprojects.com/en/2.x/
[flask-wtf-docs]: https://flask-wtf.readthedocs.io/en/1.0.x/
[sqlalchemy-docs]: https://docs.sqlalchemy.org/en/13/
[wtforms-docs]: https://wtforms.readthedocs.io/en/2.3.x/
[python-docs]: https://docs.python.org/3/index.html