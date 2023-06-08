from flask import Blueprint, render_template, url_for, redirect
from ..models import Employee  # from app.models import Employee
from ..forms import LoginForm
from flask_login import current_user, login_user, logout_user

bp = Blueprint('session', __name__, url_prefix='/session')


@bp.route("/", methods=["GET", "POST"])
def taco():
    if current_user.is_authenticated:
        return redirect(url_for("orders.apple"))
    form = LoginForm()
    if form.validate_on_submit():
        empl_number = form.employee_number.data
        employee = Employee.query.filter(
            Employee.employee_number == empl_number).first()
        if not employee or not employee.check_password(
                form.password.data):
            return redirect(url_for(".taco"))
        login_user(employee)
        return redirect(url_for("orders.apple"))
    return render_template("login.html", form=form)


@bp.route('/logout', methods=["POST"])
def dog():
    logout_user()
    return redirect(url_for('.taco'))
    # return redirect('/session/')
