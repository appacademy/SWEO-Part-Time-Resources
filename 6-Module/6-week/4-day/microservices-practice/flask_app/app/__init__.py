from flask import Flask, jsonify, request, abort
from flask_migrate import Migrate
from sqlalchemy.exc import IntegrityError
from .config import Configuration
from .models import db, Rating


app = Flask(__name__)
app.config.from_object(Configuration)


@app.before_request
def to_allowed_host():
    # if request.remote_addr != '127.0.0.1':
    #     abort(403)
    if 'host.docker.internal' not in request.url_root:
        abort(403)


@app.route('/')
def index():
    return f'Test route!'


@app.route('/ratings/<int:book_id>')
def get_book_ratings(book_id):
    ratings = Rating.query.filter(Rating.book_id == book_id).all()
    if len(ratings) == 0:
        error_response = {'error': 'No ratings for this book yet.'}
        return jsonify(error_response), 404

    rating_sum = 0
    rating_values = []
    for rating in ratings:
        rating_sum += rating.value
        rating_values.append({
            'value': rating.value
        })

    average_rating = rating_sum/len(ratings)
    average_rating = round(average_rating, 2)
    return jsonify(
        average=average_rating,
        ratings=rating_values
    )


@app.route('/ratings/<int:book_id>', methods=['POST'])
def post_book_ratings(book_id):
    if not request.args:
        error_response = {'error': 'Bad data'}
        return jsonify(error_response), 400

    is_missing_args = not 'value' in request.args or not 'email' in request.args
    if is_missing_args:
        error_response = {'error': 'Missing arguments'}
        return jsonify(error_response), 400

    try:
        new_rating = {
            'id': len(Rating.query.all()) + 1,
            'book_id': book_id,
            'value': int(request.args.get('value')),
            'email': request.args.get('email')
        }
        rating = Rating(**new_rating)
        db.session.add(rating)
        db.session.commit()
        return jsonify(new_rating)
    except IntegrityError as e:
        print(e)
        error_response = {'error': 'Each user can only submit one rating per book.'}
        return jsonify(error_response), 400



db.init_app(app)
Migrate(app, db)