import sqlite3

def get_all_cars():
    with sqlite3.connect("dev.db") as conn:
        curs = conn.cursor()
        curs.execute('SELECT * FROM cars;')
        cars = curs.fetchall()
        return cars

def get_owners_cars(owner_id):
    """
    Fetch and return all cars in the cars table
    :param owner_id: <int> the id of the owner who's cars to return
    :return: <list> the results of the query
    """
    with sqlite3.connect("dev.db") as conn:
        curs = conn.cursor()
        curs.execute("""
                     SELECT manu_year, make, model FROM cars
                     WHERE owner_id = :owner_id
                     """,
                     {'owner_id': owner_id})
        results = curs.fetchall()
        return results

def add_new_car(manu_year, make, model, owner_id):
    """
    Add the given car to the database
    :param manu_year: <int> the year the car was made
    :param make: <string> the manufacturer of the car
    :param model: <string> the model of the car
    :param owner_id: <int> the id number of the owner
    """
    with sqlite3.connect("dev.db") as conn:
        curs = conn.cursor()
        curs.execute("""
                     INSERT INTO cars (manu_year, make, model, owner_id)
                     VALUES (:manu_year, :make, :model, :owner_id)
                     """,
                     {'manu_year': manu_year,
                      'make': make,
                      'model': model,
                      'owner_id': owner_id})
 
def change_car_owner(car_id, new_owner_id):
    """
    Update the owner of a car, both by record id
    :param car_id: <int> the id of the car to change
    :param new_owner_id: <int> the owner_id to give ownership to
    """
    with sqlite3.connect("dev.db") as conn:
        curs = conn.cursor()
        curs.execute("""
                     UPDATE cars SET owner_id = :new_owner_id
                     WHERE id = :car_id
                     """,
                     {'car_id': car_id,
                      'new_owner_id': new_owner_id})

def delete_car(car_id):
    """
    Delete the record for a car given an id for that car
    :param car_id: <int> the id of the car record to remove
    """
    with sqlite3.connect("dev.db") as conn:
        curs = conn.cursor()
        curs.execute("""
                     DELETE FROM cars WHERE id = :car_id
                     """,
                     {'car_id': car_id})

def get_all_owners():
  with sqlite3.connect("dev.db") as conn:
        curs = conn.cursor()
        curs.execute("""
                     SELECT * FROM owners
                     """)
        return curs.fetchall()

BUNCH_OF_SQL = """
CREATE TABLE owners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- Make and model should have their own tables
-- Simplified for now
CREATE TABLE cars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  manu_year INTEGER NOT NULL,
  make VARCHAR(255),
  model VARCHAR(255),
  owner_id INTEGER NOT NULL,
  FOREIGN KEY (owner_id) REFERENCES owners(id)
);

INSERT INTO owners (first_name, last_name, email)
VALUES
('Tim', 'Petrol', 'rotary@fast.com'),
('Ryan', 'Runner', '10sec@jdm.com'),
('Tia', 'Petrol', 'typer@wtec.com');

INSERT INTO cars (manu_year, make, model, owner_id)
VALUES
(1993, 'Mazda', 'Rx7', 1),
(1995, 'Mitsubishi', 'Eclipse', 2),
(1994, 'Acura', 'Integra', 3);
"""
## In case you need to reseed
# with sqlite3.connect("dev.db") as conn:
#     curs = conn.cursor()
#     curs.executescript(BUNCH_OF_SQL)
#     print("Tables/Data created!")
