from flask import Blueprint

blue = Blueprint('main', __name__, url_prefix='/')


@blue.route('/')
def main():
    return "My calendar is working I think?"
