print("in routes/simple.py")
from flask import Blueprint, redirect, render_template, request, Response
from ..forms import SimpleForm
from ..models import db, SimplePerson

bp = Blueprint("simple", __name__, "")


@bp.route("/response-demo", methods=["GET", "POST"])
def demo():
    #/response?query=python

    print("QUERY", request.args.get('query'))
    print("HEADERS", request.headers)
    print("URL", request.url)
    print("JSON", request.json["name"])


    return Response("<h1>Hi</h1>", status=201, mimetype='text/html')

    # request.json["name"] = "Anthony"

    # return Response(request.json["name"], status=200, mimetype='application/json')


@bp.route("/")
def main_page():
    print("in routes/main_page view function")
    # print("REQ OBJ", vars(request))
    return render_template("main_page.html")


# @bp.route("/simple-form")
# def simple_form():
#     form = SimpleForm()
#     return render_template("simple_form.html", form=form)


@bp.route("/simple-form", methods=["GET", "POST"])
def simple_data():
    form = SimpleForm()
    if request.method == "POST":
        if form.validate_on_submit():
            data = SimplePerson()
            form.populate_obj(data)
            db.session.add(data)
            db.session.commit()
            return redirect("/")
        print(form.errors)
        return "Bad Data"
    return render_template("simple_form.html", form=form)

@bp.route("/simple-form-data")
def simple_form_data():
    print("in routes/simple_form_data view function")
    result = SimplePerson.query.filter(SimplePerson.name.like("M%")).all()
    return render_template("simple_form_data.html", result=result)
