-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;
drop table if exists musical_joins;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER,
  --  FK flag column on current table ref flag table to reference(colum to reference)
  FOREIGN KEY (band_id) references bands(id)
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);
-- insert into bands (name) values ('the potato pirates');

-- insert into musicians (first_name, last_name, band_id) 
-- values ('Baylen', 'Doss', 1);

create table musical_joins (
   musician_id INTEGER,
   instrument_id INTEGER,
   FOREIGN KEY (musician_id) references musicians(id),
   FOREIGN KEY (instrument_id) references instruments(id)
);

insert into bands (name) values ('potato pirates');
insert into musicians (first_name, last_name, band_id) values ('Baylen', 'Doss', 1);
insert into instruments (type) values ('flute');

insert into musical_joins(musician_id, instrument_id) values (1, 1);