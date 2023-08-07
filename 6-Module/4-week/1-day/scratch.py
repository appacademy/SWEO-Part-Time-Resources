from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Owner, Pony

db_url = 'sqlite:///dev.db'
engine = create_engine(db_url)

SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()

# DO OUR STUFF

engine.dispose()

