from flask import Flask, render_template, redirect
from .config import Config
from .tweets import tweets
import random
from .form.form import TweetForm

from datetime import date


app = Flask(__name__)

app.config.from_object(Config)


@app.route("/")
def index():
    """
    Landing page, displays a random tweet
    """
    tweet = random.choice(tweets)
    return render_template("index.html", tweet=tweet)


@app.route("/feed")
def feed():
    """
    Displays the feed page showing all tweets
    """
    return render_template('feed.html', tweets=tweets)



@app.route("/new", methods=["GET", "POST"])
def new_tweet_form():
    """
    Displays the Tweet form on GET requests, and then
    validates and creates a new Tweet on POST requests
    """
    form = TweetForm()
    # !!START SILENT
    if form.validate_on_submit():
        new_tweet = {
            'id': len(tweets),
            'author': form.data['author'],
            'tweet': form.data['tweet'],
            'date': date.today(),
            'likes': 0,
        }
        print(new_tweet)
        tweets.append(new_tweet)
        return redirect("/feed", 302)

    if form.errors:
        return form.errors
    return render_template("new_tweet.html", form=form)