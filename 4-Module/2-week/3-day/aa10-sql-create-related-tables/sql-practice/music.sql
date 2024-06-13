-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;
DROP TABLE IF EXISTS musician_instrument;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER NOT NULL,
  FOREIGN KEY (band_id) REFERENCES bands(id)
);

INSERT INTO bands (
  name
) VALUES ("OBT");

INSERT INTO bands (
  name
) VALUES ("Second Impact");

INSERT INTO musicians (
  first_name,
  last_name,
  band_id
)
VALUES ("Gabe", "G", 1);

CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE musician_instrument (
  musician_id INTEGER NOT NULL,
  instrument_id INTEGER NOT NULL,
  FOREIGN KEY (musician_id) REFERENCES musicians(id),
  FOREIGN KEY (instrument_id) REFERENCES instruments(id)
);

INSERT INTO instruments (
  type
) VALUES ("Guitar");

INSERT INTO musician_instrument (
  musician_id,
  instrument_id
) VALUES (1, 1);
