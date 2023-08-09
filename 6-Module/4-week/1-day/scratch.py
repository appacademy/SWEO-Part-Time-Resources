from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Owner, Pony

db_url = 'sqlite:///dev.db'
engine = create_engine(db_url)

SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()

# DO OUR STUFF
tristan = Owner(first_name='Tristan', last_name="Huckabee", email="thuckabee@aa.io")
my_pony = Pony(name="Epona", birth_year=2023, breed="Hylian Shorthair", owner=tristan)

## ADD TO DB
print(tristan.id)
print(my_pony.id)
session.add(tristan)
session.commit()
print(tristan.id)
print(my_pony.id)
## UPDATE ROW
## ROLLBACK
print(my_pony.name)
my_pony.name = 'Pinkie Pie'
print(my_pony.name)
if my_pony.name == 'Pinkie Pie':
  session.rollback()
session.commit()
print(my_pony.name)
## DELETE ROW
session.delete(tristan)
session.commit()

engine.dispose()

