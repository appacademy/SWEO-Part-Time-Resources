# READING : SQLAlchemy Mappings

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

# CREATE TABLE ponies (
#   id SERIAL PRIMARY KEY,
#   name VARCHAR(255) NOT NULL,
#   birth_year INTEGER NOT NULL,
#   breed VARCHAR(255),
#   owner_id INTEGER NOT NULL,
#   FOREIGN KEY (owner_id) REFERENCES owners(id)
# );