print("in models.py")
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

print("DB", vars(db))

class SimplePerson(db.Model):
    __tablename__ = "simple_people"

    # print("IN SIMPLE PERSON MODEL")

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer)
    bio = db.Column(db.String(2000))
