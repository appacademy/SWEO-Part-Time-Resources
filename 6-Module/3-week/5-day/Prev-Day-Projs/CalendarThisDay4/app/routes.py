from datetime import datetime, timedelta
from flask import (Blueprint, render_template, redirect, url_for)
from app.forms import AppointmentForm
import sqlite3
import os
bp = Blueprint("main", __name__, url_prefix='/')
DB_FILE = os.environ.get("DB_FILE")


def round_time(time):
    """
    This function will round the input time to the nearest 15 minute block,
    even though the form will allow any minute input
    """
    return time - timedelta(minutes=time.minute % 15,
                            seconds=time.second)


def slot(day, index, hours=0):
    """
    Helper function for time_slot_generator, creates slots based on 15 minute
    increments to be rendered by front end.
    """
    day = datetime(day.year, day.month, day.day)
    day = day + timedelta(hours=hours)
    return day + timedelta(minutes=15 * index)

def time_slot_generator(rows, day):
    """
    This function will generate time slots based on a response from the
    database. Currently, it is configured to start at Midnight and go through
    the entire day. It uses the slot helper function to build out all 4 slots
    for each of the 24 hours of the day.

    It can be changed to start at a different hour by altering the argument 
    for hours in the slot invocation, and by changing the number of hours in
    our range call. 

    As it iterates through our rows data, it will find appointments that start
    at the same time as our current slot, determine how many slots should be
    marked as not open and update those accordingly.
    """
    timeslots = [{'time': slot(day, slot_index, 0), 'open': True}
                        for slot_index in range(24 * 4)]
    overriden = 0
    for timeslot in timeslots:
        for id, name, start, end in rows:
            if start == timeslot['time']:
                timeslot['appointment'] = {
                    'units': int((end-start).seconds / 60 // 15),
                    'name': name,
                }
                overriden = timeslot['appointment']['units']
        if overriden > 0:
            overriden -= 1
            timeslot['open'] = False
    return timeslots
  


@bp.route('/', methods=("GET", "POST"))
def main():
    """
    If a user hits our slash route, they will get redirected to the calendar
    entry for the current day.
    """
    d = datetime.now()
    return redirect(url_for(".daily", year=d.year, month=d.month, day=d.day))


@bp.route("/<int:year>/<int:month>/<int:day>", methods=["GET", "POST"])
def daily(year, month, day):
    """
    This route both serves the form to create appointments and renders the list
    of current appointments to our user. It makes use of helper functions to
    determine what should and should not get rendered as well as making use of 
    the form to serve it and commit new appointments to the database.
    """
    form = AppointmentForm()
    if form.validate_on_submit():
        with sqlite3.connect(DB_FILE) as conn:
            curs = conn.cursor()
            sql = """
                    INSERT INTO appointments (
                        name,
                        start_datetime,
                        end_datetime,
                        description,
                        private
                    )
                    VALUES
                    (
                        :name,
                        :start_datetime,
                        :end_datetime,
                        :description,
                        :private
                    )
                """
            params = {
                'name': form.name.data,
                'start_datetime': round_time(datetime.combine(
                    form.start_date.data,
                    form.start_time.data,
                )),
                'end_datetime': round_time(datetime.combine(
                    form.end_date.data,
                    form.end_time.data,
                )),
                'description': form.description.data,
                'private': form.private.data
            }
            curs.execute(sql, params)
    with sqlite3.connect(DB_FILE) as conn:
        curs = conn.cursor()
        day = datetime(year, month, day)
        next_day = day + timedelta(days=1)
        curs.execute("""
                    SELECT id, name, start_datetime, end_datetime
                    FROM appointments
                    WHERE start_datetime BETWEEN :day AND :next_day
                    ORDER BY start_datetime
                    """, {'day': day, 'next_day': next_day})
        data = curs.fetchall()
        rows = []
        for row in data:
            start = datetime.strptime(row[2], '%Y-%m-%d %H:%M:%S')
            end = datetime.strptime(row[3], '%Y-%m-%d %H:%M:%S')
            rows.append(([row[0], row[1], start, end]))
        timeslots=time_slot_generator(rows, day)
        from pprint import pprint
        pprint(timeslots)
        return render_template('main.html', form=form, timeslots=timeslots, day=day)
