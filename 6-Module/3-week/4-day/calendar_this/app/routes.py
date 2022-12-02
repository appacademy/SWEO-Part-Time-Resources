from flask import Blueprint, render_template, redirect
import os
import sqlite3
from datetime import datetime
from .forms import AppointmentForm

blue = Blueprint('main', __name__, url_prefix='/')

DB_FILE = os.environ.get("DB_FILE")

# Would work but little ugly
# "SELECT id, name, start_datetime, end_datetime FROM appointments ORDER BY start_datetime;"


@blue.route('/', methods=["GET", "POST"])
def main():
    form = AppointmentForm()

    if form.validate_on_submit():
        sql = """INSERT INTO appointments (
            name, start_datetime, end_datetime, description, private
        )
        VALUES (
            :name,
            :start_datetime,
            :end_datetime,
            :description,
            :private
        )
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
        curs.execute(
            """SELECT id, name, start_datetime, end_datetime
                FROM appointments
                ORDER BY start_datetime;"""
        )
        data = curs.fetchall()
        rows = []
        for el in data:
            print(el)
            start_time = el[2]
            end_time = el[3]
            start = datetime.strptime(start_time, '%Y-%m-%d %H:%M:%S')
            end = datetime.strptime(end_time, '%Y-%m-%d %H:%M:%S')
            # rows.append((el[0], el[1], start, end))

            rows.append((el[0], el[1], start.strftime(
                "%H:%M"), end.strftime("%H:%M")))
    return render_template('main.html', rows=rows, form=form)


# """
# <!-- {% for el in rows %}
# <tr>
#     <td>{{el[1]}}</td>
#     <td>{{el[2].strftime("%H:%M")}}</td>
#     <td>{{el[3].strftime("%H:%M")}}</td>
# </tr>
# {% endfor %} -->
# """
