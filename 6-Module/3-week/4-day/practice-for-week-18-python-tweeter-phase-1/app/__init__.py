
from flask import Flask, render_template, redirect
from .tweets import tweets
import random
from .form.form import TweetForm
from datetime import date, datetime
from .config import Config


app = Flask(__name__)
print("TEST", __name__)

app.config.from_object(Config)



@app.route("/")
def index():
    """
    Landing page, displays a random tweet
    """
    taco = random.choice(tweets)
    return render_template("index.html", apple=taco)


@app.route("/feed")
def feed():
    """
    Displays the feed page showing all tweets
    """
    # for tweet in tweets:
    #     if isinstance(tweet['date'], str):
    #         tweet['date'] = datetime.strptime(tweet['date'], "%m/%d/%y").date()

    # sorted_tweets = sorted(tweets, key=lambda x: x['date'], reverse=True)
    # return render_template('feed.html', tweets=sorted_tweets)

    x = sorted(
        tweets,
        key=lambda tweet: datetime.strptime(tweet["date"], "%m/%d/%y"),
        reverse=True,
    )
    return render_template("feed.html", tweets=x)


@app.route("/new", methods=["GET", "POST"])
def new_tweet_form():
    """
    Displays the Tweet form on GET requests, and then
    validates and creates a new Tweet on POST requests
    """
    form = TweetForm()
    tweet_example = TweetForm()
    tweet_example.author.data = "John Doe"
    tweet_example.tweet.data = "Hello, world!"
    # print(f"Author: {tweet_example.author.data}")
    # print(f"Tweet: {tweet_example.tweet.data}")
    # vars_example = vars(tweet_example)
    # print("VARSSS", vars_example)
    # for key, value in vars_example.items():
    #     print("KEY", key)
    #     print("VALUE", value)
    current_day = datetime.today()
    formatted_date = datetime.strftime(current_day, "%m/%d/%Y").split("/")
    final_date = f"{formatted_date[0]}/{formatted_date[1]}/{formatted_date[-1][2:]}"
    if form.validate_on_submit():
        print("FORM . DATA", form.data)
        new_tweet = {
            "id": len(tweets),
            "author": form.data["author"],
            "tweet": form.data["tweet"],
            "date": final_date,
            # 'date': date.today(),
            "likes": 0,
        }
        tweets.append(new_tweet)
        return redirect("/feed", 302)

    if form.errors:
        return form.errors
        # errors = form.errors
        # print("ERRRORS", errors)
        # return render_template("new_tweet.html", form=form, form_errors=errors)

    return render_template("new_tweet.html", form=form)
