from crypt import methods
import sqlite3
import sqlite3
import os
from flask import Blueprint, render_template, session, redirect, url_for
from datetime import datetime, timedelta
from app.forms import AppointmentForm


bp = Blueprint('main', __name__, '/')

DB_FILE = os.environ.get('DB_FILE')


@bp.route('/', methods=['GET', 'POST'])
def index():
    d = datetime.now()
    return redirect(url_for(".daily", year=d.year, month=d.month, day=d.day))


@bp.route('/<int:year>/<int:month>/<int:day>', methods=['GET', 'POST'])
def daily (year, month, day):
    print(year, month, day)
    form = AppointmentForm()
    date = datetime(year, month, day)
    day = timedelta(days=1)
    print(date + day)

    # print(date)
    if form.validate_on_submit():
        params = (
            form.name.data,
            datetime.combine(form.start_date.data, form.start_time.data),
            datetime.combine(form.end_date.data, form.end_time.data),
            form.description.data,
            form.private.data
        )
        with sqlite3.connect(DB_FILE) as conn:
            curs = conn.cursor()
            curs.execute('''
            INSERT INTO appointments 
            (name, start_datetime, end_datetime, description, private)
            VALUES
            (?,?,?,?,?)
            ''', params)
    print(form.errors)
    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        curs.execute('''SELECT id, name, start_datetime, end_datetime
            FROM appointments
            WHERE start_datetime BETWEEN ? AND ?
            ORDER BY start_datetime;''', (date, date + day))
        rows = curs.fetchall()
    return render_template('main.html', rows=rows, datetime=datetime, user=session['user'], form=form)


@bp.route('/login/<name>')
def login(name):
    session.clear()
    session['user'] = name
    print(session)
    return f'logged into {name}'