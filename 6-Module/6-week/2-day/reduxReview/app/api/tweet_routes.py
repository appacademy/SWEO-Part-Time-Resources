from flask import Blueprint
from ..models import Tweet, db
from ..utils import Print


tweet_routes = Blueprint('tweets', __name__)


@tweet_routes.route('')
def get_all_tweets():
    tweets = Tweet.query.all()
    
    res = {tweet.id: tweet.to_dict() for tweet in tweets}    
    
    return res
    
    # Print(res)
    
    # res = dict()
    
    # for tweet in tweets:
    #     res[tweet.id] = tweet.to_dict()
    