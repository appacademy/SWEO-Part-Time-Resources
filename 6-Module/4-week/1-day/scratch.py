from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Owner, Pony

db_url = 'sqlite:///dev.db'
engine = create_engine(db_url)

SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()

# DO OUR STUFF
## Adding to our DB
tristan = Owner(first_name="Tristan", last_name="Huckabee", email="lilHucky@soundcloud.io")
my_pony = Pony(name="Epona", birth_year=2023, breed="Hylian Shorthair", owner=tristan)

print(tristan.id)
print(my_pony.id)

session.add(tristan)
session.commit()

print(tristan.id)
print(my_pony.id)

## Updating our DB
## Rollback Changes
print(my_pony.name)
my_pony.name = "Rainbow Dash"
print(my_pony.name)
if my_pony.name is "Rainbow Dash":
  session.rollback()
session.commit()
print(my_pony.name)

## Delete from DB
session.delete(tristan)
# session.rollback()
session.commit()


engine.dispose()

