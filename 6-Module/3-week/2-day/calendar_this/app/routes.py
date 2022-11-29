from flask import Blueprint

# calling it "blue" just to show I can. Convention is "bp"
blue = Blueprint('main', __name__, url_prefix='/')


@blue.route('/')
def main():
    return "My calendar is working I guess"
