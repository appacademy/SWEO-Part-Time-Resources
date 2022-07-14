CREATE TABLE owners (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100),
  phone_number NUMERIC(10,0)
);


CREATE TABLE pets (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age NUMERIC(3,0),
  breed VARCHAR(100),
  animal VARCHAR(50),
  weight_lbs INTEGER,
  microchipped BOOLEAN DEFAULT 0,
  owner_id INTEGER,
  FOREIGN KEY(owner_id) REFERENCES owners(id)
);

CREATE TABLE vaccines (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  cost NUMERIC(5,2)
);

CREATE TABLE pet_vaccines (
  vaccine_id INTEGER,
  pet_id INTEGER,
  FOREIGN KEY(vaccine_id) REFERENCES vaccines(id),
  FOREIGN KEY(pet_id) REFERENCES pets(id)
);


INSERT INTO owners
	(name, email, phone_number)
VALUES
	('Alex', 'alexbheb17@yahoo.com', 1234567890);

INSERT INTO pets
  (name, age, breed, animal, weight_lbs, microchipped, owner_id)
VALUES
  ('Maxi', 5, 'Shitzu', 'dog', 24, 'true', 1);

INSERT INTO vaccines
  (name, cost)
VALUES
  ('RABIES', 15.10),
  ('DISTEMPER COMBO', 18.50),
  ('LEPTOSPIROSIS', 17.15),
  ('PARVOVIRUS', 16.15),
  ('BORDETELLA', 19.30),
  ('INFLUENZA', 16.20);


DELETE FROM pets
WHERE id = 1;


SELECT owners.name, pets.name
FROM owners JOIN pets ON owners.id = pets.owner_id;
