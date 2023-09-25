from dotenv import load_dotenv
load_dotenv()

from app.models import db, Cat
from app import app

with app.app_context():

    db.drop_all()
    db.create_all()

    new_cat = Cat(name="Loafy", breed="Turkish Angora", weight=10.5, age=3)
    new_cat2 = Cat(name="Noodles", weight=12.4, age=5)

    db.session.add(new_cat)
    db.session.add(new_cat2)

    db.session.commit()

    print('added data')
