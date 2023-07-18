from .db import db


class Test(db.Model):
    __tablename__ = 'tests'

    id = db.Column(db.Integer(), primary_key = True)
