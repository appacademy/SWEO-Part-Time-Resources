PRAGMA foreign_keys = ON;

-- JOIN: combine records together based on a related column between them.


DROP TABLE IF EXISTS puppies; 
DROP TABLE IF EXISTS owners; 

-- parent
CREATE TABLE owners (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

INSERT INTO owners(first_name, last_name) VALUES 
    ("Jamie", "Anderson"),
    ("Linda", "Long"),
    ("Sadie", "Kafka"),
    ("Jake", "Laughlin"),
    ("Laney", "Rous"),
    ("Alexander", "Lee"),
    ("David1", "Lee"),
    ("David2", "Lee"),
    ("David3", "Lee"),
    ("David4", "Lee"),
    ("David4", "Lee"),
    ("David4", "Lee"),
    ("David4", "Lee"),
    ("David4", "Lee");

-- child
CREATE TABLE puppies (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    age_yrs NUMERIC(3,1),
    breed VARCHAR(100),
    weight_lbs INTEGER,
    microchipped BOOLEAN,
    
    -- foreign key points to which owner puppy belongs to
    owner_id INTEGER,
    FOREIGN KEY (owner_id) REFERENCES owners(id) 
);

INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped, owner_id)
VALUES
  ('Cooper', 1, 'Miniature Schnauzer', 18, 1, 1),
  ('Indie', 0.5, 'Yorkshire Terrier', 13, 1, 2),
  ('Kota', 0.7, 'Australian Shepherd', 26, 0, 5),
  ('Zoe', 0.8, 'Korean Jindo', 32, 1, 2),
  ('Charley', 1.5, 'Basset Hound', 25, 0, 3),
  ('Ladybird', 0.6, 'Labradoodle', 20, 1, 3),
  ('Callie', 0.9, 'Corgi', 16, 0, 4),
  ('Jaxson', 0.4, 'Beagle', 19, 1, 1),
  ('Leinni', 1, 'Miniature Schnauzer', 25, 1, 1),
  ('Max', 1.6, 'German Shepherd', 65, 0, 6);

-- select * from puppies;
-- SELECT * FROM puppies JOIN owners ON (puppies.name = owners.first_name);

-- SELECT * FROM puppies JOIN owners ON (puppies.id = owners.id);
SELECT * FROM puppies LEFT JOIN owners ON (puppies.id = owners.id);
SELECT * FROM puppies RIGHT JOIN owners ON (puppies.id = owners.id);
-- SELECT * FROM puppies FULL JOIN owners ON (puppies.id = owners.id);

