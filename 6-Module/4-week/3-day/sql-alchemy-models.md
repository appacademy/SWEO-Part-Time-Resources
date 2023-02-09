# SQLAlchemy Models

## Initial setup
Note: The werkzeug and flask_login imports are only if you plan on using user authentication
```
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash


db = SQLAlchemy()
```

## Example user model class
```
class User(db.model, UserMixin):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self, password):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
```

## Relationships

### One to one
```
class Person(db.Model):
    __tablename__ = 'person'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    passport_id = db.Column(db.Integer, db.ForeignKey('passport.id'), nullable=False, unique=True)

    passport = db.relationship('Passport', uselist=False, back_populates='person')

class Passport(db.Model):
    __tablename__ = 'passport'
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer, nullable=False)
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'), nullable=False, unique=True)
    
    person = db.relationship('Person', back_populates='passport')
```

### One to many
```
class Person(db.Model):
    __tablename__ = 'person'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    keys = db.relationship('Keys', back_populates='person')

class Keys(db.Model):
    __tablename__ = 'keys'
    id = db.Column(db.Integer, primary_key=True)
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'), nullable=False)
    
    person = db.relationship('Person', back_populates='keys')
```

### Many to many
```
association_table = Table(
    'association',
    db.Column('student_id', db.Integer, db.ForeignKey('students.id')),
    db.Column('teacher_id', db.Integer, db.ForeignKey('teachers.id'))
)

class Student:
    __tablename__ = 'students'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    teachers = db.relationship("Teacher", secondary=association_table, back_populates='students')

class Teacher:
    __tablename__ = 'teachers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    students = db.relationship("Student", secondary=association_table, back_populates='teachers')
```

