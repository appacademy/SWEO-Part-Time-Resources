from crypt import methods
import sqlite3
import os
from flask import Blueprint, render_template, session
from datetime import datetime
from app.forms import AppointmentForm


bp = Blueprint('main', __name__, '/')

db = os.environ.get('DB_FILE')


@bp.route('/', methods=['GET', 'POST'])
def main():
    form  = AppointmentForm()
    if form.validate_on_submit():
        params = (
            form.name.data,
            datetime.combine(form.start_date.data, form.start_time.data),
            datetime.combine(form.end_date.data, form.end_time.data),
            form.description.data,
            form.private.data
        )
        with sqlite3.connect(db) as conn:
            curs = conn.cursor()
            curs.execute('''insert into appointments
              (name, start_datetime, end_datetime, description, private)
              values (?,?,?,?,?)
              ''', params)
    print(form.errors)
    with sqlite3.connect(db) as conn:
        curs = conn.cursor()
        curs.execute('''SELECT id, name, start_datetime, end_datetime
        FROM appointments
        ORDER BY start_datetime;''')
        rows = curs.fetchall()
    return render_template('index.html', rows=rows, datetime=datetime, user=session['name'], form=form)



@bp.route('/login/<name>')
def login(name):
    session['name'] = name
    return f"Looged in as {name}"