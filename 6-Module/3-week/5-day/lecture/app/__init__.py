from flask import Flask, render_template, session
from app import routes
from app import dbfuncs
import os
import sqlite3
app = Flask(__name__)

app.register_blueprint(routes.form.bp)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY") or "secret-developer-secret"
DB_FILE = os.environ.get("DB_FILE")

@app.route('/')
def home():
    # Add session tracker for visits to /!
    if 'views' in session:
        session['views'] = session['views'] + 1
    else:
        session['views'] = 1
    info = {
        "title":"CARS CARS CARS",
        "header":"THIS IS THE CARS HOME PAGE!"
    }
    cars = dbfuncs.get_all_cars()
    return render_template('page.html', info=info, cars=cars) # Why not render session on page.html?

@app.route('/test')
def test():
    info = {
        "title":"Test page",
        "header":"This is the test page"
    }
    return render_template('page.html', info=info)
