from flask import Blueprint

bp = Blueprint('orders', __name__, url_prefix='')


@bp.route('/')
def index():
    return "Order up!"
