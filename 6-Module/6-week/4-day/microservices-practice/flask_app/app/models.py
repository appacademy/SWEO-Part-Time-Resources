from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Index

db = SQLAlchemy()

class Rating(db.Model):
    __tablename__ = 'book_ratings'

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, nullable=False)
    value = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(255), nullable=False)

    __table_args__ = (
        Index('only_one_book_rating_per_user', book_id, email, unique=True),
    )