-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;
DROP TABLE IF EXISTS musicians_instruments;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  -- band_id represents the fk aka which band a musician belongs to
  band_id INTEGER NOT NULL,
  FOREIGN KEY (band_id) REFERENCES bands(id)
);

CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE musicians_instruments(
  -- we need the musician_id foreign key
  musician_id INTEGER NOT NULL,
  -- we need the instruments_id foreign key
  instruments_id INTEGER NOT NULL,

  FOREIGN KEY (musician_id) REFERENCES musicians(id),
  FOREIGN KEY (instruments_id) REFERENCES instruments(id)
);