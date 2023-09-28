from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Cat(db.Model):

    __tablename__ = "cats"

    id = db.Column(db.Integer(), primary_key = True)
    name = db.Column(db.String(200), nullable = False)
    breed = db.Column(db.String(200))
    weight_test = db.Column(db.Float())
    age = db.Column(db.Integer(), nullable = False, unique=True)
    owner_id = db.Column(db.Integer(), db.ForeignKey("owners.id"))

    owner = db.relationship("Owner", back_populates="cats")

    def to_dict(self):
        return {
            ""
        }


class Owner(db.Model):
    __tablename__ = "owners"

    id = db.Column(db.Integer(), primary_key = True)
    name = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(300), nullable = False)
    phone_number = db.Column(db.Integer(), nullable = False)

    cats = db.relationship("Cat", back_populates="owner")
