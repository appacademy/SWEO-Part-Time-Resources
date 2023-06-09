import os

from flask import Flask, render_template, redirect
from flask_migrate import Migrate

from app.shipping_form import ShippingForm
from app.config import Config

from app.models import Package, db
from map.map import map

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)


@app.route('/')
def root_endpoint():
    packages = Package.query.all()
    return render_template('package_status.html', packages=packages)


@app.route('/new_package', methods=['GET', 'POST'])
def form():
    form = ShippingForm()
    if form.validate_on_submit():
        data = form.data
        new_package = Package(sender=data["sender_name"],
                              recipient=data["recipient_name"],
                              origin=data["origin"],
                              destination=data["destination"],
                              location=data["origin"])
        db.session.add(new_package)
        db.session.commit()

        # DEBUG: Advance Time
        Package.advance_all_locations()
        return redirect('/')
    return render_template('shipping_request.html', form=form)
