from .db import db, environment, SCHEMA
from .likes import likes


class Tweet(db.Model):
    __tablename__ = 'tweets'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(280), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    # Related Data
    # user = db.relationship("User", back_populates='tweets')
    tweet_author = db.relationship("User", back_populates='tweets')
    liked_by_users = db.relationship("User", secondary=likes, back_populates='liked_tweets')
    
    def __repr__(self):
        return f"<Tweet id: {self.id}, text: {self.text}, user_id: {self.user_id}>"
    
    def to_dict(self):
        return {
            "id": self.id,
            "text": self.text,
            "userId": self.user_id,
            "username": self.tweet_author.to_dict_basic()['username'],
            "likedByUsers": [user.to_dict_basic()['id'] for user in self.liked_by_users]
        }
    
    def to_dict_basic(self):
        return {
            "id": self.id,
            "text": self.text,
            "userId": self.user_id
        }