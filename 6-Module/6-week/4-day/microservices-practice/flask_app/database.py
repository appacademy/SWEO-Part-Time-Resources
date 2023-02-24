from app.models import db, Rating
from app import app

with app.app_context():
    rating1 = Rating(book_id=1, value=10, email='jane@email.com')
    rating2 = Rating(book_id=1, value=8, email='stephon@email.com')
    rating3 = Rating(book_id=1, value=5, email='milo@email.com')
    rating4 = Rating(book_id=2, value=4, email='andrew@email.com')
    rating5 = Rating(book_id=2, value=6, email='julia@email.com')
    rating6 = Rating(book_id=3, value=7, email='erik@email.com')

    db.session.add(rating1)
    db.session.add(rating2)
    db.session.add(rating3)
    db.session.add(rating4)
    db.session.add(rating5)
    db.session.add(rating6)

    db.session.commit()