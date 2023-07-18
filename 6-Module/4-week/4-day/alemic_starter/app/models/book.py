from .db import db


class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer(), primary_key = True)
    title = db.Column(db.String(199), nullable = False)
    pages = db.Column(db.Integer(), nullable = False)
    year_published = db.Column(db.Integer(), nullable = False)
    NY_Times = db.Column(db.Boolean())
    author_id = db.Column(db.Integer(), db.ForeignKey("authors.id"))

    author = db.relationship("Author", back_populates = 'books')
