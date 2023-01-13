from .db import db


class Car(db.Model):
    __tablename__ = 'cars'

    id = db.Column(db.Integer, primary_key=True)
    manu_year = db.Column(db.Integer, nullable=False)
    make = db.Column(db.String(999))
    model = db.Column(db.String(255))
    owner_id = db.Column(db.Integer, db.ForeignKey("owners.id"), nullable=False)

    owners = db.relationship("Owner", back_populates="cars")
