from app import app, db

from app.models import Owner, Car

with app.app_context():
    db.drop_all()
    db.create_all()

    owner1 = Owner(first_name="Tim", last_name="Petrol",email="rotary@fast.com")
    owner2 = Owner(first_name="Ryan", last_name="Runner",email="10sec@jdm.com")
    owner3 = Owner(first_name="Tia", last_name="Petrol",email="typer@")
    car1 = Car(manu_year=1993, make="Mazda", model="RX7", owner_id=1)
    car2 = Car(manu_year=1995, make="Mazda", model="RX7", owner_id=2)
    car3 = Car(manu_year=1994, make="Mazda", model="RX7", owner_id=3)

    db.session.add(owner1)
    db.session.add(owner2)
    db.session.add(owner3)
    db.session.add(car1)
    db.session.add(car2)
    db.session.add(car3)
    db.session.commit()
