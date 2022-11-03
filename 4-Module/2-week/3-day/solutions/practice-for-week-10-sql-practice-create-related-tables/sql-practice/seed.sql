INSERT INTO
  bands (name)
VALUES
  ("Metallica");

INSERT INTO 
  musicians (first_name, last_name, band_id)
VALUES
  ("Taylor", "Swift", 1);

INSERT INTO
  instruments (type)
VALUES
  ("Piano");

INSERT INTO
  musician_instrument (musician_id, instrument_id)
VALUES
  (1, 1);

-- Using subqueries
-- INSERT INTO 
--   musician_instrument (musician_id, instrument_id)
-- SELECT 
--   musicians.id, instruments.id 
-- FROM
--   musicians, instruments
-- WHERE
--   musicians.first_name = 'Taylor' AND instruments.type = 'piano';