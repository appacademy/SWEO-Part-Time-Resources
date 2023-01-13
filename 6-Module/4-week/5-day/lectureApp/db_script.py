from dotenv import load_dotenv

load_dotenv()

from app import app, db
from app.models.car import Car
from app.models.owner import Owner

# In case you need to reseed
with app.app_context():
    db.drop_all()
    db.create_all()

    owner1 = Owner(first_name='Jesse', last_name='Brooks', email='jbrooks@appacademy.io')
    owner2 = Owner(first_name='Tim', last_name='Petrol', email='rotary@fast.com')
    owner3 =Owner(first_name='Ryan', last_name='Runner', email='10sec@jdm.com')
    owner4 =Owner(first_name='Tia', last_name='Petrol', email='typer@wtec.com')

    car1 = Car(manu_year=2022, make="Nissan", model="Altima", owner_id=4)
    car2 = Car(manu_year=1993, make="Mazda", model="Rx7", owner_id=1)
    car3 = Car(manu_year=1995, make="Mitsubishi", model="Eclipse", owner_id=2)
    car4 = Car(manu_year=1994, make="Acura", model="Integra", owner_id=3)

    # add to db
    db.session.add(owner1)
    db.session.add(owner2)
    db.session.add(owner3)
    db.session.add(owner4)
    db.session.add(car1)
    db.session.add(car2)
    db.session.add(car3)
    db.session.add(car4)
    db.session.commit()

# from app import app, db
# from app.models.car import Car
# from app.models.owner import Owner

# with app.app_context():
#     db.drop_all()
#     db.create_all()

#     owner = Owner(first_name = 'Jesse', last_name = 'Brooks', email='jbrooks@appacademy.io')
#     car = Car(manu_year=2020, make="Toyota", model="Camry", owner_id=1)

#     db.session.add(owner) # add SQL to a session object
#     # print(owner)
#     db.session.add(car) # add SQL to a session object
#     db.session.commit() # execute raw SQL into database

#     owner_query = db.session.query(Owner) # adding raw SQL to session, querying the Owner table
#     owner_query_result = owner_query.first() # execute SQL stored in the session, and return results of query based on the function used to execute (first(), all())
#     # print(owner_query) # query
#     # print(owner_query_result) # query result
#     print('before update')
#     print(owner_query_result.first_name)
#     print(owner_query_result.last_name)
#     print(owner_query_result.email)

#     owner_query_result.first_name = 'NotJesse'
#     db.session.commit()
#     print('after update')
#     print(db.session.query(Owner).first().first_name)

#     db.session.delete(owner_query_result)
#     db.session.commit()
#     print(db.session.query(Owner).first())
