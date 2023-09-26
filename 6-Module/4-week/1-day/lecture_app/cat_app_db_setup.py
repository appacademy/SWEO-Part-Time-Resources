from app import app
from app.models import db, Cat


with app.app_context():

    db.drop_all()
    db.create_all()

    new_cat = Cat(name="Loafy", breed="Turkish Angora", weight=10.5, age=3)
    new_cat2 = Cat(name="Noodles", breed="Orange Tabby", weight=13, age=7)

    new_cat2.name = "Macaroni"

    print(new_cat.to_dict())
    print(new_cat.name)

    db.session.add(new_cat)
    db.session.add(new_cat2)
    db.session.commit()
