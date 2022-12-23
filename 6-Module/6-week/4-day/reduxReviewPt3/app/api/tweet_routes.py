from flask import Blueprint, request
from ..models import Tweet, db
from ..utils import Print
from flask_login import current_user


tweet_routes = Blueprint('tweets', __name__)


@tweet_routes.route('')
def get_all_tweets():
    tweets = Tweet.query.all()
    
    res = {tweet.id: tweet.to_dict() for tweet in tweets}
    
    return res


@tweet_routes.route('', methods=["POST"])
def create_new_tweet():
    tweet_text = request.json
    
    # ** is Python's spread ('...' in JS)
    new_tweet = Tweet(**tweet_text, user_id=current_user.id)
    
    db.session.add(new_tweet)
    db.session.commit()
    
    return {new_tweet.id: new_tweet.to_dict()}


@tweet_routes.route('', methods=["PATCH", "PUT"])
def edit_tweet():
    tweet_data = request.json
    
    tweet = Tweet.query.get(tweet_data['id'])
    
    tweet.text = tweet_data['text']
    
    db.session.commit()
    
    return {tweet.id: tweet.to_dict()}
    

@tweet_routes.route('/<int:id>', methods=["DELETE"])
def delete_tweet(id):
    data = request.json

    if data["user_id"] != current_user.id:
        return {"error": "You are not authorized to delete this tweet"}, 401
    
    tweet = Tweet.query.get(id)
    
    db.session.delete(tweet)
    db.session.commit()
    
    return {"msg": "Successfully deleted"}