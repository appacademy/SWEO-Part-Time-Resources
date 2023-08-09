# READING : SQLAlchemy Mappings
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.types import Integer, String

Base = declarative_base()
"""
# CREATE TABLE pony_handlers (
#   pony_id INTEGER NOT NULL,
#   handler_id INTEGER NOT NULL,
#   PRIMARY KEY (pony_id, handler_id),
#   FOREIGN KEY (pony_id) REFERENCES ponies(id),
#   FOREIGN KEY (handler_id) REFERENCES handlers(id)
# );

# CREATE TABLE owners (
#   id SERIAL PRIMARY KEY,
#   first_name VARCHAR(255) NOT NULL,
#   last_name VARCHAR(255) NOT NULL,
#   email VARCHAR(255) NOT NULL
# );
"""
pony_handlers = Table(
  "pony_handlers",
  Base.metadata,
  Column('pony_id', ForeignKey('ponies.id'), primary_key=True),
  Column('handler_id', ForeignKey('handlers.id'), primary_key=True)
)

class Owner(Base):
  __tablename__ = 'owners'
  id = Column(Integer, primary_key=True)
  first_name = Column(String(255), nullable=False)
  last_name = Column(String(255), nullable=False)
  email = Column(String(255))
  
  ponies = relationship('Pony', back_populates='owner', cascade="all, delete-orphan")

"""
# CREATE TABLE ponies (
#   id SERIAL PRIMARY KEY,
#   name VARCHAR(255) NOT NULL,
#   birth_year INTEGER NOT NULL,
#   breed VARCHAR(255),
#   owner_id INTEGER NOT NULL,
#   FOREIGN KEY (owner_id) REFERENCES owners(id)
# );
"""
class Pony(Base):
  __tablename__ = 'ponies'
  id = Column(Integer, primary_key=True)
  name = Column(String(255))
  birth_year = Column(Integer)
  breed = Column(String(255))
  owner_id = Column(Integer, ForeignKey('owners.id'))
  
  owner = relationship('Owner', back_populates='ponies')
  handlers = relationship('Handler', back_populates='ponies', secondary=pony_handlers)
  
class Handler(Base):
    __tablename__ = "handlers"
    id = Column(Integer, primary_key=True)
    first_name = Column(String(50))
    last_name = Column(String(50))
    employee_id = Column(String(12))
    
    ponies = relationship('Pony', back_populates='handlers', secondary=pony_handlers)