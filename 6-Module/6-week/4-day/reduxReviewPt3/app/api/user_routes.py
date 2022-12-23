from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Tweet

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """

    user = User.query.get(id)

    return user.to_dict()


# # demo_tweet = Tweet.query.filter(Tweet.user_id == user.id).first()
# # print(demo_tweet.tweet_author)

# #! user = Instance of a User
# # compare = user
# # print(compare)
# #! user.tweets = List of tweets by that User
# #! user.tweets[0] = Instance of a Tweet
# #! user.tweets[0].tweet_author = Original instance of User
# inception = user.tweets[0].tweet_author.tweets[1].tweet_author

# print("*\n"*50)

# print(inception)

# print("*"*100)

# # print("THESE ARE MY TWEEEEETTS", user.tweets)
# # print(user.to_dict())
