-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
	bands_id INTEGER,
	FOREIGN KEY (bands_id) REFERENCES bands(id)
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);
CREATE TABLE musician_instrument (
	musician_id INTEGER,
	instrument_id INTEGER,
	FOREIGN KEY (musician_id) REFERENCES musicians(id),
	FOREIGN KEY (instrument_id) REFERENCES instruments(id)
)