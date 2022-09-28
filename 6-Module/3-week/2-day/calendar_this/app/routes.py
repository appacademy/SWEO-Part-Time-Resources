import sqlite3
from flask import Blueprint, render_template
import sqlite3
import os


bp = Blueprint('main', __name__, '/')

DB_FILE = os.environ.get('DB_FILE')


@bp.route('/')
def index():
    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        curs.execute('''SELECT id, name, start_datetime, end_datetime
        FROM appointments
        ORDER BY start_datetime;''')
        rows = curs.fetchall()
    return render_template('main.html', rows=rows)