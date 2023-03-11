from flask_sqlalchemy import SQLAlchemy

# Create db instance
db = SQLAlchemy()

class SimplePerson(db.Model):
    __tablename__ = "simple_people"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer)
    bio = db.Column(db.String(2000))
