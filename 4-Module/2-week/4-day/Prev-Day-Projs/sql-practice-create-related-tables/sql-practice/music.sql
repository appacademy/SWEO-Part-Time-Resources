-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
--!!START SILENT
DROP TABLE IF EXISTS musician_instruments;
--!!END
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
  --!!ADD
  -- last_name VARCHAR(100)
  --!!END_ADD
  --!!START SILENT
  last_name VARCHAR(100),
  band_id INTEGER,
  FOREIGN KEY (band_id) REFERENCES bands(id)
  --!!END
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);
--!!START SILENT
CREATE TABLE musician_instruments (
  musician_id INTEGER NOT NULL,
  instrument_id INTEGER NOT NULL,
  FOREIGN KEY (musician_id) REFERENCES musicians(id),
  FOREIGN KEY (instrument_id) REFERENCES musicians(id)
);
--!!END