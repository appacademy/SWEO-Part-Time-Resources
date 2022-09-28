import sqlite3
from flask import Blueprint, render_template
import os

bp = Blueprint('main', __name__, '/')

db = os.environ.get('DB_FILE')


@bp.route('/')
def main():
    with sqlite3.connect(db) as conn:
        curs = conn.cursor()
        curs.execute('''SELECT id, name, start_datetime, end_datetime
        FROM appointments
        ORDER BY start_datetime;''')
        rows = curs.fetchall()
    return render_template('index.html', rows=rows)