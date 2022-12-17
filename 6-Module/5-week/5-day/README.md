# SQLAlchemy and Alembic

## Creating relationships

In SQLAlchemy, we pass information about a column to the `db.Column()` method

Since we're defining everything on our instance of `db`, we have access to everything we've created

```py
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)


class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
```

-   The 'users' in `'users.id'` is the value we set to `__tablename__` in our other table
-   This is a `One-To-Many` relationship

### While this is enough to connect a tweet to a user, we can streamline our queries by telling SQLAlchemy to add related data directly on each table in the relationship

```py
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)

    # Related Data
    tweets = db.relationship("Tweet", back_populates='user')


class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # Related Data
    user = db.relationship("User", back_populates='tweets')
```

-   `back_populates` points to the **_attribute on the other table_** that you would like to be updated automatically

### This gives us access to all tweets made by a user, and will automatically update as the user makes more tweets

-   For `One-To-Many`:
    -   the "many" side will pull the "one" side's data as a single value
    -   the "one" side will pull the "many" side's data as a list
-   In both cases, the class instance is provided

```py
# *** User makes a tweet ***
curr_user.tweets # [<Tweet 1>]
first_tweet.user # <User 1>


# *** User makes another tweet ***
curr_user.tweets # [<Tweet 1>, <Tweet 2>]
second_tweet.user # <User 1>
```

### If we wanted to limit each user to only a single tweet, that would make this a `One-To-One` relationship

- The only difference in setup is adding `uselist=False` to the "one" side of the relationship, pulling data from the "many" side
  - This is very rare, it's unlikely you will need to use this!

```py
# Safe implementation
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)

    # Related Data
    tweet = db.relationship("Tweet", back_populates='user', uselist=False)

class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # Related Data
    user = db.relationship("User", back_populates='tweet')
```

## Many-To-Many

These can seem kind of weird at first, which is why it has its own entire section in this README

Let's start by setting up a joins table in the same format we've seen so far

```py
class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    tweet_id = db.Column(db.Integer, db.ForeignKey('tweets.id'), primary_key=True)
```

### While this technically works, it's _extremely discouraged_ to create your joins table in this manner

-   The `id` column isn't really doing anything, we don't care about the id of the like
-   Creating a `Model` is more resource intense than just creating a `Table`
    -   If we needed to track many more attributes, using a `Model` would make more sense

### So instead, we use this syntax! Notice the absence of an `id` column

```py
likes = db.Table(
    'likes',
    db.Model.metadata,
    db.Column('users', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('tweets', db.Integer, db.ForeignKey('tweets.id'), primary_key=True)
)
```

-   The `likes` variable can be called anything, it's just a variable name
-   The first argument is what you'd like the table name to be
    -   Same as what you'd set to `__tablename__` if you were doing a class model
-   `db.Model.metadata` gives us only what we need from `Model`
-   The foreign keys are setup in the same way as on their respective tables

### Finally, we add the relationship on each table being joined

```py
class User(db.Model, UserMixin):
    __tablename__ = 'users'

    # *** other table values ***

    # Related Data
    tweets = db.relationship("Tweet", back_populates='user')
    liked_tweets = db.relationship('Tweet', secondary=likes, back_populates='user_likes', cascade='all, delete')


class Tweet(db.Model):
    __tablename__ = 'tweets'

    # *** other table values ***

    # Related Data
    user = db.relationship("User", back_populates='tweets')
    user_likes = db.relationship('User', secondary=likes, back_populates='liked_tweets', cascade='all, delete')
```

-   `secondary` points to the variable we set our joins table to
-   `cascade` can be added on any column, not just `Many-To-Many` specific columns
    -   Makes sense to cascade delete joined data when one end of the relationship is deleted
