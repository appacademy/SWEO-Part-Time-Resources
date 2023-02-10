# Package Tracker

Today, you'll be creating a package tracking site using the technologies you
have learned this week.

When you have completed this project, your application should have the following
features:

1. A package tracking page that allows a user to select a package and view its
   progress from city to city.
2. A form allowing a user to enter the details to ship a new package.
3. A page that allows a user to see all of their packages, and the current
   status of that package.
4. A navigation tool that allows the simulation of the passage of time.
5. A database that stores the status of each package.
6. (Optional) A login page that allows multiple users to individually add and
   track their packages.

## Phase 0: Examine the starter project

There isn't much here yet!  Your colleague has provided a file with some 
utilities that will be useful during this project. You'll be building the rest 
yourself!

## Phase 1: Initial application setup

Begin by installing Flask and confirming that you can run a server.

```bash
pipenv install Flask
```

### Initial setup for Flask

Create a directory named `app` and `__init__.py` inside, and open it.  Import `Flask`
from the package.  You'll be using `render_template` as well, so go ahead and
import it now.

Initialize the **app** using the `__name__` dunder.

To ease the usage of environment variables, install `python-dotenv`.

```bash
pipenv install python-dotenv
```

Create and set up your *.flaskenv*.

```
FLASK_APP=app
```

Create a `.env` file and add a `SECRET_KEY`.  It's best to use a tool to
generate a cryptographic quality key.  Also turn on development mode.

```
SECRET_KEY=replace_with_random_cryptographic_bits
FLASK_ENV=development
```

Load the key using `app.config.from_object` to load a config class.

```python
app.config.from_object(Config)
```

Add a route for the root.  For now, have it display the heading `Package
Tracker`

Run the application and confirm that the root endpoint is reachable.

### Create a form to collect data to ship a package

Install **Jinja** and **Flask-WTF**.

```bash
pipenv install Jinja2
pipenv install Flask-WTF
```

Add a new route for `/new_package` that returns
`render_template('shipping_request.html')`.  Don't forget to enable both **GET**
and **POST** on this endpoint.

In the app folder create a folder called `templates` and add `shipping_request.html` to it.  

In the `app` folder add a file called `shipping_form.py`.  Create a class
for your form with the following elements.  

As appropriate in each new document, build a class extending `FlaskForm` and set
up the form to handle `wtforms` inputs for the following:

* `StringField` for the name of the sender
* `StringField` for the name of the recipient
* `SelectField` for the origin (see below)
* `SelectField` for the destination (see below)
* `BooleanField` indicating if express shipping is desired
* A submit button and a cancel button

It's up to you to research and learn how to implement a `SelectField`.  You can
get a dictionary of the cities to use from the `map.py` file included in the
starter.

```python
from map.map import map
```

HINT: You'll need to do some processing here.  `SelectField` expects either a 
list of **tuples** in the format `(value, text)` or a list of **strings**. Note 
that under the hood the `SelectField` will use the value of the string as both 
the `value` and the `text`, so the tuple comes in handy when you want them to be 
different.

ALSO NOTE: Any origin can go to any destination.  The value side of the 
key-value pair is used for a progression algorithm later in the project.

Import `DataRequired` from `wtforms.validators` and use it to make all fields
mandatory.

Back in your `/new_package` route, import and create an instance of your form 
class and pass it to your jinja template, `shipping_request.html`. Open your 
template and write your form. (Hint: reference the form from the Order Up 
project if you want a guide)

On a successful post, this route should **redirect** the user to the root 
endpoint. You'll add a display there later to track packages.

## Phase 2: Adding a database

Your app can now collect data from a user, but this data doesn't go anywhere.
You need to add a database to store this information and later serve to the user
when they request an update on their package.

### Install dependencies

Begin by installing **SQLAlchemy** and **Flask-SQLAlchemy**

```bash
pipenv install SQLAlchemy Flask-SQLAlchemy
```

### Create a database

Your database will live in a file called **dev.db**.

You will need to add a table called `packages` with the following fields:

| Column Name | Column Type | Constraints |
| ----------- | ----------- | ----------- |
| id          | SERIAL      | PK          |
| name        | VARCHAR(20) | NOT NULL    |
| recipient   | VARCHAR(20) | NOT NULL    |
| origin      | VARCHAR(20) | NOT NULL    |
| destination | VARCHAR(20) | NOT NULL    |
| location    | VARCHAR(20) | NOT NULL    |

You could do this part by hand as well, but why?  **Alembic** and
**Flak-Migrate** can help! Install them.

```bash
pipenv install alembic Flask-Migrate
```

### Set up Flask to connect to the database

Edit your **Config** class to include the database connection.

```python
SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
```

Add the link to the database to **.env** with a SQLite3 database file at the
relative file path of **dev.db**.

```
DATABASE_URL=sqlite:///dev.db
```

In `__init__.py` in the app directory, import and make use of Flask-Migrate`:

```python
from flask_migrate, import Migrate

### Code omitted

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)
```

### Build your model

Before you can run the migration, you need at least one model to migrate.  Add a
file called `models.py` to the `app` directory.

Import `flask_sqlalchemy` from `SQLAlchemy` and load the database reference.

```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
```

Create a `Package` class and map it to the `__tablename__` `'packages'`.

Add each column in the packages table to the model.  It should look something
like this:

```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Package(db.Model):
    __tablename__ = 'packages'

    id = db.Column(db.Integer, primary_key=True)
    sender = db.Column(db.String(255))
    recipient = db.Column(db.String(255))
    origin = db.Column(db.String(255))
    destination = db.Column(db.String(255))
    location = db.Column(db.String(255))
```

### Migrate

With the model complete, it's time to create and run the migration.  First,
initialize the local **Alembic** environment using the `db` command added by
**Flask-Migrate**.

```bash
pipenv run flask db init
```

Upon success, review the files in the newly generated `migrations` directory.
Next, create and run the migration.

```bash
pipenv run flask db migrate -m "create packages table"
pipenv run flask db upgrade
```

Check out your database and confirm that the new table has been created
successfully.

### Use the data from the form to add an entry to the database

Take a look back at the `/new_package` route in `__init__.py`.  You're
collecting the data with the form, but where does it go? An excellent way to
answer this question is to [read the docs].

You can also use the tools at your disposal to do a little exploration.  Try
making use of the built in `dir` function.  Use it to print the attributes of
the form object inside the validation **if** statement.

```python
if form.validate_on_submit():
    print(dir(form))
    return redirect('/')

# [(Various private attributes)..., 'csrf_token', 'data', 'destination', 'errors', 'hidden_tag', 'is_submitted', 'meta', 'origin', 'populate_obj', 'process', 'recipient_name', 'sender_name', 'submit', 'validate', 'validate_on_submit']

```

See anything familiar?  Your variables are all present.  However, if you dig in
a little more, you'll see that this isn't the data you want, it's actually the
the objects from `shipping_form.py`.  The data attribute looks promising though.
Try again and see what is there.


```python
if form.validate_on_submit():
    print(form.data)
    return redirect('/')

# Output: 
# {'sender_name': 'a', 'recipient_name': 'b', 'origin': 'Los Angeles', 'destination': 'Denver', 'submit': True, 'csrf_token': 'secret_token_removed_for_security'}
```

Perfect!  All the data from the form in a convenient dictionary.

### Update to add the data from the form

First, you need to create a new `Package` from the data, and you need a
reference to the database itself, so import them.  You'll also need to
initialize the app with the database, after where you declared the `app` and
imported your configuration class.

```Python
from app.models import Package, db

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

```

Instantiate a `Package` with the form data as ****kwargs**.  The package will
start at the origin, so set location to be the origin. 

```Python
if form.validate_on_submit():
        data = form.data
        new_package = Package(sender=data["sender_name"],
                              recipient=data["recipient_name"],
                              origin=data["origin"],
                              destination=data["destination"],
                              location=data["origin"])
```

Then, add the `new_package` to the database, commit the change, and redirect the
user.

```Python
db.session.add(new_package)
db.session.commit()
return redirect('/')
```

Use the form to add a package and make sure it's there with the tool of your
choice.

### Display package status to the user

Now that you have the ability to create a package, you need to be able to show
the status of that package to the user.  You can use the root endpoint to show
the list of packages and their status.

Create a new template called `package_status.html` and set up an **html**
skeleton. Add a link to the top to the `/new_package` endpoint and modify the
root endpoint to return the new page with `render_template()`.

In the function for the root, add a query to get all packages, and pass them
into the template.

```python
@app.route('/')
def root_endpoint():
    packages = Package.query.all()
    return render_template('package_status.html')
```

In `package_status.html` use `{% for package in packages %}` to cleanly display
the list of packages, including the id, sender, recipient, origin, destination,
and location of each one.

### Advance the passage of time

Luckily, your colleague is handling the part of the program that moves packages
around the country from city to city.  For testing, you'll need to add a
mechanism to trigger a simulation of the advancement of time.

For now, you can say that all packages will advance by one city each time a new
order is generated.

In your `Package` class in `models.py`, add a debug utility function to make use
of this logic.  First, import a few things your colleague has provided in `map`.

```python
from map.map import advance_delivery, DELIVERED
```

Then, add a **staticmethod** to loop through the list of packages and advance
their location.

```python
@staticmethod
def advance_all_locations():
    packages = Package.query.all()
    for package in packages:
        if package.location is not DELIVERED:
            package.location = advance_delivery(package.location,
                                                package.destination)

    db.session.commit()
```

Don't forget to call this method before your form redirects the user!

## Further development
There are many additions that you can make to this project.  A few suggestions:

* Implement Flask-Login and utilize it to give each user their own list of
  packages.
* Add filtering, ordering, and deletion of packages.
* Have you noticed the warning about **SQLALCHEMY_TRACK_MODIFICATIONS**?
  Research the situation and set the flag appropriately.


[read the docs]: https://flask.palletsprojects.com/en/1.1.x/patterns/wtforms/