from flask import Blueprint, render_template, redirect
import os
import sqlite3
from datetime import datetime
from .forms import AppointmentForm


# calling it "blue" just to show I can. Convention is "bp"
blue = Blueprint('main', __name__, url_prefix='/')
DB_FILE = os.environ.get("DB_FILE")


# "SELECT id, name, start_datetime, end_datetime FROM appointments ORDER BY start_datetime;"
@blue.route('/', methods=['GET', 'POST'])
def main():
    form = AppointmentForm()

    if form.validate_on_submit():
        sql = """
            INSERT INTO appointments(
                name, start_datetime, end_datetime, description, private
                )
            VALUES (
                :name, :start_datetime, :end_datetime, :description, :private
            );
            """

        params = {
            'name': form.name.data,
            'start_datetime': datetime.combine(
                form.start_date.data,
                form.start_time.data),
            'end_datetime': datetime.combine(
                form.end_date.data,
                form.end_time.data),
            'description': form.description.data,
            'private': form.private.data}
        with sqlite3.connect(DB_FILE) as conn:
            curs = conn.cursor()
            curs.execute(sql, params)
            return redirect('/')

    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        curs.execute("""SELECT id, name, start_datetime, end_datetime
                        FROM appointments
                        ORDER BY start_datetime;""")
        data = curs.fetchall()
        rows = []

        for el in data:
            # start_obj = datetime.strptime(el[2], '%Y-%m-%d %H:%M:%S')
            # end_obj = datetime.strptime(el[3], '%Y-%m-%d %H:%M:%S')

            # start = start_obj.strftime("%H:%M")
            # end = end_obj.strftime("%H:%M")

            start = datetime.strptime(el[2], '%Y-%m-%d %H:%M:%S')
            end = datetime.strptime(el[3], '%Y-%m-%d %H:%M:%S')

            rows.append((el[0], el[1], start, end))

    return render_template('main.html', rows=rows, form=form)
