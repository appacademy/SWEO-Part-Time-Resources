from app.models import db, Tweet, environment, SCHEMA
from .users import demo, marnie, bobbie


# Adds demo tweets
def seed_tweets():
    tweet1 = Tweet(text="This is my first tweet!", user_id=1, liked_by_users=[marnie, bobbie])
    tweet2 = Tweet(text="The sql tweet is never as good as the original :/", user_id=1)

    db.session.add(tweet1)
    db.session.add(tweet2)
    db.session.commit()
    
    tweet3 = Tweet(text="You know what they say, the third tweet's the charm :)", user_id=1, liked_by_users=[bobbie])
    db.session.add(tweet3)
    db.session.commit()
    


def undo_tweets():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tweets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM tweets")
        db.session.execute("DELETE FROM likes")
        
    db.session.commit()