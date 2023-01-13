from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .car import Car
from .owner import Owner
