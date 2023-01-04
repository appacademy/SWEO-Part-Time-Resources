from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .likes import likes


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    # Related Data
    tweets = db.relationship(
        'Tweet', back_populates='tweet_author', cascade='all, delete')
    liked_tweets = db.relationship(
        'Tweet', secondary=likes, back_populates='liked_by_users')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return f"<User id: {self.id}, username: {self.username}, email: {self.email}>"

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'tweets': [tweet.to_dict_basic() for tweet in self.tweets],
            'likedTweets': [tweet.to_dict_basic() for tweet in self.liked_tweets]
        }

    def to_dict_basic(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
