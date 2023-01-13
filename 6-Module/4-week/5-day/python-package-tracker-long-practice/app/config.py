import os


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or "Debug_Key"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
