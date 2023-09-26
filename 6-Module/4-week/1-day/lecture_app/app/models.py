from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Cat(db.Model):
    __tablename__ = 'cats'

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    breed = db.Column(db.String(200), nullable=False)
    weight = db.Column(db.Float(), nullable=False)
    age = db.Column(db.Integer(), nullable=False)

    def to_dict(self):
        return {
            "name": self.name,
            "breed": self.breed,
            "weight": self.weight,
            "age": self.age
        }
