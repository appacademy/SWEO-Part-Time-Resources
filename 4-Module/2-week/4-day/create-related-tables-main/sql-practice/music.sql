-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;
DROP TABLE IF EXISTS music_join;


CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);



CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER,
  -- FK flag (colum on current table) -- ref flad related table name (column on related table)
  FOREIGN KEY (band_id) references bands(id)
);


CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);


create table music_join (
  musician_id INTEGER,
  instrument_id INTEGER,
  FOREIGN KEY (musician_id) references musicians(id),
  FOREIGN KEY (instrument_id) references instruments(id)
);
