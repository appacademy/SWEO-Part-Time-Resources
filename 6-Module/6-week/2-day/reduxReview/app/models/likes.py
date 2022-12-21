from .db import db

likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column('users', db.Integer, db.ForeignKey('users.id'), primary_key=True, nullable=False),
    db.Column('tweets', db.Integer, db.ForeignKey('tweets.id'), primary_key=True, nullable=False)
)