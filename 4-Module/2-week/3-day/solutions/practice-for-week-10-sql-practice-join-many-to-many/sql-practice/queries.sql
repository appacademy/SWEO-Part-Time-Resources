-- Phase 1
SELECT
  musicians.first_name, instruments.type
FROM
  instruments
JOIN
  musician_instruments
ON
  (instruments.id = musician_instruments.instrument_id)
JOIN
  musicians
ON (musicians.id = musician_instruments.musician_id);

-- Phase 2
SELECT
  musicians.first_name, musicians.last_name
FROM
  musicians
JOIN
  musician_instruments
ON
  (musicians.id = musician_instruments.musician_id)
JOIN
  instruments
ON 
  (instruments.id = musician_instruments.instrument_id)
WHERE
  instruments.type = 'piano';