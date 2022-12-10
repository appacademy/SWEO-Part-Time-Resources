from flask import Blueprint, render_template, redirect
from ..forms.shipping_form import ShippingForm
from ..models import Package, db
# # from ..forms import shipping_form



bp = Blueprint('package', __name__, "")


@bp.route('/')
def root_endpoint():
    packages = Package.query.all()
    return render_template('package_status.html', packages=packages)


@bp.route('/new_package', methods=['GET', 'POST'])
def send_new_package():
    form = ShippingForm()
    # print("CONTAINS:", form.__contains__("sender_name"))
    # print("DATA:", form.data)
    # print("IS SUBMITTED:", form.is_submitted())
    # print("POPULATE OBJ:", form.populate_obj(my_data))
    # new_package = Package(sender=data["sender_name"], recipient=data["recipient_name"])
    # form.populate_obj(new_package)
    
    if form.validate_on_submit():
        data = form.data
        new_package = Package(sender=data["sender_name"],
                              recipient=data["recipient_name"],
                              origin=data["origin"],
                              destination=data["destination"],
                              location=data["origin"])

        db.session.add(new_package)
        db.session.commit()
        Package.advance_all_locations()
        return redirect('/')
    
    return render_template("shipping_request.html", form=form)