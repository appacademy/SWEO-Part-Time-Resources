"""
Create a new directory, and add a relationship.py file.

Add all the code after these instructions to relationship.py

Create your virtual env and install the dependencies:
pipenv install flask
pipenv install flask-sqlalchemy
pipenv install python-dotenv

Create a .flaskenv and add the below into it:
FLASK_APP=relationship.py

run the file with pipenv run flask run


"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

"""
In this practice there are 2 phases that help show how to create relationships in sql alchemy
You will need to create everything necessary for the relationship (foreign keys and relationship)
You will need to use back_populates so that the prints work correctly when you run the app, and go to
the route "/" in your browser.

In phase 2 you are adding a many-to-many relationship.
You are given the bare requirements of the tables you will need.
You will fill out these tables, and comment in the phase 3 seed data and print statements.

If done correctly you will see everything print as documented in the "/" route.

"""




#Phase 2 - Create a join table for the many-to-many relationship between posts and tags

# class PostTag(db.Model):
#     __tablename__ = 'post_tags'



"""
START HERE
Phase 1 - Create a one to many relationship between User and Posts by updating the below models.
One User can have many posts
"""

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)




#Phase 2 - Create a tags model.  There should be a many to many relationship between tags and posts
#You'll likely have to add some logic into your Post model as well.

# class Tag(db.Model):
#     id =
#     name =






@app.before_request
def init_db():
    db.drop_all()
    db.create_all()

    user = User(name='Alice')
    db.session.add(user)
    db.session.commit()

    post = Post(title='Hello, world!', user_id=user.id)
    db.session.add(post)
    db.session.commit()

    """Comment in below seed data for phase 2"""
    # tag1 = Tag(name='Intro')
    # tag2 = Tag(name='Greeting')
    # post.tags.append(tag1)
    # post.tags.append(tag2)

    db.session.commit()


@app.route('/')
def index():

    """Phase 1 prints"""

    user = User.query.first()
    print(user.posts[0].title) #prints: Hello, world!

    the_post = Post.query.first()
    print(the_post.user.name) #prints: Alice



    """Phase 2 prints"""

    # post_titles = [post.title for post in user.posts]
    # print(post_titles) #prints: [Hello, world!]

    # post_tags = [[tag.name for tag in post.tags] for post in user.posts]

    # user_name = user.name

    # #Prints: User Alice has written these posts: ['Hello, world!'] with these tags: [['Intro', 'Greeting']]
    # print(f"User {user_name} has written these posts: {post_titles} with these tags: {post_tags}")

    return "Welcome to the Flask-SQLAlchemy demo!"

if __name__ == '__main__':
    app.run(debug=True)
